import { useState } from "react"
import { Building2, Calendar, CheckCircle, Clock, FileText, XCircle } from "lucide-react"

export function AppliedJobs() {
  const [selectedStatus, setSelectedStatus] = useState("all")

  const applications = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      appliedDate: "Oct 15, 2023",
      status: "interview",
      stage: "Technical Interview",
      nextStep: "Final Interview",
      nextDate: "Oct 25, 2023",
      progress: 60,
    },
    {
      id: 2,
      position: "UX Designer",
      company: "Design Studio",
      appliedDate: "Oct 10, 2023",
      status: "rejected",
      stage: "Portfolio Review",
      progress: 30,
    },
    {
      id: 3,
      position: "Backend Developer",
      company: "Data Systems",
      appliedDate: "Oct 18, 2023",
      status: "applied",
      stage: "Application Review",
      progress: 10,
    },
    {
      id: 4,
      position: "Product Manager",
      company: "InnovateTech",
      appliedDate: "Oct 5, 2023",
      status: "offer",
      stage: "Offer Extended",
      offerDetails: "Pending your response",
      offerDeadline: "Oct 30, 2023",
      progress: 100,
    },
  ]

  const filteredApplications =
    selectedStatus === "all"
      ? applications
      : applications.filter((app) => app.status === selectedStatus)

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Applied Jobs</h3>
            <p className="text-sm text-muted-foreground">Track your job applications</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Applications</option>
              <option value="applied">Applied</option>
              <option value="interview">In Progress</option>
              <option value="offer">Offers</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-6 rounded-md text-center">
              <div className="text-3xl font-bold">{applications.length}</div>
              <p className="text-sm text-muted-foreground mt-1">Total Applications</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md text-center">
              <div className="text-3xl font-bold">1</div>
              <p className="text-sm text-muted-foreground mt-1">Interviews</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md text-center">
              <div className="text-3xl font-bold">1</div>
              <p className="text-sm text-muted-foreground mt-1">Offers</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md text-center">
              <div className="text-3xl font-bold">1</div>
              <p className="text-sm text-muted-foreground mt-1">Rejections</p>
            </div>
          </div>

          <div>
            <div className="grid gap-4">
              {filteredApplications.map((app) => (
                <div
                  key={app.id}
                  className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">{app.position}</h4>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Building2 className="h-3.5 w-3.5" />
                          <span>{app.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Application Progress</span>
                        <span className="font-medium">{app.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: `${app.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Applied: {app.appliedDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Stage: {app.stage}</span>
                      </div>
                      {app.nextStep && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <FileText className="h-3.5 w-3.5" />
                          <span>Next: {app.nextStep}</span>
                        </div>
                      )}
                      {app.nextDate && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{app.nextDate}</span>
                        </div>
                      )}
                      {app.offerDetails && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground col-span-2">
                          <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                          <span>{app.offerDetails}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-6 py-2 bg-gray-100 border-t flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {app.status === "rejected" ? (
                        <XCircle className="h-3.5 w-3.5 text-red-500" />
                      ) : (
                        <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                      )}
                      <span>Last updated: 2 days ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

