"use client"

import { useState } from "react"
import {
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  User,
  Coins,
  Package,
  History,
  Plus,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data
const userData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  points: 450,
  totalItems: 12,
  completedSwaps: 8,
}

const userItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    condition: "Excellent",
    category: "Outerwear",
    image: "/placeholder.svg?height=200&width=200",
    status: "Active",
    views: 23,
    likes: 5,
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    condition: "Good",
    category: "Dresses",
    image: "/placeholder.svg?height=200&width=200",
    status: "Pending",
    views: 15,
    likes: 3,
  },
  {
    id: 3,
    title: "Leather Boots",
    condition: "Very Good",
    category: "Shoes",
    image: "/placeholder.svg?height=200&width=200",
    status: "Swapped",
    views: 31,
    likes: 8,
  },
]

const swapHistory = [
  {
    id: 1,
    type: "Outgoing",
    item: "Vintage Denim Jacket",
    partner: "Emma Wilson",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: 2,
    type: "Incoming",
    item: "Silk Scarf",
    partner: "Michael Chen",
    status: "In Progress",
    date: "2024-01-20",
  },
  {
    id: 3,
    type: "Outgoing",
    item: "Cotton T-shirt",
    partner: "Lisa Davis",
    status: "Pending",
    date: "2024-01-22",
  },
]

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("items")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredItems = userItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !filterCategory || item.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...")
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between glass-card rounded-2xl p-4">
          <Link href="/landing" className="font-serif text-2xl font-bold text-vintage-dark">
            ReWear
          </Link>
          <h1 className="font-serif text-xl font-bold text-vintage-dark">My Profile</h1>
          <div className="flex items-center gap-4">
            <Link href="/add-item" className="vintage-button-secondary flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Item
            </Link>
            <button onClick={handleLogout} className="vintage-button-secondary flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Section */}
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-teal-accent/20 flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-teal-accent" />
                </div>
                <h2 className="font-serif text-xl font-bold text-vintage-dark">{userData.name}</h2>
                <p className="text-vintage-brown text-sm">{userData.email}</p>
              </div>

              <div className="space-y-4">
                <div className="neomorphic-inset rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-teal-accent" />
                    <span className="text-sm text-vintage-brown">Points</span>
                  </div>
                  <span className="font-bold text-teal-accent">{userData.points}</span>
                </div>

                <div className="neomorphic-inset rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-vintage-brown" />
                    <span className="text-sm text-vintage-brown">Items</span>
                  </div>
                  <span className="font-bold text-vintage-dark">{userData.totalItems}</span>
                </div>

                <div className="neomorphic-inset rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <History className="w-5 h-5 text-vintage-brown" />
                    <span className="text-sm text-vintage-brown">Swaps</span>
                  </div>
                  <span className="font-bold text-vintage-dark">{userData.completedSwaps}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="glass-card rounded-2xl p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("items")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all text-white text-transparent text-slate-600 text-slate-600 text-slate-600 text-slate-600 text-black intage-brown hover:text-vintage-dark hover:bg-vintage-cream/50"
                  }`}
                >
                  My Items
                </button>
                <button
                  onClick={() => setActiveTab("swaps")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === "swaps"
                      ? "bg-teal-accent text-white"
                      : "text-vintage-brown hover:text-vintage-dark hover:bg-vintage-cream/50"
                  }`}
                >
                  Swap History
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "items" && (
              <div className="space-y-6">
                {/* Search and Filter */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vintage-brown w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search your items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="vintage-input w-full pl-12"
                      />
                    </div>
                    <div className="relative">
                      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vintage-brown w-5 h-5" />
                      <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="vintage-input pl-12 pr-8"
                      >
                        <option value="">All Categories</option>
                        <option value="Outerwear">Outerwear</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedItems.map((item) => (
                    <div key={item.id} className="glass-card rounded-2xl p-4">
                      <div className="aspect-square rounded-lg overflow-hidden mb-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="font-medium text-vintage-dark mb-2">{item.title}</h3>

                      <div className="flex justify-between items-center text-sm text-vintage-brown mb-3">
                        <span>{item.condition}</span>
                        <span>{item.category}</span>
                      </div>

                      <div className="flex justify-between items-center text-sm text-vintage-brown mb-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : item.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Link href={`/item/${item.id}`} className="vintage-button-secondary flex-1 text-center">
                          <Eye className="w-4 h-4 mx-auto" />
                        </Link>
                        <button className="vintage-button-secondary flex-1">
                          <Edit className="w-4 h-4 mx-auto" />
                        </button>
                        <button className="vintage-button-secondary flex-1 text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="vintage-button-secondary p-2 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-vintage-brown">
                      Page {currentPage} of {totalPages}
                    </span>
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
            )}

            {activeTab === "swaps" && (
              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-xl font-bold text-vintage-dark mb-6">Swap History</h2>
                <div className="space-y-4">
                  {swapHistory.map((swap) => (
                    <div key={swap.id} className="neomorphic rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                swap.type === "Outgoing" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                              }`}
                            >
                              {swap.type}
                            </span>
                            <span className="text-sm text-vintage-brown">{swap.date}</span>
                          </div>
                          <h4 className="font-medium text-vintage-dark">{swap.item}</h4>
                          <p className="text-sm text-vintage-brown">with {swap.partner}</p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              swap.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : swap.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {swap.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
