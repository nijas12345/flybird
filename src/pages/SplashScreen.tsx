import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Users, Search } from 'lucide-react'

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      finishLoading()
    }, 4000) // Adjust time as needed

    return () => clearTimeout(timer)
  }, [finishLoading])

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  }

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        delay: 1.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 z-50"
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-64 h-64"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M20,50 Q35,20 50,50 T80,50"
                stroke="white"
                strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
            <motion.div
              className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Briefcase className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <Users className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Search className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold text-white mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            FlyBird
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            Connecting Talent with Opportunity
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 