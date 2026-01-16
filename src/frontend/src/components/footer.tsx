export function Footer() {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} GUTOUR. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
