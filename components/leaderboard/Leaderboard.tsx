'use client'

import { useState } from 'react'
import { 
  Trophy, 
  Medal, 
  Star, 
  TrendingUp, 
  Clock, 
  Target,
  Flame,
  Award,
  ChevronUp,
  ChevronDown,
  Users,
  Calendar,
  BarChart3
} from 'lucide-react'
import { cn } from '@/lib/utils'

const timeframes = ['This Week', 'This Month', 'All Time']
const categories = ['Overall', 'HVAC', 'Electrical', 'Plumbing', 'Welding']

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    rank: 1,
    name: 'Sarah Martinez',
    avatar: 'SM',
    location: 'Phoenix, AZ',
    totalScore: 2840,
    completedCourses: 8,
    streak: 23,
    badges: 12,
    specialization: 'HVAC',
    level: 'Advanced',
    recentActivity: 'Completed Advanced HVAC Systems',
    weeklyChange: 5,
    joinDate: '2023-08-15'
  },
  {
    id: 2,
    rank: 2,
    name: 'Marcus Thompson',
    avatar: 'MT',
    location: 'Dallas, TX',
    totalScore: 2650,
    completedCourses: 7,
    streak: 18,
    badges: 10,
    specialization: 'HVAC',
    level: 'Intermediate',
    recentActivity: 'Aced Refrigeration Quiz',
    weeklyChange: 2,
    joinDate: '2023-07-22'
  },
  {
    id: 3,
    rank: 3,
    name: 'Jennifer Wong',
    avatar: 'JW',
    location: 'Los Angeles, CA',
    totalScore: 2520,
    completedCourses: 6,
    streak: 15,
    badges: 9,
    specialization: 'HVAC',
    level: 'Intermediate',
    recentActivity: 'Completed Safety Certification',
    weeklyChange: -1,
    joinDate: '2023-09-03'
  },
  {
    id: 4,
    rank: 4,
    name: 'Ahmed Hassan',
    avatar: 'AH',
    location: 'Houston, TX',
    totalScore: 2380,
    completedCourses: 6,
    streak: 12,
    badges: 8,
    specialization: 'HVAC',
    level: 'Intermediate',
    recentActivity: 'Completed Tool Safety Module',
    weeklyChange: 3,
    joinDate: '2023-08-28'
  },
  {
    id: 5,
    rank: 5,
    name: 'David Rodriguez',
    avatar: 'DR',
    location: 'Miami, FL',
    totalScore: 2190,
    completedCourses: 5,
    streak: 9,
    badges: 7,
    specialization: 'HVAC',
    level: 'Beginner',
    recentActivity: 'Started HVAC Fundamentals',
    weeklyChange: 8,
    joinDate: '2023-09-10'
  },
  {
    id: 6,
    rank: 6,
    name: 'Lisa Park',
    avatar: 'LP',
    location: 'Seattle, WA',
    totalScore: 2050,
    completedCourses: 5,
    streak: 7,
    badges: 6,
    specialization: 'HVAC',
    level: 'Beginner',
    recentActivity: 'Completed Basic Tools Quiz',
    weeklyChange: 1,
    joinDate: '2023-09-05'
  },
  {
    id: 7,
    rank: 7,
    name: 'Carlos Mendez',
    avatar: 'CM',
    location: 'San Antonio, TX',
    totalScore: 1890,
    completedCourses: 4,
    streak: 5,
    badges: 5,
    specialization: 'HVAC',
    level: 'Beginner',
    recentActivity: 'Watching Refrigeration Cycle',
    weeklyChange: 4,
    joinDate: '2023-09-18'
  },
  {
    id: 8,
    rank: 8,
    name: 'Angela Kim',
    avatar: 'AK',
    location: 'Denver, CO',
    totalScore: 1750,
    completedCourses: 4,
    streak: 6,
    badges: 4,
    specialization: 'HVAC',
    level: 'Beginner',
    recentActivity: 'Completed Introduction Module',
    weeklyChange: 2,
    joinDate: '2023-09-12'
  }
]

const achievements = [
  {
    title: 'Speed Learner',
    description: 'Complete 3 lessons in one day',
    icon: '⚡',
    rarity: 'Common',
    earnedBy: 156
  },
  {
    title: 'Perfect Score',
    description: 'Get 100% on any quiz',
    icon: '🎯',
    rarity: 'Uncommon',
    earnedBy: 89
  },
  {
    title: 'Streak Master',
    description: 'Maintain a 30-day learning streak',
    icon: '🔥',
    rarity: 'Rare',
    earnedBy: 23
  },
  {
    title: 'HVAC Expert',
    description: 'Complete all HVAC courses',
    icon: '🏆',
    rarity: 'Epic',
    earnedBy: 12
  }
]

export function Leaderboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Month')
  const [selectedCategory, setSelectedCategory] = useState('Overall')
  const [showAchievements, setShowAchievements] = useState(false)

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Medal className="w-6 h-6 text-orange-500" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{rank}</span>
    }
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) {
      return <ChevronUp className="w-4 h-4 text-trade-500" />
    } else if (change < 0) {
      return <ChevronDown className="w-4 h-4 text-red-500" />
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-hvac-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              🏆 Learning Leaderboard
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              See how you rank against other skilled trades students. 
              Complete courses, earn badges, and climb the leaderboard!
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">2,840</div>
              <div className="text-primary-100 text-sm">Top Score This Month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">156</div>
              <div className="text-primary-100 text-sm">Active Learners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">1,247</div>
              <div className="text-primary-100 text-sm">Courses Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">89</div>
              <div className="text-primary-100 text-sm">Perfect Scores</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
                  <div className="flex space-x-2">
                    {timeframes.map((timeframe) => (
                      <button
                        key={timeframe}
                        onClick={() => setSelectedTimeframe(timeframe)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          selectedTimeframe === timeframe
                            ? "bg-primary-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        )}
                      >
                        {timeframe}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          selectedCategory === category
                            ? "bg-primary-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Top Performers - {selectedTimeframe}
                </h3>
              </div>

              <div className="divide-y divide-gray-200">
                {leaderboardData.map((student, index) => (
                  <div
                    key={student.id}
                    className={cn(
                      "p-6 hover:bg-gray-50 transition-colors",
                      index < 3 && "bg-gradient-to-r from-yellow-50 to-transparent"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Rank */}
                        <div className="flex-shrink-0">
                          {getRankIcon(student.rank)}
                        </div>

                        {/* Avatar and Info */}
                        <div className="flex items-center space-x-3">
                          <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white",
                            index === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-600" :
                            index === 1 ? "bg-gradient-to-br from-gray-400 to-gray-600" :
                            index === 2 ? "bg-gradient-to-br from-orange-400 to-orange-600" :
                            "bg-gradient-to-br from-primary-400 to-primary-600"
                          )}>
                            {student.avatar}
                          </div>
                          
                          <div>
                            <div className="font-semibold text-gray-900 flex items-center">
                              {student.name}
                              {student.streak >= 7 && (
                                <Flame className="w-4 h-4 ml-2 text-orange-500" />
                              )}
                            </div>
                            <div className="text-sm text-gray-500">
                              {student.location} • {student.specialization} • {student.level}
                            </div>
                            <div className="text-xs text-gray-400">
                              {student.recentActivity}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-8 text-right">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {student.totalScore.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">Total Score</div>
                        </div>
                        
                        <div className="hidden md:block">
                          <div className="text-lg font-semibold text-gray-900">
                            {student.completedCourses}
                          </div>
                          <div className="text-sm text-gray-500">Courses</div>
                        </div>
                        
                        <div className="hidden md:block">
                          <div className="flex items-center text-lg font-semibold text-gray-900">
                            {student.streak}
                            <Flame className="w-4 h-4 ml-1 text-orange-500" />
                          </div>
                          <div className="text-sm text-gray-500">Day Streak</div>
                        </div>
                        
                        <div className="hidden md:block">
                          <div className="flex items-center text-lg font-semibold text-gray-900">
                            {student.badges}
                            <Award className="w-4 h-4 ml-1 text-yellow-500" />
                          </div>
                          <div className="text-sm text-gray-500">Badges</div>
                        </div>

                        {/* Weekly Change */}
                        <div className="flex items-center">
                          {getChangeIcon(student.weeklyChange)}
                          <span className={cn(
                            "text-sm font-medium",
                            student.weeklyChange > 0 ? "text-trade-600" :
                            student.weeklyChange < 0 ? "text-red-600" :
                            "text-gray-500"
                          )}>
                            {student.weeklyChange > 0 ? '+' : ''}{student.weeklyChange}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Your Rank Card */}
            <div className="bg-gradient-to-br from-primary-500 to-hvac-500 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-4">Your Current Rank</h3>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">#42</div>
                <div className="text-primary-100 mb-4">Out of 156 students</div>
                <div className="bg-white/20 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Score:</span>
                    <span className="font-medium">1,420 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Streak:</span>
                    <span className="font-medium">5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courses:</span>
                    <span className="font-medium">3 completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Achievements</h3>
                <button
                  onClick={() => setShowAchievements(!showAchievements)}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  {showAchievements ? 'Show Less' : 'View All'}
                </button>
              </div>

              <div className="space-y-3">
                {achievements.slice(0, showAchievements ? achievements.length : 2).map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">
                        {achievement.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {achievement.description}
                      </div>
                      <div className="text-xs text-gray-400">
                        Earned by {achievement.earnedBy} students
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-sm py-2">
                  Continue Learning
                </button>
                <button className="w-full btn-secondary text-sm py-2">
                  Take a Quiz
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View My Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




