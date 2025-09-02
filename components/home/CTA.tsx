import Link from 'next/link'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main CTA */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Master Your Trade?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of skilled professionals who have transformed their careers 
              through TradeSchool OS. Start your journey today.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6 text-blue-200" />
                <span className="text-3xl font-bold text-white">2,840+</span>
              </div>
              <p className="text-blue-200">Active Students</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-6 w-6 text-blue-200" />
                <span className="text-3xl font-bold text-white">4.8/5</span>
              </div>
              <p className="text-blue-200">Average Rating</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-6 w-6 text-blue-200" />
                <span className="text-3xl font-bold text-white">95%</span>
              </div>
              <p className="text-blue-200">Certification Rate</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/courses/hvac-fundamentals"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
                       hover:bg-blue-50 transition-all duration-200 
                       flex items-center space-x-2 group"
            >
              <span>Start HVAC Course</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold 
                       hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Dashboard
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-blue-500">
            <p className="text-blue-200 text-sm">
              Trusted by industry leaders • Certified by trade associations • 
              Recognized by employers nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


