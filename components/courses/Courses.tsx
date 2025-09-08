'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Snowflake, 
  Zap, 
  Droplets, 
  Flame, 
  Building, 
  Sun, 
  Bot,
  Truck,
  Filter,
  Star,
  Clock,
  Users,
  Play,
  BookOpen,
  Award,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const trades = [
  { id: 'all', name: 'All Trades', icon: BookOpen },
  { id: 'hvac', name: 'HVAC', icon: Snowflake },
  { id: 'cdl', name: 'CDL', icon: Truck },
  { id: 'electrical', name: 'Electrical', icon: Zap },
  { id: 'plumbing', name: 'Plumbing', icon: Droplets },
  { id: 'welding', name: 'Welding', icon: Flame },
  { id: 'construction', name: 'Construction', icon: Building },
  { id: 'solar', name: 'Solar', icon: Sun },
  { id: 'robotics', name: 'Robotics', icon: Bot },
]

const courses = [
  {
    id: 'cdl-fundamentals',
    title: 'CDL Fundamentals: Commercial Driver Training',
    description: 'Complete commercial driver training program covering CDL requirements, vehicle operation, safety practices, and road test preparation.',
    trade: 'cdl',
    level: 'Beginner',
    duration: '26 hours',
    lessons: 40,
    students: 1250,
    rating: 4.8,
    price: 899,
    status: 'available',
    thumbnail: '/courses/cdl-fundamentals.jpg',
    instructor: 'Michael Rodriguez',
    skills: ['Vehicle Inspection', 'Safety Practices', 'Traffic Laws', 'Road Test Prep'],
  },
  {
    id: 'air-brake-schedule1-yard',
    title: 'Air Brake Schedule 1 — Yard Training Series',
    description: 'Structured yard training video series covering Schedule 1 air brake inspection items with per-session quizzes.',
    trade: 'cdl',
    level: 'Beginner',
    duration: '7 hours 30 minutes',
    lessons: 31,
    students: 0,
    rating: 4.8,
    price: 0,
    status: 'available',
    thumbnail: '/courses/air-brake-yard.jpg',
    instructor: 'TradeSchool OS CDL Team',
    skills: ['Schedule 1 Inspection', 'Defect Classification', 'Practical Tests', 'Checklist Simulation'],
  },
  {
    id: 'air-brake-endorsement',
    title: 'Ontario Air Brake (Z) Endorsement — 2-Day Course',
    description: '24-hour classroom curriculum aligned to the Official Air Brake Handbook with module quizzes and final prep.',
    trade: 'cdl',
    level: 'Beginner',
    duration: '24 hours',
    lessons: 8,
    students: 0,
    rating: 4.8,
    price: 0,
    status: 'available',
    thumbnail: '/courses/air-brake.jpg',
    instructor: 'TradeSchool OS',
    skills: ['System Fundamentals', 'Functional Inspections', 'Brake Adjustment', 'Legal Requirements']
  },
  {
    id: 'cdl-advanced',
    title: 'CDL Advanced: Specialized Vehicle Operations',
    description: 'Advanced CDL training for specialized vehicles including tankers, hazmat, doubles/triples, and passenger transport.',
    trade: 'cdl',
    level: 'Intermediate',
    duration: '35 hours',
    lessons: 25,
    students: 680,
    rating: 4.9,
    price: 1199,
    status: 'available',
    thumbnail: '/courses/cdl-advanced.jpg',
    instructor: 'Michael Rodriguez',
    skills: ['Tanker Operations', 'Hazmat Transport', 'Doubles/Triples', 'Passenger Safety'],
  },
  {
    id: 'cdl-specialized',
    title: 'CDL Specialized: Industry-Specific Training',
    description: 'Specialized CDL training for construction, logging, agriculture, and other industry-specific vehicle operations.',
    trade: 'cdl',
    level: 'Advanced',
    duration: '20 hours',
    lessons: 15,
    students: 420,
    rating: 4.7,
    price: 799,
    status: 'available',
    thumbnail: '/courses/cdl-specialized.jpg',
    instructor: 'Michael Rodriguez',
    skills: ['Construction Vehicles', 'Logging Operations', 'Agricultural Equipment', 'Industry Safety'],
  },
  {
    id: 'hvac-fundamentals',
    title: 'HVAC Fundamentals',
    description: 'Master the basics of heating, ventilation, and air conditioning systems. Perfect for beginners entering the HVAC field.',
    trade: 'hvac',
    level: 'Beginner',
    duration: '40 hours',
    lessons: 12,
    students: 2840,
    rating: 4.8,
    price: 299,
    status: 'available',
    thumbnail: '/courses/hvac-fundamentals.jpg',
    instructor: 'John Smith',
    skills: ['Refrigeration Cycle', 'System Components', 'Safety Protocols', 'Basic Troubleshooting'],
  },
  {
    id: 'hvac-installation',
    title: 'HVAC Installation & Maintenance',
    description: 'Learn professional installation techniques and maintenance procedures for residential and commercial HVAC systems.',
    trade: 'hvac',
    level: 'Intermediate',
    duration: '60 hours',
    lessons: 18,
    students: 1520,
    rating: 4.9,
    price: 449,
    status: 'available',
    thumbnail: '/courses/hvac-installation.jpg',
    instructor: 'Sarah Johnson',
    skills: ['System Installation', 'Preventive Maintenance', 'EPA Certification', 'Commercial Systems'],
  },
  {
    id: 'hvac-advanced',
    title: 'Advanced HVAC Systems',
    description: 'Master complex HVAC systems including VRF, chiller systems, and building automation controls.',
    trade: 'hvac',
    level: 'Advanced',
    duration: '80 hours',
    lessons: 24,
    students: 890,
    rating: 4.7,
    price: 649,
    status: 'available',
    thumbnail: '/courses/hvac-advanced.jpg',
    instructor: 'Mike Rodriguez',
    skills: ['VRF Systems', 'Building Automation', 'Energy Efficiency', 'Complex Troubleshooting'],
  },
  {
    id: 'electrical-basics',
    title: 'Electrical Fundamentals',
    description: 'Essential electrical skills for residential and commercial applications.',
    trade: 'electrical',
    level: 'Beginner',
    duration: '35 hours',
    lessons: 10,
    students: 1200,
    rating: 4.6,
    price: 279,
    status: 'coming-soon',
    thumbnail: '/courses/electrical-basics.jpg',
    instructor: 'TBD',
    skills: ['Electrical Safety', 'Wiring Methods', 'Code Compliance', 'Basic Circuits'],
  },
  {
    id: 'plumbing-essentials',
    title: 'Plumbing Essentials',
    description: 'Learn pipe installation, fixture repair, and water system fundamentals.',
    trade: 'plumbing',
    level: 'Beginner',
    duration: '30 hours',
    lessons: 8,
    students: 980,
    rating: 4.5,
    price: 249,
    status: 'coming-soon',
    thumbnail: '/courses/plumbing-essentials.jpg',
    instructor: 'TBD',
    skills: ['Pipe Installation', 'Fixture Repair', 'Water Systems', 'Emergency Repairs'],
  },
  {
    id: 'welding-fundamentals',
    title: 'Welding Fundamentals',
    description: 'Master MIG, TIG, and stick welding techniques with hands-on practice.',
    trade: 'welding',
    level: 'Beginner',
    duration: '45 hours',
    lessons: 15,
    students: 1240,
    rating: 4.9,
    price: 399,
    status: 'coming-soon',
    thumbnail: '/courses/welding-fundamentals.jpg',
    instructor: 'TBD',
    skills: ['MIG Welding', 'TIG Welding', 'Stick Welding', 'Metal Fabrication'],
  },
]

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export function Courses() {
  const [selectedTrade, setSelectedTrade] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('All Levels')
  const [showFilters, setShowFilters] = useState(false)

  const filteredCourses = courses.filter(course => {
    const tradeMatch = selectedTrade === 'all' || course.trade === selectedTrade
    const levelMatch = selectedLevel === 'All Levels' || course.level === selectedLevel
    return tradeMatch && levelMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Skilled Trades Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master practical skills with our comprehensive curriculum. Start with HVAC fundamentals 
              or CDL training, and expand your expertise across multiple trade disciplines.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={cn("space-y-6", showFilters ? "block" : "hidden lg:block")}>
                {/* Trade Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Trade</h4>
                  <div className="space-y-2">
                    {trades.map((trade) => {
                      const Icon = trade.icon
                      return (
                        <button
                          key={trade.id}
                          onClick={() => setSelectedTrade(trade.id)}
                          className={cn(
                            "w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                            selectedTrade === trade.id
                              ? "bg-primary-100 text-primary-700 border border-primary-200"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          )}
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          {trade.name}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Level Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Level</h4>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={cn(
                          "w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                          selectedLevel === level
                            ? "bg-primary-100 text-primary-700 border border-primary-200"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        )}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div className="flex justify-between">
                      <span>Total Courses</span>
                      <span className="font-medium text-gray-900">{filteredCourses.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Available Now</span>
                      <span className="font-medium text-trade-600">
                        {filteredCourses.filter(c => c.status === 'available').length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                {selectedTrade !== 'all' && ` in ${trades.find(t => t.id === selectedTrade)?.name}`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className={cn(
                    "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-gray-300",
                    course.status === 'coming-soon' && "opacity-75"
                  )}
                >
                  {/* Course Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-hvac-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary-600" />
                    </div>
                    {course.status === 'coming-soon' && (
                      <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Coming Soon
                      </div>
                    )}
                    {course.status === 'available' && (
                      <div className="absolute top-4 right-4 bg-trade-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Available
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Course Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                          {course.level}
                        </span>
                        <span className="text-xs text-gray-500">{course.trade.toUpperCase()}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Course Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {course.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                        {course.rating} rating
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">What you'll learn</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{course.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          ${course.price}
                        </div>
                        <div className="text-sm text-gray-500">One-time payment</div>
                      </div>
                      
                      {course.status === 'available' ? (
                        <Link
                          href={`/courses/${course.id}`}
                          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium text-sm rounded-lg hover:bg-primary-700 transition-colors"
                        >
                          Start Course
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 font-medium text-sm rounded-lg cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more courses.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



