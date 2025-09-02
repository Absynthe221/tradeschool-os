export interface CDLLesson {
  id: string
  title: string
  description: string
  videoUrl?: string
  duration: string
  objectives: string[]
  resources: string[]
  type: 'video' | 'interactive' | 'assessment' | 'simulation'
}

export interface CDLModule {
  id: string
  title: string
  description: string
  duration: string
  objectives: string[]
  lessons: CDLLesson[]
  quiz: {
    questions: number
    passingScore: number
    timeLimit: number
  }
  completed: boolean
  locked: boolean
  orderIndex: number
  category: 'theory' | 'practical' | 'safety' | 'regulations' | 'maintenance'
}

export const cdlCompleteModules: CDLModule[] = [
  {
    id: 'cdl-introduction',
    title: 'Introduction to Commercial Driving',
    description: 'Overview of the CDL program, requirements, and career opportunities in commercial trucking.',
    duration: '2 hours',
    objectives: [
      'Understand CDL requirements and eligibility',
      'Learn about different CDL classes and endorsements',
      'Explore career opportunities in trucking',
      'Understand the importance of safety in commercial driving'
    ],
    lessons: [
      {
        id: 'cdl-1-1',
        title: 'CDL Requirements and Eligibility',
        description: 'Learn about age requirements, medical qualifications, and background checks needed for CDL.',
        duration: '30 minutes',
        objectives: ['Understand age and residency requirements', 'Learn about medical certification needs', 'Know background check requirements'],
        resources: ['CDL Manual', 'Medical Certification Form', 'Background Check Guide'],
        type: 'video'
      },
      {
        id: 'cdl-1-2',
        title: 'CDL Classes and Endorsements',
        description: 'Different types of CDL licenses and additional endorsements for specialized vehicles.',
        duration: '45 minutes',
        objectives: ['Identify CDL Class A, B, and C requirements', 'Understand endorsement types', 'Know vehicle weight classifications'],
        resources: ['CDL Class Comparison Chart', 'Endorsement Requirements', 'Vehicle Classification Guide'],
        type: 'video'
      },
      {
        id: 'cdl-1-3',
        title: 'Career Opportunities in Trucking',
        description: 'Explore various career paths and earning potential in the trucking industry.',
        duration: '30 minutes',
        objectives: ['Understand different trucking jobs', 'Learn about salary expectations', 'Know industry growth trends'],
        resources: ['Career Path Guide', 'Salary Survey', 'Industry Outlook Report'],
        type: 'video'
      },
      {
        id: 'cdl-1-4',
        title: 'Safety First: The Foundation',
        description: 'Why safety is critical in commercial driving and how it affects every aspect of the job.',
        duration: '15 minutes',
        objectives: ['Understand safety responsibilities', 'Learn about accident prevention', 'Know safety regulations'],
        resources: ['Safety Manual', 'Accident Prevention Guide', 'Safety Checklist'],
        type: 'video'
      }
    ],
    quiz: {
      questions: 20,
      passingScore: 80,
      timeLimit: 30
    },
    completed: false,
    locked: false,
    orderIndex: 1,
    category: 'theory'
  },
  {
    id: 'cdl-vehicle-inspection',
    title: 'Pre-Trip Vehicle Inspection',
    description: 'Comprehensive vehicle inspection procedures required before every trip.',
    duration: '3 hours',
    objectives: [
      'Master pre-trip inspection procedures',
      'Identify common vehicle defects',
      'Understand inspection documentation',
      'Learn emergency equipment checks'
    ],
    lessons: [
      {
        id: 'cdl-2-1',
        title: 'Engine Compartment Inspection',
        description: 'Detailed inspection of engine components, fluids, and mechanical systems.',
        duration: '45 minutes',
        objectives: ['Check engine oil and coolant levels', 'Inspect belts and hoses', 'Verify battery condition'],
        resources: ['Engine Inspection Checklist', 'Fluid Level Guide', 'Battery Maintenance Tips'],
        type: 'video'
      },
      {
        id: 'cdl-2-2',
        title: 'Cab and Controls Inspection',
        description: 'Inspection of driver controls, instruments, and safety equipment in the cab.',
        duration: '30 minutes',
        objectives: ['Check steering and brakes', 'Verify instrument panel', 'Test safety equipment'],
        resources: ['Cab Inspection Checklist', 'Instrument Panel Guide', 'Safety Equipment Manual'],
        type: 'video'
      },
      {
        id: 'cdl-2-3',
        title: 'External Vehicle Inspection',
        description: 'Comprehensive external inspection including tires, lights, and body condition.',
        duration: '45 minutes',
        objectives: ['Inspect tires and wheels', 'Check all lights and signals', 'Verify body condition'],
        resources: ['External Inspection Checklist', 'Tire Inspection Guide', 'Lighting System Manual'],
        type: 'video'
      },
      {
        id: 'cdl-2-4',
        title: 'Trailer and Cargo Inspection',
        description: 'Inspection of trailer components, cargo securement, and load distribution.',
        duration: '30 minutes',
        objectives: ['Check trailer components', 'Verify cargo securement', 'Inspect load distribution'],
        resources: ['Trailer Inspection Checklist', 'Cargo Securement Guide', 'Load Distribution Manual'],
        type: 'video'
      },
      {
        id: 'cdl-2-5',
        title: 'Documentation and Reporting',
        description: 'Proper documentation of inspection findings and reporting procedures.',
        duration: '30 minutes',
        objectives: ['Complete inspection forms', 'Document defects properly', 'Know reporting requirements'],
        resources: ['Inspection Forms', 'Defect Reporting Guide', 'Documentation Manual'],
        type: 'video'
      }
    ],
    quiz: {
      questions: 25,
      passingScore: 85,
      timeLimit: 40
    },
    completed: false,
    locked: false,
    orderIndex: 2,
    category: 'practical'
  },
  {
    id: 'cdl-basic-controls',
    title: 'Basic Vehicle Control Skills',
    description: 'Mastering fundamental vehicle control including steering, braking, and acceleration.',
    duration: '4 hours',
    objectives: [
      'Master steering and turning techniques',
      'Learn proper braking procedures',
      'Understand acceleration and speed control',
      'Practice backing and maneuvering'
    ],
    lessons: [
      {
        id: 'cdl-3-1',
        title: 'Steering and Turning Techniques',
        description: 'Proper steering methods for large commercial vehicles and turning procedures.',
        duration: '45 minutes',
        objectives: ['Master hand-over-hand steering', 'Understand turning radius', 'Learn proper turning techniques'],
        resources: ['Steering Techniques Guide', 'Turning Radius Chart', 'Vehicle Maneuvering Manual'],
        type: 'video'
      },
      {
        id: 'cdl-3-2',
        title: 'Braking Systems and Procedures',
        description: 'Understanding air brake systems and proper braking techniques.',
        duration: '60 minutes',
        objectives: ['Understand air brake systems', 'Learn proper braking techniques', 'Know brake testing procedures'],
        resources: ['Air Brake Manual', 'Braking Techniques Guide', 'Brake Testing Checklist'],
        type: 'video'
      },
      {
        id: 'cdl-3-3',
        title: 'Acceleration and Speed Control',
        description: 'Proper acceleration techniques and maintaining safe speeds.',
        duration: '30 minutes',
        objectives: ['Learn smooth acceleration', 'Understand speed control', 'Know speed limit compliance'],
        resources: ['Acceleration Guide', 'Speed Control Manual', 'Speed Limit Reference'],
        type: 'video'
      },
      {
        id: 'cdl-3-4',
        title: 'Backing and Maneuvering',
        description: 'Safe backing procedures and tight space maneuvering techniques.',
        duration: '45 minutes',
        objectives: ['Master backing techniques', 'Learn tight space maneuvering', 'Understand blind spots'],
        resources: ['Backing Techniques Guide', 'Maneuvering Manual', 'Blind Spot Awareness'],
        type: 'video'
      },
      {
        id: 'cdl-3-5',
        title: 'Shifting and Transmission',
        description: 'Proper shifting techniques for manual and automatic transmissions.',
        duration: '30 minutes',
        objectives: ['Learn proper shifting', 'Understand transmission types', 'Know gear selection'],
        resources: ['Shifting Techniques Guide', 'Transmission Manual', 'Gear Selection Chart'],
        type: 'video'
      }
    ],
    quiz: {
      questions: 30,
      passingScore: 85,
      timeLimit: 45
    },
    completed: false,
    locked: false,
    orderIndex: 3,
    category: 'practical'
  },
  {
    id: 'cdl-traffic-laws',
    title: 'Traffic Laws and Regulations',
    description: 'Comprehensive understanding of traffic laws, regulations, and compliance requirements.',
    duration: '3 hours',
    objectives: [
      'Understand federal and state traffic laws',
      'Learn CDL-specific regulations',
      'Master traffic control devices',
      'Know right-of-way rules'
    ],
    lessons: [
      {
        id: 'cdl-4-1',
        title: 'Federal Motor Carrier Regulations',
        description: 'Understanding FMCSA regulations and compliance requirements.',
        duration: '45 minutes',
        objectives: ['Understand FMCSA regulations', 'Learn compliance requirements', 'Know enforcement procedures'],
        resources: ['FMCSA Regulations Manual', 'Compliance Guide', 'Enforcement Procedures'],
        type: 'video'
      },
      {
        id: 'cdl-4-2',
        title: 'State Traffic Laws',
        description: 'State-specific traffic laws and variations across jurisdictions.',
        duration: '45 minutes',
        objectives: ['Learn state traffic laws', 'Understand jurisdictional differences', 'Know state-specific requirements'],
        resources: ['State Laws Reference', 'Jurisdictional Guide', 'State Requirements Chart'],
        type: 'video'
      },
      {
        id: 'cdl-4-3',
        title: 'Traffic Control Devices',
        description: 'Understanding traffic signals, signs, and pavement markings.',
        duration: '30 minutes',
        objectives: ['Understand traffic signals', 'Learn sign meanings', 'Know pavement markings'],
        resources: ['Traffic Control Manual', 'Sign Reference Guide', 'Pavement Markings Chart'],
        type: 'video'
      },
      {
        id: 'cdl-4-4',
        title: 'Right-of-Way Rules',
        description: 'Understanding right-of-way rules and intersection procedures.',
        duration: '30 minutes',
        objectives: ['Learn right-of-way rules', 'Understand intersection procedures', 'Know emergency vehicle rules'],
        resources: ['Right-of-Way Guide', 'Intersection Manual', 'Emergency Vehicle Procedures'],
        type: 'video'
      },
      {
        id: 'cdl-4-5',
        title: 'Speed Limits and Restrictions',
        description: 'Understanding speed limits, restrictions, and compliance requirements.',
        duration: '30 minutes',
        objectives: ['Understand speed limits', 'Learn speed restrictions', 'Know compliance requirements'],
        resources: ['Speed Limit Reference', 'Restrictions Guide', 'Compliance Manual'],
        type: 'video'
      }
    ],
    quiz: {
      questions: 25,
      passingScore: 85,
      timeLimit: 40
    },
    completed: false,
    locked: false,
    orderIndex: 4,
    category: 'regulations'
  },
  {
    id: 'cdl-safety-practices',
    title: 'Safety Practices and Procedures',
    description: 'Comprehensive safety training including defensive driving and emergency procedures.',
    duration: '4 hours',
    objectives: [
      'Master defensive driving techniques',
      'Learn emergency procedures',
      'Understand hazard perception',
      'Practice safe driving habits'
    ],
    lessons: [
      {
        id: 'cdl-5-1',
        title: 'Defensive Driving Techniques',
        description: 'Advanced defensive driving strategies for commercial vehicles.',
        duration: '60 minutes',
        objectives: ['Learn defensive driving', 'Understand hazard avoidance', 'Master emergency maneuvers'],
        resources: ['Defensive Driving Manual', 'Hazard Avoidance Guide', 'Emergency Maneuvers'],
        type: 'video'
      },
      {
        id: 'cdl-5-2',
        title: 'Hazard Perception and Response',
        description: 'Identifying and responding to road hazards and dangerous situations.',
        duration: '45 minutes',
        objectives: ['Identify road hazards', 'Learn response procedures', 'Understand risk assessment'],
        resources: ['Hazard Identification Guide', 'Response Procedures Manual', 'Risk Assessment Chart'],
        type: 'video'
      },
      {
        id: 'cdl-5-3',
        title: 'Emergency Procedures',
        description: 'Handling emergencies including breakdowns, accidents, and medical situations.',
        duration: '45 minutes',
        objectives: ['Learn emergency procedures', 'Understand breakdown protocols', 'Know accident response'],
        resources: ['Emergency Procedures Manual', 'Breakdown Protocols', 'Accident Response Guide'],
        type: 'video'
      },
      {
        id: 'cdl-5-4',
        title: 'Weather and Road Conditions',
        description: 'Driving safely in adverse weather and poor road conditions.',
        duration: '30 minutes',
        objectives: ['Understand weather challenges', 'Learn road condition response', 'Know weather safety'],
        resources: ['Weather Safety Guide', 'Road Condition Manual', 'Weather Response Procedures'],
        type: 'video'
      },
      {
        id: 'cdl-5-5',
        title: 'Fatigue and Health Management',
        description: 'Managing driver fatigue and maintaining health on the road.',
        duration: '30 minutes',
        objectives: ['Understand fatigue risks', 'Learn health management', 'Know rest requirements'],
        resources: ['Fatigue Management Guide', 'Health Manual', 'Rest Requirements Chart'],
        type: 'video'
      }
    ],
    quiz: {
      questions: 30,
      passingScore: 85,
      timeLimit: 45
    },
    completed: false,
    locked: false,
    orderIndex: 5,
    category: 'safety'
  },
  {
    id: 'cdl-cargo-securement',
    title: 'Cargo Securement and Load Management',
    description: 'Proper cargo securement techniques and load distribution principles.',
    duration: '3 hours',
    objectives: [
      'Master cargo securement techniques',
      'Understand load distribution',
      'Learn weight and balance principles',
      'Know securement regulations'
    ],
    lessons: [
      {
        id: 'cdl-6-1',
        title: 'Cargo Securement Fundamentals',
        description: 'Basic principles of cargo securement and tie-down requirements.',
        duration: '45 minutes',
        objectives: ['Understand securement principles', 'Learn tie-down requirements', 'Know securement devices'],
        resources: ['Securement Manual', 'Tie-Down Guide', 'Device Reference Chart'],
        type: 'video'
      },
      {
        id: 'cdl-6-2',
        title: 'Load Distribution and Weight',
        description: 'Proper load distribution and weight management principles.',
        duration: '45 minutes',
        objectives: ['Learn load distribution', 'Understand weight limits', 'Know balance principles'],
        resources: ['Load Distribution Guide', 'Weight Limits Chart', 'Balance Manual'],
        type: 'video'
      },
      {
        id: 'cdl-6-3',
        title: 'Specialized Cargo Handling',
        description: 'Handling specialized cargo including hazardous materials and oversized loads.',
        duration: '30 minutes',
        objectives: ['Understand specialized cargo', 'Learn hazmat procedures', 'Know oversized load requirements'],
        resources: ['Specialized Cargo Guide', 'Hazmat Manual', 'Oversized Load Procedures'],
        type: 'video'
      },
      {
        id: 'cdl-6-4',
        title: 'Securement Inspection',
        description: 'Regular inspection of cargo securement and load condition.',
        duration: '30 minutes',
        objectives: ['Learn inspection procedures', 'Understand inspection frequency', 'Know documentation requirements'],
        resources: ['Inspection Procedures', 'Frequency Guide', 'Documentation Manual'],
        type: 'video'
      },
      {
        id: 'cdl-6-5',
        title: 'Regulatory Compliance',
        description: 'Understanding and complying with cargo securement regulations.',
        duration: '30 minutes',
        objectives: ['Understand regulations', 'Learn compliance requirements', 'Know enforcement procedures'],
        resources: ['Regulations Manual', 'Compliance Guide', 'Enforcement Procedures'],
        type: 'video'
      }
    ],
    quiz: {
      questions: 25,
      passingScore: 85,
      timeLimit: 40
    },
    completed: false,
    locked: false,
    orderIndex: 6,
    category: 'practical'
  },
  {
    id: 'cdl-maintenance',
    title: 'Vehicle Maintenance and Troubleshooting',
    description: 'Basic vehicle maintenance procedures and troubleshooting common problems.',
    duration: '3 hours',
    objectives: [
      'Learn basic maintenance procedures',
      'Understand troubleshooting techniques',
      'Master preventive maintenance',
      'Know maintenance documentation'
    ],
    lessons: [
      {
        id: 'cdl-7-1',
        title: 'Preventive Maintenance',
        description: 'Regular maintenance procedures to prevent breakdowns and ensure vehicle reliability.',
        duration: '45 minutes',
        objectives: ['Understand preventive maintenance', 'Learn maintenance schedules', 'Know inspection procedures'],
        resources: ['Maintenance Manual', 'Schedule Guide', 'Inspection Procedures'],
        type: 'video'
      },
      {
        id: 'cdl-7-2',
        title: 'Common Problems and Solutions',
        description: 'Identifying and resolving common vehicle problems on the road.',
        duration: '45 minutes',
        objectives: ['Identify common problems', 'Learn troubleshooting', 'Know emergency repairs'],
        resources: ['Problem Identification Guide', 'Troubleshooting Manual', 'Emergency Repair Procedures'],
        type: 'video'
      },
      {
        id: 'cdl-7-3',
        title: 'Fluid and Filter Maintenance',
        description: 'Proper fluid levels, filter changes, and fluid quality checks.',
        duration: '30 minutes',
        objectives: ['Check fluid levels', 'Change filters properly', 'Understand fluid quality'],
        resources: ['Fluid Level Guide', 'Filter Change Manual', 'Fluid Quality Chart'],
        type: 'video'
      },
      {
        id: 'cdl-7-4',
        title: 'Tire Care and Maintenance',
        description: 'Tire inspection, maintenance, and replacement procedures.',
        duration: '30 minutes',
        objectives: ['Inspect tires properly', 'Maintain tire pressure', 'Know replacement procedures'],
        resources: ['Tire Inspection Guide', 'Pressure Maintenance Manual', 'Replacement Procedures'],
        type: 'video'
      },
      {
        id: 'cdl-7-5',
        title: 'Maintenance Documentation',
        description: 'Proper documentation of maintenance activities and service records.',
        duration: '30 minutes',
        objectives: ['Document maintenance', 'Keep service records', 'Understand documentation requirements'],
        resources: ['Documentation Guide', 'Service Record Manual', 'Requirements Chart'],
        type: 'video'
      }
    ],
    quiz: {
      questions: 25,
      passingScore: 85,
      timeLimit: 40
    },
    completed: false,
    locked: false,
    orderIndex: 7,
    category: 'maintenance'
  },
  {
    id: 'cdl-road-test-preparation',
    title: 'Road Test Preparation and Skills Assessment',
    description: 'Final preparation for CDL road test and comprehensive skills assessment.',
    duration: '4 hours',
    objectives: [
      'Master road test requirements',
      'Practice test maneuvers',
      'Understand evaluation criteria',
      'Prepare for final assessment'
    ],
    lessons: [
      {
        id: 'cdl-8-1',
        title: 'Road Test Requirements',
        description: 'Understanding CDL road test requirements and evaluation criteria.',
        duration: '45 minutes',
        objectives: ['Understand test requirements', 'Learn evaluation criteria', 'Know test procedures'],
        resources: ['Test Requirements Guide', 'Evaluation Criteria', 'Test Procedures Manual'],
        type: 'video'
      },
      {
        id: 'cdl-8-2',
        title: 'Skills Test Maneuvers',
        description: 'Practice and master required skills test maneuvers.',
        duration: '60 minutes',
        objectives: ['Master required maneuvers', 'Practice test skills', 'Understand scoring'],
        resources: ['Maneuvers Guide', 'Skills Practice Manual', 'Scoring Criteria'],
        type: 'video'
      },
      {
        id: 'cdl-8-3',
        title: 'Road Test Simulation',
        description: 'Simulated road test scenarios and practice runs.',
        duration: '45 minutes',
        objectives: ['Practice test scenarios', 'Simulate test conditions', 'Build confidence'],
        resources: ['Test Scenarios', 'Simulation Guide', 'Confidence Building Tips'],
        type: 'simulation'
      },
      {
        id: 'cdl-8-4',
        title: 'Test Day Preparation',
        description: 'Final preparation for test day including documentation and mental preparation.',
        duration: '30 minutes',
        objectives: ['Prepare documentation', 'Mental preparation', 'Test day checklist'],
        resources: ['Documentation Checklist', 'Mental Preparation Guide', 'Test Day Manual'],
        type: 'video'
      },
      {
        id: 'cdl-8-5',
        title: 'Comprehensive Review',
        description: 'Final comprehensive review of all CDL course material.',
        duration: '60 minutes',
        objectives: ['Review all material', 'Identify weak areas', 'Final preparation'],
        resources: ['Comprehensive Review Guide', 'Weak Area Assessment', 'Final Preparation Tips'],
        type: 'assessment'
      }
    ],
    quiz: {
      questions: 50,
      passingScore: 90,
      timeLimit: 90
    },
    completed: false,
    locked: false,
    orderIndex: 8,
    category: 'practical'
  }
]

export const cdlCourseStatistics = {
  totalDuration: '26 hours',
  totalLessons: 40,
  totalQuizzes: 8,
  totalQuestions: 225,
  categories: {
    theory: 1,
    practical: 4,
    safety: 1,
    regulations: 1,
    maintenance: 1
  }
}

export const cdlFinalExam = {
  title: 'CDL Comprehensive Final Exam',
  description: 'Final comprehensive examination covering all aspects of commercial driver training.',
  duration: '120 minutes',
  questions: 100,
  passingScore: 85,
  sections: [
    {
      name: 'Vehicle Inspection',
      questions: 15,
      timeLimit: 20
    },
    {
      name: 'Basic Control Skills',
      questions: 20,
      timeLimit: 30
    },
    {
      name: 'Traffic Laws and Regulations',
      questions: 25,
      timeLimit: 35
    },
    {
      name: 'Safety Practices',
      questions: 20,
      timeLimit: 25
    },
    {
      name: 'Cargo Securement',
      questions: 10,
      timeLimit: 10
    },
    {
      name: 'Maintenance',
      questions: 10,
      timeLimit: 10
    }
  ]
}

export const cdlInstructor = {
  name: 'Michael Rodriguez',
  title: 'Senior CDL Instructor',
  credentials: [
    'CDL Class A License',
    'Certified CDL Instructor',
    '20+ Years Commercial Driving Experience',
    'FMCSA Certified Trainer',
    'Safety Management Specialist'
  ],
  experience: 'Over 20 years of experience in commercial trucking, including long-haul, local delivery, and specialized cargo transport. Certified instructor with expertise in CDL training and safety management.',
  specialties: ['CDL Training', 'Safety Management', 'Vehicle Maintenance', 'Regulatory Compliance', 'Defensive Driving']
}
