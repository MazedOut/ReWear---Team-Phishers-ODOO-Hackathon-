"use client"

import { useState, useEffect } from "react"
import { Search, ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for items
const allItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    condition: "Excellent",
    category: "Outerwear",
    size: "M",
    image: "/vintage_jack.png",
    points: 150,
    user: "Sarah Johnson",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    condition: "Good",
    category: "Dresses",
    size: "S",
    image: "/floral.png?",
    points: 120,
    user: "Emma Wilson",
    location: "Portland, OR",
  },
  {
    id: 3,
    title: "Leather Boots",
    condition: "Very Good",
    category: "Shoes",
    size: "8",
    image: "/leather boots.png",
    points: 200,
    user: "Michael Chen",
    location: "Austin, TX",
  },
  {
    id: 4,
    title: "Cashmere Sweater",
    condition: "Excellent",
    category: "Knitwear",
    size: "L",
    image: "/sweater.png",
    points: 180,
    user: "David Kim",
    location: "Chicago, IL",
  },
  {
    id: 5,
    title: "Silk Scarf",
    condition: "Like New",
    category: "Accessories",
    size: "One Size",
    image: "/silk_scraf.png",
    points: 90,
    user: "Lisa Davis",
    location: "New York, NY",
  },
  {
    id: 6,
    title: "Vintage Leather Bag",
    condition: "Good",
    category: "Bags",
    size: "Medium",
    image: "/leath bag.png",
    points: 160,
    user: "James Wilson",
    location: "Seattle, WA",
  },
  {
    id: 7,
    title: "Linen Shirt",
    condition: "Excellent",
    category: "Tops",
    size: "XL",
    image: "/shirt.png",
    points: 110,
    user: "Olivia Martinez",
    location: "Miami, FL",
  },
  {
    id: 8,
    title: "Wool Coat",
    condition: "Very Good",
    category: "Outerwear",
    size: "M",
    image: "/wool coat.png",
    points: 250,
    user: "Thomas Brown",
    location: "Boston, MA",
  },
  {
    id: 9,
    title: "Cotton T-shirt",
    condition: "Good",
    category: "Tops",
    size: "S",
    image: "/cot_t.png",
    points: 80,
    user: "Sophia Lee",
    location: "Denver, CO",
  },
  {
    id: 10,
    title: "Denim Jeans",
    condition: "Excellent",
    category: "Bottoms",
    size: "32",
    image: "/denimj.png",
    points: 130,
    user: "Noah Garcia",
    location: "Los Angeles, CA",
  },
  {
    id: 11,
    title: "Beaded Necklace",
    condition: "Like New",
    category: "Jewelry",
    size: "One Size",
    image: "/beaded_neck.png",
    points: 70,
    user: "Ava Johnson",
    location: "Nashville, TN",
  },
  {
    id: 12,
    title: "Knit Beanie",
    condition: "Good",
    category: "Accessories",
    size: "One Size",
    image: "/beanie.png",
    points: 60,
    user: "Ethan Wilson",
    location: "Minneapolis, MN",
  },
]

const categories = [
  "All",
  "Tops",
  "Bottoms",
  "Dresses",
  "Outerwear",
  "Shoes",
  "Accessories",
  "Bags",
  "Jewelry",
  "Knitwear",
]
const conditions = ["All", "Like New", "Excellent", "Very Good", "Good", "Fair"]
const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL", "One Size"]
const sortOptions = ["Newest", "Oldest", "Price: Low to High", "Price: High to Low"]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [selectedSize, setSelectedSize] = useState("All")
  const [sortBy, setSortBy] = useState("Newest")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const itemsPerPage = 8

  // Filter items based on search and filters
  const filteredItems = allItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesCondition = selectedCondition === "All" || item.condition === selectedCondition
    const matchesSize = selectedSize === "All" || item.size === selectedSize
    return matchesSearch && matchesCategory && matchesCondition && matchesSize
  })

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "Newest") return b.id - a.id
    if (sortBy === "Oldest") return a.id - b.id
    if (sortBy === "Price: Low to High") return a.points - b.points
    if (sortBy === "Price: High to Low") return b.points - a.points
    return 0
  })

  // Pagination
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = sortedItems.slice(startIndex, startIndex + itemsPerPage)

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedCondition, selectedSize, sortBy])

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...")
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between glass-card rounded-2xl p-4">
          <Link href="/landing" className="flex items-center gap-4">
            <h1 className="font-serif text-2xl font-bold text-vintage-dark">ReWear</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/profile" className="vintage-button-secondary">
              Profile
            </Link>
            <Link href="/add-item" className="vintage-button-secondary">
              List Item
            </Link>
            <button onClick={handleLogout} className="vintage-button-secondary flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Search and Sort */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vintage-brown w-5 h-5" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="vintage-input w-full pl-12"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="vintage-input pr-10 appearance-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-vintage-brown w-5 h-5 pointer-events-none" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="vintage-button-secondary flex items-center gap-2"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-vintage-brown/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-vintage-brown mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="vintage-input w-full"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-vintage-brown mb-2">Condition</label>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="vintage-input w-full"
                  >
                    {conditions.map((condition) => (
                      <option key={condition} value={condition}>
                        {condition}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-vintage-brown mb-2">Size</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="vintage-input w-full"
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSelectedCategory("All")
                      setSelectedCondition("All")
                      setSelectedSize("All")
                      setSearchTerm("")
                    }}
                    className="vintage-button-secondary w-full"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-vintage-brown">
            Showing {paginatedItems.length} of {filteredItems.length} items
          </p>
        </div>

        {/* Items Grid */}
        {paginatedItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {paginatedItems.map((item) => (
              <Link href={`/item/${item.id}`} key={item.id} className="block">
                <div className="glass-card rounded-2xl p-4 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-vintage-dark mb-2 line-clamp-1">{item.title}</h3>
                  <div className="flex justify-between items-center text-sm text-vintage-brown mb-2">
                    <span>{item.condition}</span>
                    <span>{item.size}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-teal-accent font-medium">{item.points} points</span>
                    <span className="text-xs text-vintage-brown">{item.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-vintage-dark mb-4">No items found</h3>
            <p className="text-vintage-brown mb-6">Try adjusting your filters or search term</p>
            <button
              onClick={() => {
                setSelectedCategory("All")
                setSelectedCondition("All")
                setSelectedSize("All")
                setSearchTerm("")
              }}
              className="vintage-button-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="vintage-button-secondary p-2 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    currentPage === page
                      ? "bg-teal-accent text-white"
                      : "neomorphic text-vintage-brown hover:text-vintage-dark"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="vintage-button-secondary p-2 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
