"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Mail, Lock, Shield, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FormInput } from "@/components/ui/form-input"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ErrorMessage } from "@/components/ui/error-message"

interface AdminFormData {
  email: string
  password: string
}

interface AdminFormErrors {
  email?: string
  password?: string
  general?: string
}

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<AdminFormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<AdminFormErrors>({})

  const validateForm = useCallback((): boolean => {
    const newErrors: AdminFormErrors = {}

    if (!formData.email) {
      newErrors.email = "Admin email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      newErrors.password = "Admin password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))

      if (errors[name as keyof AdminFormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }))
      }
    },
    [errors],
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate admin authentication
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock admin validation
      if (formData.email === "admin@rewear.com" && formData.password === "admin123456") {
        console.log("Admin login successful:", formData)
        window.location.href = "/admin/dashboard"
      } else {
        setErrors({ general: "Invalid admin credentials" })
      }
    } catch (error) {
      setErrors({ general: "Authentication failed. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 neomorphic">
            <Shield className="w-10 h-10 text-teal-accent" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-vintage-dark mb-2">Admin Portal</h1>
          <p className="text-vintage-brown">ReWear Management Dashboard</p>
        </div>

        {/* Admin Login Card */}
        <div className="glass-card rounded-2xl p-8 animate-slide-up">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-serif text-xl font-bold text-vintage-dark mb-2">Administrator Access</h2>
            <p className="text-sm text-vintage-brown">Secure login for platform management</p>
          </div>

          {/* Error Message */}
          {errors.general && <ErrorMessage message={errors.general} className="mb-4" />}

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              type="email"
              name="email"
              label="Admin Email"
              placeholder="Enter admin email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              icon={<Mail className="w-5 h-5" />}
              disabled={isLoading}
              required
            />

            <FormInput
              type="password"
              name="password"
              label="Admin Password"
              placeholder="Enter admin password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              icon={<Lock className="w-5 h-5" />}
              showPasswordToggle
              disabled={isLoading}
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="vintage-button-primary w-full flex items-center justify-center gap-2 mt-6 text-black text-black text-slate-600 text-black text-white text-black text-slate-400 text-black text-slate-600"
            >
              {isLoading ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-vintage-brown hover:text-teal-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to User Login
            </Link>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 neomorphic-inset rounded-lg">
            <p className="text-xs text-vintage-brown text-center mb-2">Demo Credentials:</p>
            <p className="text-xs text-vintage-dark text-center">
              Email: admin@rewear.com
              <br />
              Password: admin123456
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-vintage-brown">
          <p>&copy; 2024 ReWear Admin. Secure platform management.</p>
        </div>
      </div>
    </div>
  )
}
