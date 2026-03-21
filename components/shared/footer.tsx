import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-xo-surface-lowest w-full pt-20 pb-12 border-t border-border">
      <div className="flex flex-col items-center text-center space-y-6 px-8 max-w-screen-2xl mx-auto">
        <Image
          src="/images/use-x-remove-bg.png"
          alt="Xolace mascot"
          width={48}
          height={48}
          className="size-12 object-contain mb-4"
        />
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <Link
            href="#"
            className="text-xs tracking-[0.05rem] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Manifesto
          </Link>
          <Link
            href="#"
            className="text-xs tracking-[0.05rem] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-xs tracking-[0.05rem] uppercase text-muted-foreground">
          &copy; 2026 Xolace. Built by people who needed this to exist.
        </p>
      </div>
    </footer>
  )
}
