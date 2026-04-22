import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C/C++", "Java", "Python", "JavaScript", "Assembly"],
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-200"
  },
  {
    title: "Databases",
    skills: ["SQL", "MongoDB", "PostgreSQL"],
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    accent: "text-sky-400",
    chip: "bg-sky-500/15 text-sky-300 border-sky-500/30 hover:border-sky-400 hover:text-sky-200"
  },
  {
    title: "Web Development",
    skills: ["MEVN Stack", "MERN Stack", "React", "Vue.js", "Node.js", "Express"],
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/30",
    accent: "text-fuchsia-400",
    chip: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30 hover:border-fuchsia-400 hover:text-fuchsia-200"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Jenkins", "GitHub Actions", "Kubernetes"],
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    chip: "bg-amber-500/15 text-amber-300 border-amber-500/30 hover:border-amber-400 hover:text-amber-200"
  },
  {
    title: "Tools & Others",
    skills: ["MLflow", "DVC", "Apache Airflow", "Prometheus", "Grafana", "Git", "GitHub"],
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    accent: "text-rose-400",
    chip: "bg-rose-500/15 text-rose-300 border-rose-500/30 hover:border-rose-400 hover:text-rose-200"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            TECHNICAL <span className="text-primary">ARSENAL</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${category.bg} border ${category.border} rounded-2xl p-8 transition-colors`}
            >
              <h3 className={`text-xl font-bold mb-6 ${category.accent}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 ${category.chip} rounded-full text-sm font-medium border transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}