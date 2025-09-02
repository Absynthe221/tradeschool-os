import { Courses } from '@/components/courses/Courses'

export const metadata = {
  title: 'Courses - TradeSchool OS',
  description: 'Explore our comprehensive skilled trades courses starting with HVAC fundamentals. Learn from industry experts with hands-on training.',
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Available Courses</h1>
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">HVAC Fundamentals</h2>
          <p className="text-gray-600 mb-4">
            Master the basics of heating, ventilation, and air conditioning systems.
          </p>
          <a 
            href="/courses/hvac-fundamentals" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Start Course
          </a>
        </div>
      </div>
    </div>
  )
}




