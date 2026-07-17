import { MessageCircle, Mail } from 'lucide-react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        <div>
          <p className="text-lg font-bold tracking-tight text-foreground">
            VANZO<span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Business Never Sleeps. Built by VANZO.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/vanzo_in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://wa.me/919926628822"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="mailto:vanzo.official@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms
          </a>
          <span>&copy; {new Date().getFullYear()} VANZO</span>
        </div>
      </div>
    </footer>
  )
}
