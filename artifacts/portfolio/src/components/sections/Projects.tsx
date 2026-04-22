import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import projectPlaceholder from "@/assets/project-placeholder.png";
import moviePortalImg from "@assets/MoviePortal_1776890404580.png";
import torcsImg from "@assets/Torcs_1776890404582.jpg";
import quizImg from "@assets/QuizManagement_1776890404581.png";
import pacmanImg from "@assets/Pacman_1776890404580.jpeg";
import deepBlightImg from "@assets/DeepBlight_1776890404577.png";
import mistImg from "@assets/MIST_1776890404579.PNG";
import compilerImg from "@assets/Compiler_1776890404576.jpeg";
import hospitalImg from "@assets/HospitalManagementSystem_1776890404579.png";
import ecommerceImg from "@assets/Ecommerce-Adgenerative_1776890404578.png";

const projects = [
  {
    title: "MoviePortal",
    description: "A full-stack movie information platform inspired by IMDb. Users explore, add, and review movies with dynamic listings and reviews. Built with a scalable backend, containerized deployment, and tested for maintainability.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Docker", "Vitest", "Jest"],
    github: "https://github.com/MuhammadSarmad091/MoviePortal",
    image: moviePortalImg
  },
  {
    title: "Bottle Factory Digital Twin",
    description: "Real-time digital twin of a bottle manufacturing factory. Simulates sensor data via Python backend, visualized in an interactive web dashboard and 3D Unity environment with predictive maintenance AI.",
    tags: ["React", "Express", "Unity", "Python", "MongoDB", "WebGL", "VR"],
    github: "https://github.com/MuhammadSarmad091/SmartFactory",
    image: projectPlaceholder
  },
  {
    title: "TORCS Racing Car Agent",
    description: "Deep learning autonomous driving agent in the TORCS simulator. Predicts steering, acceleration, braking and gear from sensor inputs; tracked with MLflow for reproducibility.",
    tags: ["Python", "TensorFlow", "Keras", "MLflow", "OpenAI Gym"],
    github: "https://github.com/MuhammadSarmad091/MLP-Model-For-TORCS",
    image: torcsImg
  },
  {
    title: "Quiz Management System",
    description: "Desktop quiz platform for educational institutions with MCQ + subjective quizzes, auto-grading for objective and manual evaluation for subjective.",
    tags: ["Java", "JavaFX", "SQL Server", "Scene Builder"],
    github: "https://github.com/MuhammadSarmad091/QuizManagementSystem",
    image: quizImg
  },
  {
    title: "Multi-Threaded Pac-Man Game",
    description: "High-performance Pac-Man with separate threads for UI, player, and ghosts. Demonstrates synchronization, race-condition prevention, and deadlock avoidance.",
    tags: ["C++", "pthreads", "SFML"],
    github: "https://github.com/MuhammadSarmad091/PacMan-Multithreaded",
    image: pacmanImg
  },
  {
    title: "DeepBlight",
    description: "AI web app for detecting potato leaf diseases and pests using DenseNet models. Deployed on AWS ECS with Docker and tracked with MLflow.",
    tags: ["React", "Python", "MLflow", "AWS ECS", "Docker"],
    github: "https://github.com/MuhammadSarmad091/DeepBlightWeb",
    image: deepBlightImg
  },
  {
    title: "MISTs Construction",
    description: "Parallel computing project building Minimum Spanning Trees with hybrid MPI + OpenMP parallelism for large-scale graph computation.",
    tags: ["C++", "MPICH", "OpenMP"],
    github: "https://github.com/MuhammadSarmad091/MISTs-Construction-using-MPICH-and-OpenMP",
    image: mistImg
  },
  {
    title: "JSON → Relational CSV Compiler",
    description: "Compiler-style system that transforms hierarchical JSON into normalized relational CSV via custom lexer, tokenizer, and parser with symbol tables and error handling.",
    tags: ["Java"],
    github: "https://github.com/MuhammadSarmad091/MISTs-Construction-using-MPICH-and-OpenMP",
    image: compilerImg
  },
  {
    title: "Hospital Management System",
    description: "Desktop hospital management with patient, pharmacy, lab, and doctor allocation modules using OOP design and role-based access.",
    tags: ["Java", "JavaFX", "JDBC", "SQL"],
    github: "https://github.com/MuhammadSarmad091/HospitalManagementSystem",
    image: hospitalImg
  },
  {
    title: "E-Commerce Ad Creative Generator",
    description: "Scalable MLOps pipeline for generating e-commerce ad creatives. Workflows orchestrated via Airflow, experiments via MLflow, deployed on AWS EKS with Prometheus + Grafana monitoring.",
    tags: ["Airflow", "MLflow", "Kubernetes", "AWS", "Prometheus"],
    github: "https://github.com/MLOPS-Fall-2025/e-commerce-ad-creative-generator-MuhammadSarmad091",
    image: ecommerceImg
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function getColumnsForWidth(width: number): number {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [columns, setColumns] = useState<number>(() =>
    typeof window !== "undefined" ? getColumnsForWidth(window.innerWidth) : 3
  );

  useEffect(() => {
    const handleResize = () => setColumns(getColumnsForWidth(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const INITIAL_COUNT = Math.min(columns * 2, projects.length);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            <span className="text-primary">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            A showcase of my recent work spanning full-stack development, machine learning, and systems engineering.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence initial={false}>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial={index >= INITIAL_COUNT ? { opacity: 0, y: 20 } : undefined}
              animate={index >= INITIAL_COUNT ? { opacity: 1, y: 0 } : undefined}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index >= INITIAL_COUNT ? (index - INITIAL_COUNT) * 0.05 : 0 }}
              className="h-full"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="block h-full cursor-pointer"
              >
              <Card className="h-full flex flex-col bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-1 pb-4">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <CardDescription className="text-muted-foreground line-clamp-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background border-border text-xs font-mono text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </a>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll((v) => !v)}
              className="border-primary/40 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
              data-testid="button-toggle-projects"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}