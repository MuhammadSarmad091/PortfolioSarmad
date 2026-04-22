import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
            ABOUT <span className="text-primary">ME</span>
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-6">
              I am a final-year Computer Science student at FAST NUCES with a deep passion for building robust software architectures. My journey spans across the entire stack—from crafting intuitive user interfaces to designing scalable backend systems and implementing machine learning pipelines.
            </p>
            <p className="mb-6">
              I thrive at the intersection of traditional web development and modern AI. Whether I'm deploying a full-stack movie portal, building a digital twin of a manufacturing plant, or orchestrating MLOps workflows with Airflow and Kubernetes, my goal is always to deliver performant, maintainable, and impactful solutions.
            </p>
            <p>
              Beyond the web, I enjoy diving into low-level systems programming, parallel computing, and building custom compilers, ensuring I have a holistic understanding of how software runs from the application layer down to the bare metal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}