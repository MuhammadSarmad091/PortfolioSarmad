import { motion } from "framer-motion";
import { Download, ArrowRight, Code2, Layers, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import avatarImg from "@assets/DP_New_1776890404577.jpg";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Sidebar Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/3 max-w-md shrink-0"
          >
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center text-center shadow-xl">
              <div className="relative w-48 h-48 mb-6 rounded-2xl overflow-hidden border border-border bg-muted">
                <img 
                  src={avatarImg} 
                  alt="Muhammad Sarmad" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/24 to-transparent mix-blend-overlay opacity-30" />
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Muhammad Sarmad</h2>
              <p className="text-muted-foreground mb-6">Full-Stack Developer</p>
              
              <div className="w-full grid grid-cols-2 gap-4 mb-8">
                <div className="bg-background border border-border rounded-xl p-4 flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary">10+</span>
                  <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Projects</span>
                </div>
                <div className="bg-background border border-border rounded-xl p-4 flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary">5+</span>
                  <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Languages</span>
                </div>
                <div className="col-span-2 bg-background border border-border rounded-xl p-4 flex flex-col items-center">
                  <span className="text-sm font-semibold">Final Year</span>
                  <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">FAST NUCES</span>
                </div>
              </div>
              
              <div className="w-full flex flex-col gap-3">
                <Button 
                  onClick={scrollToProjects}
                  className="w-full group" 
                  size="lg"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-2/3 flex flex-col"
          >
            <div className="flex gap-3 mb-6 flex-wrap">
              <Badge variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                <Code2 className="w-3 h-3 mr-2" /> Web Dev
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                <Cpu className="w-3 h-3 mr-2" /> AI / MLOps
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                <Layers className="w-3 h-3 mr-2" /> Systems
              </Badge>
            </div>

            <div className="relative mb-8">
              {/* Outline text behind */}
              <h1 className="absolute -top-4 -left-2 text-[4rem] sm:text-[6rem] lg:text-[7rem] font-black leading-[0.8] tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>
                FULL-STACK<br/>DEVELOPER
              </h1>
              {/* Solid text in front */}
              <h1 className="relative text-[4rem] sm:text-[6rem] lg:text-[7rem] font-black leading-[0.8] tracking-tighter">
                FULL-STACK<br/><span className="text-muted-foreground">DEVELOPER</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I build full-stack web applications, scalable ML systems, and low-level software — bridging modern web development, AI/MLOps, and systems programming.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}