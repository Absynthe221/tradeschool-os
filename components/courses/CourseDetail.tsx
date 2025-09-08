'use client'

import { useState } from 'react'
import { 
  Play, 
  Lock, 
  CheckCircle, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  Video,
  FileText,
  Award,
  ChevronRight,
  ChevronDown,
  BarChart3,
  Target
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { VideoPlayer } from '@/components/video/VideoPlayer'
import { QuizComponent } from '@/components/quiz/QuizComponent'
import { mtoQuestionBank } from '@/data/mto-questions'
import { schedule1Parts } from '@/data/schedule1'
import { Schedule1Checklist } from '@/components/courses/Schedule1Checklist'

interface Course {
  id: string
  title: string
  description: string
  instructor: {
    name: string
    bio?: string
    credentials?: string[]
  }
  curriculum: any[]
  modules: any[]
  rating?: number
  studentsCount?: number
  duration?: string
  price?: string
  category?: string
}

interface CourseDetailProps {
  course: Course
}

export function CourseDetail({ course }: CourseDetailProps) {
  const [selectedModule, setSelectedModule] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [expandedModules, setExpandedModules] = useState<Array<string | number>>([])

  const resolveVideoUrl = (module: any): string => {
    const lesson = module?.selectedLesson
    const direct = lesson?.videoUrl
    if (direct) return direct
    try {
      const courseId = course.id
      const moduleId = module?.id
      const lessonId = lesson?.id
      const key = `videoUrl:${courseId}:${moduleId}:${lessonId}`
      const stored = localStorage.getItem(key)
      if (stored) return stored
    } catch {}
    return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }

  const toggleModule = (moduleId: string | number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const startModule = (module: any) => {
    setSelectedModule(module)
    setIsPlaying(true)
    setShowQuiz(false)
  }

  const startQuiz = (module: any) => {
    setSelectedModule(module)
    setShowQuiz(true)
    setIsPlaying(false)
  }

  if (isPlaying && selectedModule) {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto">
          <div className="mb-4 p-4">
            <button 
              onClick={() => setIsPlaying(false)}
              className="text-white hover:text-gray-300 flex items-center"
            >
              ← Back to Course
            </button>
            <h2 className="text-white text-xl mt-2">{selectedModule.title}</h2>
          </div>
          <VideoPlayer 
            videoUrl={resolveVideoUrl(selectedModule)}
            title={selectedModule.title}
            onComplete={() => {
              console.log('Module completed!')
              setIsPlaying(false)
            }}
          />
        </div>
      </div>
    )
  }

  if (showQuiz && selectedModule) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8">
          <button 
            onClick={() => setShowQuiz(false)}
            className="text-gray-600 hover:text-gray-900 flex items-center mb-6"
          >
            ← Back to Course
          </button>
          <QuizComponent 
            lessonId={Number((selectedModule.id as any) || 0)}
            title={selectedModule.title}
            questions={selectedModule.quiz?.questions || selectedModule.questions || 10}
            passingScore={selectedModule.quiz?.passingScore || 80}
            questionBank={mtoQuestionBank[(selectedModule.quiz?.bankId as keyof typeof mtoQuestionBank) || '']}
            generator={() => {
              // Auto-generate multiple-choice from Schedule 1 part when available
              const partId: string | undefined = (selectedModule as any).schedulePartId
              if (!partId) return []
              const part = schedule1Parts.find(p => p.id === partId)
              if (!part) return []
              const makeQ = (text: string, type: 'minor'|'major', idx: number) => {
                const options = type === 'minor'
                  ? ['Minor defect', 'Major defect', 'Not a defect', 'Info only']
                  : ['Major defect', 'Minor defect', 'Not a defect', 'Info only']
                return {
                  id: idx + 1,
                  question: `${part.systemOrComponent}: ${text} — classify this defect`,
                  options,
                  correctAnswer: type === 'minor' ? 0 : 0, // option text handles mapping above
                  explanation: type === 'minor' ? 'Listed under Minor defects.' : 'Listed under Major defects.',
                  points: 10,
                  category: 'Schedule 1'
                }
              }
              const qs: any[] = []
              part.minorDefects.forEach((d, i) => qs.push(makeQ(d, 'minor', i)))
              part.majorDefects.forEach((d, i) => qs.push(makeQ(d, 'major', part.minorDefects.length + i)))
              return qs
            }}
            onComplete={() => {
              console.log('Quiz completed!')
              setShowQuiz(false)
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary-600 to-hvac-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-primary-100 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 text-primary-100">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>{course.rating} rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  <span>{course.studentsCount?.toLocaleString()} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 text-gray-900">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {course.price}
                </div>
                <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 mb-4">
                  Enroll Now
                </button>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between mb-2">
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            {/* Course Modules */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Course Content</h2>
              <div className="space-y-4">
                {course.modules?.map((module, index) => (
                  <div key={module.id} className="border rounded-lg">
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full p-4 text-left hover:bg-gray-50 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                          module.completed 
                            ? "bg-trade-500 text-white" 
                            : module.locked 
                            ? "bg-gray-200 text-gray-400"
                            : "bg-primary-100 text-primary-600"
                        )}>
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : module.locked ? (
                            <Lock className="w-5 h-5" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{module.title}</h3>
                          <p className="text-sm text-gray-600">{module.duration}</p>
                        </div>
                      </div>
                      {expandedModules.includes(module.id) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>

                    {expandedModules.includes(module.id) && (
                      <div className="border-t p-4 bg-gray-50">
                        <p className="text-gray-700 mb-4">{module.description}</p>
                        
                        {module.objectives && (
                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Learning Objectives:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                              {module.objectives.map((objective: string, idx: number) => (
                                <li key={idx}>{objective}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Detailed Lesson List */}
                        {module.lessons && module.lessons.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Course Lessons:</h4>
                            <div className="space-y-2">
                              {module.lessons.map((lesson: any, idx: number) => (
                                <div key={lesson.id} className="flex items-center justify-between p-3 bg-white rounded border">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">
                                      {idx + 1}
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-sm">{lesson.title}</h5>
                                      <p className="text-xs text-gray-500">{lesson.duration} • {lesson.description}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="text-xs text-gray-400 flex items-center">
                                      <Video className="w-3 h-3 mr-1" />
                                      Video
                                    </div>
                                    {!module.locked && (
                                      <button
                                        onClick={() => startModule({...module, selectedLesson: lesson})}
                                        className="text-primary-600 hover:text-primary-700 text-xs font-medium"
                                      >
                                        Watch
                                      </button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4 p-3 bg-white rounded border">
                          {module.videos && (
                            <span className="flex items-center">
                              <Video className="w-4 h-4 mr-1" />
                              {module.videos} video lessons
                            </span>
                          )}
                          {module.activities && (
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {module.activities} hands-on activities
                            </span>
                          )}
                          {module.questions && (
                            <span className="flex items-center">
                              <FileText className="w-4 h-4 mr-1" />
                              {module.questions} quiz questions
                            </span>
                          )}
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </span>
                        </div>

                        <div className="flex space-x-3">
                          {!module.locked && module.questions && (
                            <button
                              onClick={() => startQuiz(module)}
                              className="bg-trade-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-trade-600 flex items-center font-medium"
                            >
                              <Award className="w-4 h-4 mr-2" />
                              Take Quiz ({module.questions} questions)
                            </button>
                          )}
                          {module.locked && (
                            <div className="flex items-center text-gray-500 text-sm">
                              <Lock className="w-4 h-4 mr-2" />
                              Complete previous modules to unlock
                            </div>
                          )}
                        </div>

                        {/* Schedule 1 Checklist for modules that map to a Schedule 1 part */}
                        {(module as any).schedulePartId && (
                          <div className="mt-4">
                            <Schedule1Checklist partId={(module as any).schedulePartId} storageKey={`module:${module.id}`} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Exam Section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Practice Exams</h3>
                  <p className="text-gray-600">Test your knowledge with randomly generated practice questions</p>
                </div>
                <Link
                  href="/courses/cdl-fundamentals/practice"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center font-medium transition-colors"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Start Practice Exam
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">Random Questions</span>
                  </div>
                  <p className="text-sm text-blue-700">Mix of all categories and difficulty levels</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-900">By Category</span>
                  </div>
                  <p className="text-sm text-green-700">Focus on specific areas of study</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-medium text-purple-900">Timed Exams</span>
                  </div>
                  <p className="text-sm text-purple-700">Practice under realistic time pressure</p>
                </div>
              </div>
            </div>

            {/* Start Course Section - Moved to end of page */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 mb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h3>
              <p className="text-primary-100 mb-6 text-lg">
                Begin your HVAC journey with our comprehensive course modules
              </p>
              <button
                onClick={() => startModule(course.modules[0])}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 flex items-center mx-auto transition-colors shadow-lg"
              >
                <Play className="w-5 h-5 mr-3" />
                Start First Module
              </button>
            </div>
          </div>

          {/* Instructor Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Your Instructor</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {course.instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold">{course.instructor.name}</h4>
                  <p className="text-gray-600 text-sm">HVAC Expert</p>
                </div>
              </div>
              {course.instructor.bio && (
                <p className="text-gray-700 text-sm">{course.instructor.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}