'use client'

import { useState, useEffect } from 'react'
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX,
  Maximize,
  Settings,
  BookOpen,
  FileText,
  PenTool,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModulePlayerProps {
  module: {
    id: string
    title: string
    description: string
    duration: number
    learningObjectives: string[]
    content: {
      videos: any[]
      texts: any[]
      diagrams: any[]
      activities: any[]
    }
    questions: any[]
  }
  onComplete: () => void
  onProgress: (progress: number) => void
}

export function ModulePlayer({ module, onComplete, onProgress }: ModulePlayerProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'activities' | 'quiz'>('overview')
  const [currentVideo, setCurrentVideo] = useState(0)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [currentActivity, setCurrentActivity] = useState(0)
  const [activityProgress, setActivityProgress] = useState<Record<string, boolean>>({})

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'content', label: 'Content', icon: Play },
    { id: 'activities', label: 'Activities', icon: PenTool },
    { id: 'quiz', label: 'Quiz', icon: CheckCircle }
  ]

  const handleVideoProgress = (progress: number) => {
    setVideoProgress(progress)
    // Update overall module progress
    const overallProgress = (progress / module.content.videos.length) * 0.4 + 
                           (Object.keys(activityProgress).length / module.content.activities.length) * 0.6
    onProgress(overallProgress)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{module.title}</h1>
              <p className="text-gray-600 mt-1">{module.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {module.duration} minutes
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors",
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Learning Objectives */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Learning Objectives
                </h3>
                <ul className="space-y-3">
                  {module.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Module Structure */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Play className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{module.content.videos.length}</div>
                    <div className="text-sm text-gray-600">Videos</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{module.content.texts.length}</div>
                    <div className="text-sm text-gray-600">Readings</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <PenTool className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{module.content.activities.length}</div>
                    <div className="text-sm text-gray-600">Activities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Videos Watched</span>
                      <span>{currentVideo}/{module.content.videos.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(currentVideo / module.content.videos.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Activities</span>
                      <span>{Object.keys(activityProgress).length}/{module.content.activities.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(Object.keys(activityProgress).length / module.content.activities.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setActiveTab('content')}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Start Learning
                  </button>
                  <button 
                    onClick={() => setActiveTab('activities')}
                    className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Practice Activities
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-3">
              <div className="bg-black rounded-lg overflow-hidden shadow-lg">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-semibold mb-2">
                      {module.content.videos[currentVideo]?.title || 'Video Content'}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Video content will be loaded here
                    </p>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </button>
                      
                      <button className="text-white hover:text-blue-400 transition-colors">
                        <SkipBack className="h-5 w-5" />
                      </button>
                      
                      <div className="flex-1 bg-white/20 rounded-full h-1">
                        <div className="bg-blue-500 h-1 rounded-full w-1/3" />
                      </div>
                      
                      <button className="text-white hover:text-blue-400 transition-colors">
                        <SkipForward className="h-5 w-5" />
                      </button>
                      
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </button>
                      
                      <button className="text-white hover:text-blue-400 transition-colors">
                        <Settings className="h-5 w-5" />
                      </button>
                      
                      <button className="text-white hover:text-blue-400 transition-colors">
                        <Maximize className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Description */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {module.content.videos[currentVideo]?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {module.content.videos[currentVideo]?.description}
                </p>
                
                {/* Chapters */}
                {module.content.videos[currentVideo]?.chapters && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Chapters</h4>
                    <div className="space-y-2">
                      {module.content.videos[currentVideo].chapters.map((chapter: any, index: number) => (
                        <button
                          key={index}
                          className="flex items-center w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="text-sm text-gray-500 w-16">
                            {Math.floor(chapter.timestamp / 60)}:{(chapter.timestamp % 60).toString().padStart(2, '0')}
                          </div>
                          <div className="text-sm text-gray-900">{chapter.title}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Playlist */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Video Playlist</h3>
              <div className="space-y-2">
                {module.content.videos.map((video: any, index: number) => (
                  <button
                    key={video.id}
                    onClick={() => setCurrentVideo(index)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg border transition-colors",
                      currentVideo === index
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        currentVideo === index
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      )}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{video.title}</div>
                        <div className="text-xs text-gray-500">{video.duration} min</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Reading Materials */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Reading Materials</h3>
                <div className="space-y-2">
                  {module.content.texts.map((text: any, index: number) => (
                    <div key={text.id} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{text.title}</div>
                          <div className="text-xs text-gray-500 capitalize">{text.type}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Interactive Activities</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center py-12">
                <PenTool className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Activities</h3>
                <p className="text-gray-600 mb-6">
                  Drag-and-drop exercises, simulations, and hands-on practice activities
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Activity
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Module Quiz</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Test Your Knowledge</h3>
                <p className="text-gray-600 mb-6">
                  Multiple choice, scenarios, and case studies to reinforce learning
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


