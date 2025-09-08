export interface MtoLesson {
  id: string
  title: string
  description: string
  duration: string
  videoUrl?: string
  objectives: string[]
  resources: string[]
  type: 'video' | 'interactive' | 'assessment' | 'simulation'
}

export interface MtoModule {
  id: string
  title: string
  description: string
  duration: string
  objectives: string[]
  lessons: MtoLesson[]
  quiz: {
    questions: number
    passingScore: number
    timeLimit: number
    bankId?: string
  }
  completed: boolean
  locked: boolean
  orderIndex: number
  category: 'day'
}

// NOTE: Placeholder lesson structure for a 5-day (37.5 hours) program.
// Each day ~7.5 hours. Video URLs left empty for later upload.

export const mtoModules: MtoModule[] = [
  {
    id: 'mto-day-1',
    title: 'Day 1 — Daily Trip Inspection & Vehicle Basics',
    description: 'Trip inspection, starting, putting vehicle in motion, transmissions, differential lock.',
    duration: '7.5 hours',
    objectives: [
      'Perform compliant daily trip inspections',
      'Start and move off safely',
      'Understand shifting and differential lock basics'
    ],
    lessons: [
      { id: 'mto-1-1', title: 'Daily Trip Inspection (A & D)', description: 'Purpose, process, defect detection and reporting.', duration: '150 minutes', objectives: ['Purpose', 'Process', 'Major/minor defects'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/daily-trip-inspection-classes-and-d'], type: 'video' },
      { id: 'mto-1-2', title: 'Starting the Engine', description: 'Starting procedure and instrument checks.', duration: '45 minutes', objectives: ['Start-up sequence', 'Instrument checks'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/starting-engine'], type: 'video' },
      { id: 'mto-1-3', title: 'Putting Vehicle in Motion', description: 'Safe moving-off procedures.', duration: '45 minutes', objectives: ['Mirrors/signals', 'Clutch control'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/putting-vehicle-motion'], type: 'video' },
      { id: 'mto-1-4', title: 'Transmissions', description: 'Manual/auto, shifting patterns, grinding prevention.', duration: '60 minutes', objectives: ['Shifting techniques', 'Recognize improper shifting'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/transmissions'], type: 'video' },
      { id: 'mto-1-5', title: 'Inter-axle Differential Lock', description: 'When and how to engage/disengage.', duration: '30 minutes', objectives: ['Appropriate use', 'Traction scenarios'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/inter-axle-differential-lock'], type: 'video' }
    ],
    quiz: { questions: 20, passingScore: 80, timeLimit: 30, bankId: 'day1' },
    completed: false,
    locked: false,
    orderIndex: 1,
    category: 'day'
  },
  {
    id: 'mto-day-2',
    title: 'Day 2 — Braking & Stopping Procedures',
    description: 'Brake inspection and use, parking, stopping (railway, school buses/crossings, pedestrian crossovers).',
    duration: '7.5 hours',
    objectives: [
      'Inspect and use brakes correctly',
      'Apply legal stopping procedures in special zones'
    ],
    lessons: [
      { id: 'mto-2-1', title: 'Brake Inspection', description: 'Check and identify defects.', duration: '90 minutes', objectives: ['Inspection steps', 'Common defects'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/brake-inspection'], type: 'video' },
      { id: 'mto-2-2', title: 'Use of Brakes', description: 'Controlled vs emergency braking, fade, stab braking.', duration: '90 minutes', objectives: ['Controlled vs emergency', 'Brake fade'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/use-brakes'], type: 'video' },
      { id: 'mto-2-3', title: 'Parking & Stopping', description: 'General parking and stopping rules.', duration: '60 minutes', objectives: ['Parking procedures', 'Stopping safely'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/parking','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/stopping'], type: 'video' },
      { id: 'mto-2-4', title: 'Special Stops', description: 'Railway, school crossings/buses, pedestrian crossovers.', duration: '90 minutes', objectives: ['Railway stops', 'School bus/crossing', 'Pedestrian crossover'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/stopping-railway-crossings','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/stopping-school-crossings','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/stopping-school-buses','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/stopping-pedestrian-crossovers'], type: 'video' }
    ],
    quiz: { questions: 25, passingScore: 80, timeLimit: 40, bankId: 'day2' },
    completed: false,
    locked: true,
    orderIndex: 2,
    category: 'day'
  },
  {
    id: 'mto-day-3',
    title: 'Day 3 — Vehicle Handling & Maneuvers',
    description: 'Clearances, turns, off-tracking, right/left turns, backing techniques.',
    duration: '7.5 hours',
    objectives: [
      'Manage clearances and off-tracking',
      'Execute right/left turns safely',
      'Perform straight, alley dock, and offset backing'
    ],
    lessons: [
      { id: 'mto-3-1', title: 'Clearances', description: 'Bridge, lane and overhead clearances.', duration: '45 minutes', objectives: ['Assess clearances'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/clearances'], type: 'video' },
      { id: 'mto-3-2', title: 'Turns & Steering', description: 'Turn setup and steering control.', duration: '60 minutes', objectives: ['Turn setup', 'Steering'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/turns-and-steering'], type: 'video' },
      { id: 'mto-3-3', title: 'Off-Tracking & Forward Steering', description: 'Trailer path vs tractor path.', duration: '45 minutes', objectives: ['Explain off-tracking'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/steering-forward-and-off-track'], type: 'video' },
      { id: 'mto-3-4', title: 'Right Turns', description: 'Multi-lane, tight right turns, hazards.', duration: '45 minutes', objectives: ['Plan and execute right turns'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/right-turns'], type: 'video' },
      { id: 'mto-3-5', title: 'Left Turns', description: 'Gap selection and risk reduction.', duration: '45 minutes', objectives: ['Safer left turns'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/left-turns'], type: 'video' },
      { id: 'mto-3-6', title: 'Backing — Straight, Alley Dock, Offset', description: 'Techniques and spotter use.', duration: '120 minutes', objectives: ['Straight backing', 'Alley dock', 'Offset backing'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/backing','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/straight-backing','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/alley-dock','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/offset-backing'], type: 'video' }
    ],
    quiz: { questions: 25, passingScore: 80, timeLimit: 40, bankId: 'day3' },
    completed: false,
    locked: true,
    orderIndex: 3,
    category: 'day'
  },
  {
    id: 'mto-day-4',
    title: 'Day 4 — Safe & Responsible Driving',
    description: 'Precautions, driver conduct, sharing the road, night/bad weather, situations & emergencies.',
    duration: '7.5 hours',
    objectives: [
      'Adopt safe driving practices in varied conditions',
      'Respond correctly to emergencies'
    ],
    lessons: [
      { id: 'mto-4-1', title: 'Precautions & Driver Conduct', description: 'Professional behavior and risk reduction.', duration: '120 minutes', objectives: ['Professional conduct'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/precautions','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/driver-conduct'], type: 'video' },
      { id: 'mto-4-2', title: 'Sharing the Road', description: 'Motorcycles, cyclists, pedestrians, emergency vehicles.', duration: '90 minutes', objectives: ['Share the road rules'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/sharing-road'], type: 'video' },
      { id: 'mto-4-3', title: 'Night & Bad Weather', description: 'Visibility, traction, speed management.', duration: '90 minutes', objectives: ['Night driving', 'Weather strategies'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/driving-night-and-bad-weather'], type: 'video' },
      { id: 'mto-4-4', title: 'Particular Situations & Emergencies', description: 'Unique hazards and emergency response.', duration: '90 minutes', objectives: ['Situational awareness', 'Emergency response'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/dealing-particular-situations','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/dealing-emergencies'], type: 'video' }
    ],
    quiz: { questions: 25, passingScore: 80, timeLimit: 40, bankId: 'day4' },
    completed: false,
    locked: true,
    orderIndex: 4,
    category: 'day'
  },
  {
    id: 'mto-day-5',
    title: 'Day 5 — Traffic Laws, Signs & Licence Maintenance',
    description: 'Traffic signs/lights/markings, pedestrian signals, demerit system and licence maintenance. Final exam.',
    duration: '7.5 hours',
    objectives: [
      'Interpret Ontario traffic control devices',
      'Understand demerit points and licence suspensions'
    ],
    lessons: [
      { id: 'mto-5-1', title: 'Traffic Signs', description: 'Regulatory, warning, information signs.', duration: '120 minutes', objectives: ['Recognize sign categories'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/signs'], type: 'video' },
      { id: 'mto-5-2', title: 'Traffic Lights & Pedestrian Signals', description: 'Signals and pedestrian indications.', duration: '60 minutes', objectives: ['Traffic lights', 'Pedestrian signals'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/traffic-lights','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/pedestrian-signals'], type: 'video' },
      { id: 'mto-5-3', title: 'Pavement Markings', description: 'Lines, arrows, lane control.', duration: '45 minutes', objectives: ['Interpret markings'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/pavement-markings'], type: 'video' },
      { id: 'mto-5-4', title: 'Keeping Your Licence', description: 'Demerit points and other suspension causes.', duration: '60 minutes', objectives: ['Demerit system', 'Suspensions'], resources: ['https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/keeping-your-licence','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/demerit-point-system','https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/other-ways-lose-your-licence'], type: 'video' },
      { id: 'mto-5-5', title: 'Final Review & Practice', description: 'Comprehensive review and exam prep.', duration: '45 minutes', objectives: ['Review and prepare'], resources: [], type: 'assessment' }
    ],
    quiz: { questions: 30, passingScore: 85, timeLimit: 50, bankId: 'day5' },
    completed: false,
    locked: true,
    orderIndex: 5,
    category: 'day'
  }
]

export const mtoCourseStatistics = {
  totalDuration: '37.5 hours',
  totalLessons: mtoModules.reduce((s, m) => s + m.lessons.length, 0),
  totalModules: mtoModules.length
}


