import { CheckCircle, Upload, User } from "lucide-react";

export function UserProfile() {
  return (
    <div className="space-y-6  bg-white text-black">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Profile Information Section */}
        <div className="flex-1 p-6 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Profile Information</h2>
          <p className="text-sm text-gray-500">Update your personal details</p>
          <div className="flex flex-col md:flex-row gap-4 items-start mt-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center border">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>
              <button className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0 bg-transparent border border-muted-foreground flex items-center justify-center">
                <Upload className="h-4 w-4" />
                <span className="sr-only">Upload avatar</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium">First name</label>
                  <input
                    id="firstName"
                    type="text"
                    defaultValue="John"
                    className="block w-full border border-gray-400 rounded-lg p-2"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium">Last name</label>
                  <input
                    id="lastName"
                    type="text"
                    defaultValue="Doe"
                    className="block text-black w-full border text-black border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="block w-full text-black border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-6">
            <label htmlFor="bio" className="block text-sm font-medium">Professional Bio</label>
            <textarea
              id="bio"
              rows={4}
              defaultValue="Experienced software developer with 5+ years of experience in web development."
              className="block w-full border border-gray-300 text-black rounded-lg p-2"
            />
          </div>
          <div className="space-y-2 mt-6">
            <label htmlFor="skills" className="block text-sm font-medium">Skills</label>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">React</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">UI/UX</span>
              <span className="bg-transparent text-gray-800 border border-gray-300 px-3 py-1 rounded-full">+ Add Skill</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </div>

        {/* Verification Status Section */}
        <div className="flex flex-col gap-6 md:w-80">
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Verification Status</h3>
            <p className="text-sm text-gray-500">Your account verification status</p>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Email Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Profile Completed</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                <span>ID Verification</span>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Complete Verification
              </button>
            </div>
          </div>

          {/* Premium Status Section */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Premium Status</h3>
            <p className="text-sm text-primary-foreground/80">Free Plan</p>
            <div className="pt-6 text-sm">
              <p>Upgrade to Premium for more features and benefits.</p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
