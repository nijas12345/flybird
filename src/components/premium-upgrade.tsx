import { CheckCircle, Crown, Star, Zap, MessageSquare, Users } from "lucide-react";

export function PremiumUpgrade() {
  const premiumFeatures = [
    {
      title: "Unlimited Job Roles",
      description: "List as many job roles as you need without any limits.",
      icon: CheckCircle,
    },
    {
      title: "Chat with Employers and Users",
      description: "Engage in real-time chats with potential employers and other users.",
      icon: MessageSquare,
    },
    {
      title: "Join Skill-Based Groups",
      description: "Collaborate and connect with like-minded professionals in skill-based groups.",
      icon: Users,
    },
  ];

  const plans = [
    {
      name: "Monthly",
      price: "$14.99",
      period: "per month",
      description: "Billed monthly, cancel anytime",
      features: [
        "Unlimited Job Roles",
        "Chat with Employers and Users",
        "Join Skill-Based Groups",
      ],
      popular: false,
    },
    {
      name: "Annual",
      price: "$9.99",
      period: "per month",
      description: "Billed annually, save 33%",
      features: [
        "Unlimited Job Roles",
        "Chat with Employers and Users",
        "Join Skill-Based Groups",
      ],
      popular: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold">Upgrade to Premium</h2>
        <p className="text-lg text-gray-600">Boost your job search with premium features</p>

        {/* Premium Features Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center">Premium Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {premiumFeatures.map((feature) => (
              <div key={feature.title} className="p-4 border rounded-lg text-center bg-gray-100">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 inline-block">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-medium mt-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-6 border rounded-lg relative ${plan.popular ? "border-blue-500" : ""}`}>
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-md transform translate-x-2 -translate-y-2">
                  Best Value
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="ml-1 text-gray-500">{plan.period}</span>
              </div>
              <p className="text-gray-600 mt-1">{plan.description}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-4 py-2 px-4 rounded-md font-medium ${plan.popular ? "bg-blue-600 text-white" : "border border-gray-400 text-gray-700"}`}>
                {plan.popular ? "Get Started" : "Subscribe"}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mt-6">
          <h3 className="font-medium mb-2">Money Back Guarantee</h3>
          <p className="text-sm text-gray-500">
            Not satisfied with our premium features? Get a full refund within 14 days of your purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
