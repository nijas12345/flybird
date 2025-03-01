"use client"

import { useState } from "react"
import { DashboardSidebar } from "./dashboard-sidebar"
import { UserProfile } from "./user-profile"
import { JobSearch } from "./job-search"
import { AppliedJobs } from "./applied-job"
import { PremiumUpgrade } from "./premium-upgrade"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-white text-black">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="  flex-1 p-4 md:p-6 lg:p-8">
        {activeTab === "profile" && <UserProfile />}
        {activeTab === "jobs" && <JobSearch />}
        {activeTab === "applied" && <AppliedJobs />}
        {activeTab === "premium" && <PremiumUpgrade />}
      </main>
    </div>
  )
}
