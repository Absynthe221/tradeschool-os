export interface MtoQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  category?: string
  sourceUrl?: string
}

export type MtoQuestionBank = Record<string, MtoQuestion[]> // keyed by bankId 'day1'...'day5'

// Placeholders — populate with curated content from the Ontario MTO Truck Handbook.
// Keep explanations short and cite chapter/section URLs in sourceUrl.

export const mtoQuestionBank: MtoQuestionBank = {
  day1: [
    {
      id: 'd1-q1',
      question: 'What shape and color typically identify regulatory signs?',
      options: ['Red octagon or white rectangles', 'Yellow diamond', 'Green circle', 'Blue pentagon'],
      correctIndex: 0,
      explanation: 'Regulatory signs are commonly red octagons (STOP) and white/black rectangles for rules.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook'
    },
    {
      id: 'd1-q2',
      question: 'What is the primary purpose of a daily trip inspection?',
      options: ['Reduce fuel use', 'Find and report defects before driving', 'Improve shifting', 'Check route times'],
      correctIndex: 1,
      explanation: 'Daily inspections identify and document defects to keep unsafe vehicles off the road.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/daily-trip-inspection-classes-and-d'
    },
    {
      id: 'd1-q3',
      question: 'When should you engage the inter-axle differential lock?',
      options: ['On dry pavement while cornering', 'When traction is poor and straight-line travel is needed', 'At highway speeds', 'Anytime backing'],
      correctIndex: 1,
      explanation: 'Use the lock at low speeds in poor traction to reduce wheel spin; disengage before turning on dry pavement.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/inter-axle-differential-lock'
    },
    {
      id: 'd1-q4',
      question: 'Which indicates improper gear shifting?',
      options: ['Smooth acceleration', 'Grinding noises and loss of speed', 'Consistent engine RPM', 'Fuel economy improves'],
      correctIndex: 1,
      explanation: 'Grinding and speed loss suggest poor clutch/gear timing or wrong gear selection.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/transmissions'
    }
  ],
  day2: [
    {
      id: 'd2-q1',
      question: 'Operating with a Schedule 1 major defect is:',
      options: ['Allowed if noted', 'Prohibited until repaired', 'Permitted for 1 trip', 'Allowed if dispatcher approves'],
      correctIndex: 1,
      explanation: 'Vehicles with major defects must not be operated until repaired and cleared.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook'
    },
    {
      id: 'd2-q2',
      question: 'What is a key difference between controlled vs emergency braking?',
      options: ['Controlled uses steady pressure; emergency is hard/threshold braking', 'Controlled is only for rain', 'Emergency uses parking brake', 'They are the same'],
      correctIndex: 0,
      explanation: 'Controlled braking uses firm, steady pressure to maintain control; emergency involves maximum or threshold braking to avoid collision.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/use-brakes'
    },
    {
      id: 'd2-q3',
      question: 'When are you legally required to stop at a railway crossing?',
      options: ['Only if you see a train', 'When lights/arms are active or as posted/required', 'Never in a truck', 'Only at night'],
      correctIndex: 1,
      explanation: 'Obey active signals and posted requirements for commercial vehicles; stop, look, and proceed when safe and legal.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/stopping-railway-crossings'
    },
    {
      id: 'd2-q4',
      question: 'When must you stop for a school bus?',
      options: ['Only in school zones', 'When it has red flashing lights and is loading/unloading', 'Never on highways', 'Only if children wave'],
      correctIndex: 1,
      explanation: 'You must stop when a school bus displays flashing red lights while loading or unloading children.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/stopping-school-buses'
    }
  ],
  day3: [
    {
      id: 'd3-q1',
      question: 'Increasing following distance mainly affects:',
      options: ['Perception time', 'Reaction time', 'Braking distance', 'Total stopping distance'],
      correctIndex: 3,
      explanation: 'Greater gaps increase overall time/space to stop — the total stopping distance.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook'
    },
    {
      id: 'd3-q2',
      question: 'Define off-tracking.',
      options: ['Trailer swings wider than tractor on turns', 'Trailer follows a tighter path than the tractor', 'Trailer pushes tractor forward on hills', 'Lane drift on straight roads'],
      correctIndex: 1,
      explanation: 'In turns, the trailer path is tighter (inside) relative to the tractor path — this is off-tracking.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/steering-forward-and-off-track'
    },
    {
      id: 'd3-q3',
      question: 'Which statement about straight vs offset backing is correct?',
      options: ['Offset is simpler than straight', 'Straight backing keeps trailer directly behind; offset shifts lanes/spaces', 'Both are identical', 'Offset never uses a spotter'],
      correctIndex: 1,
      explanation: 'Straight maintains a single line; offset moves from one lane/space to another while backing.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/offset-backing'
    },
    {
      id: 'd3-q4',
      question: 'When is it often safest to avoid a left turn?',
      options: ['High traffic, poor visibility, or no protected gap', 'Always', 'Only at night', 'Never avoid lefts'],
      correctIndex: 0,
      explanation: 'Left turns have higher risk; choose safer routes or controlled intersections when possible.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/left-turns'
    }
  ],
  day4: [
    {
      id: 'd4-q1',
      question: 'When approaching an emergency scene you should first:',
      options: ['Accelerate past', 'Stop in lane', 'Reduce speed and move over', 'Sound horn repeatedly'],
      correctIndex: 2,
      explanation: 'Ontario’s move-over requirements mandate slowing and moving over when safe.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook'
    },
    {
      id: 'd4-q2',
      question: 'What should you do if brakes fail on a downhill?',
      options: ['Shift to neutral', 'Use lower gear, engine braking, and designated escape routes', 'Accelerate to regain control', 'Turn off engine immediately'],
      correctIndex: 1,
      explanation: 'Downshift early, use engine braking and safe escape ramps; avoid neutral or shutting off power steering.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/dealing-emergencies'
    },
    {
      id: 'd4-q3',
      question: 'How do you share the road with motorcycles?',
      options: ['Follow closely', 'Give full lane and increase following distance', 'Pass within same lane', 'Ignore shoulder checks'],
      correctIndex: 1,
      explanation: 'Motorcycles need a full lane and extra space; increase following distance and check blind spots.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/sharing-road'
    },
    {
      id: 'd4-q4',
      question: 'Name three safe practices in bad weather.',
      options: ['Increase speed, high beams, follow closely', 'Reduce speed, increase following distance, smooth inputs', 'Disable ABS, coast in neutral, ignore spray', 'Use cruise control on ice'],
      correctIndex: 1,
      explanation: 'Slow down, leave more space, and make smooth steering/braking inputs; avoid cruise on slippery roads.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/driving-night-and-bad-weather'
    }
  ],
  day5: [
    {
      id: 'd5-q1',
      question: 'Which statement about tie-down working load limit (WLL) is correct?',
      options: ['WLL can be exceeded briefly', 'WLL is the maximum safe load per tie-down', 'WLL equals strap width', 'WLL applies only to chains'],
      correctIndex: 1,
      explanation: 'WLL defines the maximum load that a device can safely support.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook'
    },
    {
      id: 'd5-q2',
      question: 'What does a yellow diamond sign generally indicate?',
      options: ['Regulatory rule', 'Warning/hazard ahead', 'Service info', 'Mandatory action'],
      correctIndex: 1,
      explanation: 'Yellow diamonds are warnings of upcoming road conditions or hazards.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/signs'
    },
    {
      id: 'd5-q3',
      question: 'A solid double yellow centre line means:',
      options: ['Passing allowed both ways', 'No passing either direction', 'Passing allowed for trucks only', 'Shoulder driving permitted'],
      correctIndex: 1,
      explanation: 'Double solid lines prohibit passing in either direction.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/pavement-markings'
    },
    {
      id: 'd5-q4',
      question: 'How many demerit points lead to consequences for a full licence?',
      options: ['2', '6', '9+', '15+'],
      correctIndex: 2,
      explanation: 'At 9 demerit points you may be required for an interview; higher points can lead to suspension.',
      sourceUrl: 'https://www.ontario.ca/document/official-ministry-transportation-mto-truck-handbook/demerit-point-system'
    }
  ]
}


