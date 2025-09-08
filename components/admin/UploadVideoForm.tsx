'use client'

import { useEffect, useState } from 'react'
import { Upload } from 'lucide-react'

interface Props {
  onSaved?: () => void
}

export function UploadVideoForm({ onSaved }: Props) {
  const [courseId, setCourseId] = useState('')
  const [moduleId, setModuleId] = useState('')
  const [lessonId, setLessonId] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const save = () => {
    if (!courseId || !moduleId || !lessonId || !videoUrl) {
      setStatus('Please fill all fields')
      return
    }
    try {
      localStorage.setItem(`videoUrl:${courseId}:${moduleId}:${lessonId}`, videoUrl)
      setStatus('Saved locally. Video will play on the course page.')
      onSaved?.()
    } catch (e) {
      setStatus('Failed to save')
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Map Video URL to Lesson</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course ID</label>
          <input value={courseId} onChange={e => setCourseId(e.target.value)} placeholder="e.g., air-brake-schedule1-yard" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Module ID</label>
          <input value={moduleId} onChange={e => setModuleId(e.target.value)} placeholder="e.g., yard-2" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lesson ID</label>
          <input value={lessonId} onChange={e => setLessonId(e.target.value)} placeholder="e.g., yard-2-1" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
        <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} placeholder="https://... (MP4, HLS, YouTube, Vimeo)" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
      </div>
      <div className="flex items-center gap-3">
        <button onClick={save} className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 inline-flex items-center">
          <Upload className="w-4 h-4 mr-2" /> Save Mapping
        </button>
        {status && <span className="text-sm text-gray-600">{status}</span>}
      </div>
      <p className="text-xs text-gray-500 mt-3">This demo stores URLs in localStorage. For production, wire this to your backend or Supabase.</p>
    </div>
  )
}


