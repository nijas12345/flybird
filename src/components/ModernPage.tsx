import { CheckCircle } from 'react-feather';

const WomenEmpowermentSection = () => (
  <div className="bg-gray-600 text-white py-16 px-4 rounded-lg">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-16">
        Work from Home
        <br />
        at your own pace
      </h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="text-lime-400 mb-2">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold text-lime-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            At fly-bird women empowerment, our mission is to help job seekers find meaningful employment and assist employers in finding the right talent to grow their business. We believe that everyone deserves the opportunity to work in a job they love.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-lime-400 mb-2">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold text-lime-400">
            Empowering Women with Remote Jobs
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fly Bird offers a wide array of remote job opportunities that cater specifically to the needs and skills of women. Our platform is designed to bridge the gap between talented women and forward-thinking employers who value diversity and inclusivity.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-lime-400 mb-2">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold text-lime-400">What we do</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Fly Bird, a unique and empowering portal dedicated to uplifting women across the globe by providing access to remote job opportunities. Our mission is to enable women to achieve financial independence, freedom, and professional growth from the comfort of their own homes. We believe in the power of women and are committed to revolutionizing the workforce by.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WomenEmpowermentSection

