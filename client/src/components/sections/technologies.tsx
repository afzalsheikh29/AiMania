import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  SiAmazon,
  SiGooglecloud,
  SiCloudflare,
  SiTensorflow,
  SiPytorch,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiElasticsearch
} from "react-icons/si";
import { Cloud, Brain, Settings, Database } from "lucide-react";

const technologies = [
  // Cloud Platforms
  { name: "AWS", icon: SiAmazon, category: "cloud", color: "text-orange-500" },
  { name: "Azure", icon: Cloud, category: "cloud", color: "text-blue-500" },
  { name: "GCP", icon: SiGooglecloud, category: "cloud", color: "text-red-500" },
  { name: "Cloudflare", icon: SiCloudflare, category: "cloud", color: "text-orange-600" },
  
  // AI/ML
  { name: "TensorFlow", icon: SiTensorflow, category: "ai", color: "text-orange-500" },
  { name: "PyTorch", icon: SiPytorch, category: "ai", color: "text-red-500" },
  { name: "Python", icon: SiPython, category: "ai", color: "text-blue-500" },
  { name: "Machine Learning", icon: Brain, category: "ai", color: "text-green-500" },
  
  // DevOps
  { name: "Docker", icon: SiDocker, category: "devops", color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, category: "devops", color: "text-blue-600" },
  { name: "Jenkins", icon: SiJenkins, category: "devops", color: "text-red-500" },
  { name: "Git", icon: SiGit, category: "devops", color: "text-orange-500" },
  
  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, category: "database", color: "text-blue-500" },
  { name: "MongoDB", icon: SiMongodb, category: "database", color: "text-green-500" },
  { name: "Redis", icon: SiRedis, category: "database", color: "text-red-500" },
  { name: "Elasticsearch", icon: SiElasticsearch, category: "database", color: "text-yellow-500" },
];

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "cloud", label: "Cloud Platforms" },
  { id: "ai", label: "AI/ML" },
  { id: "devops", label: "DevOps" },
  { id: "database", label: "Databases" },
];

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTechnologies = activeCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="technologies" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
            Technology Ecosystem
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Powered by the world's most advanced cloud, AI, and data technologies
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary-blue text-white"
                  : "bg-gray-200 text-charcoal hover:bg-gray-300"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${activeCategory}`}
              className="tech-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="tech-logo w-16 h-16 mx-auto mb-4 bg-light-gray rounded-lg flex items-center justify-center">
                <tech.icon className={`text-3xl ${tech.color}`} />
              </div>
              <h4 className="font-semibold text-dark-navy text-sm">
                {tech.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
