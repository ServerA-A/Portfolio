import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 py-8 mt-12 border-t border-primary/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aditya Raj. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <Link href="https://x.com/aditbit" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Twitter
          </Link>
          <Link href="https://github.com/adityyaraj" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/adityyaraj/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer