import { Users, ListChecks, MessageCircle, Award } from "lucide-react";

const achievements = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    value: "50+",
    label: "Team Members",
  },
  {
    icon: <ListChecks className="w-8 h-8 text-white" />,
    value: "100000+",
    label: "Positions Filled",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    value: "600+",
    label: "Customer Reviews",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    value: "14+",
    label: "Years of Excellence",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us</h2>
        <p className="text-gray-600 text-lg mb-12">
          With proven expertise and a people-first approach, we’ve helped hundreds of businesses grow faster and smarter.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center items-center">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-800 rounded-lg p-4 mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
