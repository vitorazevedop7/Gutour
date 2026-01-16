"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <button 
          onClick={scrollToTop}
          className="cursor-pointer transition-opacity hover:opacity-80"
          aria-label="Voltar ao topo"
        >
          <Image 
            src="/logo/logo.png" 
            alt="Gutour Logo" 
            width={150} 
            height={50}
            priority
          />
        </button>
        <nav className="flex items-center gap-8">
          <Link 
            href="#trips" 
            onClick={(e) => scrollToSection(e, '#trips')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Trips
          </Link>
          <Link 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
