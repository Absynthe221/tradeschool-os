export interface AirbrakeLesson {
  id: string
  title: string
  description: string
  duration: string
  videoUrl?: string
  objectives: string[]
  resources: string[]
  type: 'video' | 'interactive' | 'assessment'
}

export interface AirbrakeModule {
  id: string
  day: 1 | 2
  title: string
  description: string
  duration: string
  lessons: AirbrakeLesson[]
  quiz: { questions: number; passingScore: number; timeLimit: number; bankId: string }
}

export const airbrakeModules: AirbrakeModule[] = [
  {
    id: 'ab-m1',
    day: 1,
    title: 'Module 1: Introduction to Air Brakes',
    description: 'Purpose of Z endorsement, hydraulic vs air, why compressed air.',
    duration: '1 hour',
    lessons: [
      {
        id: 'ab-1-1',
        title: 'Air Brake Overview',
        description: 'What the endorsement covers and system overview.',
        duration: '60 minutes',
        objectives: ['Understand purpose', 'Differentiate brake types'],
        resources: ['https://www.ontario.ca/document/official-air-brake-handbook'],
        type: 'video'
      }
    ],
    quiz: { questions: 8, passingScore: 80, timeLimit: 10, bankId: 'm1' }
  },
  {
    id: 'ab-m2',
    day: 1,
    title: 'Module 2: System Fundamentals',
    description: 'Compressor, supply, reservoirs, gauges, chambers, slack adjusters, foundation brakes.',
    duration: '3 hours',
    lessons: [
      { id: 'ab-2-1', title: 'Air Supply & Compressor', description: 'Operation and safety features.', duration: '60 minutes', objectives: ['Compressor function', 'Governor action'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-2-2', title: 'Reservoirs & Gauges', description: 'Primary/secondary reservoirs, pressure indications.', duration: '45 minutes', objectives: ['Reservoir purpose', 'Gauge reading'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-2-3', title: 'Brake Chambers & Foundation Brakes', description: 'Chambers, S-cams, drums/discs.', duration: '45 minutes', objectives: ['Chamber types', 'Foundation parts'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-2-4', title: 'Slack Adjusters & Delays', description: 'Manual/auto adjusters and air transmission delay.', duration: '30 minutes', objectives: ['Adjuster roles', 'Delay awareness'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' }
    ],
    quiz: { questions: 12, passingScore: 80, timeLimit: 20, bankId: 'm2' }
  },
  {
    id: 'ab-m3',
    day: 1,
    title: 'Module 3: Operational Inspections',
    description: 'Functional tests: low air warning, build-up, governor cut-in/out, leak tests.',
    duration: '4 hours',
    lessons: [
      { id: 'ab-3-1', title: 'Securing the Vehicle', description: 'Chocks and parking brakes.', duration: '30 minutes', objectives: ['Securement'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-3-2', title: 'Warning Devices & Build-Up Test', description: 'Low air warning and build-up rates.', duration: '90 minutes', objectives: ['Warning activation', 'Rate thresholds'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-3-3', title: 'Governor Cut-In/Cut-Out', description: 'Confirm governor operation.', duration: '60 minutes', objectives: ['Cut-in/out procedures'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-3-4', title: 'Air Loss (Leak) Test', description: 'Static/applied leakage rates.', duration: '60 minutes', objectives: ['Leak thresholds'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' }
    ],
    quiz: { questions: 12, passingScore: 80, timeLimit: 20, bankId: 'm3' }
  },
  {
    id: 'ab-m4',
    day: 1,
    title: 'Module 4: Tractor & Trailer Systems',
    description: 'Protection valves, spring brakes, drain valves, parking/emergency systems.',
    duration: '3 hours',
    lessons: [
      { id: 'ab-4-1', title: 'Tractor Protection Valve', description: 'Function and checks.', duration: '60 minutes', objectives: ['Protection valve test'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-4-2', title: 'Trailer Spring Brakes', description: 'Parking/emergency spring brake behavior.', duration: '60 minutes', objectives: ['Spring brake operation'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-4-3', title: 'Draining Air Tanks', description: 'Moisture management and valves.', duration: '60 minutes', objectives: ['Drain procedure'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' }
    ],
    quiz: { questions: 10, passingScore: 80, timeLimit: 15, bankId: 'm4' }
  },
  {
    id: 'ab-review',
    day: 1,
    title: 'End of Day 1 Review',
    description: 'Q&A and inspection checklist practice.',
    duration: '1 hour',
    lessons: [
      { id: 'ab-r-1', title: 'Review & Checklist', description: 'Consolidation activities.', duration: '60 minutes', objectives: ['Reinforce day 1'], resources: [], type: 'interactive' }
    ],
    quiz: { questions: 0, passingScore: 0, timeLimit: 0, bankId: 'none' }
  },
  {
    id: 'ab-m5',
    day: 2,
    title: 'Module 5: Brake Adjustment',
    description: 'Pushrod stroke measurement and slack adjusters (manual/auto).',
    duration: '4 hours',
    lessons: [
      { id: 'ab-5-1', title: 'Adjustment Importance', description: 'Why adjustment matters.', duration: '30 minutes', objectives: ['Safety & wear'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-5-2', title: 'Pushrod Stroke – Methods 1 & 2', description: 'Measurement techniques and limits.', duration: '120 minutes', objectives: ['Measure stroke', 'Apply legal limits'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' },
      { id: 'ab-5-3', title: 'Slack Adjusters', description: 'Manual vs automatic behaviors.', duration: '90 minutes', objectives: ['Manual/auto operation'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' }
    ],
    quiz: { questions: 12, passingScore: 80, timeLimit: 20, bankId: 'm5' }
  },
  {
    id: 'ab-m6',
    day: 2,
    title: 'Module 6: Tools, Charts & Practical Aids',
    description: 'Tools for inspections, checklists, adjustment charts, reading diagrams.',
    duration: '2 hours',
    lessons: [
      { id: 'ab-6-1', title: 'Tools & Charts', description: 'Using charts and diagrams.', duration: '120 minutes', objectives: ['Use resources effectively'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'm6' }
  },
  {
    id: 'ab-m7',
    day: 2,
    title: 'Module 7: Legal Requirements',
    description: 'HTA requirements, penalties, inspection regulations & enforcement.',
    duration: '2 hours',
    lessons: [
      { id: 'ab-7-1', title: 'Legal & Enforcement', description: 'Ontario laws and penalties.', duration: '120 minutes', objectives: ['Understand HTA rules'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' }
    ],
    quiz: { questions: 8, passingScore: 80, timeLimit: 12, bankId: 'm7' }
  },
  {
    id: 'ab-m8',
    day: 2,
    title: 'Module 8: Practical Walkthrough & Troubleshooting',
    description: 'Mock inspection sequence, common defects and troubleshooting.',
    duration: '3 hours',
    lessons: [
      { id: 'ab-8-1', title: 'Mock Practical & Troubleshooting', description: 'Walkthrough and defect identification.', duration: '180 minutes', objectives: ['Execute full inspection', 'Identify defects'], resources: ['https://www.ontario.ca/document/official-air-brake-handbook'], type: 'video' }
    ],
    quiz: { questions: 10, passingScore: 80, timeLimit: 15, bankId: 'm8' }
  },
  {
    id: 'ab-final-prep',
    day: 2,
    title: 'Final Exam Prep & Certification',
    description: 'Written practice and mock oral/practical.',
    duration: '1 hour',
    lessons: [
      { id: 'ab-fp-1', title: 'Prep Session', description: 'Written practice and review.', duration: '60 minutes', objectives: ['Prepare for exam'], resources: [], type: 'assessment' }
    ],
    quiz: { questions: 0, passingScore: 0, timeLimit: 0, bankId: 'none' }
  }
]

export const airbrakeCourseStatistics = {
  totalDuration: '24 hours',
  totalModules: airbrakeModules.length,
  totalLessons: airbrakeModules.reduce((s, m) => s + m.lessons.length, 0)
}


