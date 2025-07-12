"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, MapPin, Calendar, Tag, Star, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - in real app, this would come from API
const itemData = {
  id: 1,
  title: "Vintage Denim Jacket",
  description:
    "Beautiful vintage denim jacket from the 90s. Perfect condition with minimal wear. Features classic button closure, chest pockets, and a timeless design that never goes out of style. This piece has been well-maintained and is ready for its next adventure.",
  condition: "Excellent",
  category: "Outerwear",
  size: "Medium",
  type: "Jacket",
  tags: ["vintage", "denim", "90s", "classic"],
  points: 150,
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  uploader: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    totalSwaps: 23,
    joinDate: "March 2023",
  },
  availability: "Available",
  location: "San Francisco, CA",
  postedDate: "2 days ago",
}

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleSwapRequest = () => {
    console.log("Swap request sent")
    // Handle swap request logic
  }

  const handleRedeemPoints = () => {
    console.log("Redeem with points")
    // Handle points redemption logic
  }

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
          <div className="flex items-center gap-4">
            <Link href="/landing" className="font-serif text-2xl font-bold text-vintage-dark">
              ReWear
            </Link>
            <Link href="/browse" className="vintage-button-secondary flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Browse
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`vintage-button-secondary p-2 ${isLiked ? "text-red-500" : ""}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <button className="vintage-button-secondary p-2">
              <Share2 className="w-5 h-5" />
            </button>
            <button onClick={handleLogout} className="vintage-button-secondary flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-4">
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src={itemData.images[currentImageIndex] || "/placeholder.svg"}
                  alt={itemData.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {itemData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-teal-accent"
                        : "border-transparent hover:border-vintage-brown/30"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${itemData.title} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-vintage-dark mb-2">{itemData.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-vintage-brown">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {itemData.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {itemData.postedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {itemData.location}
                    </span>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    itemData.availability === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {itemData.availability}
                </div>
              </div>

              <p className="text-vintage-brown mb-6 leading-relaxed">{itemData.description}</p>

              {/* Item Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="neomorphic-inset rounded-lg p-3">
                  <span className="text-sm text-vintage-brown">Condition</span>
                  <p className="font-medium text-vintage-dark">{itemData.condition}</p>
                </div>
                <div className="neomorphic-inset rounded-lg p-3">
                  <span className="text-sm text-vintage-brown">Size</span>
                  <p className="font-medium text-vintage-dark">{itemData.size}</p>
                </div>
                <div className="neomorphic-inset rounded-lg p-3">
                  <span className="text-sm text-vintage-brown">Type</span>
                  <p className="font-medium text-vintage-dark">{itemData.type}</p>
                </div>
                <div className="neomorphic-inset rounded-lg p-3">
                  <span className="text-sm text-vintage-brown">Points</span>
                  <p className="font-medium text-teal-accent">{itemData.points}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <span className="text-sm text-vintage-brown mb-2 block">Tags</span>
                <div className="flex flex-wrap gap-2">
                  {itemData.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-teal-accent/10 text-teal-accent rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button onClick={handleSwapRequest} className="vintage-button-primary flex-1 text-slate-500 text-slate-600 text-black   Send Swap Request
                </button>
                <button onClick={handleRedeemPoints} className="vintage-button-secondary flex-1">
                  Redeem ({itemData.points} pts)
                </button>
              </div>
            </div>

            {/* Uploader Info */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold text-vintage-dark mb-4">About the Owner</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={itemData.uploader.avatar || "/placeholder.svg"}
                    alt={itemData.uploader.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-vintage-dark">{itemData.uploader.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-vintage-brown">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span>{itemData.uploader.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{itemData.uploader.totalSwaps} swaps</span>
                    <span>•</span>
                    <span>Joined {itemData.uploader.joinDate}</span>
                  </div>
                </div>
                <Link href={`/profile/${itemData.uploader.name}`} className="vintage-button-secondary">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
