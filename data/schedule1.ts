// Ontario Schedule 1 – Daily inspection of trucks, tractors and trailers
// Structured data for Air Brake and related sections to power checklists and quizzes.

export interface Schedule1Part {
  id: string
  part: string
  systemOrComponent: string
  minorDefects: string[]
  majorDefects: string[]
}

export const schedule1Parts: Schedule1Part[] = [
  {
    id: 'p1',
    part: 'Part 1',
    systemOrComponent: 'Air Brake System',
    minorDefects: [
      'Audible air leak',
      'Slow air pressure build-up rate'
    ],
    majorDefects: [
      'Pushrod stroke of any brake exceeds the adjustment limit',
      'Air loss rate exceeds prescribed limit',
      'Inoperative towing vehicle (tractor) protection system',
      'Low air warning system fails or system is activated',
      'Inoperative service, parking or emergency brake'
    ]
  },
  // Stubs for additional parts to be populated (from Schedule 1 table)
  {
    id: 'p2',
    part: 'Part 2',
    systemOrComponent: 'Cab',
    minorDefects: [
      'Occupant compartment door fails to open'
    ],
    majorDefects: [
      'Any cab or sleeper door fails to close securely'
    ]
  },
  {
    id: 'p3',
    part: 'Part 3',
    systemOrComponent: 'Cargo Securement',
    minorDefects: [
      'Insecure or improper load covering'
    ],
    majorDefects: [
      'Absence, failure, malfunction or deterioration of required cargo securement device or load covering',
      'Coupler or mounting has loose or missing fastener',
      'Coupling or locking mechanism is damaged or fails to lock',
      'Defective, incorrect or missing safety chain or cable',
      'Dangerous goods requirements not met'
    ]
  },
  {
    id: 'p4',
    part: 'Part 4',
    systemOrComponent: 'Coupling Devices',
    minorDefects: [
      'Coupler or mounting has loose or missing fastener'
    ],
    majorDefects: [
      'Coupling or locking mechanism is damaged or fails to lock',
      'Defective, incorrect or missing safety chain or cable'
    ]
  },
  {
    id: 'p5',
    part: 'Part 5',
    systemOrComponent: 'Dangerous Goods',
    minorDefects: [],
    majorDefects: [
      'Dangerous goods requirements not met'
    ]
  },
  {
    id: 'p6',
    part: 'Part 6',
    systemOrComponent: 'Driver Controls',
    minorDefects: [
      'Accelerator pedal, clutch, gauges, audible/visual indicators or instruments fail to function properly'
    ],
    majorDefects: []
  },
  {
    id: 'p7',
    part: 'Part 7',
    systemOrComponent: 'Driver Seat',
    minorDefects: [
      'Seat is damaged or fails to remain in set position'
    ],
    majorDefects: [
      'Seatbelt or tether belt is insecure, missing or malfunctions'
    ]
  },
  {
    id: 'p8',
    part: 'Part 8',
    systemOrComponent: 'Electric Brake System',
    minorDefects: [
      'Loose or insecure wiring or electrical connection'
    ],
    majorDefects: [
      'Inoperative breakaway device',
      'Inoperative brake'
    ]
  },
  {
    id: 'p9',
    part: 'Part 9',
    systemOrComponent: 'Emergency Equipment and Safety Devices',
    minorDefects: [
      'Emergency equipment is missing, damaged or defective'
    ],
    majorDefects: []
  },
  {
    id: 'p10',
    part: 'Part 10',
    systemOrComponent: 'Exhaust System',
    minorDefects: [
      'Exhaust leak, except as described as major'
    ],
    majorDefects: [
      'Leak that causes exhaust gas to enter the occupant compartment'
    ]
  },
  {
    id: 'p11',
    part: 'Part 11',
    systemOrComponent: 'Frame and Cargo Body',
    minorDefects: [
      'Damaged frame or cargo body'
    ],
    majorDefects: [
      'Visibly shifted, cracked, collapsing or sagging frame member'
    ]
  },
  {
    id: 'p12',
    part: 'Part 12',
    systemOrComponent: 'Fuel System',
    minorDefects: [
      'Missing fuel tank cap'
    ],
    majorDefects: [
      'Insecure fuel tank',
      'Dripping fuel leak'
    ]
  },
  {
    id: 'p13',
    part: 'Part 13',
    systemOrComponent: 'General',
    minorDefects: [],
    majorDefects: [
      'Serious damage or deterioration that is noticeable and may affect the vehicle’s safe operation'
    ]
  },
  {
    id: 'p14',
    part: 'Part 14',
    systemOrComponent: 'Glass and Mirrors',
    minorDefects: [
      'Required mirror(s) or window glass fails to provide the required view',
      'Required mirror(s) or glass has broken or damaged attachments onto vehicle body'
    ],
    majorDefects: []
  },
  {
    id: 'p15',
    part: 'Part 15',
    systemOrComponent: 'Heater / Defroster',
    minorDefects: [
      'Control or system failure'
    ],
    majorDefects: [
      'Defroster fails to provide unobstructed view through the windshield'
    ]
  },
  {
    id: 'p16',
    part: 'Part 16',
    systemOrComponent: 'Horn',
    minorDefects: [
      'Vehicle has no operative horn'
    ],
    majorDefects: []
  },
  {
    id: 'p17',
    part: 'Part 17',
    systemOrComponent: 'Hydraulic Brake System',
    minorDefects: [
      'Brake fluid level is below indicated minimum level'
    ],
    majorDefects: [
      'Brake boost or power assist is not operative',
      'Brake fluid leak',
      'Brake pedal fade or insufficient brake pedal reserve',
      'Activated (other than ABS) warning device',
      'Brake fluid reservoir is less than 1/4 full',
      'Parking brake is inoperative'
    ]
  },
  {
    id: 'p18',
    part: 'Part 18',
    systemOrComponent: 'Lamps and Reflectors',
    minorDefects: [
      'Required lamp does not function as intended',
      'Required reflector is missing or partially missing'
    ],
    majorDefects: [
      'When use of lamps is required: no headlights/taillights/turn-indicator/clearance/marker lamps as required',
      'Failure of both rearmost brake lamps'
    ]
  },
  {
    id: 'p19',
    part: 'Part 19',
    systemOrComponent: 'Steering',
    minorDefects: [
      'Steering wheel lash (free-play) is greater than normal'
    ],
    majorDefects: [
      'Steering wheel is insecure or does not respond normally',
      'Steering wheel lash (free-play) exceeds prescribed limit'
    ]
  },
  {
    id: 'p20',
    part: 'Part 20',
    systemOrComponent: 'Suspension System',
    minorDefects: [
      'Air leak in air suspension system',
      'A broken leaf',
      'Suspension fastener is loose, missing or broken'
    ],
    majorDefects: [
      'Damaged (patched, cut, braided, cracked or broken) main spring leaf',
      'Cracked or broken main spring leaf or more than one broken leaf in any spring assembly',
      'Part of a spring or suspension is missing, shifted out of place or in contact with another vehicle component'
    ]
  },
  {
    id: 'p21',
    part: 'Part 21',
    systemOrComponent: 'Tires',
    minorDefects: [
      'Damaged tread or sidewall of tire',
      'Tire leaking, if leak cannot be heard'
    ],
    majorDefects: [
      'Flat tire or audible leaking',
      'Tire tread depth is less than wear limit',
      'Tire in contact with another tire or vehicle component other than mud-flap',
      'Tire marked “Not for highway use”',
      'Tire has exposed cords in the tread or outer sidewall area'
    ]
  },
  {
    id: 'p22',
    part: 'Part 22',
    systemOrComponent: 'Wheels, Hubs and Fasteners',
    minorDefects: [
      'Hub oil below minimum level (when fitted with sight glass)',
      'Leaking wheel seal'
    ],
    majorDefects: [
      'Wheel has loose, missing or ineffective fastener',
      'Damaged, cracked or broken wheel, rim or attaching part',
      'Evidence of imminent wheel, hub or bearing failure'
    ]
  },
  {
    id: 'p23',
    part: 'Part 23',
    systemOrComponent: 'Windshield Wiper / Washer',
    minorDefects: [
      'Control or system malfunction',
      'Wiper blade is damaged, missing or fails to adequately clear driver’s field of vision'
    ],
    majorDefects: [
      'Wiper or washer fails to adequately clear driver’s field of vision in area swept by driver’s side wiper'
    ]
  }
]

export function listAllDefects(): { id: string; type: 'minor' | 'major'; text: string }[] {
  const items: { id: string; type: 'minor' | 'major'; text: string }[] = []
  for (const part of schedule1Parts) {
    part.minorDefects.forEach((d, i) => items.push({ id: `${part.id}-m${i + 1}`, type: 'minor', text: `${part.systemOrComponent}: ${d}` }))
    part.majorDefects.forEach((d, i) => items.push({ id: `${part.id}-M${i + 1}`, type: 'major', text: `${part.systemOrComponent}: ${d}` }))
  }
  return items
}


