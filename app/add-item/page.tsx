"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Upload, X, Plus, Tag, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = ["Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories", "Bags", "Jewelry"]

const conditions = ["New with tags", "Excellent", "Very Good", "Good", "Fair"]

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "One Size"]

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    size: "",
    condition: "",
    tags: [] as string[],
  })
  const [images, setImages] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // In a real app, you'd upload to a service like Cloudinary or AWS S3
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages((prev) => [...prev, e.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, images })
    // Handle form submission logic
    alert("Item listed successfully!")
  }

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...")
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between glass-card rounded-2xl p-4">
          <Link href="/landing" className="font-serif text-2xl font-bold text-vintage-dark">
            ReWear
          </Link>
          <h1 className="font-serif text-xl font-bold text-vintage-dark">List New Item</h1>
          <div className="flex items-center gap-4">
            <Link href="/landing" className="vintage-button-secondary flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <button onClick={handleLogout} className="vintage-button-secondary flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-vintage-dark mb-4">Photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Upload ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {images.length < 8 && (
                <label className="aspect-square border-2 border-dashed border-vintage-brown/30 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-teal-accent transition-colors">
                  <Upload className="w-8 h-8 text-vintage-brown mb-2" />
                  <span className="text-sm text-vintage-brown">Add Photo</span>
                  <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                </label>
              )}
            </div>
            <p className="text-sm text-vintage-brown">Upload up to 8 photos. First photo will be the main image.</p>
          </div>

          {/* Basic Information */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-vintage-dark mb-4">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-vintage-brown mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Vintage Denim Jacket"
                  className="vintage-input w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-vintage-brown mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="vintage-input w-full"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-vintage-brown mb-2">Type</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  placeholder="e.g., Jacket, T-shirt, Sneakers"
                  className="vintage-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-vintage-brown mb-2">Size *</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="vintage-input w-full"
                  required
                >
                  <option value="">Select Size</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-vintage-brown mb-2">Condition *</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="vintage-input w-full"
                  required
                >
                  <option value="">Select Condition</option>
                  {conditions.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-vintage-dark mb-4">Description</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your item in detail. Include brand, material, fit, any flaws, and why you're parting with it."
              rows={6}
              className="vintage-input w-full resize-none"
              required
            />
          </div>

          {/* Tags */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-vintage-dark mb-4">Tags</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
                className="vintage-input flex-1"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              />
              <button type="button" onClick={addTag} className="vintage-button-secondary px-4">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-teal-accent/10 text-teal-accent rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500 transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Link href="/landing" className="vintage-button-secondary">
              Cancel
            </Link>
            <button type="submit" className="vintage-button-primary text-slate-300 text-slate-300 text-slate-600 text-black    </div>
    </div>
  )
}
