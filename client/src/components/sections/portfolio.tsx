import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Digital Banking Platform Modernization",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["FinTech", "AWS", "Kubernetes"],
    tagColors: ["bg-primary-blue", "bg-accent-teal", "bg-success-green"],
    challenge: "Legacy banking system requiring cloud migration with zero downtime and enhanced security compliance.",
    solution: "Implemented AWS-based microservices architecture with Kubernetes orchestration and automated CI/CD pipelines.",
    results: [
      "60% reduction in deployment time",
      "99.99% system uptime achieved",
      "SOC2 compliance certification",
      "40% cost optimization"
    ]
  },
  {
    title: "AI-Powered Recommendation Engine",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["E-commerce", "AI/ML", "Azure"],
    tagColors: ["bg-purple-500", "bg-orange-500", "bg-blue-500"],
    challenge: "E-commerce platform needed personalized product recommendations to increase customer engagement and sales.",
    solution: "Developed custom ML models using TensorFlow and deployed on Azure with real-time data processing capabilities.",
    results: [
      "35% increase in click-through rates",
      "25% boost in average order value",
      "Real-time processing under 100ms",
      "92% recommendation accuracy"
    ]
  },
  {
    title: "HIPAA-Compliant Healthcare Platform",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Healthcare", "Security", "GCP"],
    tagColors: ["bg-green-500", "bg-red-500", "bg-indigo-500"],
    challenge: "Healthcare provider needed secure, scalable platform for patient data management with strict compliance requirements.",
    solution: "Built HIPAA-compliant architecture on GCP with end-to-end encryption, audit trails, and automated security monitoring.",
    results: [
      "HIPAA compliance certification",
      "Zero security incidents",
      "50% faster patient processing",
      "99.9% data availability"
    ]
  },
  {
    title: "Smart Manufacturing IoT Solution",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Manufacturing", "IoT", "Data Analytics"],
    tagColors: ["bg-yellow-500", "bg-blue-600", "bg-green-600"],
    challenge: "Manufacturing company required real-time equipment monitoring and predictive maintenance capabilities.",
    solution: "Deployed IoT sensors with cloud-based analytics platform for real-time monitoring and AI-powered predictive maintenance.",
    results: [
      "30% reduction in downtime",
      "45% decrease in maintenance costs",
      "Real-time equipment visibility",
      "85% prediction accuracy"
    ]
  }
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
            Portfolio & Case Studies
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Delivering exceptional results across industries with measurable impact and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-light-gray p-8 rounded-xl hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className={`${project.tagColors[tagIndex]} text-white px-3 py-1 rounded-full text-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-dark-navy mb-4">
                {project.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Challenge:</h4>
                  <p className="text-charcoal text-sm">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Solution:</h4>
                  <p className="text-charcoal text-sm">{project.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Results:</h4>
                  <ul className="text-charcoal text-sm space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex}>• {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
