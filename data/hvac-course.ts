export interface CourseModule {
  id: string
  title: string
  description: string
  duration: number // minutes
  learningObjectives: string[]
  content: {
    videos: VideoContent[]
    texts: TextContent[]
    diagrams: DiagramContent[]
    activities: ActivityContent[]
  }
  questions: Question[]
  prerequisites?: string[]
  order: number
}

export interface VideoContent {
  id: string
  title: string
  description: string
  duration: number // minutes
  videoUrl?: string // placeholder for now
  thumbnail: string
  transcriptUrl?: string
  chapters?: {
    title: string
    timestamp: number
  }[]
}

export interface TextContent {
  id: string
  title: string
  content: string
  type: 'definition' | 'explanation' | 'case-study' | 'procedure'
}

export interface DiagramContent {
  id: string
  title: string
  imageUrl: string
  labels?: {
    x: number
    y: number
    label: string
    description: string
  }[]
  interactive?: boolean
}

export interface ActivityContent {
  id: string
  title: string
  type: 'drag-drop' | 'labeling' | 'simulation' | 'case-study'
  instructions: string
  data: any // flexible for different activity types
}

export interface Question {
  id: string
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'drag-drop' | 'scenario' | 'case-study'
  question: string
  options?: string[] // for multiple choice
  correctAnswer: string | string[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
}

// HVAC Course Module Data
export const hvacCourse: CourseModule[] = [
  {
    id: 'hvac-module-1',
    title: 'Introduction to HVAC & Safety',
    description: 'Complete introduction to HVAC systems with essential safety protocols',
    duration: 180, // 2-3 hours as specified
    order: 1,
    learningObjectives: [
      'Explain what HVAC means and its importance in residential, commercial, and industrial settings',
      'Identify the main components of HVAC systems',
      'Apply basic workplace safety protocols (PPE, hazard awareness, and lockout/tagout)',
      'Recognize common HVAC tools and their applications'
    ],
    content: {
      videos: [
        {
          id: 'hvac-what-is-hvac',
          title: 'What is HVAC? - 5 Minute Explainer',
          description: 'Animated overview of HVAC systems and their importance in modern buildings',
          duration: 5,
          thumbnail: '/videos/hvac-explainer-thumbnail.jpg',
          chapters: [
            { title: 'HVAC Definition', timestamp: 0 },
            { title: 'Main Components', timestamp: 120 },
            { title: 'System Types', timestamp: 240 },
            { title: 'Real-World Applications', timestamp: 300 }
          ]
        },
        {
          id: 'hvac-safety-workshop',
          title: 'PPE, Tools & Safety Workshop',
          description: 'Hands-on demonstration of PPE usage, tool introduction, and lockout/tagout procedures',
          duration: 10,
          thumbnail: '/videos/hvac-safety-workshop-thumbnail.jpg',
          chapters: [
            { title: 'Personal Protective Equipment', timestamp: 0 },
            { title: 'Common HVAC Tools', timestamp: 300 },
            { title: 'Lockout/Tagout Demo', timestamp: 480 },
            { title: 'Safety Checklist', timestamp: 540 }
          ]
        }
      ],
      texts: [
        {
          id: 'hvac-definition',
          title: '1. What is HVAC?',
          type: 'definition',
          content: `
# What is HVAC?

HVAC stands for **Heating, Ventilation, and Air Conditioning**.

## Core Functions:
- **Heating** → Warming indoor spaces
- **Ventilation** → Air circulation and fresh air exchange  
- **Air Conditioning** → Cooling and dehumidifying indoor air

## Why HVAC Matters:
- Regulates **temperature, humidity, and air quality**
- Essential for **residential homes, schools, hospitals, data centers, manufacturing plants**
- Critical for **productivity** and **health** in modern buildings
- Supports **food preservation** and **cold storage** systems

## Key Industries Using HVAC:
- **Residential**: Homes, apartments, condos
- **Commercial**: Offices, retail stores, restaurants
- **Industrial**: Factories, warehouses, processing plants
- **Institutional**: Schools, hospitals, government buildings
          `
        },
        {
          id: 'hvac-main-components',
          title: '2. Main HVAC Components',
          type: 'explanation',
          content: `
# Main HVAC System Components

## Primary Components:
- **Furnace/Boiler** → Provides heating
- **Air Conditioner/Heat Pump** → Provides cooling
- **Ductwork** → Distributes air throughout building
- **Thermostat** → Controls and regulates system operation
- **Refrigerant Lines** → Carries heat transfer medium

## How They Work Together:
1. **Thermostat** senses temperature and signals system
2. **Furnace or AC** conditions the air (heats or cools)
3. **Ductwork** distributes conditioned air via supply vents
4. **Return vents** bring air back to be reconditioned
5. **Filters** clean air before it recirculates

## System Flow:
Air In → Furnace/AC → Ducts → Supply Vents → Living Space → Return Vents → Filter → Repeat
          `
        },
        {
          id: 'hvac-safety-basics',
          title: '3. Safety Basics in HVAC',
          type: 'procedure',
          content: `
# Essential Safety Protocols for HVAC Work

## Personal Protective Equipment (PPE):
- **Safety glasses** → Eye protection from debris
- **Work gloves** → Hand protection from cuts and chemicals
- **Steel-toe boots** → Foot protection from heavy equipment
- **Hearing protection** → In loud mechanical rooms

## Critical Safety Procedures:
### Lockout/Tagout (LOTO):
- Always **de-energize equipment** before servicing
- Use **lock + tag** with your name, date, and purpose
- **Verify with tester** before starting work
- **Never remove** someone else's lock

### Refrigerant Safety:
- Handle **refrigerants carefully** → avoid direct skin contact
- Prevent **leaks** → environmental and safety hazard
- Use proper **recovery equipment** when removing refrigerant
- Ensure adequate **ventilation** in enclosed spaces

## Workplace Hazards to Watch For:
- **Electrical hazards** → Live wires, control panels
- **Sharp metal edges** → Ductwork, sheet metal
- **Heavy lifting** → Compressors, condensers
- **Confined spaces** → Mechanical rooms, crawl spaces
- **Fall hazards** → Rooftop units, ladders
          `
        },
        {
          id: 'hvac-common-tools',
          title: '4. Common Tools for HVAC Technicians',
          type: 'explanation',
          content: `
# Essential HVAC Tools

## Measurement & Testing Tools:
- **Manifold Gauges** → Measure refrigerant pressures
- **Multimeter** → Test electrical values (voltage, current, resistance)
- **Thermometer** → Measure air and surface temperatures
- **Manometer** → Measure gas pressures

## Hand Tools:
- **Pipe Bender** → Shape copper refrigerant lines
- **Tubing Cutter** → Cut copper pipes cleanly
- **Wrenches** → Various sizes for fittings and nuts
- **Screwdrivers** → Phillips and flathead varieties

## Power Tools:
- **Drill** → Make holes for mounting and routing
- **Reciprocating Saw** → Cut through various materials
- **Angle Grinder** → Cut metal and remove material

## Specialized HVAC Tools:
- **Vacuum Pump** → Remove air and moisture from systems
- **Leak Detector** → Find refrigerant leaks
- **Recovery Machine** → Safely remove refrigerant
- **Torch Set** → Brazing and soldering connections

## Tool Safety:
- **Inspect tools** before each use
- **Use proper tool** for each job
- **Keep tools clean** and well-maintained
- **Store safely** when not in use
          `
        }
      ],
        {
          id: 'hvac-applications',
          title: 'HVAC Applications in Nigeria',
          type: 'case-study',
          content: `
# Real-World HVAC Applications in Nigeria

## Residential Applications:
- **Split AC Units**: Most common in Nigerian homes
- **Window Units**: Budget-friendly option for single rooms
- **Central Air**: Luxury homes and estates

## Commercial Applications:
- **Shopping Centers**: Shoprite, SPAR, Game stores across Nigeria
- **Office Buildings**: Banks, telecom companies, corporate headquarters
- **Hotels**: Marriott, Radisson Blu, local hospitality chains

## Industrial Applications:
- **Cold Storage**: Preserving agricultural products for export
- **Manufacturing**: Dangote factories, breweries, textile mills
- **Data Centers**: MainOne, Rack Centre, IXPs

## Economic Impact:
- **Job Creation**: Thousands of HVAC technician positions
- **Energy Efficiency**: Reducing electricity costs with proper systems
- **Business Growth**: Enabling year-round comfortable operations
          `
        }
      ],
      diagrams: [
        {
          id: 'hvac-system-schematic',
          title: 'Central HVAC System Schematic',
          imageUrl: '/diagrams/hvac-system-schematic.svg',
          labels: [
            { x: 20, y: 30, label: 'Furnace/Heat Exchanger', description: 'Heats or cools incoming air' },
            { x: 50, y: 15, label: 'Supply Ducts', description: 'Distribute conditioned air' },
            { x: 80, y: 25, label: 'Supply Vents', description: 'Deliver air to rooms' },
            { x: 80, y: 75, label: 'Return Vents', description: 'Collect air for reconditioning' },
            { x: 50, y: 85, label: 'Return Ducts', description: 'Return air to system' },
            { x: 20, y: 70, label: 'Air Filter', description: 'Clean air before reconditioning' },
            { x: 35, y: 50, label: 'Blower Fan', description: 'Moves air through system' },
            { x: 65, y: 50, label: 'Thermostat', description: 'Controls system operation' }
          ],
          interactive: true
        },
        {
          id: 'ppe-diagram',
          title: 'HVAC Technician Complete PPE Setup',
          imageUrl: '/diagrams/hvac-ppe-setup.svg',
          labels: [
            { x: 30, y: 15, label: 'Safety Glasses', description: 'Protect eyes from debris and chemicals' },
            { x: 70, y: 15, label: 'Hard Hat (when required)', description: 'Head protection on construction sites' },
            { x: 20, y: 40, label: 'Work Gloves', description: 'Cut-resistant and chemical-resistant' },
            { x: 80, y: 40, label: 'Tool Belt', description: 'Organize and secure tools' },
            { x: 50, y: 70, label: 'Steel-toe Boots', description: 'Protect feet from heavy equipment' },
            { x: 50, y: 25, label: 'High-vis Vest', description: 'Visibility in work areas' }
          ],
          interactive: true
        },
        {
          id: 'hvac-tools-diagram',
          title: 'Essential HVAC Tools Layout',
          imageUrl: '/diagrams/hvac-tools-toolbox.svg',
          labels: [
            { x: 15, y: 20, label: 'Manifold Gauges', description: 'Measure refrigerant pressures' },
            { x: 45, y: 20, label: 'Multimeter', description: 'Test electrical values' },
            { x: 75, y: 20, label: 'Pipe Bender', description: 'Shape copper lines' },
            { x: 15, y: 50, label: 'Vacuum Pump', description: 'Remove air and moisture' },
            { x: 45, y: 50, label: 'Leak Detector', description: 'Find refrigerant leaks' },
            { x: 75, y: 50, label: 'Tubing Cutter', description: 'Cut copper pipes cleanly' },
            { x: 30, y: 80, label: 'Torch Set', description: 'Brazing and soldering' },
            { x: 60, y: 80, label: 'Recovery Machine', description: 'Remove refrigerant safely' }
          ],
          interactive: true
        }
      ],
      activities: [
        {
          id: 'hvac-components-matching',
          title: 'Match HVAC Components to Functions',
          type: 'drag-drop',
          instructions: 'Drag each HVAC component to its primary function',
          data: {
            items: [
              { id: 'furnace', text: 'Furnace/Boiler', category: 'component' },
              { id: 'ductwork', text: 'Ductwork', category: 'component' },
              { id: 'thermostat', text: 'Thermostat', category: 'component' },
              { id: 'air-conditioner', text: 'Air Conditioner', category: 'component' },
              { id: 'refrigerant-lines', text: 'Refrigerant Lines', category: 'component' }
            ],
            targets: [
              { id: 'heating', text: 'Provides Heating', accepts: ['furnace'] },
              { id: 'cooling', text: 'Provides Cooling', accepts: ['air-conditioner'] },
              { id: 'distribution', text: 'Air Distribution', accepts: ['ductwork'] },
              { id: 'control', text: 'System Control', accepts: ['thermostat'] },
              { id: 'heat-transfer', text: 'Heat Transfer Medium', accepts: ['refrigerant-lines'] }
            ]
          }
        },
        {
          id: 'ppe-safety-matching',
          title: 'Match PPE to Safety Hazards',
          type: 'drag-drop',
          instructions: 'Drag each piece of PPE to the hazard it protects against',
          data: {
            items: [
              { id: 'safety-glasses', text: 'Safety Glasses', category: 'ppe' },
              { id: 'work-gloves', text: 'Work Gloves', category: 'ppe' },
              { id: 'steel-toe-boots', text: 'Steel-toe Boots', category: 'ppe' },
              { id: 'hearing-protection', text: 'Hearing Protection', category: 'ppe' }
            ],
            targets: [
              { id: 'eye-hazards', text: 'Flying Debris & Chemicals', accepts: ['safety-glasses'] },
              { id: 'hand-hazards', text: 'Cuts & Chemical Contact', accepts: ['work-gloves'] },
              { id: 'foot-hazards', text: 'Heavy Equipment & Crush', accepts: ['steel-toe-boots'] },
              { id: 'noise-hazards', text: 'Loud Mechanical Rooms', accepts: ['hearing-protection'] }
            ]
          }
        },
        {
          id: 'split-system-labeling',
          title: 'Label the Split-System AC Components',
          type: 'labeling',
          instructions: 'Click on each component to identify it correctly',
          data: {
            imageUrl: '/diagrams/split-system-ac-blank.svg',
            labels: [
              { x: 25, y: 30, correctLabel: 'Compressor', options: ['Compressor', 'Condenser', 'Evaporator', 'Blower'] },
              { x: 60, y: 25, correctLabel: 'Condenser Coil', options: ['Condenser Coil', 'Evaporator Coil', 'Heat Exchanger', 'Filter'] },
              { x: 75, y: 70, correctLabel: 'Evaporator Coil', options: ['Evaporator Coil', 'Condenser Coil', 'Compressor', 'Fan'] },
              { x: 40, y: 75, correctLabel: 'Blower Fan', options: ['Blower Fan', 'Condenser Fan', 'Compressor', 'Thermostat'] },
              { x: 50, y: 50, correctLabel: 'Refrigerant Line', options: ['Refrigerant Line', 'Drain Line', 'Electrical Line', 'Gas Line'] }
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 'hvac-stands-for',
        type: 'multiple-choice',
        question: 'What does HVAC stand for?',
        options: [
          'Heating, Ventilation, and Air Conditioning',
          'Heating, Vacuum, Air Chamber',
          'Humidity, Ventilation, Air Cooling',
          'Heat, Vapor, Air Control'
        ],
        correctAnswer: 'Heating, Ventilation, and Air Conditioning',
        explanation: 'HVAC stands for Heating, Ventilation, and Air Conditioning - the three core functions of environmental control systems.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'ductwork-function',
        type: 'multiple-choice',
        question: 'Which part of the HVAC system distributes air throughout a building?',
        options: [
          'Thermostat',
          'Ductwork',
          'Condenser',
          'Compressor'
        ],
        correctAnswer: 'Ductwork',
        explanation: 'Ductwork is the network of tubes that distributes conditioned air from the central unit to different areas of the building.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'ppe-stands-for',
        type: 'multiple-choice',
        question: 'What does PPE stand for?',
        options: [
          'Personal Protection Equipment',
          'Personal Protective Equipment',
          'Pressure Pump Equipment',
          'Professional Protection Elements'
        ],
        correctAnswer: 'Personal Protective Equipment',
        explanation: 'PPE stands for Personal Protective Equipment - gear worn to protect workers from workplace hazards.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'multimeter-function',
        type: 'multiple-choice',
        question: 'Which tool measures electrical values in HVAC systems?',
        options: [
          'Pipe bender',
          'Multimeter',
          'Leak detector',
          'Vacuum pump'
        ],
        correctAnswer: 'Multimeter',
        explanation: 'A multimeter measures electrical values including voltage, current, and resistance - essential for electrical troubleshooting.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'refrigerant-handling-safety',
        type: 'true-false',
        question: 'Refrigerants can be handled safely without gloves.',
        correctAnswer: 'False',
        explanation: 'Refrigerants should always be handled with appropriate gloves to prevent frostbite and skin contact with chemicals.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'thermostat-heating-only',
        type: 'true-false',
        question: 'A thermostat only controls heating, not cooling.',
        correctAnswer: 'False',
        explanation: 'Modern thermostats control both heating and cooling systems, automatically switching between them to maintain set temperature.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'lockout-tagout-purpose',
        type: 'multiple-choice',
        question: 'Which safety practice ensures a machine cannot be powered on during maintenance?',
        options: [
          'Fire drill',
          'Lockout/Tagout',
          'Grounding',
          'Double insulation'
        ],
        correctAnswer: 'Lockout/Tagout',
        explanation: 'Lockout/Tagout (LOTO) procedures ensure equipment cannot be accidentally energized while maintenance is being performed.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'thermostat-function',
        type: 'multiple-choice',
        question: 'What is the primary function of a thermostat?',
        options: [
          'Distributes air',
          'Measures refrigerant pressure',
          'Controls system operation',
          'Stores energy'
        ],
        correctAnswer: 'Controls system operation',
        explanation: 'The thermostat senses temperature and controls when the heating or cooling system operates to maintain desired temperature.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'loto-importance',
        type: 'short-answer',
        question: 'Why is lockout/tagout critical when servicing HVAC systems?',
        correctAnswer: 'Lockout/tagout prevents accidental startup of equipment during maintenance, protecting workers from electrical shock, moving parts, and other hazards. It ensures equipment cannot be energized while workers are performing service.',
        explanation: 'LOTO is a critical safety procedure that prevents serious injuries and fatalities by ensuring equipment cannot be accidentally started during maintenance work.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'required-ppe-list',
        type: 'short-answer',
        question: 'List 3 pieces of PPE required when working with HVAC systems.',
        correctAnswer: 'Safety glasses, work gloves, steel-toe boots. (Other acceptable answers: hearing protection, hard hat, high-visibility vest)',
        explanation: 'Basic PPE for HVAC work includes eye protection, hand protection, and foot protection. Additional PPE may be required based on specific work conditions.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  {
    id: 'hvac-module-2',
    title: 'Safety Training & Workplace Practices',
    description: 'Comprehensive safety training covering workplace hazards, PPE, LOTO procedures, and industry standards',
    duration: 120, // 2 hours as specified
    order: 2,
    learningObjectives: [
      'Identify workplace hazards in HVAC environments',
      'Properly use Personal Protective Equipment (PPE)',
      'Apply Lockout/Tagout (LOTO) procedures',
      'Demonstrate safe handling of refrigerants and pressurized systems',
      'Follow OSHA/CSA and industry safety standards'
    ],
    content: {
      videos: [
        {
          id: 'ppe-demonstration',
          title: 'Personal Protective Equipment in HVAC',
          description: 'Complete guide to PPE selection and proper usage',
          duration: 18,
          thumbnail: '/videos/ppe-demo-thumbnail.jpg',
          chapters: [
            { title: 'Eye and face protection', timestamp: 0 },
            { title: 'Respiratory protection', timestamp: 300 },
            { title: 'Hand and skin protection', timestamp: 600 },
            { title: 'PPE maintenance', timestamp: 900 }
          ]
        },
        {
          id: 'refrigerant-safety',
          title: 'Safe Refrigerant Handling',
          description: 'Proper procedures for handling refrigerant cylinders and detecting leaks',
          duration: 22,
          thumbnail: '/videos/refrigerant-safety-thumbnail.jpg'
        }
      ],
      texts: [
        {
          id: 'electrical-safety',
          title: 'Electrical Safety in HVAC',
          type: 'procedure',
          content: `
# Electrical Safety Procedures

## Before Starting Work:
1. **Turn off power** at the main breaker
2. **Lock out/Tag out** procedures
3. **Test circuits** with multimeter to confirm no power
4. **Use appropriate PPE** including insulated gloves

## Working with Live Circuits:
- **Never work alone** on live electrical systems
- **Use insulated tools** rated for the voltage
- **Wear safety glasses** and rubber-soled shoes
- **Keep one hand in pocket** to avoid creating a circuit through your body

## Nigerian Context:
- **Voltage variations** are common - always verify
- **Grounding systems** may not meet international standards
- **Power surges** from unstable grid - use surge protectors
- **Generator connections** require special safety considerations
          `
        }
      ],
      diagrams: [
        {
          id: 'ppe-diagram',
          title: 'Complete HVAC PPE Setup',
          imageUrl: '/diagrams/hvac-ppe.svg',
          labels: [
            { x: 20, y: 10, label: 'Safety Glasses', description: 'Protect eyes from debris and chemicals' },
            { x: 20, y: 30, label: 'Respirator', description: 'Filter harmful vapors and particles' },
            { x: 50, y: 40, label: 'Work Gloves', description: 'Protect hands from cuts and chemicals' },
            { x: 30, y: 80, label: 'Safety Boots', description: 'Non-slip soles and electrical protection' }
          ],
          interactive: true
        }
      ],
      activities: [
        {
          id: 'ppe-matching',
          title: 'Match PPE to Hazards',
          type: 'drag-drop',
          instructions: 'Drag each piece of PPE to the hazard it protects against',
          data: {
            items: [
              { id: 'safety-glasses', text: 'Safety Glasses', category: 'ppe' },
              { id: 'respirator', text: 'Respirator Mask', category: 'ppe' },
              { id: 'insulated-gloves', text: 'Insulated Gloves', category: 'ppe' },
              { id: 'safety-boots', text: 'Safety Boots', category: 'ppe' }
            ],
            targets: [
              { id: 'electrical', text: 'Electrical Shock', accepts: ['insulated-gloves', 'safety-boots'] },
              { id: 'chemical', text: 'Refrigerant Exposure', accepts: ['respirator', 'safety-glasses'] },
              { id: 'mechanical', text: 'Flying Debris', accepts: ['safety-glasses'] },
              { id: 'slip', text: 'Slippery Surfaces', accepts: ['safety-boots'] }
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 'ppe-scenario',
        type: 'scenario',
        question: 'You arrive at a job site to service an AC unit on a rooftop in Lagos during rainy season. What safety precautions should you take before starting work?',
        correctAnswer: 'Check weather conditions and postpone if lightning risk, ensure proper fall protection equipment, verify electrical safety in wet conditions, wear non-slip footwear, and have emergency communication plan.',
        explanation: 'Rooftop work in Nigeria\'s rainy season requires extra precautions due to slip hazards, electrical risks from water, and severe weather possibilities.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'refrigerant-leak-response',
        type: 'multiple-choice',
        question: 'What is the first step when you detect a refrigerant leak?',
        options: [
          'Immediately begin repairs',
          'Evacuate the area and ensure ventilation',
          'Call the supervisor',
          'Take photos for documentation'
        ],
        correctAnswer: 'Evacuate the area and ensure ventilation',
        explanation: 'Safety first - refrigerant leaks can displace oxygen and cause health hazards. Always evacuate and ventilate before taking any other action.',
        difficulty: 'medium',
        points: 10
      }
    ]
  }

  // Continue with remaining modules...
]

export default hvacCourse
