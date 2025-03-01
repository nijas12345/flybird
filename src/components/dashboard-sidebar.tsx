import { CheckCircle, CreditCard, FileCheck, Search, User } from "lucide-react"
import { cn } from "../lib/utils"

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "jobs", label: "Job Search", icon: Search },
    { id: "applied", label: "Applied Jobs", icon: FileCheck },
    { id: "premium", label: "Premium", icon: CreditCard },
  ]

  return (
    <div className="w-full md:w-64 bg-background border-r">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  activeTab === item.id
                    ? "bg-blue-500 text-white" // Blue background for active button
                    : "hover:bg-muted text-muted-foreground hover:text-foreground", // Inactive button styles
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
                {item.id === "profile" && (
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle className="h-3 w-3" />
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
