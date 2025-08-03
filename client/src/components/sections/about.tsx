import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Ayan Khan",
    role: "Founder & Lead DevOps Engineer",
    specialty: "Cloud Architecture, CI/CD Automation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    color: "text-primary-blue"
  },
  {
    name: "Priya Sharma",
    role: "AI/ML Engineer",
    specialty: "Machine Learning, Data Science",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    color: "text-accent-teal"
  },
  {
    name: "Rajesh Kumar",
    role: "Cloud Architect",
    specialty: "AWS, Azure, Multi-cloud Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    color: "text-success-green"
  },
  {
    name: "Sneha Patel",
    role: "DevOps Specialist",
    specialty: "Kubernetes, Infrastructure as Code",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    color: "text-warning-amber"
  }
];

const values = [
  "Technical Excellence & Innovation Leadership",
  "Reliability & Trust in Every Project",
  "Client Success Focus & Partnership"
];

const stats = [
  { number: "50+", label: "Technologies Mastered" },
  { number: "99.9%", label: "Uptime Guarantee" }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
            About AiCloud Mania
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Leading India's next generation of cloud and AI innovation with enterprise-grade solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern cloud computing data center with servers and networking equipment"
              className="rounded-xl shadow-lg w-full h-auto mb-8"
            />

            <h3 className="text-2xl font-semibold text-dark-navy mb-6">Our Mission</h3>
            <p className="text-charcoal mb-6">
              AiCloud Mania is dedicated to delivering enterprise-grade DevOps, Cloud, and AI solutions 
              that empower businesses to scale efficiently and innovate rapidly. We combine cutting-edge 
              technology with proven methodologies to drive digital transformation.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-primary-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-charcoal">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="text-success-green text-xl mr-3 flex-shrink-0" />
                  <span className="text-charcoal">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-dark-navy mb-8 text-center">
              Our Expert Team
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-dark-navy mb-2">
                    {member.name}
                  </h4>
                  <p className={`font-medium mb-2 ${member.color}`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-charcoal">
                    {member.specialty}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
