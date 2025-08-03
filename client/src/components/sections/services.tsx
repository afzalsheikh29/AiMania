import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cloud, 
  Brain, 
  Settings, 
  Code, 
  BarChart3, 
  Shield, 
  Server, 
  Rocket 
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description: "AWS, Azure, GCP implementations with serverless architecture, VPC design, and containerization strategies.",
    features: ["Multi-cloud strategies", "Hybrid solutions", "Infrastructure optimization"],
    color: "bg-primary-blue/10 text-primary-blue"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Custom ML model development, MLOps pipeline implementation, NLP, and computer vision automation.",
    features: ["TensorFlow & PyTorch", "MLOps automation", "Custom AI solutions"],
    color: "bg-accent-teal/10 text-accent-teal"
  },
  {
    icon: Settings,
    title: "DevOps & Site Reliability",
    description: "CI/CD pipeline design, Infrastructure as Code, Kubernetes orchestration, and 24/7 monitoring support.",
    features: ["Terraform & Ansible", "Kubernetes management", "24/7 SRE support"],
    color: "bg-success-green/10 text-success-green"
  },
  {
    icon: Code,
    title: "Application Development",
    description: "Full-stack development, microservices architecture, API development, and legacy system modernization.",
    features: ["Modern web frameworks", "API integration", "Legacy modernization"],
    color: "bg-warning-amber/10 text-warning-amber"
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    description: "Data pipeline construction, warehouse implementation, business intelligence, and real-time analytics.",
    features: ["Big data processing", "BI dashboards", "Real-time analytics"],
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Zero-trust security implementation, audits, SOC2/GDPR/HIPAA compliance, and penetration testing.",
    features: ["Security audits", "Compliance frameworks", "Penetration testing"],
    color: "bg-red-500/10 text-red-500"
  },
  {
    icon: Server,
    title: "Managed Cloud Services",
    description: "24/7 infrastructure monitoring, disaster recovery planning, performance optimization, and ongoing support.",
    features: ["Proactive monitoring", "Disaster recovery", "Performance optimization"],
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Technology strategy development, workflow automation, process optimization, and change management.",
    features: ["Strategy consulting", "Process automation", "Change management"],
    color: "bg-pink-500/10 text-pink-500"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-navy mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-charcoal space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
