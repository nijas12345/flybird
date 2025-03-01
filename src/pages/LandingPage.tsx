import { useState } from 'react'
import { Briefcase, Users, TrendingUp, Megaphone } from 'lucide-react'
import WomenEmpowermentSection from '../components/ModernPage'
import { useNavigate } from 'react-router-dom'

export default function UserEntry() {
  const [userType, setUserType] = useState<'jobseeker' | 'employer' | 'advertiser'>('jobseeker')
  
  // State for handling phone number, password, name, location, and face verification
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [faceImage, setFaceImage] = useState<File | null>(null)
  const [isLogin, setIsLogin] = useState(true)

  const benefits = {
    jobseeker: [
      { icon: <Briefcase className="w-6 h-6 text-blue-500" />, title: "Thousands of Jobs", description: "Access a wide range of opportunities across various industries." },
      { icon: <TrendingUp className="w-6 h-6 text-blue-500" />, title: "Work Part-Time", description: "Explore part-time job opportunities that suit your schedule." },
      { icon: <TrendingUp className="w-6 h-6 text-blue-500" />, title: "Work Full-Time", description: "Find full-time roles that provide stability and growth." },
      { icon: <Users className="w-6 h-6 text-blue-500" />, title: "Get Near Work Location", description: "Search for jobs near your preferred work location to minimize commute time." },
    ],
    employer: [
      { icon: <Users className="w-6 h-6 text-blue-500" />, title: "Talent Pool", description: "Access a diverse pool of qualified candidates." },
      { icon: <Briefcase className="w-6 h-6 text-blue-500" />, title: "Efficient Hiring", description: "Streamline your recruitment process with our tools." },
      { icon: <TrendingUp className="w-6 h-6 text-blue-500" />, title: "Company Growth", description: "Find the right talent to drive your company forward." },
    ],
    advertiser: [
      { icon: <Megaphone className="w-6 h-6 text-blue-500" />, title: "Wide Reach", description: "Promote your services to a large audience of job seekers and employers." },
      { icon: <Users className="w-6 h-6 text-blue-500" />, title: "Targeted Advertising", description: "Reach specific demographics and industries with precision." },
      { icon: <TrendingUp className="w-6 h-6 text-blue-500" />, title: "Performance Tracking", description: "Monitor and optimize your ad campaigns with detailed analytics." },
    ],
  }

  // Handler for input changes
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)

  // Handler for face image upload
  const handleFaceImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFaceImage(e.target.files[0])
    }
  }

  // Toggle between login and signup forms
  const toggleForm = () => setIsLogin(!isLogin)

  // Function for form submission (login or signup)
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Phone number validation (basic check)
    const phoneRegex = /^[0-9]{10}$/ // simple 10 digit phone number check
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number.")
      return
    }

    // Password validation (basic check)
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.")
      return
    }

    if (isLogin) {
     navigate('/pages')
    } else {
      // Handle signup logic

      // Location and name validation
      if (!name || !location) {
        alert("Please provide both your name and location.")
        return
      }

      if (!faceImage) {
        alert("Please upload a photo for face verification.")
        return
      }

      // Sending data to backend for signup
      const formData = new FormData()
      formData.append('phoneNumber', phoneNumber)
      formData.append('password', password)
      formData.append('name', name)
      formData.append('location', location)
      formData.append('faceImage', faceImage)

      const response = await fetch('/api/signup', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        alert('Signup successful!')
        // Redirect or update state here
      } else {
        alert('Signup failed. Please try again.')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to FlyBird</h1>
              <p className="text-gray-600 mb-6">Connect with opportunities, find talent, or advertise your services.</p>
              
              {/* User Type Selection */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">I am a...</h2>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setUserType('jobseeker')}
                    className={`flex-1 p-2 rounded-md ${userType === 'jobseeker' ? 'bg-blue-500 text-white' : 'border border-blue-300 text-black'}`}
                  >
                    Job Seeker
                  </button>
                  <button
                    onClick={() => setUserType('employer')}
                    className={`flex-1 p-2 rounded-md ${userType === 'employer' ? 'bg-blue-500 text-white' : 'border border-gray-300 text-black'}`}
                  >
                    Employer
                  </button>
                  <button
                    onClick={() => setUserType('advertiser')}
                    className={`flex-1 p-2 rounded-md ${userType === 'advertiser' ? 'bg-blue-500 text-white' : 'border border-gray-300 text-black'}`}
                  >
                    Advertiser
                  </button>
                </div>
              </div>

              {/* Toggle Form (Login / Signup) */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{isLogin ? 'Login' : 'Signup'}</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700" htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className="w-full text-black p-2 border border-gray-300 rounded-md"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700" htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="w-full p-2 text-black border border-gray-300 rounded-md"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {/* Only visible for Signup */}
                  {!isLogin && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={handleNameChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="location">Location</label>
                        <input
                          type="text"
                          id="location"
                          value={location}
                          onChange={handleLocationChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Click here to access your location"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="faceImage">Click here (Face Verification)</label>
                        <input
                          type="text"
                          id="faceImage"
                          onChange={handleFaceImageChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="flex justify-between items-center mt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      {isLogin ? 'Login' : 'Signup'}
                    </button>
                    <button
                      type="button"
                      onClick={toggleForm}
                      className="text-sm text-blue-500"
                    >
                      {isLogin ? 'Don’t have an account? Sign Up' : 'Already have an account? Login'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Platform Benefits</h2>
                <ul className="space-y-4">
                  {benefits[userType].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WomenEmpowermentSection/>
    </div>
    
  )
}
