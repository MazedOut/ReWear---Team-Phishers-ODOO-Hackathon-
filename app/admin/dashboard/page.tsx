"use client"

import { useState } from "react"
import { Users, Package, History, LogOut, Search, Filter, Edit, Trash2, Check, X, Plus, Minus, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data
const dashboardStats = {
  totalUsers: 1247,
  activeListings: 342,
  pendingApprovals: 23,
  totalSwaps: 856,
}

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    points: 450,
    joinDate: "2023-03-15",
    status: "Active",
    totalSwaps: 8,
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    points: 320,
    joinDate: "2023-05-22",
    status: "Active",
    totalSwaps: 12,
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    points: 180,
    joinDate: "2023-08-10",
    status: "Suspended",
    totalSwaps: 3,
  },
]

const listings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    user: "Sarah Johnson",
    category: "Outerwear",
    condition: "Excellent",
    status: "Pending",
    image: "/placeholder.svg?height=100&width=100",
    submittedDate: "2024-01-20",
  },
  {
    id: 2,
    title: "Silk Evening Dress",
    user: "Emma Wilson",
    category: "Dresses",
    condition: "Good",
    status: "Approved",
    image: "/placeholder.svg?height=100&width=100",
    submittedDate: "2024-01-18",
  },
  {
    id: 3,
    title: "Designer Handbag",
    user: "Michael Chen",
    category: "Accessories",
    condition: "Very Good",
    status: "Rejected",
    image: "/placeholder.svg?height=100&width=100",
    submittedDate: "2024-01-15",
  },
]

const swapTransactions = [
  {
    id: 1,
    user1: "Sarah Johnson",
    user2: "Michael Chen",
    item1: "Vintage Denim Jacket",
    item2: "Cotton T-shirt",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: 2,
    user1: "Emma Wilson",
    user2: "Sarah Johnson",
    item1: "Silk Scarf",
    item2: "Leather Boots",
    status: "In Progress",
    date: "2024-01-20",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  const handleUserAction = (userId: number, action: string) => {
    console.log(`${action} user ${userId}`)
    // Handle user management actions
  }

  const handleListingAction = (listingId: number, action: string) => {
    console.log(`${action} listing ${listingId}`)
    // Handle listing management actions
  }

  const adjustUserPoints = (userId: number, amount: number) => {
    console.log(`Adjust user ${userId} points by ${amount}`)
    // Handle points adjustment
  }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between glass-card rounded-2xl p-4">
          <Link href="/landing" className="font-serif text-2xl font-bold text-vintage-dark">
            ReWear Admin
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-vintage-brown">Welcome, Admin</span>
            <Link href="/" className="vintage-button-secondary flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-4 sticky top-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${
                    activeTab === "overview"
                      ? "bg-teal-accent text-white"
                      : "text-vintage-brown hover:text-vintage-dark hover:bg-vintage-cream/50"
                  }`}
                >
                  <Package className="w-4 h-4" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("users")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${
                    activeTab === "users"
                      ? "bg-teal-accent text-white"
                      : "text-vintage-brown hover:text-vintage-dark hover:bg-vintage-cream/50"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Manage Users
                </button>
                <button
                  onClick={() => setActiveTab("listings")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${
                    activeTab === "listings"
                      ? "bg-teal-accent text-white"
                      : "text-vintage-brown hover:text-vintage-dark hover:bg-vintage-cream/50"
                  }`}
                >
                  <Package className="w-4 h-4" />
                  Manage Listings
                </button>
                <button
                  onClick={() => setActiveTab("swaps")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${
                    activeTab === "swaps"
                      ? "bg-teal-accent text-white"
                      : "text-vintage-brown hover:text-vintage-dark hover:bg-vintage-cream/50"
                  }`}
                >
                  <History className="w-4 h-4" />
                  Swap History
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                  <div className="glass-card rounded-2xl p-6 text-center">
                    <Users className="w-8 h-8 text-teal-accent mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-vintage-dark">{dashboardStats.totalUsers}</h3>
                    <p className="text-vintage-brown">Total Users</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 text-center">
                    <Package className="w-8 h-8 text-teal-accent mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-vintage-dark">{dashboardStats.activeListings}</h3>
                    <p className="text-vintage-brown">Active Listings</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 text-center">
                    <Eye className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-vintage-dark">
                      {dashboardStats.pendingApprovals}
                    </h3>
                    <p className="text-vintage-brown">Pending Approvals</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 text-center">
                    <History className="w-8 h-8 text-teal-accent mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-vintage-dark">{dashboardStats.totalSwaps}</h3>
                    <p className="text-vintage-brown">Total Swaps</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="glass-card rounded-2xl p-6">
                  <h2 className="font-serif text-xl font-bold text-vintage-dark mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="neomorphic-inset rounded-lg p-4">
                      <p className="text-vintage-dark">
                        New user <strong>Emma Wilson</strong> joined the platform
                      </p>
                      <span className="text-sm text-vintage-brown">2 hours ago</span>
                    </div>
                    <div className="neomorphic-inset rounded-lg p-4">
                      <p className="text-vintage-dark">
                        Listing <strong>"Vintage Denim Jacket"</strong> requires approval
                      </p>
                      <span className="text-sm text-vintage-brown">4 hours ago</span>
                    </div>
                    <div className="neomorphic-inset rounded-lg p-4">
                      <p className="text-vintage-dark">
                        Swap completed between <strong>Sarah</strong> and <strong>Michael</strong>
                      </p>
                      <span className="text-sm text-vintage-brown">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Users Management Tab */}
            {activeTab === "users" && (
              <div className="space-y-6">
                {/* Search and Filter */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vintage-brown w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="vintage-input w-full pl-12"
                      />
                    </div>
                    <div className="relative">
                      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vintage-brown w-5 h-5" />
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="vintage-input pl-12 pr-8"
                      >
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Suspended">Suspended</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Users Table */}
                <div className="glass-card rounded-2xl p-6">
                  <h2 className="font-serif text-xl font-bold text-vintage-dark mb-6">User Management</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-vintage-brown/20">
                          <th className="text-left py-3 text-vintage-brown font-medium">User</th>
                          <th className="text-left py-3 text-vintage-brown font-medium">Points</th>
                          <th className="text-left py-3 text-vintage-brown font-medium">Swaps</th>
                          <th className="text-left py-3 text-vintage-brown font-medium">Status</th>
                          <th className="text-left py-3 text-vintage-brown font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b border-vintage-brown/10">
                            <td className="py-4">
                              <div>
                                <p className="font-medium text-vintage-dark">{user.name}</p>
                                <p className="text-sm text-vintage-brown">{user.email}</p>
                                <p className="text-xs text-vintage-brown">Joined {user.joinDate}</p>
                              </div>
                            </td>
                            <td className="py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-teal-accent font-medium">{user.points}</span>
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => adjustUserPoints(user.id, 50)}
                                    className="vintage-button-secondary p-1"
                                    title="Add 50 points"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => adjustUserPoints(user.id, -50)}
                                    className="vintage-button-secondary p-1"
                                    title="Remove 50 points"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 text-vintage-dark">{user.totalSwaps}</td>
                            <td className="py-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td className="py-4">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleUserAction(user.id, "edit")}
                                  className="vintage-button-secondary p-2"
                                  title="Edit user"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleUserAction(user.id, user.status === "Active" ? "suspend" : "activate")
                                  }
                                  className={`vintage-button-secondary p-2 ${
                                    user.status === "Active" ? "text-red-600" : "text-green-600"
                                  }`}
                                  title={user.status === "Active" ? "Suspend user" : "Activate user"}
                                >
                                  {user.status === "Active" ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                                </button>
                                <button
                                  onClick={() => handleUserAction(user.id, "delete")}
                                  className="vintage-button-secondary p-2 text-red-600"
                                  title="Delete user"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Listings Management Tab */}
            {activeTab === "listings" && (
              <div className="space-y-6">
                <div className="glass-card rounded-2xl p-6">
                  <h2 className="font-serif text-xl font-bold text-vintage-dark mb-6">Listing Management</h2>
                  <div className="space-y-4">
                    {listings.map((listing) => (
                      <div key={listing.id} className="neomorphic rounded-lg p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-vintage-dark">{listing.title}</h3>
                            <p className="text-sm text-vintage-brown">by {listing.user}</p>
                            <div className="flex items-center gap-4 text-xs text-vintage-brown mt-1">
                              <span>{listing.category}</span>
                              <span>{listing.condition}</span>
                              <span>Submitted {listing.submittedDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                listing.status === "Approved"
                                  ? "bg-green-100 text-green-800"
                                  : listing.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {listing.status}
                            </span>
                            <div className="flex gap-1">
                              {listing.status === "Pending" && (
                                <>
                                  <button
                                    onClick={() => handleListingAction(listing.id, "approve")}
                                    className="vintage-button-secondary p-2 text-green-600"
                                    title="Approve listing"
                                  >
                                    <Check className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleListingAction(listing.id, "reject")}
                                    className="vintage-button-secondary p-2 text-red-600"
                                    title="Reject listing"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </>
                              )}
                              <button
                                onClick={() => handleListingAction(listing.id, "delete")}
                                className="vintage-button-secondary p-2 text-red-600"
                                title="Delete listing"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Swap History Tab */}
            {activeTab === "swaps" && (
              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-serif text-xl font-bold text-vintage-dark mb-6">Swap Transaction History</h2>
                <div className="space-y-4">
                  {swapTransactions.map((swap) => (
                    <div key={swap.id} className="neomorphic rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-vintage-brown">{swap.date}</span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                swap.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {swap.status}
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-medium text-vintage-dark">{swap.user1}</p>
                              <p className="text-sm text-vintage-brown">offered: {swap.item1}</p>
                            </div>
                            <div>
                              <p className="font-medium text-vintage-dark">{swap.user2}</p>
                              <p className="text-sm text-vintage-brown">offered: {swap.item2}</p>
                            </div>
                          </div>
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
