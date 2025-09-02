// HVAC Modules 4-8: Advanced Trade School Content
// Ready for direct platform implementation

import type { CourseModule } from './hvac-course'

export const hvacAdvancedModules: CourseModule[] = [
  {
    id: 'hvac-module-4',
    title: 'Gas Piping & Combustion Fundamentals',
    description: 'Gas piping systems, safety practices, and combustion theory for HVAC applications',
    duration: 150, // 2.5 hours
    order: 4,
    learningObjectives: [
      'Identify different types of gas piping (steel, copper, CSST, polyethylene)',
      'Understand and apply gas piping codes and standards (CSA B149, NFPA 54)',
      'Size gas piping systems correctly using tables and charts',
      'Perform leak testing safely',
      'Explain combustion theory and efficiency',
      'Diagnose incomplete combustion issues'
    ],
    content: {
      videos: [
        {
          id: 'gas-piping-materials',
          title: 'Gas Piping Materials & Installation',
          description: 'Overview of steel, copper, CSST, and PE piping with installation techniques',
          duration: 15,
          thumbnail: '/videos/gas-piping-materials-thumbnail.jpg',
          chapters: [
            { title: 'Black Iron Steel Pipe', timestamp: 0 },
            { title: 'Copper Tubing Applications', timestamp: 300 },
            { title: 'CSST Installation & Bonding', timestamp: 600 },
            { title: 'PE Underground Distribution', timestamp: 900 }
          ]
        },
        {
          id: 'combustion-fundamentals',
          title: 'Combustion Theory & Efficiency',
          description: 'Complete vs incomplete combustion, efficiency calculations, and safety',
          duration: 20,
          thumbnail: '/videos/combustion-theory-thumbnail.jpg',
          chapters: [
            { title: 'Combustion Triangle', timestamp: 0 },
            { title: 'Complete Combustion Process', timestamp: 400 },
            { title: 'Incomplete Combustion Dangers', timestamp: 800 },
            { title: 'Efficiency & Troubleshooting', timestamp: 1200 }
          ]
        }
      ],
      texts: [
        {
          id: 'gas-piping-materials-guide',
          title: 'Gas Piping Materials & Applications',
          type: 'explanation',
          content: `
# Gas Piping Materials Guide

## Steel (Black Iron)
- **Most common** for natural gas installations
- **Durable** and long-lasting
- **Threaded connections** for reliability
- **Applications**: Indoor distribution, appliance connections

## Copper Tubing
- **Limited use** in gas applications
- **Must check local codes** - some prohibit due to sulfur content
- **Flare fittings** for connections
- **Applications**: Short runs, specific jurisdictions only

## CSST (Corrugated Stainless Steel Tubing)
- **Flexible** stainless steel construction
- **Faster installation** than rigid pipe
- **REQUIRES BONDING** to electrical ground
- **Applications**: New construction, retrofits

## Polyethylene (PE)
- **Underground use only** for natural gas
- **Corrosion resistant** 
- **Fusion welded** connections
- **Applications**: Service lines, distribution mains

## Safety Requirements:
- All installations must follow **CSA B149** (Canada) or **NFPA 54** (US)
- **Pressure testing** required before commissioning
- **Leak detection** mandatory at all connections
- **Proper grounding** for CSST installations
          `
        },
        {
          id: 'pipe-sizing-calculations',
          title: 'Gas Pipe Sizing Methods',
          type: 'procedure',
          content: `
# Gas Pipe Sizing Calculations

## Factors Affecting Pipe Size:
1. **Total BTU demand** of all appliances
2. **Length of pipe run** from meter to appliances
3. **Type of gas** (Natural Gas vs Propane)
4. **Allowable pressure drop** (typically 0.3" WC for NG)

## Example Calculation:
**Scenario**: Size pipe for 120,000 BTU/hr furnace, 40 ft from meter

**Step 1**: Determine gas type and pressure
- Natural Gas at 7" WC inlet pressure
- Allowable drop: 0.3" WC

**Step 2**: Use sizing table
- 120,000 BTU/hr at 40 ft run
- From NFPA 54 Table: **1" steel pipe required**

**Step 3**: Verify with formula
- Q = (P₁² - P₂²) × K × D⁵ / (L × SG)
- Where: Q=flow, P=pressure, K=constant, D=diameter, L=length, SG=specific gravity

## Sizing Tables Include:
- **Steel pipe**: Various diameters and lengths
- **CSST**: Manufacturer-specific tables
- **Copper**: Limited applications
- **PE**: Underground distribution sizing

## Safety Notes:
- **Never undersized** - causes low pressure and poor performance
- **Document calculations** for inspection
- **Consider future expansion** in sizing decisions
          `
        },
        {
          id: 'combustion-theory',
          title: 'Combustion Fundamentals',
          type: 'explanation',
          content: `
# Combustion Theory & Safety

## Complete Combustion
**Chemical Reaction**: Fuel + Oxygen → CO₂ + H₂O + Heat
- **Blue flame** indicates complete combustion
- **Maximum efficiency** heat production
- **Safe operation** with proper products

## Incomplete Combustion  
**Chemical Reaction**: Fuel + Limited Oxygen → CO + Soot + Heat
- **Yellow flame** indicates incomplete combustion
- **Dangerous carbon monoxide** production
- **Reduced efficiency** and equipment damage

## Combustion Triangle
**Three Requirements**:
1. **Fuel** (Natural gas, propane)
2. **Oxygen** (Air supply)
3. **Ignition** (Pilot light, electronic ignition)

Remove any element = combustion stops

## Air-to-Gas Ratios
- **Natural Gas**: ~10:1 air to gas ratio
- **Propane**: ~24:1 air to gas ratio
- **Proper mixing** essential for complete combustion

## Safety Considerations
- **Adequate ventilation** prevents CO buildup
- **CO detectors** mandatory in occupied spaces
- **Regular inspection** of heat exchangers
- **Proper venting** removes combustion products

## Troubleshooting Combustion Issues
**Yellow Flames**: 
- Insufficient air supply
- Dirty burners
- Improper gas pressure

**Sooting**:
- Incomplete combustion
- Poor venting
- Oversized orifices

**Poor Efficiency**:
- Dirty heat exchanger
- Incorrect air/fuel mixture
- Blocked venting
          `
        }
      ],
      diagrams: [
        {
          id: 'gas-pipe-sizing-chart',
          title: 'Gas Pipe Sizing Chart',
          imageUrl: '/diagrams/gas-pipe-sizing-chart.svg',
          labels: [
            { x: 10, y: 20, label: 'BTU/hr Demand', description: 'Total appliance requirements' },
            { x: 50, y: 20, label: 'Pipe Length (ft)', description: 'Distance from meter to appliance' },
            { x: 90, y: 20, label: 'Required Pipe Size', description: 'Minimum diameter needed' },
            { x: 30, y: 80, label: 'Natural Gas @ 0.3" WC drop', description: 'Standard sizing conditions' }
          ],
          interactive: true
        },
        {
          id: 'combustion-triangle',
          title: 'Combustion Triangle Diagram',
          imageUrl: '/diagrams/combustion-triangle.svg',
          labels: [
            { x: 50, y: 10, label: 'FUEL', description: 'Natural gas or propane' },
            { x: 20, y: 80, label: 'OXYGEN', description: 'Air supply for combustion' },
            { x: 80, y: 80, label: 'IGNITION', description: 'Heat source to start combustion' }
          ],
          interactive: true
        },
        {
          id: 'gas-piping-layout',
          title: 'Typical Gas Piping Layout',
          imageUrl: '/diagrams/gas-piping-layout.svg',
          labels: [
            { x: 10, y: 50, label: 'Gas Meter', description: 'Utility connection point' },
            { x: 30, y: 50, label: 'Main Line (Black Iron)', description: 'Primary distribution' },
            { x: 50, y: 30, label: 'Branch to Furnace', description: '1" pipe for 100K BTU' },
            { x: 50, y: 70, label: 'Branch to Water Heater', description: '3/4" pipe for 40K BTU' },
            { x: 70, y: 50, label: 'CSST Flexible Run', description: 'Modern installation method' }
          ],
          interactive: true
        }
      ],
      activities: [
        {
          id: 'pipe-sizing-exercise',
          title: 'Gas Pipe Sizing Calculation',
          type: 'simulation',
          instructions: 'Calculate the correct pipe size for given BTU loads and distances',
          data: {
            scenarios: [
              {
                appliance: 'Furnace',
                btu: 100000,
                distance: 50,
                correctSize: '1 inch',
                gasType: 'Natural Gas'
              },
              {
                appliance: 'Water Heater', 
                btu: 40000,
                distance: 30,
                correctSize: '3/4 inch',
                gasType: 'Natural Gas'
              },
              {
                appliance: 'Pool Heater',
                btu: 200000,
                distance: 75,
                correctSize: '1.25 inch',
                gasType: 'Natural Gas'
              }
            ]
          }
        },
        {
          id: 'leak-detection-methods',
          title: 'Gas Leak Detection Techniques',
          type: 'drag-drop',
          instructions: 'Match each leak detection method to its appropriate use case',
          data: {
            items: [
              { id: 'soap-solution', text: 'Soap Solution Test', category: 'method' },
              { id: 'electronic-detector', text: 'Electronic Gas Detector', category: 'method' },
              { id: 'pressure-test', text: 'Pressure Test with Air', category: 'method' },
              { id: 'manometer', text: 'Manometer Pressure Drop Test', category: 'method' }
            ],
            targets: [
              { id: 'joint-testing', text: 'Testing Individual Joints', accepts: ['soap-solution'] },
              { id: 'area-detection', text: 'Detecting Leaks in Large Areas', accepts: ['electronic-detector'] },
              { id: 'system-testing', text: 'Testing Complete System', accepts: ['pressure-test'] },
              { id: 'pressure-monitoring', text: 'Monitoring System Pressure', accepts: ['manometer'] }
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 'gas-pipe-most-common',
        type: 'multiple-choice',
        question: 'Which pipe type is most commonly used indoors for natural gas?',
        options: ['Copper', 'Black steel', 'Polyethylene', 'PVC'],
        correctAnswer: 'Black steel',
        explanation: 'Black iron steel pipe is the most common and widely accepted material for indoor natural gas piping due to its durability and code compliance.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'incomplete-combustion-result',
        type: 'multiple-choice', 
        question: 'What is the result of incomplete combustion?',
        options: ['More CO₂', 'More water vapor', 'Carbon monoxide and soot', 'Higher efficiency'],
        correctAnswer: 'Carbon monoxide and soot',
        explanation: 'Incomplete combustion occurs when there is insufficient oxygen, producing dangerous carbon monoxide and soot instead of clean CO₂ and water.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'csst-bonding-requirement',
        type: 'short-answer',
        question: 'Explain why CSST must be bonded to electrical ground.',
        correctAnswer: 'CSST must be bonded to prevent lightning-induced electrical arcing that could cause gas leaks and fires. The bonding provides a safe path for electrical energy to ground.',
        explanation: 'Bonding CSST is a critical safety requirement to prevent lightning damage and potential gas leaks that could cause explosions.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'furnace-pipe-sizing',
        type: 'scenario',
        question: 'A furnace requiring 100,000 BTU/hr is located 50 ft from the gas meter. Using standard natural gas sizing tables, what pipe size is required?',
        correctAnswer: 'Based on standard NFPA 54 sizing tables for natural gas at 0.3" WC pressure drop, a 1-inch steel pipe is required for 100,000 BTU/hr at 50 ft distance.',
        explanation: 'Pipe sizing must account for BTU demand, distance, and allowable pressure drop. Undersized pipes cause poor performance and safety issues.',
        difficulty: 'hard',
        points: 20
      }
    ]
  },

  {
    id: 'hvac-module-7',
    title: 'Refrigeration Cycle and Components',
    description: 'Understanding the refrigeration cycle, components, and heat transfer principles',
    duration: 120, // 2 hours
    order: 7,
    learningObjectives: [
      'Describe the refrigeration cycle step-by-step',
      'Identify the role of each component in a system',
      'Diagnose common issues (low cooling, frost buildup, compressor faults)',
      'Apply knowledge to real-world HVAC and reefer systems',
      'Understand refrigerant types and environmental considerations'
    ],
    content: {
      videos: [
        {
          id: 'refrigeration-cycle-fundamentals',
          title: 'The Refrigeration Cycle Explained',
          description: 'Step-by-step breakdown of the four-stage refrigeration process',
          duration: 18,
          thumbnail: '/videos/refrigeration-cycle-thumbnail.jpg',
          chapters: [
            { title: 'Compression Stage', timestamp: 0 },
            { title: 'Condensation Process', timestamp: 300 },
            { title: 'Expansion & Pressure Drop', timestamp: 600 },
            { title: 'Evaporation & Heat Absorption', timestamp: 900 },
            { title: 'Cycle Integration', timestamp: 1200 }
          ]
        },
        {
          id: 'reefer-applications-nigeria',
          title: 'Reefer Systems in Nigerian Agriculture',
          description: 'Practical applications of refrigeration in food preservation and transport',
          duration: 12,
          thumbnail: '/videos/reefer-nigeria-thumbnail.jpg',
          chapters: [
            { title: 'Cold Chain Importance', timestamp: 0 },
            { title: 'Truck Reefer Systems', timestamp: 240 },
            { title: 'Maintenance in Hot Climates', timestamp: 480 },
            { title: 'Energy Efficiency Solutions', timestamp: 720 }
          ]
        }
      ],
      texts: [
        {
          id: 'refrigeration-cycle-stages',
          title: 'The Four Stages of Refrigeration',
          type: 'explanation',
          content: `
# The Refrigeration Cycle: Four Essential Stages

## Stage 1: Compression
- **Location**: Compressor (heart of the system)
- **Process**: Low-pressure refrigerant gas enters compressor
- **Result**: High-pressure, high-temperature gas exits
- **Purpose**: Increases pressure and temperature for heat rejection

## Stage 2: Condensation  
- **Location**: Condenser coil (usually outdoor unit)
- **Process**: Hot, high-pressure gas releases heat to outside air
- **Result**: High-pressure liquid refrigerant
- **Purpose**: Rejects heat absorbed from indoor space

## Stage 3: Expansion
- **Location**: Expansion valve or capillary tube
- **Process**: High-pressure liquid passes through restriction
- **Result**: Low-pressure, low-temperature liquid
- **Purpose**: Pressure drop prepares refrigerant for heat absorption

## Stage 4: Evaporation
- **Location**: Evaporator coil (indoor unit)
- **Process**: Low-pressure liquid absorbs heat from indoor air
- **Result**: Low-pressure gas returns to compressor
- **Purpose**: Provides cooling effect by absorbing heat

## Key Principles:
- **Heat moves from hot to cold** - system moves heat from inside to outside
- **Pressure and temperature relationship** - higher pressure = higher temperature
- **Phase changes** - liquid to gas (absorbs heat), gas to liquid (releases heat)
- **Continuous cycle** - refrigerant circulates continuously when system operates

## Nigerian Applications:
- **Reefer trucks**: Preserve food during transport in hot climate
- **Cold storage**: Reduce post-harvest losses
- **Air conditioning**: Combat high temperatures and humidity
          `
        },
        {
          id: 'refrigeration-components',
          title: 'Refrigeration System Components',
          type: 'explanation',
          content: `
# Essential Refrigeration Components

## Compressor (The Heart)
- **Function**: Pumps refrigerant and increases pressure
- **Types**: Reciprocating, scroll, rotary, centrifugal
- **Power Source**: Electric motor (single-phase or three-phase)
- **Maintenance**: Oil changes, electrical connections, vibration isolation

## Condenser Coil & Fan
- **Function**: Rejects heat from refrigerant to outside air
- **Design**: Fin-and-tube construction for maximum heat transfer
- **Fan**: Moves air across coil for efficient heat rejection
- **Maintenance**: Clean coils, check fan operation, clear obstructions

## Expansion Device
**Thermostatic Expansion Valve (TXV)**:
- Automatically controls refrigerant flow
- Responds to evaporator superheat
- Provides precise control

**Capillary Tube**:
- Fixed restriction (no moving parts)
- Used in smaller systems
- Less expensive but less precise

## Evaporator Coil & Fan
- **Function**: Absorbs heat from indoor air
- **Design**: Fin-and-tube with large surface area
- **Fan**: Circulates air across coil
- **Defrost**: Removes ice buildup in low-temperature applications

## Refrigerant Lines
- **Suction Line**: Large diameter, insulated, returns gas to compressor
- **Liquid Line**: Small diameter, carries liquid from condenser
- **Hot Gas Line**: Carries high-pressure gas from compressor
- **Material**: Copper tubing with proper insulation

## Filter-Dryer
- **Function**: Removes moisture and contaminants
- **Location**: Liquid line before expansion device
- **Maintenance**: Replace during refrigerant service
- **Critical**: Prevents system damage from moisture and debris

## Refrigerant
**Traditional Types**:
- **R-22**: Being phased out due to ozone depletion
- **R-134a**: Common in automotive and some HVAC

**Modern Types**:
- **R-410A**: Higher efficiency, no ozone depletion
- **R-32**: Lower global warming potential
- **R-1234yf**: Newest, environmentally friendly

## Safety Considerations:
- **Proper handling**: Use recovery equipment
- **Environmental protection**: Prevent releases to atmosphere
- **Personal protection**: Gloves and eye protection
- **Leak detection**: Regular system monitoring
          `
        },
        {
          id: 'common-refrigeration-problems',
          title: 'Troubleshooting Common Issues',
          type: 'procedure',
          content: `
# Common Refrigeration Problems & Solutions

## Low Cooling Performance
**Symptoms**: 
- Insufficient cooling
- Long run times
- High energy consumption

**Causes & Solutions**:
- **Dirty condenser coil** → Clean coil, check airflow
- **Low refrigerant charge** → Check for leaks, add refrigerant
- **Dirty air filter** → Replace filter, check airflow
- **Faulty compressor** → Test compressor operation, replace if needed

## Frost Buildup on Evaporator
**Symptoms**:
- Ice formation on coil
- Reduced airflow
- Poor cooling

**Causes & Solutions**:
- **Poor airflow** → Check fan operation, clean coil
- **Low refrigerant** → Check charge, look for leaks
- **Faulty defrost cycle** → Test defrost controls and heaters
- **Dirty air filter** → Replace filter

## Short Cycling Compressor
**Symptoms**:
- Compressor starts and stops frequently
- Inability to maintain temperature
- High wear on components

**Causes & Solutions**:
- **Thermostat issues** → Check calibration and wiring
- **High pressure switch** → Check condenser airflow and cleaning
- **Low pressure switch** → Check refrigerant charge
- **Electrical problems** → Test contactors and wiring

## Refrigerant Leaks
**Symptoms**:
- Gradual loss of cooling
- Ice formation at leak points
- Hissing sounds

**Detection Methods**:
- **Soap solution** → Apply to suspected areas, look for bubbles
- **Electronic detector** → Use refrigerant-specific leak detector
- **UV dye** → Add dye to system, use UV light to locate leaks

**Repair Process**:
1. Recover refrigerant safely
2. Repair leak point (brazing, replacement)
3. Pressure test with nitrogen
4. Evacuate system
5. Recharge with proper amount

## Nigerian Climate Considerations:
- **High ambient temperatures** stress condensers
- **Dust and debris** clog coils faster
- **Power fluctuations** damage electrical components
- **Humidity** affects defrost cycles and drainage

## Preventive Maintenance:
- **Monthly**: Clean/replace air filters
- **Quarterly**: Clean condenser coils, check refrigerant levels
- **Annually**: Complete system inspection, electrical testing
- **As needed**: Clear drainage, check insulation
          `
        }
      ],
      diagrams: [
        {
          id: 'refrigeration-cycle-diagram',
          title: 'Complete Refrigeration Cycle Flow',
          imageUrl: '/diagrams/refrigeration-cycle-flow.svg',
          labels: [
            { x: 15, y: 20, label: 'Compressor', description: 'Increases pressure and temperature' },
            { x: 50, y: 10, label: 'Condenser', description: 'Rejects heat to outside air' },
            { x: 85, y: 20, label: 'Expansion Valve', description: 'Drops pressure and temperature' },
            { x: 50, y: 90, label: 'Evaporator', description: 'Absorbs heat from indoor air' },
            { x: 30, y: 55, label: 'High Pressure Side', description: 'Liquid line (small diameter)' },
            { x: 70, y: 55, label: 'Low Pressure Side', description: 'Suction line (large diameter)' }
          ],
          interactive: true
        },
        {
          id: 'reefer-truck-layout',
          title: 'Reefer Truck System Layout', 
          imageUrl: '/diagrams/reefer-truck-system.svg',
          labels: [
            { x: 20, y: 10, label: 'Diesel Generator', description: 'Powers refrigeration unit' },
            { x: 50, y: 15, label: 'Condenser Unit', description: 'Mounted on truck exterior' },
            { x: 70, y: 40, label: 'Evaporator Coils', description: 'Inside cargo area for cooling' },
            { x: 30, y: 70, label: 'Insulated Walls', description: 'Minimize heat transfer' },
            { x: 80, y: 80, label: 'Temperature Controls', description: 'Maintain set temperature' }
          ],
          interactive: true
        },
        {
          id: 'heat-transfer-illustration',
          title: 'Heat Transfer in Refrigeration',
          imageUrl: '/diagrams/heat-transfer-refrigeration.svg',
          labels: [
            { x: 20, y: 30, label: 'Heat IN', description: 'Evaporator absorbs indoor heat' },
            { x: 80, y: 30, label: 'Heat OUT', description: 'Condenser rejects heat outdoors' },
            { x: 50, y: 50, label: 'Refrigerant Flow', description: 'Carries heat from inside to outside' },
            { x: 50, y: 80, label: 'System doesn\'t create cold', description: 'It moves heat from one place to another' }
          ],
          interactive: true
        }
      ],
      activities: [
        {
          id: 'refrigeration-cycle-sequencing',
          title: 'Sequence the Refrigeration Cycle',
          type: 'drag-drop',
          instructions: 'Arrange the refrigeration cycle stages in the correct order',
          data: {
            items: [
              { id: 'compression', text: 'Compression - Gas pressure increases', category: 'stage' },
              { id: 'condensation', text: 'Condensation - Gas becomes liquid', category: 'stage' },
              { id: 'expansion', text: 'Expansion - Pressure drops', category: 'stage' },
              { id: 'evaporation', text: 'Evaporation - Liquid becomes gas', category: 'stage' }
            ],
            targets: [
              { id: 'step-1', text: 'Step 1', accepts: ['compression'] },
              { id: 'step-2', text: 'Step 2', accepts: ['condensation'] },
              { id: 'step-3', text: 'Step 3', accepts: ['expansion'] },
              { id: 'step-4', text: 'Step 4', accepts: ['evaporation'] }
            ]
          }
        },
        {
          id: 'component-function-matching',
          title: 'Match Components to Functions',
          type: 'drag-drop',
          instructions: 'Match each refrigeration component to its primary function',
          data: {
            items: [
              { id: 'compressor', text: 'Compressor', category: 'component' },
              { id: 'condenser', text: 'Condenser', category: 'component' },
              { id: 'expansion-valve', text: 'Expansion Valve', category: 'component' },
              { id: 'evaporator', text: 'Evaporator', category: 'component' },
              { id: 'filter-dryer', text: 'Filter-Dryer', category: 'component' }
            ],
            targets: [
              { id: 'pumps-refrigerant', text: 'Pumps & Pressurizes Refrigerant', accepts: ['compressor'] },
              { id: 'rejects-heat', text: 'Rejects Heat to Outside', accepts: ['condenser'] },
              { id: 'drops-pressure', text: 'Drops Refrigerant Pressure', accepts: ['expansion-valve'] },
              { id: 'absorbs-heat', text: 'Absorbs Heat from Indoor Air', accepts: ['evaporator'] },
              { id: 'cleans-refrigerant', text: 'Removes Moisture & Contaminants', accepts: ['filter-dryer'] }
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 'evaporator-function',
        type: 'multiple-choice',
        question: 'Which component of the refrigeration cycle is responsible for absorbing heat from inside a room?',
        options: ['Compressor', 'Condenser', 'Expansion Valve', 'Evaporator'],
        correctAnswer: 'Evaporator',
        explanation: 'The evaporator coil absorbs heat from indoor air, causing the liquid refrigerant to evaporate and providing the cooling effect.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'condenser-failure-effect',
        type: 'multiple-choice',
        question: 'If the condenser fan fails, what happens to the system?',
        options: [
          'Refrigerant pressure decreases',
          'Refrigerant cannot release heat effectively',
          'Evaporator freezes immediately',
          'System runs more efficiently'
        ],
        correctAnswer: 'Refrigerant cannot release heat effectively',
        explanation: 'Without proper airflow across the condenser, refrigerant cannot reject heat effectively, causing high pressure and poor cooling performance.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'refrigerant-creates-cold',
        type: 'true-false',
        question: 'Refrigerant "creates cold air" in the evaporator coil.',
        correctAnswer: 'False',
        explanation: 'Refrigeration systems do not create cold - they move heat from one location to another. The evaporator absorbs heat from indoor air, making it feel cooler.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'compressor-heart-explanation',
        type: 'short-answer',
        question: 'Explain why the compressor is considered the "heart" of the refrigeration system.',
        correctAnswer: 'The compressor is called the heart because it pumps refrigerant throughout the system, just like a heart pumps blood. It provides the pressure difference needed to circulate refrigerant and enables the entire cooling process to function.',
        explanation: 'Like a heart, the compressor is essential for system operation and circulation. Without it, refrigerant cannot move through the system.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'reefer-nigeria-importance',
        type: 'case-study',
        question: 'Explain why reefer trucks are important for agriculture in Nigeria and what maintenance challenges they face in the hot climate.',
        correctAnswer: 'Reefer trucks are crucial for preserving agricultural products during transport in Nigeria\'s hot climate, reducing post-harvest losses and extending market reach. Challenges include: condenser coils getting dirty faster from dust, higher energy consumption due to extreme ambient temperatures, frequent maintenance needs for diesel generators, and difficulty accessing replacement parts in remote areas.',
        explanation: 'Nigeria\'s agricultural sector depends on cold chain logistics to reduce the estimated 40% post-harvest losses. The hot, dusty climate creates unique maintenance challenges.',
        difficulty: 'hard',
        points: 20
      }
    ]
  },

  {
    id: 'hvac-module-8',
    title: 'Electrical Systems for HVAC',
    description: 'Understanding and troubleshooting HVAC electrical systems, controls, and safety procedures',
    duration: 135, // 2.25 hours
    order: 8,
    learningObjectives: [
      'Apply electrical basics: voltage, current, resistance (Ohm\'s Law)',
      'Distinguish between AC and DC power systems',
      'Understand low-voltage (24V) and high-voltage (120V, 208/230V) circuits',
      'Read and interpret wiring diagrams',
      'Safely troubleshoot electrical problems using multimeters',
      'Apply proper lockout/tagout procedures for electrical safety'
    ],
    content: {
      videos: [
        {
          id: 'hvac-electrical-basics',
          title: 'HVAC Electrical Fundamentals',
          description: 'Voltage, current, resistance, and Ohm\'s Law applications in HVAC systems',
          duration: 16,
          thumbnail: '/videos/hvac-electrical-basics-thumbnail.jpg',
          chapters: [
            { title: 'Ohm\'s Law in HVAC', timestamp: 0 },
            { title: 'AC vs DC Power', timestamp: 300 },
            { title: 'Voltage Levels in HVAC', timestamp: 600 },
            { title: 'Power Consumption Calculations', timestamp: 900 }
          ]
        },
        {
          id: 'hvac-control-circuits',
          title: 'HVAC Control Circuits & Wiring',
          description: 'Low-voltage controls, thermostats, relays, and contactors',
          duration: 20,
          thumbnail: '/videos/hvac-controls-thumbnail.jpg',
          chapters: [
            { title: '24V Control Circuits', timestamp: 0 },
            { title: 'Thermostat Wiring', timestamp: 400 },
            { title: 'Relays and Contactors', timestamp: 800 },
            { title: 'Troubleshooting Controls', timestamp: 1200 }
          ]
        },
        {
          id: 'electrical-safety-procedures',
          title: 'Electrical Safety & LOTO Procedures',
          description: 'Safe electrical work practices and lockout/tagout demonstration',
          duration: 14,
          thumbnail: '/videos/electrical-safety-thumbnail.jpg',
          chapters: [
            { title: 'Electrical Hazards in HVAC', timestamp: 0 },
            { title: 'Lockout/Tagout Procedures', timestamp: 300 },
            { title: 'Multimeter Safety', timestamp: 600 },
            { title: 'Emergency Procedures', timestamp: 900 }
          ]
        }
      ],
      texts: [
        {
          id: 'electrical-fundamentals',
          title: 'Electrical Fundamentals for HVAC',
          type: 'explanation',
          content: `
# Electrical Fundamentals for HVAC Technicians

## Ohm's Law
**Formula**: V = I × R
- **V (Voltage)**: Electrical pressure (Volts)
- **I (Current)**: Electrical flow (Amps)  
- **R (Resistance)**: Opposition to flow (Ohms)

**HVAC Applications**:
- Calculate motor current draw
- Size electrical components
- Troubleshoot electrical problems

## AC vs DC Power
**AC (Alternating Current)**:
- **Used in**: All HVAC equipment
- **Characteristics**: Changes direction 60 times per second (60 Hz)
- **Advantages**: Efficient transmission, easy voltage transformation

**DC (Direct Current)**:
- **Used in**: Some controls, electronic components
- **Characteristics**: Flows in one direction only
- **Applications**: Thermostats, sensors, some motors

## Voltage Levels in HVAC

### Low Voltage (24V AC)
- **Control circuits**: Thermostats, relays, solenoids
- **Safety**: Lower shock risk, easier to work with
- **Power Source**: Step-down transformer from 120V or 240V
- **Wire Types**: Thermostat wire (18-22 AWG)

### Line Voltage (120V, 208V, 240V, 480V)
- **Motors**: Compressors, fans, pumps
- **Heating elements**: Electric furnaces, heaters
- **Safety**: Lethal voltage - requires LOTO procedures
- **Wire Types**: THHN, THWN (12-8 AWG typical)

## Power Calculations
**Power Formula**: P = V × I
- **P (Power)**: Energy consumption (Watts)
- **Applications**: Size electrical circuits, calculate operating costs

**Example**: 
- Motor: 240V, 10A
- Power = 240V × 10A = 2,400 Watts (2.4 kW)

## Electrical Safety Principles
1. **Always assume circuits are live** until verified
2. **Use proper PPE**: Insulated gloves, safety glasses
3. **Test before touch**: Use multimeter to verify no voltage
4. **Lock out/Tag out**: Prevent accidental energization
5. **One hand rule**: Keep one hand in pocket when testing live circuits

## Nigerian Electrical Considerations
- **Voltage fluctuations**: Install surge protectors
- **Power outages**: Design for generator compatibility  
- **Grounding systems**: May not meet international standards
- **Wire quality**: Verify copper content and insulation ratings
          `
        },
        {
          id: 'hvac-control-systems',
          title: 'HVAC Control Systems & Wiring',
          type: 'explanation',
          content: `
# HVAC Control Systems & Wiring

## 24V Control Circuit Basics
**Components**:
- **Transformer**: Steps down 120V/240V to 24V
- **Thermostat**: System control and temperature sensing
- **Relays**: Control high-voltage equipment with low voltage
- **Contactors**: Heavy-duty switches for motors

## Standard Thermostat Wiring
**Common Wire Designations**:
- **R (Red)**: 24V power from transformer
- **C (Common)**: Return path to transformer
- **Y (Yellow)**: Cooling contactor control
- **G (Green)**: Fan relay control  
- **W (White)**: Heating control
- **O/B (Orange/Blue)**: Heat pump reversing valve

## Control Device Functions

### Relays
- **Purpose**: Control high-voltage circuits with low voltage
- **Operation**: Electromagnetic coil operates contacts
- **Applications**: Fan control, accessory control
- **Testing**: Check coil resistance and contact operation

### Contactors
- **Purpose**: Switch high-voltage motors (compressors, fans)
- **Components**: Coil, normally open contacts, auxiliary contacts
- **Safety**: Can arc when opening under load
- **Maintenance**: Check contact condition, coil resistance

### Transformers
- **Purpose**: Step down voltage for controls (120V/240V to 24V)
- **Testing**: Check primary and secondary voltages
- **Common Problems**: Overloading, short circuits
- **Safety**: Primary side is line voltage - use LOTO

## Circuit Protection

### Fuses
- **Purpose**: Protect circuits from overcurrent
- **Types**: Time-delay (motors), fast-acting (electronics)
- **Testing**: Continuity check with multimeter
- **Replacement**: Use exact same type and rating

### Circuit Breakers
- **Purpose**: Resettable overcurrent protection
- **Advantages**: Reusable, visible trip indication
- **Testing**: Check trip mechanism and contact resistance
- **Reset**: After correcting overcurrent condition

## Wiring Diagrams
**Schematic Diagrams**: Show electrical relationships
**Ladder Diagrams**: Show control sequence
**Connection Diagrams**: Show physical wire connections

**Reading Tips**:
1. Identify power source
2. Follow circuit paths
3. Understand component symbols
4. Check wire colors and numbers

## Troubleshooting Process
1. **Gather information**: Symptoms, recent changes
2. **Visual inspection**: Loose connections, burned components
3. **Electrical testing**: Voltage, current, resistance
4. **Component testing**: Individual device operation
5. **System testing**: Verify complete operation

## Common Electrical Problems
- **No power**: Check fuses, breakers, connections
- **Intermittent operation**: Loose connections, failing contacts
- **Overcurrent**: Motor problems, short circuits
- **Control failures**: Thermostat, relay, contactor issues
          `
        },
        {
          id: 'electrical-safety-procedures',
          title: 'Electrical Safety Procedures',
          type: 'procedure',
          content: `
# Electrical Safety Procedures for HVAC Work

## Lockout/Tagout (LOTO) Procedure
**Purpose**: Prevent accidental energization during maintenance

**Steps**:
1. **Notify** affected personnel of planned lockout
2. **Identify** all energy sources (electrical, pneumatic, hydraulic)
3. **Shut down** equipment using normal operating procedures
4. **Isolate** energy sources (disconnect switches, breakers)
5. **Lock** energy isolation devices with personal lock
6. **Tag** with identification and purpose
7. **Test** to verify equipment cannot operate
8. **Perform** maintenance work safely
9. **Remove** locks and tags only by person who installed them
10. **Test** equipment operation before returning to service

## Personal Protective Equipment (PPE)
**Required for electrical work**:
- **Insulated gloves**: Rated for voltage level
- **Safety glasses**: Impact and arc protection
- **Non-conductive footwear**: Rubber soles
- **Flame-resistant clothing**: For arc flash protection

## Multimeter Safety
**Before use**:
- Inspect test leads for damage
- Verify meter function on known voltage
- Set to highest voltage range initially
- Use proper category-rated meter (CAT III for HVAC)

**During use**:
- Keep one hand free (in pocket)
- Start with highest range, work down
- Never exceed meter ratings
- Be aware of arc flash potential

## Electrical Hazards in HVAC
**Shock Hazards**:
- **120V**: Can cause muscle contractions, falls
- **240V+**: Can cause ventricular fibrillation, death
- **Wet conditions**: Greatly increase shock risk

**Arc Flash Hazards**:
- **Causes**: Short circuits, equipment failures
- **Effects**: Burns, blindness, explosive blast
- **Prevention**: Proper PPE, safe work distances

**Fire Hazards**:
- **Overloaded circuits**: Use proper wire sizes
- **Loose connections**: Create heat and arcing
- **Improper repairs**: Follow electrical codes

## Emergency Procedures
**Electrical Shock Response**:
1. **Do not touch** the victim if still in contact with electricity
2. **Turn off power** at source if safely possible
3. **Call emergency services** immediately
4. **Begin CPR** if trained and victim is unconscious
5. **Treat for shock** and burns

**Electrical Fire Response**:
1. **De-energize** if safely possible
2. **Use Class C extinguisher** (CO₂ or dry chemical)
3. **Never use water** on electrical fires
4. **Evacuate area** if fire spreads
5. **Call fire department**

## Code Requirements
**Nigerian Electrical Code** (based on IEC standards):
- **Grounding**: All equipment must be properly grounded
- **GFCI Protection**: Required in wet locations
- **Disconnects**: Must be within sight of equipment
- **Conductor sizing**: Based on load calculations

**Installation Standards**:
- **Conduit**: Protect wiring from damage
- **Wire nuts**: Proper connections in junction boxes
- **Labeling**: Identify circuits and equipment
- **Spacing**: Maintain clearances for service

## Testing Procedures
**Voltage Testing**:
- Test meter on known voltage first
- Test each phase to ground and phase to phase
- Record readings for documentation

**Continuity Testing**:
- Power must be OFF
- Test component isolation
- Check for complete circuits

**Insulation Testing**:
- Use megohmmeter for motor windings
- Test to ground and phase to phase
- Document results for trending
          `
        }
      ],
      diagrams: [
        {
          id: 'thermostat-wiring-diagram',
          title: '24V Thermostat Wiring Diagram',
          imageUrl: '/diagrams/thermostat-wiring-24v.svg',
          labels: [
            { x: 20, y: 20, label: 'R - 24V Power', description: 'Hot wire from transformer' },
            { x: 20, y: 40, label: 'C - Common', description: 'Return path to transformer' },
            { x: 20, y: 60, label: 'Y - Cooling', description: 'Controls AC contactor' },
            { x: 20, y: 80, label: 'G - Fan', description: 'Controls fan relay' },
            { x: 70, y: 20, label: 'W - Heating', description: 'Controls heating system' },
            { x: 70, y: 40, label: 'O/B - Heat Pump', description: 'Reversing valve control' }
          ],
          interactive: true
        },
        {
          id: 'electrical-system-overview',
          title: 'HVAC Electrical System Overview',
          imageUrl: '/diagrams/hvac-electrical-system.svg',
          labels: [
            { x: 10, y: 20, label: 'Main Panel', description: 'Circuit breakers and disconnects' },
            { x: 30, y: 30, label: 'Disconnect Switch', description: 'Local equipment shutoff' },
            { x: 50, y: 25, label: 'Contactor', description: 'Controls compressor and fan' },
            { x: 70, y: 35, label: 'Compressor', description: 'High-voltage motor load' },
            { x: 40, y: 60, label: 'Control Transformer', description: '120V to 24V step-down' },
            { x: 60, y: 70, label: 'Thermostat', description: '24V control interface' }
          ],
          interactive: true
        },
        {
          id: 'loto-procedure-diagram',
          title: 'Lockout/Tagout Procedure Steps',
          imageUrl: '/diagrams/loto-procedure-steps.svg',
          labels: [
            { x: 15, y: 20, label: 'Step 1: Identify', description: 'All energy sources' },
            { x: 45, y: 20, label: 'Step 2: Isolate', description: 'Disconnect switches' },
            { x: 75, y: 20, label: 'Step 3: Lock', description: 'Apply personal locks' },
            { x: 15, y: 60, label: 'Step 4: Tag', description: 'Identify purpose' },
            { x: 45, y: 60, label: 'Step 5: Test', description: 'Verify isolation' },
            { x: 75, y: 60, label: 'Step 6: Work', description: 'Perform maintenance safely' }
          ],
          interactive: true
        }
      ],
      activities: [
        {
          id: 'ohms-law-calculations',
          title: 'Ohm\'s Law Practice Problems',
          type: 'simulation',
          instructions: 'Calculate missing electrical values using Ohm\'s Law (V = I × R)',
          data: {
            problems: [
              {
                given: { voltage: 240, resistance: 24 },
                find: 'current',
                answer: 10,
                unit: 'Amps'
              },
              {
                given: { current: 5, resistance: 48 },
                find: 'voltage',
                answer: 240,
                unit: 'Volts'
              },
              {
                given: { voltage: 120, current: 2 },
                find: 'resistance',
                answer: 60,
                unit: 'Ohms'
              }
            ]
          }
        },
        {
          id: 'thermostat-wire-identification',
          title: 'Thermostat Wire Color Identification',
          type: 'drag-drop',
          instructions: 'Match thermostat wire colors to their functions',
          data: {
            items: [
              { id: 'red-wire', text: 'Red Wire (R)', category: 'wire' },
              { id: 'yellow-wire', text: 'Yellow Wire (Y)', category: 'wire' },
              { id: 'green-wire', text: 'Green Wire (G)', category: 'wire' },
              { id: 'white-wire', text: 'White Wire (W)', category: 'wire' },
              { id: 'blue-wire', text: 'Blue Wire (C)', category: 'wire' }
            ],
            targets: [
              { id: '24v-power', text: '24V Power Supply', accepts: ['red-wire'] },
              { id: 'cooling-control', text: 'Cooling Contactor', accepts: ['yellow-wire'] },
              { id: 'fan-control', text: 'Fan Relay Control', accepts: ['green-wire'] },
              { id: 'heating-control', text: 'Heating Control', accepts: ['white-wire'] },
              { id: 'common-return', text: 'Common Return', accepts: ['blue-wire'] }
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 'ohms-law-formula',
        type: 'multiple-choice',
        question: 'What is the correct formula for Ohm\'s Law?',
        options: ['P = V × I', 'V = I × R', 'I = P / V', 'R = V / P'],
        correctAnswer: 'V = I × R',
        explanation: 'Ohm\'s Law states that Voltage equals Current times Resistance (V = I × R), which is fundamental for electrical calculations in HVAC.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'common-hvac-control-voltage',
        type: 'multiple-choice',
        question: 'What is the most common voltage for HVAC control circuits?',
        options: ['12V', '24V', '120V', '240V'],
        correctAnswer: '24V',
        explanation: '24V is the standard for HVAC control circuits because it\'s safer to work with while providing sufficient power for relays, contactors, and solenoids.',
        difficulty: 'easy',
        points: 5
      },
      {
        id: 'contactor-function',
        type: 'multiple-choice',
        question: 'What device is used to switch high-voltage loads with a low-voltage signal?',
        options: ['Transformer', 'Contactor', 'Fuse', 'Thermostat'],
        correctAnswer: 'Contactor',
        explanation: 'A contactor uses a low-voltage coil (typically 24V) to operate high-voltage contacts that can safely switch motors and other high-power equipment.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'motor-capacitor-function',
        type: 'multiple-choice',
        question: 'What does a capacitor do in a motor circuit?',
        options: [
          'Reduces voltage',
          'Provides starting/running assistance',
          'Protects from overcurrent',
          'Steps down voltage'
        ],
        correctAnswer: 'Provides starting/running assistance',
        explanation: 'Capacitors provide the phase shift needed for single-phase motors to start and run efficiently by creating a rotating magnetic field.',
        difficulty: 'medium',
        points: 10
      },
      {
        id: 'loto-procedure-importance',
        type: 'short-answer',
        question: 'Explain why lockout/tagout (LOTO) procedures are critical when working on HVAC electrical systems.',
        correctAnswer: 'LOTO procedures prevent accidental energization of equipment during maintenance, protecting workers from electrical shock, electrocution, and equipment damage. They ensure all energy sources are isolated and cannot be accidentally restored while work is being performed.',
        explanation: 'LOTO is a life-saving procedure that prevents the leading cause of electrical fatalities in maintenance work - accidental energization.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'electrical-troubleshooting-scenario',
        type: 'scenario',
        question: 'An air conditioning unit is not starting. The thermostat is calling for cooling, but the outdoor unit is not running. Walk through your electrical troubleshooting steps.',
        correctAnswer: '1. Check power at disconnect switch 2. Verify 24V at thermostat Y terminal 3. Check contactor coil for 24V 4. Test contactor contacts for continuity 5. Check compressor motor windings and capacitor 6. Verify proper grounding and connections. Use multimeter for all voltage and continuity tests.',
        explanation: 'Systematic electrical troubleshooting starts with power supply and works through the control circuit to identify the specific component failure.',
        difficulty: 'hard',
        points: 20
      }
    ]
  }
]

// Kahoot Quiz Collections for Modules 4, 7, 8
export const advancedModuleKahootQuizzes = {
  module4: [
    { question: 'Most common indoor gas piping material?', answer: 'Black steel', points: 1000 },
    { question: 'What does CSST require?', answer: 'Bonding/Grounding', points: 1000 },
    { question: 'Complete combustion produces?', answer: 'CO₂ + H₂O + Heat', points: 1200 },
    { question: 'Dangerous result of incomplete combustion?', answer: 'Carbon Monoxide', points: 1500 },
    { question: 'Best tool for leak detection?', answer: 'Soap Solution', points: 800 }
  ],
  module7: [
    { question: 'Refrigerant phase entering compressor?', answer: 'Gas', points: 1000 },
    { question: 'Component that absorbs heat indoors?', answer: 'Evaporator', points: 1000 },
    { question: 'Device that drops refrigerant pressure?', answer: 'Expansion Valve', points: 1200 },
    { question: 'True/False: Refrigerant creates cold air', answer: 'False', points: 800 },
    { question: 'In Nigeria, which component is most affected by high temperatures?', answer: 'Condenser', points: 1500 }
  ],
  module8: [
    { question: 'Ohm\'s Law formula?', answer: 'V = I × R', points: 1000 },
    { question: 'Common HVAC control voltage?', answer: '24V', points: 800 },
    { question: 'Device for switching high-voltage with low-voltage?', answer: 'Contactor', points: 1200 },
    { question: 'Safety procedure preventing accidental power-on?', answer: 'LOTO', points: 1500 },
    { question: 'Capacitor function in motor?', answer: 'Start/Run Assistance', points: 1000 }
  ]
}

export default hvacAdvancedModules
