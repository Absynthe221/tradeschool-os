'use client'

import { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Settings, 
  Download,
  RotateCcw,
  RotateCw,
  CheckCircle,
  Wifi,
  WifiOff
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  videoUrl: string
  title: string
  onComplete?: () => void
}

export function VideoPlayer({ videoUrl, title, onComplete }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [played, setPlayed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const playerRef = useRef<ReactPlayer>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  // Check online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Auto-hide controls
  useEffect(() => {
    if (playing && showControls) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [playing, showControls])

  const handleProgress = (state: { played: number; playedSeconds: number }) => {
    setPlayed(state.played)
    setCurrentTime(state.playedSeconds)

    // Mark as complete when 90% watched
    if (state.played >= 0.9 && !isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }

  const handleSeek = (value: number) => {
    const newTime = (value / 100) * duration
    playerRef.current?.seekTo(newTime, 'seconds')
    setCurrentTime(newTime)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setFullscreen(true)
    } else {
      document.exitFullscreen()
      setFullscreen(false)
    }
  }

  const handleDownload = async () => {
    // In a real implementation, this would download the video for offline viewing
    setIsDownloaded(true)
    // Simulate download process
    setTimeout(() => {
      alert('Video downloaded for offline viewing!')
    }, 1000)
  }

  const skipTime = (seconds: number) => {
    const newTime = Math.max(0, Math.min(duration, currentTime + seconds))
    playerRef.current?.seekTo(newTime, 'seconds')
    setCurrentTime(newTime)
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative bg-black rounded-lg overflow-hidden",
        fullscreen ? "h-screen" : "aspect-video"
      )}
      onMouseMove={() => setShowControls(true)}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="absolute top-4 right-4 z-50 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <WifiOff className="w-4 h-4 mr-2" />
          Offline Mode
        </div>
      )}

      {/* Downloaded Indicator */}
      {isDownloaded && (
        <div className="absolute top-4 left-4 z-50 bg-trade-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Downloaded
        </div>
      )}

      {/* Completion Badge */}
      {isComplete && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-trade-500 text-white px-6 py-3 rounded-full flex items-center animate-fade-in">
          <CheckCircle className="w-6 h-6 mr-2" />
          Lesson Complete!
        </div>
      )}

      {/* Video Player */}
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        volume={volume}
        muted={muted}
        playbackRate={playbackRate}
        width="100%"
        height="100%"
        onProgress={handleProgress}
        onDuration={setDuration}
        onEnded={() => {
          setIsComplete(true)
          onComplete?.()
        }}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              disablePictureInPicture: true,
            }
          }
        }}
      />

      {/* Custom Controls */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300",
          showControls ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Center Play/Pause Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setPlaying(!playing)}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {playing ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          {/* Progress Bar */}
          <div className="w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={played * 100}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Play/Pause */}
              <button
                onClick={() => setPlaying(!playing)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              {/* Skip Buttons */}
              <button
                onClick={() => skipTime(-10)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={() => skipTime(10)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <RotateCw className="w-5 h-5" />
              </button>

              {/* Volume */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setMuted(!muted)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {muted || volume === 0 ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Time Display */}
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Playback Speed */}
              <select
                value={playbackRate}
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                className="bg-white/20 text-white text-sm rounded px-2 py-1 border-none outline-none"
              >
                <option value="0.5">0.5x</option>
                <option value="0.75">0.75x</option>
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isDownloaded}
                className="text-white hover:text-gray-300 transition-colors disabled:opacity-50"
                title="Download for offline viewing"
              >
                <Download className="w-5 h-5" />
              </button>

              {/* Settings */}
              <button className="text-white hover:text-gray-300 transition-colors">
                <Settings className="w-5 h-5" />
              </button>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info Overlay */}
      <div 
        className={cn(
          "absolute top-4 left-4 right-4 transition-opacity duration-300",
          showControls ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="text-white text-lg font-medium mb-1">{title}</h3>
        <div className="flex items-center space-x-4 text-white/80 text-sm">
          <div className="flex items-center">
            {isOnline ? (
              <Wifi className="w-4 h-4 mr-1" />
            ) : (
              <WifiOff className="w-4 h-4 mr-1" />
            )}
            {isOnline ? 'Online' : 'Offline'}
          </div>
          <div>Quality: 720p</div>
          <div>{formatTime(duration)} total</div>
        </div>
      </div>
    </div>
  )
}




