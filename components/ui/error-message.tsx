import { AlertCircle } from "lucide-react"

interface ErrorMessageProps {
  message: string
  className?: string
}

export function ErrorMessage({ message, className = "" }: ErrorMessageProps) {
  return (
    <div
      className={`flex items-center gap-2 p-3 rounded-lg bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)] ${className}`}
    >
      <AlertCircle className="w-5 h-5 text-coral flex-shrink-0" />
      <p className="text-sm text-coral">{message}</p>
    </div>
  )
}
