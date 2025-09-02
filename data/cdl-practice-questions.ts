export interface CDLQuestion {
  id: string
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation?: string
  category: 'vehicle-inspection' | 'safety-practices' | 'traffic-laws' | 'cargo-securement' | 'maintenance' | 'driving-techniques' | 'regulations' | 'emergency-procedures'
  difficulty: 'easy' | 'medium' | 'hard'
  module: string
}

export const cdlPracticeQuestions: CDLQuestion[] = [
  // Vehicle Inspection Questions
  {
    id: 'vi-001',
    question: 'If you are required to hook up a trailer at a remote location, you must:',
    options: {
      A: 'Hook up the trailer and immediately start the trip.',
      B: 'Perform a daily inspection in the trailer before operating the vehicle.',
      C: 'Perform a quick check for visible defects.',
      D: 'Call the operator to determine the trailer\'s condition.'
    },
    correctAnswer: 'B',
    explanation: 'A complete daily inspection must be performed before operating any commercial vehicle, including trailers at remote locations.',
    category: 'vehicle-inspection',
    difficulty: 'medium',
    module: 'cdl-vehicle-inspection'
  },
  {
    id: 'vi-002',
    question: 'You are required to ensure that the brakes on the vehicle are not out-of-adjustment:',
    options: {
      A: 'It is not the driver\'s responsibility to ensure the brakes are in adjustment.',
      B: 'Once every 24 hours.',
      C: 'When you think the braking is inadequate.',
      D: 'At all times.'
    },
    correctAnswer: 'D',
    explanation: 'Drivers must ensure brakes are properly adjusted at all times for safety.',
    category: 'vehicle-inspection',
    difficulty: 'easy',
    module: 'cdl-vehicle-inspection'
  },
  {
    id: 'vi-003',
    question: 'After coupling, if any space appears between the upper plate of the trailer and fifth wheel, this indicates that:',
    options: {
      A: 'Landing gear can be raised.',
      B: 'Vehicle is ready to be driven.',
      C: 'Coupling is secure.',
      D: 'Coupling is not secure.'
    },
    correctAnswer: 'D',
    explanation: 'Any gap between the trailer and fifth wheel indicates improper coupling and must be corrected.',
    category: 'vehicle-inspection',
    difficulty: 'medium',
    module: 'cdl-vehicle-inspection'
  },
  {
    id: 'vi-004',
    question: 'Before moving the tractor to couple with the trailer you must:',
    options: {
      A: 'Inspect fifth wheel, trailer couplers and connectors.',
      B: 'Listen for fifth wheel to latch into its lock position.',
      C: 'Ensure fifth wheel sits above the kingpin.',
      D: 'Ensure trailer lights are activated.'
    },
    correctAnswer: 'A',
    explanation: 'A thorough inspection of all coupling components is required before attempting to couple.',
    category: 'vehicle-inspection',
    difficulty: 'medium',
    module: 'cdl-vehicle-inspection'
  },
  {
    id: 'vi-005',
    question: 'A rear tire fails an inspection if the tread on two adjacent grooves anywhere on the tire are:',
    options: {
      A: 'Less than 1.5 millimetres (0.06 inches).',
      B: 'Less than 3 millimetres (0.12 inches).',
      C: 'Less than 6 millimetres (0.24 inches).',
      D: 'Less than 15 millimetres (0.59 inches).'
    },
    correctAnswer: 'A',
    explanation: 'Rear tires must have at least 1.5mm of tread depth in adjacent grooves to pass inspection.',
    category: 'vehicle-inspection',
    difficulty: 'medium',
    module: 'cdl-vehicle-inspection'
  },

  // Safety Practices Questions
  {
    id: 'sp-001',
    question: 'When flares or reflectors are required to mark a disabled commercial motor vehicle on a highway, you must place them:',
    options: {
      A: '15 metres (50 feet) to front and rear.',
      B: '30 metres (100 feet) to front and rear.',
      C: '60 metres (200 feet) to front and rear.',
      D: '90 metres (300 feet) to front and rear.'
    },
    correctAnswer: 'B',
    explanation: 'Emergency markers must be placed 30 metres (100 feet) to the front and rear of a disabled vehicle.',
    category: 'safety-practices',
    difficulty: 'medium',
    module: 'cdl-safety-practices'
  },
  {
    id: 'sp-002',
    question: 'What distance must you maintain between commercial motor vehicles travelling in a convoy on a highway?',
    options: {
      A: '60 metres (200 feet).',
      B: '90 metres (300 feet).',
      C: '120 metres (400 feet).',
      D: '150 metres (500 feet).'
    },
    correctAnswer: 'D',
    explanation: 'Commercial vehicles in convoy must maintain at least 150 metres (500 feet) between vehicles.',
    category: 'safety-practices',
    difficulty: 'medium',
    module: 'cdl-safety-practices'
  },
  {
    id: 'sp-003',
    question: 'A good safe driving practice on a multi-lane highway is to:',
    options: {
      A: 'Manage your blind spot and keep adequate space.',
      B: 'Always drive slower than surrounding traffic to make it easier for traffic to pass.',
      C: 'Follow other vehicles as closely as possible to make it easier for traffic to pass.',
      D: 'Constantly change lanes.'
    },
    correctAnswer: 'A',
    explanation: 'Managing blind spots and maintaining adequate following distance are essential safe driving practices.',
    category: 'safety-practices',
    difficulty: 'easy',
    module: 'cdl-safety-practices'
  },
  {
    id: 'sp-004',
    question: 'When approaching a railway crossing and the signal lights are activated, you must stop:',
    options: {
      A: '5 meters from the nearest rail.',
      B: '10 meters from the nearest rail.',
      C: '15 meters from the nearest rail.',
      D: '20 meters from the nearest rail.'
    },
    correctAnswer: 'A',
    explanation: 'Commercial vehicles must stop at least 5 meters from the nearest rail when crossing signals are activated.',
    category: 'safety-practices',
    difficulty: 'medium',
    module: 'cdl-safety-practices'
  },
  {
    id: 'sp-005',
    question: 'When the driver of another vehicle is about to overtake and pass your vehicle, you must:',
    options: {
      A: 'Move to the right and allow such vehicle to pass.',
      B: 'Signal the other driver not to pass.',
      C: 'Move to the left to prevent passing.',
      D: 'Speed up so that passing is not necessary.'
    },
    correctAnswer: 'A',
    explanation: 'Drivers must move to the right and allow safe passing when being overtaken.',
    category: 'safety-practices',
    difficulty: 'easy',
    module: 'cdl-safety-practices'
  },

  // Traffic Laws Questions
  {
    id: 'tl-001',
    question: 'What documentation is not required by the Highway Traffic Act to be carried in a commercial motor vehicle?',
    options: {
      A: 'A legible copy of the CVOR certificate.',
      B: 'The vehicle registration or a true copy.',
      C: 'Original insurance certificate.',
      D: 'Safety standard certificate.'
    },
    correctAnswer: 'D',
    explanation: 'Safety standard certificates are not required to be carried in the vehicle.',
    category: 'traffic-laws',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'tl-002',
    question: 'The maximum width of a commercial motor vehicle, including the load, shall not exceed:',
    options: {
      A: '2.4 metres (8 feet).',
      B: '2.5 metres (8.2 feet).',
      C: '2.6 metres (8.5 feet).',
      D: '2.7 metres (8.9 feet).'
    },
    correctAnswer: 'C',
    explanation: 'Commercial vehicles including load must not exceed 2.6 metres (8.5 feet) in width.',
    category: 'traffic-laws',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'tl-003',
    question: 'The maximum height of a commercial motor vehicle, including the load is:',
    options: {
      A: '4.0 metres (13.1 feet).',
      B: '4.15 metres (13.6 feet).',
      C: '4.3 metres (14.1 feet).',
      D: '4.5 metres (14.8 feet).'
    },
    correctAnswer: 'B',
    explanation: 'Commercial vehicles including load must not exceed 4.15 metres (13.6 feet) in height.',
    category: 'traffic-laws',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'tl-004',
    question: 'When approaching an intersection and you notice the roadway beyond is blocked with traffic, you should:',
    options: {
      A: 'Proceed into the intersection and wait for traffic to clear.',
      B: 'Honk your horn to signal other drivers.',
      C: 'Stop before entering the intersection and wait until traffic ahead moves on.',
      D: 'Use the shoulder to bypass the intersection.'
    },
    correctAnswer: 'C',
    explanation: 'Drivers must not block intersections and should wait until traffic ahead clears.',
    category: 'traffic-laws',
    difficulty: 'easy',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'tl-005',
    question: 'When approaching a roundabout you must:',
    options: {
      A: 'Stop prior to roundabout to perform traffic check.',
      B: 'Ensure your vehicle is in the appropriate lane for both entry and exit.',
      C: 'Enter directly beside another vehicle already in a roundabout.',
      D: 'Increase speed to enter the roundabout.'
    },
    correctAnswer: 'B',
    explanation: 'Proper lane positioning is essential for safe roundabout navigation.',
    category: 'traffic-laws',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },

  // Cargo Securement Questions
  {
    id: 'cs-001',
    question: 'Who is responsible for ensuring that loads are secured while in operation:',
    options: {
      A: 'The dispatcher.',
      B: 'The shipper.',
      C: 'The owner.',
      D: 'The driver.'
    },
    correctAnswer: 'D',
    explanation: 'The driver is ultimately responsible for ensuring cargo is properly secured during transport.',
    category: 'cargo-securement',
    difficulty: 'easy',
    module: 'cdl-cargo-securement'
  },
  {
    id: 'cs-002',
    question: 'A key principle in loading any cargo on a commercial vehicle is to ensure:',
    options: {
      A: 'The load is as heavy as possible to maximize efficiency.',
      B: 'The load is placed as high as possible for better visibility.',
      C: 'The load is distributed evenly across all axles.',
      D: 'Load is balanced for safety and vehicle stability.'
    },
    correctAnswer: 'D',
    explanation: 'Proper load balance is essential for vehicle stability and safety.',
    category: 'cargo-securement',
    difficulty: 'medium',
    module: 'cdl-cargo-securement'
  },
  {
    id: 'cs-003',
    question: 'You must inspect the load securement and make necessary adjustments after:',
    options: {
      A: '80 km.',
      B: '100 km.',
      C: '150 km.',
      D: '300 km.'
    },
    correctAnswer: 'A',
    explanation: 'Load securement must be inspected and adjusted after the first 80 km of travel.',
    category: 'cargo-securement',
    difficulty: 'medium',
    module: 'cdl-cargo-securement'
  },
  {
    id: 'cs-004',
    question: 'Any load which projects from the rear of the vehicle by 1.5m (5 feet) or more must be marked with:',
    options: {
      A: 'A white flag during daylight hours only.',
      B: 'A yellow flag during daylight hours only.',
      C: 'A red flag or marker in daylight, a red light at night.',
      D: 'No marking is required for loads under 2m.'
    },
    correctAnswer: 'C',
    explanation: 'Projecting loads must be marked with red flags during daylight and red lights at night.',
    category: 'cargo-securement',
    difficulty: 'medium',
    module: 'cdl-cargo-securement'
  },
  {
    id: 'cs-005',
    question: 'The person who cannot be charged with an offence for an overloaded vehicle is:',
    options: {
      A: 'The driver.',
      B: 'The shipper.',
      C: 'The receiver.',
      D: 'The operator.'
    },
    correctAnswer: 'C',
    explanation: 'The receiver of cargo cannot be charged for overweight violations.',
    category: 'cargo-securement',
    difficulty: 'hard',
    module: 'cdl-cargo-securement'
  },

  // Maintenance Questions
  {
    id: 'm-001',
    question: 'To assist you in performing the daily inspection, it is necessary to:',
    options: {
      A: 'Inspect only major fault areas.',
      B: 'Ignore items which have not been a problem.',
      C: 'Follow a systematic approach, inspection sheet or applicable schedule.',
      D: 'Memorize all the items to be checked.'
    },
    correctAnswer: 'C',
    explanation: 'A systematic approach using inspection sheets ensures thorough and consistent inspections.',
    category: 'maintenance',
    difficulty: 'easy',
    module: 'cdl-maintenance'
  },
  {
    id: 'm-002',
    question: 'Excessive free play or lash e.g., over 10 cm (4 inches), may indicate to you that:',
    options: {
      A: 'Steering needs repair or adjustment before proceeding.',
      B: 'Front tires are too small.',
      C: 'Minor defect should be noted.',
      D: 'No action is required.'
    },
    correctAnswer: 'A',
    explanation: 'Excessive steering play indicates a serious defect requiring immediate attention.',
    category: 'maintenance',
    difficulty: 'medium',
    module: 'cdl-maintenance'
  },
  {
    id: 'm-003',
    question: 'You may notice excessive lash or free play which may indicate a defect in:',
    options: {
      A: 'Brake chamber.',
      B: 'Suspension.',
      C: 'Tire tread.',
      D: 'Steering.'
    },
    correctAnswer: 'D',
    explanation: 'Excessive lash or free play typically indicates steering system problems.',
    category: 'maintenance',
    difficulty: 'medium',
    module: 'cdl-maintenance'
  },
  {
    id: 'm-004',
    question: 'When your wheels have been in for service, it is important that you:',
    options: {
      A: 'Tell the wheel installer to tighten the wheels to a level higher than specification.',
      B: 'Tell the wheel installer to use less lubricant.',
      C: 'Have the securement rechecked after driving between 80 km and 160 km.',
      D: 'Inspect the wheels the following day.'
    },
    correctAnswer: 'C',
    explanation: 'Wheel securement must be rechecked after 80-160 km following service.',
    category: 'maintenance',
    difficulty: 'medium',
    module: 'cdl-maintenance'
  },
  {
    id: 'm-005',
    question: 'Allowing the clutch to slip will result in:',
    options: {
      A: 'A faster acceleration when the vehicle is loaded.',
      B: 'Damage due to overheating.',
      C: 'A longer lasting clutch.',
      D: 'Electrical problems.'
    },
    correctAnswer: 'B',
    explanation: 'Clutch slipping causes excessive heat and damage to the clutch components.',
    category: 'maintenance',
    difficulty: 'medium',
    module: 'cdl-maintenance'
  },

  // Driving Techniques Questions
  {
    id: 'dt-001',
    question: 'When backing up the tractor to couple with the trailer, you must:',
    options: {
      A: 'Back from an angle.',
      B: 'Ensure the fifth wheel slot is in line with the trailer kingpin.',
      C: 'Not use mirrors to confirm alignments.',
      D: 'Ensure the fifth wheel is touching and against the kingpin.'
    },
    correctAnswer: 'B',
    explanation: 'Proper alignment of the fifth wheel with the kingpin is essential for safe coupling.',
    category: 'driving-techniques',
    difficulty: 'medium',
    module: 'cdl-basic-controls'
  },
  {
    id: 'dt-002',
    question: 'When starting to move a loaded tractor-trailer, the vehicle should be put in:',
    options: {
      A: 'The highest available gear.',
      B: 'The lowest available gear.',
      C: 'Second gear.',
      D: 'Any gear that feels comfortable.'
    },
    correctAnswer: 'B',
    explanation: 'Starting in the lowest gear provides maximum torque and control for loaded vehicles.',
    category: 'driving-techniques',
    difficulty: 'medium',
    module: 'cdl-basic-controls'
  },
  {
    id: 'dt-003',
    question: 'When rounding a right curve on a highway with a tractor-trailer, you should:',
    options: {
      A: 'Flash the brake lights.',
      B: 'Keep the front of the vehicle close to the right edge of the highway.',
      C: 'Accelerate to carry momentum into the curve.',
      D: 'Keep the front wheels to the left side of the lane.'
    },
    correctAnswer: 'D',
    explanation: 'Positioning the front wheels to the left side of the lane helps prevent off-tracking during right curves.',
    category: 'driving-techniques',
    difficulty: 'hard',
    module: 'cdl-basic-controls'
  },
  {
    id: 'dt-004',
    question: 'To safely complete a turn you should:',
    options: {
      A: 'Sound horn to warn pedestrians.',
      B: 'Touch brakes to warn following vehicles.',
      C: 'Proceed slowly and monitor rear wheels of vehicle to avoid curbs, edges and other objects.',
      D: 'Alternate high and low beams to warn oncoming vehicles.'
    },
    correctAnswer: 'C',
    explanation: 'Monitoring rear wheels is essential to prevent striking curbs and other objects during turns.',
    category: 'driving-techniques',
    difficulty: 'medium',
    module: 'cdl-basic-controls'
  },
  {
    id: 'dt-005',
    question: 'When making right turn to prevent the wheels from going over the curb or sidewalk, you should:',
    options: {
      A: 'Sound the horn.',
      B: 'Proceed well into the intersection before turning right.',
      C: 'Activate the four-way flashers.',
      D: 'Flash the rear brake lights.'
    },
    correctAnswer: 'B',
    explanation: 'Proceeding well into the intersection before turning helps prevent the rear wheels from striking the curb.',
    category: 'driving-techniques',
    difficulty: 'medium',
    module: 'cdl-basic-controls'
  },

  // Regulations Questions
  {
    id: 'r-001',
    question: 'What is the maximum number of hours you can drive in a day?',
    options: {
      A: '10 hours.',
      B: '12 hours.',
      C: '13 hours.',
      D: '15 hours.'
    },
    correctAnswer: 'C',
    explanation: 'Commercial drivers are limited to a maximum of 13 hours of driving time per day.',
    category: 'regulations',
    difficulty: 'easy',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'r-002',
    question: 'What is the maximum number of hours that a daily inspection report is valid for:',
    options: {
      A: '12 hours.',
      B: '24 hours.',
      C: '36 hours.',
      D: '48 hours.'
    },
    correctAnswer: 'B',
    explanation: 'Daily inspection reports are valid for 24 hours from the time of inspection.',
    category: 'regulations',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'r-003',
    question: 'You cannot drive a commercial motor vehicle after accumulating how many on-duty hours in a seven day cycle?',
    options: {
      A: '50 hours.',
      B: '60 hours.',
      C: '70 hours.',
      D: '80 hours.'
    },
    correctAnswer: 'C',
    explanation: 'Commercial drivers cannot drive after accumulating 70 hours of on-duty time in a 7-day cycle.',
    category: 'regulations',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'r-004',
    question: 'What is the minimum number of consecutive off-duty hours you must take after accumulating 13 hours driving time?',
    options: {
      A: '7 hours.',
      B: '8 hours.',
      C: '9 hours.',
      D: '10 hours.'
    },
    correctAnswer: 'B',
    explanation: 'After 13 hours of driving time, drivers must take at least 8 consecutive hours of off-duty time.',
    category: 'regulations',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },
  {
    id: 'r-005',
    question: 'In order to transport dangerous goods, you must:',
    options: {
      A: 'No qualification is required, just be very careful.',
      B: 'Be trained and certified by your employer.',
      C: 'Hold a dangerous goods licence and endorsement.',
      D: 'Be an employee of the manufacturer only.'
    },
    correctAnswer: 'B',
    explanation: 'Drivers transporting dangerous goods must be trained and certified by their employer.',
    category: 'regulations',
    difficulty: 'medium',
    module: 'cdl-traffic-laws'
  },

  // Emergency Procedures Questions
  {
    id: 'ep-001',
    question: 'After you detect and record a major defect on your daily inspection report, what must you do?',
    options: {
      A: 'Inform the operator and do not operate the vehicle until defect is repaired.',
      B: 'Inform the operator and proceed.',
      C: 'Schedule for repair and proceed.',
      D: 'No further action is required.'
    },
    correctAnswer: 'A',
    explanation: 'Major defects must be repaired before the vehicle can be operated.',
    category: 'emergency-procedures',
    difficulty: 'medium',
    module: 'cdl-safety-practices'
  },
  {
    id: 'ep-002',
    question: 'When you perform a daily inspection and find no defects, what must you do?',
    options: {
      A: 'Skip the daily inspection report and proceed.',
      B: 'Complete and sign the daily inspection report.',
      C: 'Inform operator and do not proceed.',
      D: 'Call the mechanic and schedule an appointment.'
    },
    correctAnswer: 'B',
    explanation: 'Even when no defects are found, a daily inspection report must be completed and signed.',
    category: 'emergency-procedures',
    difficulty: 'easy',
    module: 'cdl-safety-practices'
  },
  {
    id: 'ep-003',
    question: 'After a daily inspection, you discover the vehicle does not have any working brake lamps. What must you do?',
    options: {
      A: 'No further action is required.',
      B: 'Record the minor defect and proceed while monitoring the condition of the vehicle.',
      C: 'Record the major defect and proceed.',
      D: 'Record the major defect and do not operate the vehicle until defect is repaired.'
    },
    correctAnswer: 'D',
    explanation: 'Non-functioning brake lamps are a major defect that must be repaired before operation.',
    category: 'emergency-procedures',
    difficulty: 'medium',
    module: 'cdl-safety-practices'
  },
  {
    id: 'ep-004',
    question: 'If during the course of a trip you discover a minor defect, you must:',
    options: {
      A: 'Record on daily report, inform operator and monitor condition.',
      B: 'Record on daily report for checking at next daily inspection.',
      C: 'Inform operator, no further action required.',
      D: 'Monitor vehicle condition, no further action required.'
    },
    correctAnswer: 'A',
    explanation: 'Minor defects must be recorded, reported to the operator, and monitored during the trip.',
    category: 'emergency-procedures',
    difficulty: 'medium',
    module: 'cdl-safety-practices'
  },
  {
    id: 'ep-005',
    question: 'When can you drive the vehicle after identifying a major defect?',
    options: {
      A: 'Only after the defect is repaired.',
      B: 'Until end of day.',
      C: 'Until next daily inspection.',
      D: 'Only after it is reported.'
    },
    correctAnswer: 'A',
    explanation: 'Vehicles with major defects cannot be operated until the defect is repaired.',
    category: 'emergency-procedures',
    difficulty: 'easy',
    module: 'cdl-safety-practices'
  }
]

// Function to generate random practice exam
export function generateRandomPracticeExam(questionCount: number = 20): CDLQuestion[] {
  const shuffled = [...cdlPracticeQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, questionCount)
}

// Function to generate exam by category
export function generateExamByCategory(category: string, questionCount: number = 20): CDLQuestion[] {
  const categoryQuestions = cdlPracticeQuestions.filter(q => q.category === category)
  const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, questionCount)
}

// Function to generate exam by difficulty
export function generateExamByDifficulty(difficulty: 'easy' | 'medium' | 'hard', questionCount: number = 20): CDLQuestion[] {
  const difficultyQuestions = cdlPracticeQuestions.filter(q => q.difficulty === difficulty)
  const shuffled = [...difficultyQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, questionCount)
}

// Function to generate exam by module
export function generateExamByModule(moduleId: string, questionCount: number = 20): CDLQuestion[] {
  const moduleQuestions = cdlPracticeQuestions.filter(q => q.module === moduleId)
  const shuffled = [...moduleQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, questionCount)
}

// Function to calculate exam statistics
export function calculateExamStats(questions: CDLQuestion[]) {
  const totalQuestions = questions.length
  const categories = [...new Set(questions.map(q => q.category))]
  const difficulties = [...new Set(questions.map(q => q.difficulty))]
  
  return {
    totalQuestions,
    categories,
    difficulties,
    categoryBreakdown: categories.map(cat => ({
      category: cat,
      count: questions.filter(q => q.category === cat).length
    })),
    difficultyBreakdown: difficulties.map(diff => ({
      difficulty: diff,
      count: questions.filter(q => q.difficulty === diff).length
    }))
  }
}
