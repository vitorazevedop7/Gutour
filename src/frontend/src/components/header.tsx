"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header({ showLinks = true }: { showLinks?: boolean }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault()
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    // Se não for homepage, deixa o Link navegar normalmente para /#trips ou /#contact
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // Se não existir a seção na página atual, redireciona para a home
      window.location.href = '/#contact'
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <Link 
          href="/"
          onClick={handleLogoClick}
          className="cursor-pointer transition-opacity hover:opacity-80"
          aria-label="Voltar para página inicial"
        >
          <Image 
            src="/logo/logo.png" 
            alt="Gutour Logo" 
            width={150} 
            height={50}
            priority
          />
        </Link>
        {showLinks && (
          <nav className="flex items-center gap-8">
            <Link 
              href="/#trips" 
              onClick={(e) => handleSectionClick(e, '#trips')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Viagens
            </Link>
            <Link 
              href="#contact" 
              onClick={handleContactClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
