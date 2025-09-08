import { CourseDetail } from '@/components/courses/CourseDetail'
import { notFound } from 'next/navigation'
import { hvacCompleteModules, courseStatistics, hvacFinalExam } from '@/data/hvac-complete-modules'
import { cdlCompleteModules } from '@/data/cdl-complete-modules'
import { mtoModules, mtoCourseStatistics } from '@/data/mto-modules'
import { airbrakeModules, airbrakeCourseStatistics } from '@/data/airbrake-modules'
import { airbrakeYardModules, airbrakeYardStats } from '@/data/airbrake-yard'

const courses = {
  'hvac-fundamentals': {
    id: 'hvac-fundamentals',
    title: 'Complete HVAC Technician Certification Course',
    description: 'Master HVAC systems from fundamentals to advanced troubleshooting. Get certified as an HVAC technician with hands-on training, real-world projects, and industry-standard practices.',
    category: 'HVAC Certification',
    difficulty: 'Beginner to Advanced',
    duration: courseStatistics.totalDuration,
    price: '$299',
    originalPrice: '$499',
    rating: 4.9,
    studentsCount: 2847,
    instructor: {
      name: 'Master Technician James Wilson',
      title: 'EPA-Certified HVAC Master Technician',
      avatar: '/instructors/james-wilson.jpg',
      experience: '20+ years',
      students: 8500,
      rating: 4.9,
      bio: 'EPA-certified HVAC Master Technician with 20+ years of field experience. Former Technical Director at Johnson Controls, specializing in commercial and residential HVAC systems. Certified trainer for EPA 608 and NATE programs.',
      credentials: ['EPA 608 Universal Certification', 'NATE Certified', 'Energy Efficiency Expert', 'Safety Training Specialist', 'HVAC Excellence Certified']
    },
    features: [
      'Hands-on Video Demonstrations',
      'Real-World Case Studies', 
      'EPA 608 Exam Preparation',
      'NATE Certification Ready',
      'Lifetime Access to Updates',
      'Mobile Learning Support',
      'Downloadable Resources',
      '24/7 Instructor Support'
    ],
    requirements: [
      'Basic understanding of physics (heat, electricity)',
      'High school mathematics or equivalent',
      'Safety awareness mindset',
      'Access to computer/mobile for video lessons',
      'Willingness to practice hands-on skills'
    ],
    outcomes: [
      'Install and service HVAC systems professionally',
      'Troubleshoot complex HVAC problems systematically', 
      'Pass EPA 608 and NATE certification exams',
      'Read and interpret electrical schematics',
      'Perform proper refrigerant handling and recovery',
      'Design basic HVAC systems for residential applications',
      'Implement energy efficiency best practices',
      'Execute proper safety procedures in all situations'
    ],
    modules: hvacCompleteModules,
    curriculum: hvacCompleteModules.map(module => ({
      id: module.id,
      title: module.title,
      duration: module.duration,
      type: 'module',
      description: module.description,
      objectives: module.objectives,
      completed: module.completed,
      locked: module.locked,
      videos: module.lessons.length,
      activities: module.lessons.length,
      questions: module.quiz.questions,
      lessons: module.lessons
    })).concat([{
      id: 9,
      title: 'Final Certification Exam',
      duration: '2 hours',
      type: 'exam',
      description: hvacFinalExam.description,
      objectives: ['Demonstrate mastery of all course concepts', 'Pass comprehensive certification exam'],
      completed: false,
      locked: true,
      videos: 0,
      activities: 0,
      questions: hvacFinalExam.questions,
      lessons: []
    }]),
    statistics: courseStatistics,
    finalExam: hvacFinalExam
  },
  'air-brake-schedule1-yard': {
    id: 'air-brake-schedule1-yard',
    title: 'Air Brake Schedule 1 — Yard Training Series',
    description: 'Structured yard training video series covering Schedule 1 air brake inspection items with per-session quizzes.',
    category: 'CDL Certification',
    difficulty: 'Beginner',
    duration: airbrakeYardStats.totalDuration,
    price: '$0',
    originalPrice: '$0',
    rating: 4.8,
    studentsCount: 0,
    instructor: {
      name: 'TradeSchool OS CDL Team',
      title: 'Instructor-Led Yard Training',
      avatar: '/instructors/mto.jpg',
      experience: 'Industry',
      students: 0,
      rating: 4.8,
      bio: 'Hands-on Schedule 1 inspection training with videos and quizzes.',
      credentials: ['Ontario Schedule 1']
    },
    features: [
      'Session-based yard videos',
      'Per-session quizzes',
      'Checklist simulation'
    ],
    requirements: ['Access to classroom or yard environment'],
    outcomes: [
      'Perform Schedule 1 air brake inspection',
      'Identify minor vs major defects',
      'Pass practical inspection assessments'
    ],
    modules: airbrakeYardModules,
    curriculum: airbrakeYardModules.map((module, idx) => ({
      id: idx + 1,
      title: module.title,
      duration: module.duration,
      type: 'module',
      description: module.description,
      objectives: [],
      completed: false,
      locked: false,
      videos: module.lessons.length,
      activities: module.lessons.length,
      questions: module.quiz.questions,
      lessons: module.lessons
    })),
    statistics: airbrakeYardStats
  },
  'air-brake-endorsement': {
    id: 'air-brake-endorsement',
    title: 'Ontario Air Brake (Z) Endorsement — 2-Day Course',
    description: '24-hour classroom curriculum with videos, inspections, adjustment, legal requirements, quizzes and a final exam prep.',
    category: 'CDL Certification',
    difficulty: 'Beginner',
    duration: airbrakeCourseStatistics.totalDuration,
    price: '$0',
    originalPrice: '$0',
    rating: 4.8,
    studentsCount: 0,
    instructor: {
      name: 'TradeSchool OS CDL Team',
      title: 'Instructor-Led Classroom',
      avatar: '/instructors/mto.jpg',
      experience: 'Industry',
      students: 0,
      rating: 4.8,
      bio: 'Air brake training aligned to Ontario handbook with module quizzes and prep.',
      credentials: ['Ontario Handbook Aligned']
    },
    features: [
      '2-day structured modules (24 hours)',
      'Module quizzes and final prep',
      'Downloadable checklists and charts'
    ],
    requirements: [
      'Access to computer/mobile for lessons'
    ],
    outcomes: [
      'Understand air brake systems and inspections',
      'Measure pushrod stroke and verify adjustment',
      'Prepare for Z endorsement written and practical exams'
    ],
    modules: airbrakeModules,
    curriculum: airbrakeModules.map((module, idx) => ({
      id: idx + 1,
      title: module.title,
      duration: module.duration,
      type: 'module',
      description: module.description,
      objectives: [],
      completed: false,
      locked: false,
      videos: module.lessons.length,
      activities: module.lessons.length,
      questions: module.quiz.questions,
      lessons: module.lessons
    })),
    statistics: airbrakeCourseStatistics
  },
  'ontario-mto-truck': {
    id: 'ontario-mto-truck',
    title: 'Ontario MTO Truck Handbook — 5-Day Program',
    description: '37.5-hour, 5-day classroom program aligned to the Official Ontario MTO Truck Handbook with post-session quizzes and a practice exam.',
    category: 'CDL Certification',
    difficulty: 'Beginner',
    duration: mtoCourseStatistics.totalDuration,
    price: '$0',
    originalPrice: '$0',
    rating: 4.8,
    studentsCount: 0,
    instructor: {
      name: 'TradeSchool OS CDL Team',
      title: 'Instructor-Led Classroom',
      avatar: '/instructors/mto.jpg',
      experience: 'Industry',
      students: 0,
      rating: 4.8,
      bio: 'Structured program based on the Ontario MTO Truck Handbook with integrated quizzes and sign practice.' ,
      credentials: ['Ontario Handbook Aligned']
    },
    features: [
      '5-day structured modules (37.5 hours)',
      'Post-session quizzes',
      'Ontario signs practice set',
      'Citations to official handbook'
    ],
    requirements: [
      'Valid G licence recommended',
      'Access to computer/mobile for lessons',
      'Willingness to learn safety procedures'
    ],
    outcomes: [
      'Understand Ontario commercial rules and signs',
      'Perform daily inspections basics',
      'Prepare for knowledge and road tests'
    ],
    modules: mtoModules,
    curriculum: mtoModules.map(module => ({
      id: module.id as unknown as number,
      title: module.title,
      duration: module.duration,
      type: 'module',
      description: module.description,
      objectives: module.objectives,
      completed: module.completed,
      locked: module.locked,
      videos: module.lessons.length,
      activities: module.lessons.length,
      questions: module.quiz.questions,
      lessons: module.lessons
    })),
    statistics: mtoCourseStatistics
  },
  'cdl-fundamentals': {
    id: 'cdl-fundamentals',
    title: 'CDL Fundamentals: Commercial Driver Training',
    description: 'Complete commercial driver training program covering CDL requirements, vehicle operation, safety practices, and road test preparation.',
    category: 'CDL Certification',
    difficulty: 'Beginner',
    duration: '26 hours',
    price: '$899',
    originalPrice: '$1,299',
    rating: 4.8,
    studentsCount: 1250,
    instructor: {
      name: 'Michael Rodriguez',
      title: 'CDL Master Instructor',
      avatar: '/instructors/michael-rodriguez.jpg',
      experience: '15+ years',
      students: 3200,
      rating: 4.8,
      bio: 'CDL Master Instructor with 15+ years of commercial driving experience. Former safety director for major trucking companies. Certified by the Department of Transportation and Federal Motor Carrier Safety Administration.',
      credentials: ['CDL Class A License', 'DOT Safety Certification', 'FMCSA Certified Instructor', 'Defensive Driving Specialist', 'Hazmat Endorsement']
    },
    features: [
      'Comprehensive CDL Training',
      'Practice Exams & Simulations',
      'Vehicle Inspection Training',
      'Road Test Preparation',
      'Safety Practices & Procedures',
      'Mobile Learning Support',
      'Downloadable Study Materials',
      '24/7 Instructor Support'
    ],
    requirements: [
      'Valid driver\'s license',
      'Clean driving record',
      'Basic reading and writing skills',
      'Access to computer/mobile for lessons',
      'Willingness to learn safety procedures'
    ],
    outcomes: [
      'Pass CDL written and road tests',
      'Perform thorough vehicle inspections',
      'Understand traffic laws and regulations',
      'Execute proper safety procedures',
      'Handle cargo securement properly',
      'Navigate commercial vehicle operations',
      'Maintain compliance with DOT regulations',
      'Demonstrate professional driving skills'
    ],
    modules: cdlCompleteModules,
    curriculum: cdlCompleteModules.map(module => ({
      id: module.id,
      title: module.title,
      duration: module.duration,
      type: 'module',
      description: module.description,
      objectives: module.objectives,
      completed: module.completed,
      locked: module.locked,
      videos: module.lessons.length,
      activities: module.lessons.length,
      questions: module.quiz.questions,
      lessons: module.lessons
    })),
    statistics: {
      totalDuration: '26 hours',
      totalLessons: 40,
      totalModules: 8,
      completionRate: 92,
      averageRating: 4.8
    }
  },
  'hvac-installation': {
    id: 'hvac-installation',
    title: 'HVAC Installation & Maintenance',
    description: 'Learn professional installation techniques and maintenance procedures for residential and commercial HVAC systems.',
    category: 'HVAC Installation',
    difficulty: 'Intermediate',
    duration: '60 hours',
    price: '$449',
    originalPrice: '$599',
    rating: 4.9,
    studentsCount: 1520,
    instructor: {
      name: 'Sarah Johnson',
      title: 'HVAC Installation Specialist',
      avatar: '/instructors/sarah-johnson.jpg',
      experience: '12+ years',
      students: 4200,
      rating: 4.9,
      bio: 'HVAC Installation Specialist with 12+ years of experience in residential and commercial installations. Former project manager for major HVAC contractors. Expert in energy-efficient systems and smart home integration.',
      credentials: ['EPA 608 Universal Certification', 'NATE Installation Certified', 'Energy Star Partner', 'Smart Home Integration Expert', 'Project Management Professional']
    },
    features: [
      'Professional Installation Techniques',
      'Maintenance Procedures',
      'Commercial System Training',
      'Energy Efficiency Best Practices',
      'Smart Home Integration',
      'Project Management Skills',
      'Lifetime Access to Updates',
      '24/7 Instructor Support'
    ],
    requirements: [
      'HVAC Fundamentals course completion',
      'Basic electrical knowledge',
      'Hands-on experience preferred',
      'Access to tools and equipment',
      'Safety certification'
    ],
    outcomes: [
      'Install residential and commercial HVAC systems',
      'Perform preventive maintenance procedures',
      'Troubleshoot installation issues',
      'Implement energy efficiency measures',
      'Manage HVAC installation projects',
      'Integrate smart home technologies',
      'Ensure code compliance',
      'Provide excellent customer service'
    ],
    modules: [],
    curriculum: [],
    statistics: {
      totalDuration: '60 hours',
      totalLessons: 18,
      totalModules: 6,
      completionRate: 88,
      averageRating: 4.9
    }
  },
  'hvac-advanced': {
    id: 'hvac-advanced',
    title: 'Advanced HVAC Systems',
    description: 'Master complex HVAC systems including VRF, chiller systems, and building automation controls.',
    category: 'HVAC Advanced',
    difficulty: 'Advanced',
    duration: '80 hours',
    price: '$649',
    originalPrice: '$899',
    rating: 4.7,
    studentsCount: 890,
    instructor: {
      name: 'Mike Rodriguez',
      title: 'Advanced HVAC Systems Engineer',
      avatar: '/instructors/mike-rodriguez.jpg',
      experience: '18+ years',
      students: 2800,
      rating: 4.7,
      bio: 'Advanced HVAC Systems Engineer with 18+ years specializing in complex commercial systems. Former chief engineer for Fortune 500 companies. Expert in VRF systems, building automation, and energy management.',
      credentials: ['Professional Engineer (PE)', 'LEED AP BD+C', 'Building Automation Expert', 'Energy Management Specialist', 'VRF Systems Certified']
    },
    features: [
      'VRF System Mastery',
      'Building Automation Controls',
      'Chiller System Operations',
      'Energy Management Systems',
      'Complex Troubleshooting',
      'Advanced Diagnostics',
      'Lifetime Access to Updates',
      '24/7 Instructor Support'
    ],
    requirements: [
      'HVAC Installation course completion',
      'Strong electrical background',
      'Building automation knowledge',
      'Advanced troubleshooting skills',
      'Engineering mindset'
    ],
    outcomes: [
      'Design and implement VRF systems',
      'Program building automation controls',
      'Operate and maintain chiller systems',
      'Optimize energy management systems',
      'Troubleshoot complex HVAC issues',
      'Implement advanced diagnostics',
      'Ensure system efficiency',
      'Lead technical teams'
    ],
    modules: [],
    curriculum: [],
    statistics: {
      totalDuration: '80 hours',
      totalLessons: 24,
      totalModules: 8,
      completionRate: 85,
      averageRating: 4.7
    }
  }
}

interface PageProps {
  params: {
    courseId: string
  }
}

export default function CoursePage({ params }: PageProps) {
  const course = courses[params.courseId as keyof typeof courses]
  
  if (!course) {
    notFound()
  }

  return <CourseDetail course={course} />
}

export async function generateStaticParams() {
  return Object.keys(courses).map((courseId) => ({
    courseId,
  }))
}