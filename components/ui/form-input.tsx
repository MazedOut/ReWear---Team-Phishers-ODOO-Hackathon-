"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { Eye, EyeOff } from "lucide-react"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
  showPasswordToggle?: boolean
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, icon, showPasswordToggle, type, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type

    return (
      <div className="space-y-2">
        {label && <label className="block text-sm font-medium text-vintage-brown">{label}</label>}
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vintage-brown">{icon}</div>}
          <input
            ref={ref}
            type={inputType}
            className={`vintage-input w-full ${icon ? "pl-12" : ""} ${
              showPasswordToggle ? "pr-12" : ""
            } ${error ? "error-input" : ""} ${className}`}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-vintage-brown hover:text-vintage-dark transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}
        </div>
        {error && <p className="error-text">{error}</p>}
      </div>
    )
  },
)

FormInput.displayName = "FormInput"
