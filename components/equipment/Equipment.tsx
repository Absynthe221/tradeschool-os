'use client'

import { useState } from 'react'
import { 
  Snowflake, 
  Wrench, 
  Package, 
  ShoppingCart, 
  Star, 
  Heart,
  QrCode,
  BookOpen,
  CheckCircle,
  Filter,
  Search,
  Truck,
  Shield,
  Video
} from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', name: 'All Equipment', icon: Package },
  { id: 'hvac', name: 'HVAC Systems', icon: Snowflake },
  { id: 'tools', name: 'Tools & Instruments', icon: Wrench },
  { id: 'kits', name: 'Training Kits', icon: BookOpen },
]

const equipment = [
  {
    id: 'hvac-starter-kit',
    name: 'HVAC Starter Kit',
    description: 'Complete starter kit for HVAC training with essential tools and components',
    category: 'kits',
    trade: 'hvac',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 142,
    inStock: true,
    stockCount: 24,
    images: ['/equipment/hvac-starter-kit.jpg'],
    features: [
      'Digital Manifold Gauge Set',
      'Vacuum Pump 4CFM',
      'Refrigerant Recovery Tank',
      'Basic Hand Tools Set',
      'Safety Equipment',
      'Training Manual'
    ],
    specifications: {
      'Voltage': '110-240V',
      'Temperature Range': '-40 to 120°C',
      'Weight': '15kg',
      'Warranty': '2 years'
    },
    qrCode: 'hvac-starter-001',
    trainingModules: ['HVAC Fundamentals', 'Tool Safety', 'Basic Maintenance'],
    badge: 'Best Seller'
  },
  {
    id: 'digital-manifold-gauge',
    name: 'Digital Manifold Gauge Set',
    description: 'Professional digital manifold gauge for accurate refrigerant system diagnostics',
    category: 'tools',
    trade: 'hvac',
    price: 189.99,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    stockCount: 45,
    images: ['/equipment/digital-gauge.jpg'],
    features: [
      'High accuracy ±1%',
      'Large LCD display',
      'Multiple refrigerant support',
      'Data logging capability',
      'Bluetooth connectivity',
      'Protective case included'
    ],
    specifications: {
      'Accuracy': '±1%',
      'Pressure Range': '0-800 PSI',
      'Display': 'LCD with backlight',
      'Battery Life': '24 hours'
    },
    qrCode: 'dmg-pro-001',
    trainingModules: ['Pressure Testing', 'System Diagnostics'],
    badge: 'Professional Grade'
  },
  {
    id: 'mini-split-trainer',
    name: 'Mini-Split Training System',
    description: 'Fully functional mini-split system for hands-on installation and maintenance training',
    category: 'hvac',
    trade: 'hvac',
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.7,
    reviews: 56,
    inStock: true,
    stockCount: 8,
    images: ['/equipment/mini-split-trainer.jpg'],
    features: [
      'Complete indoor & outdoor units',
      'Installation hardware included',
      'Fault simulation capability',
      'QR-enabled troubleshooting',
      'Modular design',
      'Training documentation'
    ],
    specifications: {
      'Cooling Capacity': '12,000 BTU/h',
      'Refrigerant': 'R-410A',
      'Power Supply': '230V/60Hz',
      'Dimensions': '780×265×540mm'
    },
    qrCode: 'mst-trainer-001',
    trainingModules: ['Mini-Split Installation', 'Refrigerant Handling', 'Electrical Connections'],
    badge: 'Training System'
  },
  {
    id: 'vacuum-pump-4cfm',
    name: 'Vacuum Pump 4CFM',
    description: 'Single stage rotary vane vacuum pump for system evacuation',
    category: 'tools',
    trade: 'hvac',
    price: 149.99,
    rating: 4.6,
    reviews: 234,
    inStock: true,
    stockCount: 32,
    images: ['/equipment/vacuum-pump.jpg'],
    features: [
      '4 CFM capacity',
      'Ultimate vacuum 50 microns',
      'Oil sight glass',
      'Handle for portability',
      'Intake fitting',
      'Oil drain plug'
    ],
    specifications: {
      'CFM': '4',
      'Ultimate Vacuum': '50 microns',
      'Oil Capacity': '10oz',
      'Motor': '1/3 HP'
    },
    qrCode: 'vp-4cfm-001',
    trainingModules: ['System Evacuation', 'Vacuum Procedures'],
    badge: null
  },
  {
    id: 'refrigerant-scales',
    name: 'Electronic Refrigerant Scales',
    description: 'Precision electronic scales for accurate refrigerant charging',
    category: 'tools',
    trade: 'hvac',
    price: 89.99,
    rating: 4.5,
    reviews: 78,
    inStock: false,
    stockCount: 0,
    images: ['/equipment/refrigerant-scales.jpg'],
    features: [
      '220 lb capacity',
      '0.5 oz resolution',
      'Large LCD display',
      'Zero/tare function',
      'Auto shut-off',
      'Protective case'
    ],
    specifications: {
      'Capacity': '220 lbs',
      'Resolution': '0.5 oz',
      'Platform Size': '12" x 12"',
      'Power': '9V battery'
    },
    qrCode: 'rs-220-001',
    trainingModules: ['Refrigerant Charging', 'Weight Calculations'],
    badge: null
  },
  {
    id: 'cold-room-kit',
    name: 'Cold Room Training Kit (20m³)',
    description: 'Complete cold room system for commercial refrigeration training',
    category: 'hvac',
    trade: 'hvac',
    price: 2499.99,
    originalPrice: 2899.99,
    rating: 4.9,
    reviews: 23,
    inStock: true,
    stockCount: 3,
    images: ['/equipment/cold-room-kit.jpg'],
    features: [
      'Modular panel construction',
      'Industrial compressor unit',
      'Digital temperature controller',
      'Evaporator and condenser',
      'Complete wiring harness',
      'Installation guide'
    ],
    specifications: {
      'Volume': '20 cubic meters',
      'Temperature Range': '-18°C to +5°C',
      'Refrigerant': 'R-404A',
      'Power': '3-phase 380V'
    },
    qrCode: 'crk-20m3-001',
    trainingModules: ['Commercial Refrigeration', 'Cold Room Installation', 'System Controls'],
    badge: 'Enterprise'
  }
]

const kitTypes = ['All Kits', 'Starter', 'Professional', 'Advanced', 'Enterprise']

export function Equipment() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedKitType, setSelectedKitType] = useState('All Kits')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [cart, setCart] = useState<string[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])

  const filteredEquipment = equipment.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
    const searchMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const kitTypeMatch = selectedKitType === 'All Kits' || 
                        (item.badge && item.badge.toLowerCase().includes(selectedKitType.toLowerCase()))
    
    return categoryMatch && searchMatch && kitTypeMatch
  })

  const addToCart = (itemId: string) => {
    setCart(prev => [...prev, itemId])
  }

  const toggleWishlist = (itemId: string) => {
    setWishlist(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Equipment & Training Kits
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get hands-on with industry-standard equipment. Every system includes QR codes 
              linking to training materials and technical documentation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          <div className={cn("mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6", showFilters ? "block" : "hidden md:grid")}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                        selectedCategory === category.id
                          ? "bg-primary-100 text-primary-700 border border-primary-200"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {category.name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kit Type</label>
              <div className="space-y-2">
                {kitTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedKitType(type)}
                    className={cn(
                      "w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                      selectedKitType === type
                        ? "bg-primary-100 text-primary-700 border border-primary-200"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <div className="text-sm text-gray-500 mb-2">
                Showing {filteredEquipment.length} items
              </div>
              <div className="text-sm text-gray-500">
                Cart: {cart.length} items
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package className="w-16 h-16 text-gray-400" />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  {item.badge && (
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      item.badge === 'Best Seller' && "bg-trade-100 text-trade-700",
                      item.badge === 'Professional Grade' && "bg-primary-100 text-primary-700",
                      item.badge === 'Training System' && "bg-hvac-100 text-hvac-700",
                      item.badge === 'Enterprise' && "bg-purple-100 text-purple-700"
                    )}>
                      {item.badge}
                    </span>
                  )}
                </div>
                
                {/* Stock Status */}
                <div className="absolute top-4 right-4">
                  {!item.inStock && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(item.id)}
                  className="absolute bottom-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart className={cn(
                    "w-5 h-5",
                    wishlist.includes(item.id) ? "text-red-500 fill-current" : "text-gray-400"
                  )} />
                </button>
              </div>

              <div className="p-6">
                {/* Title and Rating */}
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900 ml-1">
                        {item.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 mr-2 text-trade-500" />
                        {feature}
                      </div>
                    ))}
                    {item.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{item.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Training Modules */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <QrCode className="w-4 h-4 mr-2" />
                    Includes Training:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.trainingModules.map((module, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                    {item.inStock && (
                      <div className="flex items-center text-sm text-trade-600">
                        <Truck className="w-4 h-4 mr-1" />
                        {item.stockCount} in stock
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                      item.inStock
                        ? "bg-primary-600 text-white hover:bg-primary-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    )}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No equipment found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find more equipment.
            </p>
          </div>
        )}

        {/* Features Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-hvac-600 rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <QrCode className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">QR-Enabled Learning</h3>
              <p className="text-primary-100 text-sm">
                Every system includes QR codes linking to training videos and manuals
              </p>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Industry Standard</h3>
              <p className="text-primary-100 text-sm">
                Professional-grade equipment used in real-world applications
              </p>
            </div>
            <div>
              <Video className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Hands-On Training</h3>
              <p className="text-primary-100 text-sm">
                Learn by doing with equipment that doubles as training systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




