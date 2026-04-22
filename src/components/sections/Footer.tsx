export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Muhammad Sarmad. All rights reserved.
        </p>
        <div className="text-2xl font-black tracking-tighter">
          SARMAD<span className="text-primary">.</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Built with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}