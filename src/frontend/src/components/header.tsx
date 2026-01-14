import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground tracking-wide">
          GUTOUR
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="#trips" className="text-muted-foreground hover:text-foreground transition-colors">
            Trips
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
