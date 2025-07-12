interface StatusBadgeProps {
  status: "available" | "pending" | "swapped" | "completed" | "in-progress"
  className?: string
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const statusClasses = {
    available: "status-available",
    pending: "status-pending",
    swapped: "status-swapped",
    completed: "status-available",
    "in-progress": "status-pending",
  }

  const statusText = {
    available: "Available",
    pending: "Pending",
    swapped: "Swapped",
    completed: "Completed",
    "in-progress": "In Progress",
  }

  return <span className={`${statusClasses[status]} ${className}`}>{statusText[status]}</span>
}
