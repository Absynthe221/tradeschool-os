'use client'

import Link from 'next/link'
import { ArrowRight, Play, Wrench, Award, Users } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-hvac-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-hvac-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-trade-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Wrench className="w-4 h-4 mr-2" />
              HVAC Training Platform • Starting with Real-World Skills
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Master Skilled Trades with{' '}
              <span className="bg-gradient-to-r from-primary-600 to-hvac-600 bg-clip-text text-transparent">
                Hands-On Training
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Learn HVAC, electrical, plumbing, and more through our mobile-first platform. 
              Get access to equipment kits, video lessons, and real deployment training sites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  console.log('Start HVAC Course button clicked!')
                  window.location.href = '/courses/hvac-fundamentals'
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start HVAC Course
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => {
                  console.log('Browse Courses button clicked!')
                  window.location.href = '/courses'
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-colors"
              >
                <Play className="mr-2 w-5 h-5" />
                Browse Courses
              </button>
            </div>

            {/* Dashboard Access Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => {
                  console.log('Admin button clicked!')
                  window.location.href = '/admin'
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors border-2 border-red-500 shadow-lg text-lg"
              >
                <Wrench className="mr-3 w-5 h-5" />
                ADMIN DASHBOARD
              </button>
              
              <button 
                onClick={() => {
                  console.log('Dashboard button clicked!')
                  window.location.href = '/dashboard'
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors border-2 border-purple-500 shadow-lg text-lg"
              >
                <Users className="mr-3 w-5 h-5" />
                USER DASHBOARD
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-6 h-6 text-primary-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">5,000+</span>
                </div>
                <p className="text-sm text-gray-600">Active Learners</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="w-6 h-6 text-trade-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">50+</span>
                </div>
                <p className="text-sm text-gray-600">Courses Available</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Wrench className="w-6 h-6 text-hvac-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">200+</span>
                </div>
                <p className="text-sm text-gray-600">Equipment Kits</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock app interface */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-hvac-500 rounded-xl flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">HVAC Fundamentals</h3>
                    <p className="text-sm text-gray-500">Course 1 of 8</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-400" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-primary-600 font-medium">67%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '67%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-trade-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-trade-700">8/12</div>
                    <div className="text-xs text-trade-600">Lessons Complete</div>
                  </div>
                  <div className="bg-hvac-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-hvac-700">850</div>
                    <div className="text-xs text-hvac-600">Points Earned</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-trade-400 to-trade-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

