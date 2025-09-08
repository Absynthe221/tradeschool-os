export type SignCategory = 'regulatory' | 'warning' | 'information' | 'construction'

export interface OntarioSign {
  id: string
  name: string
  category: SignCategory
  image: string // public path, e.g., /signs/ontario/warning/winding-road-ahead.png
  description?: string
}

// Seed a few entries; the slicing script will generate many more.
export const ontarioSigns: OntarioSign[] = [
  {
    id: 'warning-winding-road',
    name: 'Winding road ahead',
    category: 'warning',
    image: '/signs/ontario/warning/winding-road-ahead.png',
    description: 'Adjust speed and prepare for multiple curves.'
  },
  {
    id: 'regulatory-stop',
    name: 'Stop',
    category: 'regulatory',
    image: '/signs/ontario/regulatory/stop.png',
    description: 'Come to a complete stop and proceed when safe.'
  }
]


