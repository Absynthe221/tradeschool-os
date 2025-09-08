export interface YardLesson {
  id: string
  title: string
  description: string
  duration: string
  videoUrl?: string
  objectives: string[]
  resources: string[]
  type: 'video' | 'interactive' | 'assessment'
}

export interface YardModule {
  id: string
  title: string
  description: string
  duration: string
  lessons: YardLesson[]
  quiz: { questions: number; passingScore: number; timeLimit: number; bankId: string }
  schedulePartId?: string
}

export const airbrakeYardModules: YardModule[] = [
  {
    id: 'yard-intro',
    title: 'Intro: Schedule 1 & Inspection Overview',
    description: 'Intro video covering Schedule 1 scope, minor vs major defects, and inspection flow.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-0-1', title: 'Overview & Defect Classes', description: 'Minor vs major defects and when to OOS.', duration: '60 minutes', objectives: ['Understand Schedule 1', 'Minor vs major defects'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-intro' },
    schedulePartId: 'p1'
  },
  {
    id: 'yard-1',
    title: 'Module 1: Audible Air Leak',
    description: 'Detecting leaks around hoses, connections, and chambers.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-1-1', title: 'Audible Leak Detection', description: 'Listen and locate leaks; acceptable vs failing.', duration: '60 minutes', objectives: ['Leak detection'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-1' },
    schedulePartId: 'p1'
  },
  {
    id: 'yard-2',
    title: 'Module 2: Slow Air Pressure Build-Up (✅ existing)',
    description: '90 to 100 psi time test at 600–900 RPM.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-2-1', title: 'Build-Up Rate Test', description: 'Demonstrate and assess build-up time.', duration: '60 minutes', videoUrl: '/videos/airbrake/slow-air-pressure-build-up.mp4', objectives: ['Run build-up test'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-2' },
    schedulePartId: 'p1'
  },
  {
    id: 'yard-3',
    title: 'Module 3: Pushrod Stroke Beyond Limit (✅ existing)',
    description: 'Measure pushrod travel; compare to legal limits.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-3-1', title: 'Pushrod Stroke Measurement', description: 'Methods and limits.', duration: '60 minutes', videoUrl: '/videos/airbrake/pushrod-stroke-over-limit.mp4', objectives: ['Measure stroke'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-3' },
    schedulePartId: 'p1'
  },
  {
    id: 'yard-4',
    title: 'Module 4: Air Loss Rate Exceeds Limit',
    description: 'Static and applied leakage tests.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-4-1', title: 'Leakage Tests', description: 'Applied and released leakage thresholds.', duration: '60 minutes', objectives: ['Leak test procedure'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-4' },
    schedulePartId: 'p1'
  },
  {
    id: 'yard-5',
    title: 'Module 5: Tractor Protection Valve (✅ existing)',
    description: 'Confirm tractor protection operation.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-5-1', title: 'TPV Test', description: 'Disconnect supply, observe protection behavior.', duration: '60 minutes', videoUrl: '/videos/airbrake/tractor-protection-inoperative.mp4', objectives: ['TPV function'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-5' },
    schedulePartId: 'p1'
  },
  {
    id: 'yard-6',
    title: 'Module 6: Low Air Warning / Inoperative Brakes',
    description: 'Low air warning activation threshold and service/parking/emergency checks.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-6-1', title: 'Low Air Warning', description: 'Warning buzzer/light test.', duration: '30 minutes', videoUrl: '/videos/airbrake/low-air-warning-fails.mp4', objectives: ['Warning threshold'], resources: [], type: 'video' },
      { id: 'yard-6-2', title: 'Service/Parking/Emergency Checks', description: 'Functional brake tests.', duration: '30 minutes', objectives: ['Brake function checks'], resources: [], type: 'video' }
    ],
    quiz: { questions: 8, passingScore: 80, timeLimit: 12, bankId: 'yard-6' },
    schedulePartId: 'p1'
  },
  // Continuation modules for non-air-brake parts (Schedule 1 Parts 2–23)
  {
    id: 'yard-p2',
    title: 'Part 2 – Cab',
    description: 'Doors open/close securely; sleeper door secured.',
    duration: '45 minutes',
    lessons: [
      { id: 'yard-p2-1', title: 'Cab Doors & Security', description: 'Check door operation and secure latches.', duration: '45 minutes', objectives: ['Doors open/close', 'Sleeper door secured'], resources: [], type: 'video' }
    ],
    quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p2' },
    schedulePartId: 'p2'
  },
  {
    id: 'yard-p3',
    title: 'Part 3 – Cargo Securement',
    description: 'Load covering, tiedowns, and securement devices.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-p3-1', title: 'Securement & Coverings', description: 'Inspect straps, chains, tarps, edge protectors.', duration: '60 minutes', objectives: ['Tiedown condition', 'Load shift check'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-p3' },
    schedulePartId: 'p3'
  },
  {
    id: 'yard-p4',
    title: 'Part 4 – Coupling Devices',
    description: 'Coupler fasteners, locking mechanism, safety chains.',
    duration: '60 minutes',
    lessons: [
      { id: 'yard-p4-1', title: 'Coupling Inspection', description: 'Kingpin, fifth wheel, pintle hook, tug test.', duration: '60 minutes', objectives: ['Lock engagement', 'Fasteners intact', 'Safety chains/cables'], resources: [], type: 'video' }
    ],
    quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-p4' },
    schedulePartId: 'p4'
  },
  { id: 'yard-p5', title: 'Part 5 – Dangerous Goods', description: 'Placards, securement, documentation.', duration: '45 minutes', lessons: [{ id: 'yard-p5-1', title: 'DG Basics', description: 'Placards and paperwork checks.', duration: '45 minutes', objectives: ['Placards present', 'Docs on board'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p5' }, schedulePartId: 'p5' },
  { id: 'yard-p6', title: 'Part 6 – Driver Controls', description: 'Cab controls and indicators function.', duration: '45 minutes', lessons: [{ id: 'yard-p6-1', title: 'Controls Check', description: 'Accelerator, clutch, gauges, indicators.', duration: '45 minutes', objectives: ['All controls function'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p6' }, schedulePartId: 'p6' },
  { id: 'yard-p7', title: 'Part 7 – Driver Seat', description: 'Seat integrity and belt/tether operation.', duration: '45 minutes', lessons: [{ id: 'yard-p7-1', title: 'Seat & Seatbelt', description: 'Check position retention and belts.', duration: '45 minutes', objectives: ['Seat holds position', 'Seatbelt functional'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p7' }, schedulePartId: 'p7' },
  { id: 'yard-p8', title: 'Part 8 – Electric Brake', description: 'Wiring, connections, breakaway device.', duration: '45 minutes', lessons: [{ id: 'yard-p8-1', title: 'Electric Brake Test', description: 'Trailer wiring and breakaway.', duration: '45 minutes', objectives: ['Connections secure', 'Breakaway functional'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p8' }, schedulePartId: 'p8' },
  { id: 'yard-p9', title: 'Part 9 – Emergency Equipment & Safety Devices', description: 'Fire extinguisher, triangles, fuses.', duration: '45 minutes', lessons: [{ id: 'yard-p9-1', title: 'Emergency Equipment', description: 'Presence and condition.', duration: '45 minutes', objectives: ['Extinguisher charged', 'Triangles present'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p9' }, schedulePartId: 'p9' },
  { id: 'yard-p10', title: 'Part 10 – Exhaust System', description: 'Leaks and cab intrusion.', duration: '45 minutes', lessons: [{ id: 'yard-p10-1', title: 'Exhaust Inspection', description: 'Visual/smoke test and cab check.', duration: '45 minutes', objectives: ['Identify leaks', 'No cab intrusion'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p10' }, schedulePartId: 'p10' },
  { id: 'yard-p11', title: 'Part 11 – Frame & Cargo Body', description: 'Frame/body damage.', duration: '45 minutes', lessons: [{ id: 'yard-p11-1', title: 'Frame & Body', description: 'Cracks, sag, shift.', duration: '45 minutes', objectives: ['Identify structural damage'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p11' }, schedulePartId: 'p11' },
  { id: 'yard-p12', title: 'Part 12 – Fuel System', description: 'Caps, leaks, tank security.', duration: '45 minutes', lessons: [{ id: 'yard-p12-1', title: 'Fuel System', description: 'Cap present, tank secure, no leaks.', duration: '45 minutes', objectives: ['Cap installed', 'No leaks'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p12' }, schedulePartId: 'p12' },
  { id: 'yard-p13', title: 'Part 13 – General', description: 'General damage/deterioration.', duration: '30 minutes', lessons: [{ id: 'yard-p13-1', title: 'General Condition', description: 'Assess obvious safety issues.', duration: '30 minutes', objectives: ['Spot unsafe conditions'], resources: [], type: 'video' }], quiz: { questions: 4, passingScore: 80, timeLimit: 8, bankId: 'yard-p13' }, schedulePartId: 'p13' },
  { id: 'yard-p14', title: 'Part 14 – Glass & Mirrors', description: 'Visibility and mounting.', duration: '45 minutes', lessons: [{ id: 'yard-p14-1', title: 'Glass/Mirror Check', description: 'Cracks, damage, adjustment.', duration: '45 minutes', objectives: ['Proper adjustment', 'No broken mounts'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p14' }, schedulePartId: 'p14' },
  { id: 'yard-p15', title: 'Part 15 – Heater & Defroster', description: 'Control/system function and defrost.', duration: '30 minutes', lessons: [{ id: 'yard-p15-1', title: 'Heater/Defroster', description: 'Verify windshield clearing.', duration: '30 minutes', objectives: ['Defrost clears view'], resources: [], type: 'video' }], quiz: { questions: 4, passingScore: 80, timeLimit: 8, bankId: 'yard-p15' }, schedulePartId: 'p15' },
  { id: 'yard-p16', title: 'Part 16 – Horn', description: 'Horn operation.', duration: '15 minutes', lessons: [{ id: 'yard-p16-1', title: 'Horn Test', description: 'Function check.', duration: '15 minutes', objectives: ['Horn operative'], resources: [], type: 'video' }], quiz: { questions: 3, passingScore: 80, timeLimit: 6, bankId: 'yard-p16' }, schedulePartId: 'p16' },
  { id: 'yard-p17', title: 'Part 17 – Hydraulic Brake System', description: 'Fluid level, leaks, boost/assist, warnings.', duration: '60 minutes', lessons: [{ id: 'yard-p17-1', title: 'Hydraulic Brake Checks', description: 'Fluids, assist, warnings.', duration: '60 minutes', objectives: ['Correct level', 'No leaks'], resources: [], type: 'video' }], quiz: { questions: 6, passingScore: 80, timeLimit: 10, bankId: 'yard-p17' }, schedulePartId: 'p17' },
  { id: 'yard-p18', title: 'Part 18 – Lamps & Reflectors', description: 'Lamp/reflector function.', duration: '45 minutes', lessons: [{ id: 'yard-p18-1', title: 'Lighting Walkaround', description: 'Night simulation and checks.', duration: '45 minutes', objectives: ['All required lights work'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p18' }, schedulePartId: 'p18' },
  { id: 'yard-p19', title: 'Part 19 – Steering', description: 'Free play and response.', duration: '45 minutes', lessons: [{ id: 'yard-p19-1', title: 'Steering Check', description: 'Lash and response test.', duration: '45 minutes', objectives: ['Within limits'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p19' }, schedulePartId: 'p19' },
  { id: 'yard-p20', title: 'Part 20 – Suspension System', description: 'Air leaks, leaves, fasteners, airbags.', duration: '45 minutes', lessons: [{ id: 'yard-p20-1', title: 'Suspension Inspection', description: 'Springs and airbags.', duration: '45 minutes', objectives: ['No broken leaves', 'No leaks'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p20' }, schedulePartId: 'p20' },
  { id: 'yard-p21', title: 'Part 21 – Tires', description: 'Damage, leaks, tread, contact, cords.', duration: '60 minutes', lessons: [{ id: 'yard-p21-1', title: 'Tire Inspection', description: 'Depth gauge, hammer test, visual.', duration: '60 minutes', objectives: ['Min tread', 'No contact/cords'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p21' }, schedulePartId: 'p21' },
  { id: 'yard-p22', title: 'Part 22 – Wheels, Hubs & Fasteners', description: 'Oil level, seals, fasteners, cracks.', duration: '45 minutes', lessons: [{ id: 'yard-p22-1', title: 'Wheel & Hub Check', description: 'Fasteners and hub condition.', duration: '45 minutes', objectives: ['No loose fasteners', 'No cracks'], resources: [], type: 'video' }], quiz: { questions: 5, passingScore: 80, timeLimit: 10, bankId: 'yard-p22' }, schedulePartId: 'p22' },
  { id: 'yard-p23', title: 'Part 23 – Windshield Wipers/Washers', description: 'Controls and blade performance.', duration: '30 minutes', lessons: [{ id: 'yard-p23-1', title: 'Wiper/Washer Test', description: 'Clear driver vision.', duration: '30 minutes', objectives: ['Adequate clearing'], resources: [], type: 'video' }], quiz: { questions: 4, passingScore: 80, timeLimit: 8, bankId: 'yard-p23' }, schedulePartId: 'p23' },
  {
    id: 'yard-review',
    title: 'Day 6: Full Walkaround Simulation',
    description: 'End-to-end simulation and checklist completion.',
    duration: '90 minutes',
    lessons: [
      { id: 'yard-r-1', title: 'Simulation & Checklist', description: 'Complete Schedule 1 checklist.', duration: '90 minutes', objectives: ['Simulate inspection'], resources: [], type: 'assessment' }
    ],
    quiz: { questions: 0, passingScore: 0, timeLimit: 0, bankId: 'yard-final' }
  }
]

export const airbrakeYardStats = {
  totalDuration: '7 hours 30 minutes',
  totalModules: airbrakeYardModules.length,
  totalLessons: airbrakeYardModules.reduce((s, m) => s + m.lessons.length, 0)
}


