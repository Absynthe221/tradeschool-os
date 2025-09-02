'use client'

import { useState } from 'react'
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Clock, 
  Star,
  Play,
  CheckCircle,
  Target,
  Calendar,
  BarChart3,
  Trophy,
  Flame,
  Bookmark,
  Download,
  Share2,
  Settings,
  User,
  Bell,
  ChevronRight,
  ChevronDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface UserProgress {
  totalCourses: number
  completedCourses: number
  inProgressCourses: number
  totalHours: number
  averageScore: number
  currentStreak: number
  longestStreak: number
  certificates: number
  rank: number
}

interface CourseProgress {
  id: string
  title: string
  progress: number
  lastAccessed: string
  timeSpent: number
  nextLesson: string
  estimatedCompletion: string
  status: 'not-started' | 'in-progress' | 'completed'
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  earned: boolean
  earnedDate?: string
  progress?: number
  total?: number
}

const mockUserProgress: UserProgress = {
  totalCourses: 3,
  completedCourses: 1,
  inProgressCourses: 2,
  totalHours: 24.5,
  averageScore: 87.5,
  currentStreak: 7,
  longestStreak: 15,
  certificates: 1,
  rank: 156
}

const mockCourseProgress: CourseProgress[] = [
  {
    id: 'hvac-fundamentals',
    title: 'Complete HVAC Technician Certification Course',
    progress: 65,
    lastAccessed: '2 hours ago',
    timeSpent: 16.5,
    nextLesson: 'Module 3: Heat Transfer & Thermodynamics',
    estimatedCompletion: '2 weeks',
    status: 'in-progress'
  },
  {
    id: 'electrical-basics',
    title: 'Electrical Systems Fundamentals',
    progress: 0,
    lastAccessed: 'Never',
    timeSpent: 0,
    nextLesson: 'Module 1: Introduction to Electrical Systems',
    estimatedCompletion: '4 weeks',
    status: 'not-started'
  },
  {
    id: 'plumbing-essentials',
    title: 'Plumbing Systems & Installation',
    progress: 100,
    lastAccessed: '1 week ago',
    timeSpent: 32,
    nextLesson: 'Course Completed!',
    estimatedCompletion: 'Completed',
    status: 'completed'
  }
]

const mockAchievements: Achievement[] = [
  {
    id: 'first-course',
    title: 'First Steps',
    description: 'Complete your first course',
    icon: '🎯',
    earned: true,
    earnedDate: '2024-01-15'
  },
  {
    id: 'streak-7',
    title: 'Week Warrior',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    earned: true,
    earnedDate: '2024-01-20'
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Get 100% on any quiz',
    icon: '⭐',
    earned: false,
    progress: 95,
    total: 100
  },
  {
    id: 'course-master',
    title: 'Course Master',
    description: 'Complete 5 courses',
    icon: '🏆',
    earned: false,
    progress: 1,
    total: 5
  },
  {
    id: 'time-invested',
    title: 'Time Investor',
    description: 'Spend 50 hours learning',
    icon: '⏰',
    earned: false,
    progress: 24.5,
    total: 50
  }
]

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'courses', name: 'My Courses', icon: BookOpen },
    { id: 'achievements', name: 'Achievements', icon: Trophy },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'certificates', name: 'Certificates', icon: Award }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'not-started':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-blue-500'
    if (progress >= 40) return 'bg-yellow-500'
    return 'bg-gray-300'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <User className="w-8 h-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                JS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm",
                    activeTab === tab.id
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary-600 to-hvac-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
                  <p className="text-primary-100">Continue your learning journey and unlock new skills</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{mockUserProgress.currentStreak}</div>
                  <div className="text-primary-100 text-sm">Day Streak</div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Courses in Progress</p>
                    <p className="text-2xl font-bold text-gray-900">{mockUserProgress.inProgressCourses}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completed Courses</p>
                    <p className="text-2xl font-bold text-gray-900">{mockUserProgress.completedCourses}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                    <p className="text-2xl font-bold text-gray-900">{mockUserProgress.totalHours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Average Score</p>
                    <p className="text-2xl font-bold text-gray-900">{mockUserProgress.averageScore}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
                <div className="space-y-4">
                  {mockCourseProgress.filter(course => course.status === 'in-progress').map((course) => (
                    <div key={course.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <span className={cn("inline-flex px-2 py-1 text-xs font-semibold rounded-full", getStatusColor(course.status))}>
                          {course.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={cn("h-2 rounded-full transition-all duration-300", getProgressColor(course.progress))}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Next: {course.nextLesson}</span>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
                <div className="space-y-4">
                  {mockAchievements.filter(achievement => achievement.earned).slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-gray-500">{achievement.description}</p>
                        {achievement.earnedDate && (
                          <p className="text-xs text-gray-400">Earned {achievement.earnedDate}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">My Courses</h2>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700">
                Browse Courses
              </button>
            </div>

            <div className="space-y-4">
              {mockCourseProgress.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={cn("inline-flex px-3 py-1 text-sm font-semibold rounded-full", getStatusColor(course.status))}>
                          {course.status.replace('-', ' ')}
                        </span>
                        <button
                          onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {expandedCourse === course.id ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={cn("h-3 rounded-full transition-all duration-300", getProgressColor(course.progress))}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Time Spent</p>
                        <p className="font-medium">{course.timeSpent} hours</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Next Lesson</p>
                        <p className="font-medium truncate">{course.nextLesson}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Est. Completion</p>
                        <p className="font-medium">{course.estimatedCompletion}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 flex items-center">
                          <Play className="w-4 h-4 mr-1" />
                          Continue
                        </button>
                      </div>
                    </div>

                    {expandedCourse === course.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-3">Course Modules</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-sm">Module 1: HVAC Introduction</span>
                            </div>
                            <span className="text-sm text-gray-500">Completed</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-sm">Module 2: Safety First</span>
                            </div>
                            <span className="text-sm text-gray-500">Completed</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Play className="w-5 h-5 text-blue-500" />
                              <span className="text-sm">Module 3: Heat Transfer</span>
                            </div>
                            <span className="text-sm text-blue-600">In Progress</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                              <span className="text-sm text-gray-400">Module 4: Refrigeration</span>
                            </div>
                            <span className="text-sm text-gray-400">Locked</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Achievements</h2>
              <div className="text-sm text-gray-500">
                {mockAchievements.filter(a => a.earned).length} of {mockAchievements.length} earned
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAchievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={cn(
                    "bg-white rounded-lg p-6 shadow-sm border-2 transition-all duration-200",
                    achievement.earned 
                      ? "border-green-200 hover:border-green-300" 
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <div className="text-center">
                    <div className={cn(
                      "text-4xl mb-4 transition-all duration-200",
                      achievement.earned ? "opacity-100" : "opacity-50"
                    )}>
                      {achievement.icon}
                    </div>
                    <h3 className={cn(
                      "font-semibold mb-2",
                      achievement.earned ? "text-gray-900" : "text-gray-500"
                    )}>
                      {achievement.title}
                    </h3>
                    <p className={cn(
                      "text-sm mb-4",
                      achievement.earned ? "text-gray-600" : "text-gray-400"
                    )}>
                      {achievement.description}
                    </p>
                    
                    {achievement.earned ? (
                      <div className="text-green-600 text-sm font-medium">
                        ✓ Earned {achievement.earnedDate}
                      </div>
                    ) : achievement.progress !== undefined ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.total}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(achievement.progress / achievement.total!) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-sm">
                        Not started
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Learning Analytics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Learning Streak</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current Streak</span>
                    <span className="font-medium flex items-center">
                      <Flame className="w-4 h-4 text-orange-500 mr-1" />
                      {mockUserProgress.currentStreak} days
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Longest Streak</span>
                    <span className="font-medium">{mockUserProgress.longestStreak} days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Learning Time</span>
                    <span className="font-medium">{mockUserProgress.totalHours} hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Average Session</span>
                    <span className="font-medium">32 minutes</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Average Score</span>
                    <span className="font-medium">{mockUserProgress.averageScore}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Courses Completed</span>
                    <span className="font-medium">{mockUserProgress.completedCourses}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Certificates Earned</span>
                    <span className="font-medium">{mockUserProgress.certificates}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Global Rank</span>
                    <span className="font-medium">#{mockUserProgress.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">My Certificates</h2>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700">
                Download All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-center">
                  <Award className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">HVAC Technician Certificate</h3>
                  <p className="text-sm text-gray-500 mb-4">Plumbing Systems & Installation</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Issued: January 15, 2024</p>
                    <p>Score: 92%</p>
                    <p>Valid until: January 15, 2026</p>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 bg-primary-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-primary-700 flex items-center justify-center">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 flex items-center justify-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complete More Courses</h3>
                  <p className="text-sm text-gray-500 mb-4">Earn certificates by completing courses</p>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700">
                    Browse Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}



