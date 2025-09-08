export interface ABQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type ABQuestionBank = Record<string, ABQuestion[]> // bankId => questions

export const airbrakeQuestionBank: ABQuestionBank = {
  m1: [
    { id: 'm1-q1', question: 'Why is compressed air commonly used in heavy vehicle brakes?', options: ['Cost only', 'Reliability and available supply', 'Less maintenance', 'Quieter operation'], correctIndex: 1, explanation: 'Air is abundant and systems fail-safe when pressure is lost.' }
  ],
  m2: [
    { id: 'm2-q1', question: 'What does the governor control?', options: ['Brake light brightness', 'Air compressor cut-in/cut-out', 'ABS timing', 'Parking brake force'], correctIndex: 1, explanation: 'It starts/stops the compressor based on pressure.' }
  ],
  m3: [
    { id: 'm3-q1', question: 'A low air warning must activate no lower than roughly:', options: ['50 kPa', '380 kPa', '380–450 kPa (55–65 psi)', '900 kPa'], correctIndex: 2, explanation: 'Ontario standards require activation before pressure falls too low.' }
  ],
  m4: [
    { id: 'm4-q1', question: 'The tractor protection valve is designed to:', options: ['Cool brakes', 'Protect tractor air in trailer failure', 'Increase brake force', 'Reduce fuel use'], correctIndex: 1, explanation: 'It prevents total loss of tractor air if the trailer fails.' }
  ],
  m5: [
    { id: 'm5-q1', question: 'Pushrod stroke exceeding legal limit means:', options: ['No action needed', 'Immediate repair/adjustment is required', 'Drive slower', 'Increase tire pressure'], correctIndex: 1, explanation: 'Out-of-adjustment brakes are unsafe and illegal.' }
  ],
  m6: [
    { id: 'm6-q1', question: 'Adjustment charts help you:', options: ['Improve fuel economy', 'Determine allowable pushrod stroke', 'Route planning', 'None'], correctIndex: 1, explanation: 'Charts define stroke limits for chamber types.' }
  ],
  m7: [
    { id: 'm7-q1', question: 'Operating with defective brakes can result in:', options: ['No penalty', 'Vehicle out-of-service and fines', 'Reward points', 'Insurance discount'], correctIndex: 1, explanation: 'HTA permits enforcement actions including OOS and fines.' }
  ],
  m8: [
    { id: 'm8-q1', question: 'During a mock inspection, you should:', options: ['Skip chocks', 'Document results and compare to limits', 'Rely on memory only', 'Avoid asking for a spotter'], correctIndex: 1, explanation: 'Documented steps ensure consistency and compliance.' }
  ],
  final: [
    { id: 'f-q1', question: 'Cut-out pressure occurs when:', options: ['The governor stops the compressor at max system pressure', 'ABS activates', 'Parking brake is released', 'Service brakes are applied'], correctIndex: 0, explanation: 'Governor unloads the compressor at system high set-point.' }
  ]
}


