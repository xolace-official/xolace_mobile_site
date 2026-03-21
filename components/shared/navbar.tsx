import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-2xl nav-glow">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-xl tracking-tighter text-foreground font-medium"
        >
          Xolace
        </Link>
        <div className="flex items-center gap-6 md:gap-10 text-sm tracking-wide">
          <Link
            href="/manifesto"
            className="text-primary font-medium transition-colors duration-500"
          >
            Manifesto
          </Link>
          <Link
            href="#waitlist"
            className="text-muted-foreground hover:text-primary transition-colors duration-500"
          >
            Waitlist
          </Link>
        </div>
      </div>
    </nav>
  )
}
