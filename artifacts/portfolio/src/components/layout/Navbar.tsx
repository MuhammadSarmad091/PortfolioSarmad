import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-black tracking-tighter"
        >
          SARMAD<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a
              href="https://github.com/MuhammadSarmad091"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sarmad-6951bb332"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:muhammadsarmad809@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border py-6 px-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <a
                href="https://github.com/MuhammadSarmad091"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-sarmad-6951bb332"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:muhammadsarmad809@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}