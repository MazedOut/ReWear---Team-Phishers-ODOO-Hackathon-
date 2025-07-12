"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Mail, Lock, User, ArrowRight, Chrome, Facebook } from "lucide-react"
import Link from "next/link"
import { FormInput } from "@/components/ui/form-input"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ErrorMessage } from "@/components/ui/error-message"

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface FormErrors {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
  general?: string
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string): boolean => {
    return password.length >= 8
  }

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = "Name is required"
      } else if (formData.name.length < 2) {
        newErrors.name = "Name must be at least 2 characters long"
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password"
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, isLogin])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))

      // Clear specific field error when user starts typing
      if (errors[name as keyof FormErrors]) {
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock authentication logic
      if (isLogin) {
        console.log("Login attempt:", { email: formData.email, password: formData.password })
      } else {
        console.log("Registration attempt:", formData)
      }

      // Redirect to landing page after successful auth
      window.location.href = "/landing"
    } catch (error) {
      setErrors({ general: "An error occurred. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider: "google" | "facebook") => {
    setIsLoading(true)
    try {
      console.log(`${provider} login initiated`)
      // Simulate social login
      await new Promise((resolve) => setTimeout(resolve, 1000))
      window.location.href = "/landing"
    } catch (error) {
      setErrors({ general: `Failed to sign in with ${provider}` })
    } finally {
      setIsLoading(false)
    }
  }

  const switchTab = (loginMode: boolean) => {
    setIsLogin(loginMode)
    setErrors({})
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in warm-gradient-bg">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 neomorphic">
            <span className="text-3xl font-serif font-bold gradient-text">R</span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-soft-black mb-2">ReWear</h1>
          <p className="text-charcoal">Sustainable Fashion Exchange</p>
        </div>

        {/* Auth Card */}
        <div className="glass-card rounded-2xl p-8 animate-slide-up">
          {/* Tab Switcher */}
          <div className="flex mb-6 neomorphic-inset rounded-xl p-1">
            <button
              onClick={() => switchTab(true)}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 text-black ${
                isLogin ? "vintage-button-primary shadow-medium" : "text-charcoal hover:text-forest-green"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => switchTab(false)}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 text-black ${
                !isLogin ? "vintage-button-primary shadow-medium" : "text-charcoal hover:text-forest-green"
              }`}
            >
              Register
            </button>
          </div>

          {/* Error Message */}
          {errors.general && <ErrorMessage message={errors.general} className="mb-4" />}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <FormInput
                type="text"
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                icon={<User className="w-5 h-5" />}
                disabled={isLoading}
                required={!isLogin}
              />
            )}

            <FormInput
              type="email"
              name="email"
              label="Email Address"
              placeholder="Enter your email"
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
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              icon={<Lock className="w-5 h-5" />}
              showPasswordToggle
              disabled={isLoading}
              required
            />

            {!isLogin && (
              <FormInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                icon={<Lock className="w-5 h-5" />}
                showPasswordToggle
                disabled={isLoading}
                required={!isLogin}
              />
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="vintage-button-primary w-full flex items-center justify-center gap-2 mt-6 text-black"
            >
              {isLoading ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-charcoal/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-charcoal">Or continue with</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialLogin("google")}
                disabled={isLoading}
                className="vintage-button-secondary flex items-center justify-center gap-2 py-3"
              >
                <Chrome className="w-5 h-5 text-blue-600" />
                <span className="hidden sm:inline">Google</span>
              </button>
              <button
                onClick={() => handleSocialLogin("facebook")}
                disabled={isLoading}
                className="vintage-button-secondary flex items-center justify-center gap-2 py-3"
              >
                <Facebook className="w-5 h-5 text-blue-700" />
                <span className="hidden sm:inline">Facebook</span>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center space-y-3">
            {isLogin && (
              <Link
                href="/forgot-password"
                className="block text-sm text-charcoal hover:text-emerald transition-colors"
              >
                Forgot Password?
              </Link>
            )}
            <div className="text-sm text-charcoal">
              <Link href="/admin" className="hover:text-emerald transition-colors font-medium">
                Admin Login →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-charcoal">
          <p>&copy; 2024 ReWear. Making fashion circular, one swap at a time.</p>
        </div>
      </div>
    </div>
  )
}
