// Backup of the original page before testing
import { CourseDetail } from '@/components/courses/CourseDetail'
import { notFound } from 'next/navigation'
import hvacCourse from '@/data/hvac-course'

// Sample course data - in production this would come from database
const courses = {
  'hvac-fundamentals': {
    id: 'hvac-fundamentals',
    title: 'HVAC Fundamentals & Nigerian Applications',
    description: 'Master HVAC systems design, installation, and maintenance with focus on tropical climate applications.',
    category: 'HVAC',
    difficulty: 'Beginner to Intermediate',
    duration: '12 hours',
    price: '₦45,000',
    originalPrice: '₦65,000',
    rating: 4.8,
    studentsCount: 1247,
    instructor: {
      name: 'Eng. Adebayo Okafor',
      title: 'Senior HVAC Engineer',
      avatar: '/instructors/adebayo-okafor.jpg',
      experience: '15+ years',
      students: 3200,
      rating: 4.9
    },
    features: [
      'Hands-on Workshop Sessions',
      'Real Nigerian Case Studies', 
      'Industry Standard Certifications',
      'Job Placement Assistance',
      'Lifetime Access to Updates',
      'Mobile Learning Support'
    ],
    requirements: [
      'Basic understanding of physics (heat, electricity)',
      'High school mathematics',
      'Safety awareness mindset',
      'Access to computer/mobile for theory modules'
    ],
    outcomes: [
      'Design HVAC systems for Nigerian climate',
      'Install and maintain air conditioning systems', 
      'Troubleshoot common HVAC problems',
      'Understand refrigeration cycles and components',
      'Electrical Safety & Troubleshooting',
      'Nigerian Climate Considerations',
      'Energy Efficiency Principles',
      'Maintenance & Installation Procedures'
    ],
    modules: hvacCourse, // Using existing modules for now
    curriculum: [
      {
        id: 1,
        title: 'Module 1: Introduction to HVAC',
        duration: '45 min',
        type: 'module',
        description: 'Overview of HVAC systems and their applications in Nigeria',
        objectives: hvacCourse[0]?.learningObjectives || ['Basic HVAC concepts', 'System types', 'Applications'],
        completed: true,
        locked: false,
        videos: hvacCourse[0]?.content.videos.length || 2,
        activities: hvacCourse[0]?.content.activities.length || 3,
        questions: hvacCourse[0]?.questions.length || 10
      },
      {
        id: 2,
        title: 'Module 2: Safety & Best Practices',
        duration: '40 min',
        type: 'module',
        description: 'Safety protocols and best practices for HVAC work',
        objectives: hvacCourse[1]?.learningObjectives || ['Safety protocols', 'PPE usage', 'Risk assessment'],
        completed: false,
        locked: false,
        videos: hvacCourse[1]?.content.videos.length || 2,
        activities: hvacCourse[1]?.content.activities.length || 1,
        questions: hvacCourse[1]?.questions.length || 2
      },
      {
        id: 3,
        title: 'Module 3: Tools & Equipment',
        duration: '50 min',
        type: 'module',
        description: 'Hand tools, power tools, and diagnostic equipment',
        objectives: ['Identify HVAC tools', 'Understand measurement devices', 'Tool maintenance'],
        completed: false,
        locked: true,
        videos: 3,
        activities: 2,
        questions: 5
      },
      {
        id: 4,
        title: 'Module 4: Gas Piping & Combustion',
        duration: '150 min',
        type: 'module',
        description: 'Gas piping systems, safety practices, and combustion theory',
        objectives: ['Gas piping materials', 'Pipe sizing', 'Leak testing', 'Combustion theory', 'Safety procedures'],
        completed: false,
        locked: true,
        videos: 2,
        activities: 2,
        questions: 4
      },
      {
        id: 5,
        title: 'Module 5: Basic Thermodynamics',
        duration: '90 min',
        type: 'module',
        description: 'Heat transfer principles and thermodynamic laws',
        objectives: ['Heat transfer modes', 'Thermodynamic laws', 'Sensible vs latent heat'],
        completed: false,
        locked: true,
        videos: 3,
        activities: 3,
        questions: 6
      },
      {
        id: 6,
        title: 'Module 6: Installation & Maintenance',
        duration: '90 min',
        type: 'module',
        description: 'Step-by-step installation and preventive maintenance',
        objectives: ['Installation procedures', 'Maintenance schedules', 'Spare parts management'],
        completed: false,
        locked: true,
        videos: 6,
        activities: 5,
        questions: 12
      },
      {
        id: 7,
        title: 'Module 7: Refrigeration Cycle & Components',
        duration: '120 min',
        type: 'module',
        description: 'Understanding refrigeration cycle and heat transfer principles',
        objectives: ['Refrigeration cycle', 'Component functions', 'Troubleshooting', 'Heat transfer'],
        completed: false,
        locked: true,
        videos: 2,
        activities: 2,
        questions: 5
      },
      {
        id: 8,
        title: 'Module 8: Electrical Systems for HVAC',
        duration: '135 min',
        type: 'module',
        description: 'Understanding HVAC electrical systems, controls, and safety procedures',
        objectives: ['Electrical basics', 'Control circuits', 'Safety procedures', 'Troubleshooting'],
        completed: false,
        locked: true,
        videos: 3,
        activities: 2,
        questions: 6
      },
      {
        id: 9,
        title: 'Module 9: Final Exam & Certification',
        duration: '90 min',
        type: 'exam',
        description: 'Comprehensive exam covering all 8 modules with practical assessments',
        questions: 75,
        passingScore: 80,
        completed: false,
        locked: true,
        examTypes: ['Multiple Choice', 'True/False', 'Short Answer', 'Scenarios', 'Case Studies', 'Practical Assessment']
      }
    ]
  }
}

interface CoursePageProps {
  params: {
    courseId: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses[params.courseId as keyof typeof courses]
  
  if (!course) {
    notFound()
  }

  return <CourseDetail course={course} />
}


