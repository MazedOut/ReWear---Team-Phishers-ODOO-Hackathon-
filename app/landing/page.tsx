"use client"

import { useState } from "react"
import {
  ArrowRight,
  Recycle,
  Heart,
  Users,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
  LogOut,
  Sparkles,
  Leaf,
  Globe,
  Shirt,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    condition: "Excellent",
    category: "Outerwear",
    image: "/placeholder.svg?height=300&width=300",
    points: 150,
    user: "Sarah J.",
    trending: true,
    eco: true,
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    condition: "Good",
    category: "Dresses",
    image: "/placeholder.svg?height=300&width=300",
    points: 120,
    user: "Emma W.",
    trending: false,
    eco: false,
  },
  {
    id: 3,
    title: "Leather Boots",
    condition: "Very Good",
    category: "Shoes",
    image: "/placeholder.svg?height=300&width=300",
    points: 200,
    user: "Michael C.",
    trending: true,
    eco: true,
  },
  {
    id: 4,
    title: "Cashmere Sweater",
    condition: "Excellent",
    category: "Knitwear",
    image: "/placeholder.svg?height=300&width=300",
    points: 180,
    user: "David K.",
    trending: false,
    eco: false,
  },
]

const platformStats = [
  { label: "Items Swapped", value: "12,847", icon: Recycle, color: "text-emerald" },
  { label: "CO₂ Saved", value: "2.3 tons", icon: Leaf, color: "text-sage-green" },
  { label: "Community Members", value: "8,492", icon: Users, color: "text-terracotta" },
  { label: "Countries", value: "23", icon: Globe, color: "text-forest-green" },
]

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)
  }

  const handleLogout = () => {
    console.log("Logging out...")
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen relative warm-gradient-bg">
      {/* Content */}
      <div className="relative z-10">
        {/* Enhanced Header */}
        <header className="glass-card mx-4 mt-4 rounded-2xl p-4 shadow-medium animate-slide-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/landing" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full neomorphic flex items-center justify-center">
                  <Shirt className="w-5 h-5 text-forest-green" />
                </div>
                <h1 className="font-serif text-2xl font-bold text-soft-black">ReWear</h1>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/browse" className="text-charcoal hover:text-emerald transition-colors font-medium">
                Browse
              </Link>
              <Link href="/profile" className="text-charcoal hover:text-emerald transition-colors font-medium">
                Profile
              </Link>
              <Link href="/add-item" className="vintage-button-accent flex items-center gap-2 text-black">
                <Plus className="w-4 h-4" />
                List Item
              </Link>
              <button onClick={handleLogout} className="vintage-button-dark flex items-center gap-2 text-black00-2 text-black">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <Link href="/add-item" className="vintage-button-accent p-2">
                <Plus className="w-4 h-4" />
              </Link>
              <button onClick={handleLogout} className="vintage-button-dark p-2">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="text-center py-20 px-4 glass-card mx-4 my-6 rounded-2xl shadow-strong animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full eco-badge mb-6 animate-pulse-soft">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Sustainable Fashion Revolution</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-soft-black mb-6 leading-tight">
              Welcome to <span className="gradient-text">ReWear</span>
            </h1>
            <h2 className="font-serif text-2xl md:text-4xl text-forest-green mb-8 font-medium">
              Swap, Reuse, Make Fashion Circular
            </h2>
            <p className="text-lg md:text-xl text-charcoal max-w-3xl mx-auto mb-12 leading-relaxed">
              Join our sustainable community where fashion gets a second life. Reduce textile waste, discover unique
              pieces, and make eco-friendly choices that matter for our planet's future.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/browse" className="vintage-button-primary flex items-center gap-2 text-lg px-8 py-4 text-black">
                Start Swapping
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/browse" className="vintage-button-secondary flex items-center gap-2 text-lg px-8 py-4">
                <Search className="w-5 h-5" />
                Browse Items
              </Link>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {platformStats.map((stat, index) => (
                <div key={index} className="feature-card p-4 earth-tone-card">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-soft-black">{stat.value}</div>
                  <div className="text-sm text-charcoal">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Platform Introduction */}
        <section className="py-20 px-4 glass-card mx-4 my-6 rounded-2xl shadow-medium animate-slide-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-soft-black mb-4">Why Choose ReWear?</h2>
              <p className="text-lg text-charcoal max-w-2xl mx-auto">
                Experience the future of sustainable fashion with our innovative platform
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-card group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald to-sage-green mb-6 group-hover:scale-110 transition-transform">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-soft-black mb-4">Sustainable Impact</h3>
                <p className="text-charcoal leading-relaxed">
                  Every swap prevents clothing from ending up in landfills, reducing textile waste and environmental
                  impact. Join the circular economy revolution.
                </p>
              </div>

              <div className="feature-card group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-terracotta to-warm-orange mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-soft-black mb-4">Community Driven</h3>
                <p className="text-charcoal leading-relaxed">
                  Connect with like-minded fashion lovers who share your passion for sustainable style and conscious
                  consumption. Build lasting relationships.
                </p>
              </div>

              <div className="feature-card group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-caramel to-coffee mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-soft-black mb-4">Circular Fashion</h3>
                <p className="text-charcoal leading-relaxed">
                  Give your clothes a new life and discover unique pieces that tell a story, creating a circular fashion
                  economy that benefits everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Featured Items Carousel */}
        <section className="py-20 px-4 glass-card mx-4 my-6 rounded-2xl shadow-medium animate-slide-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-soft-black mb-4">Featured Items</h2>
              <p className="text-lg text-charcoal">Discover amazing pieces from our community</p>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-8 earth-tone-card">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`item-card transition-all duration-500 ${
                        index === currentSlide ? "scale-105 shadow-strong" : ""
                      }`}
                    >
                      <div className="absolute top-2 right-2 z-10 flex gap-1">
                        {item.trending && (
                          <span className="trending-badge">
                            <Sparkles className="w-3 h-3" />
                            Trending
                          </span>
                        )}
                        {item.eco && (
                          <span className="eco-badge">
                            <Leaf className="w-3 h-3" />
                            Eco
                          </span>
                        )}
                      </div>

                      <div className="aspect-square mb-4 rounded-lg overflow-hidden relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <h3 className="font-medium text-soft-black mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center text-sm text-charcoal mb-3">
                        <span className="px-2 py-1 rounded-full bg-sage-green/20 text-forest-green font-medium">
                          {item.condition}
                        </span>
                        <span>{item.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald font-bold text-lg">{item.points} points</span>
                        <Link
                          href={`/item/${item.id}`}
                          className="text-charcoal hover:text-emerald transition-colors font-medium"
                        >
                          View Details →
                        </Link>
                      </div>
                      <div className="mt-2 text-xs text-charcoal">by {item.user}</div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Carousel Controls */}
                <div className="flex justify-center items-center gap-6 mt-8">
                  <button
                    onClick={prevSlide}
                    className="vintage-button-secondary p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="flex gap-3">
                    {featuredItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "bg-emerald scale-125" : "bg-charcoal/30 hover:bg-charcoal/50"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="vintage-button-secondary p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 glass-card mx-4 my-6 rounded-2xl shadow-medium animate-slide-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-soft-black mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-charcoal mb-8">
              Join thousands of fashion enthusiasts making a positive impact on the planet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/add-item" className="vintage-button-accent flex items-center gap-2 text-lg px-8 py-4 text-black">
                <Plus className="w-5 h-5" />
                List Your First Item
              </Link>
              <Link href="/browse" className="vintage-button-primary flex items-center gap-2 text-lg px-8 py-4 text-black">
                <Search className="w-5 h-5" />
                Explore Items
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-12 px-4 text-center glass-card mx-4 mb-4 rounded-2xl shadow-soft">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full neomorphic flex items-center justify-center">
                <Shirt className="w-4 h-4 text-forest-green" />
              </div>
              <span className="font-serif text-xl font-bold text-soft-black">ReWear</span>
            </div>
            <p className="text-charcoal mb-4">Making fashion circular, one swap at a time.</p>
            <div className="flex justify-center gap-6 text-sm text-charcoal">
              <Link href="/about" className="hover:text-emerald transition-colors">
                About
              </Link>
              <Link href="/privacy" className="hover:text-emerald transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-emerald transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-emerald transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-xs text-charcoal mt-4">&copy; 2024 ReWear. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
