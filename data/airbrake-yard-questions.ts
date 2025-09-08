export interface YardQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type YardQuestionBank = Record<string, YardQuestion[]>

export const yardQuestionBank: YardQuestionBank = {
  'yard-intro': [
    { id: 'yi-1', question: 'A major defect means:', options: ['Note and continue', 'Vehicle must not be operated', 'Schedule repair within a week', 'Only warn dispatch'], correctIndex: 1, explanation: 'Major defects require the vehicle be placed out of service until fixed.' }
  ],
  'yard-1': [
    { id: 'y1-1', question: 'Which is NOT a reliable leak check?', options: ['Listening closely', 'Visual soap test', 'Ignoring faint hissing', 'Checking fittings'], correctIndex: 2, explanation: 'All suspected leaks should be verified; do not ignore hissing.' }
  ],
  'yard-2': [
    { id: 'y2-1', question: 'Slow build-up is typically defined as 90→100 psi in more than:', options: ['30 seconds', '2 minutes', '5 minutes', '10 seconds'], correctIndex: 1, explanation: 'At 600–900 RPM, >2 minutes is a failure.' }
  ],
  'yard-3': [
    { id: 'y3-1', question: 'Pushrod stroke beyond limit indicates:', options: ['Good adjustment', 'Out-of-adjustment — unsafe', 'ABS issue', 'Reservoir issue'], correctIndex: 1, explanation: 'Excess stroke requires repair/adjustment before operating.' }
  ],
  'yard-4': [
    { id: 'y4-1', question: 'Applied leakage must not exceed published limits for:', options: ['Chamber type and vehicle configuration', 'Fuel type', 'Tire size', 'Cab color'], correctIndex: 0, explanation: 'Limits depend on chamber sizes and configuration.' }
  ],
  'yard-5': [
    { id: 'y5-1', question: 'Tractor protection valve prevents:', options: ['Trailer sway', 'Loss of tractor air if trailer fails', 'ABS activation', 'Steering pull'], correctIndex: 1, explanation: 'It isolates tractor supply during trailer failure.' }
  ],
  'yard-6': [
    { id: 'y6-1', question: 'Low air warning must activate at or above approx.:', options: ['55 psi', '25 psi', '110 psi', '5 psi'], correctIndex: 0, explanation: 'Ontario standard is around 55–65 psi.' }
  ]
}


