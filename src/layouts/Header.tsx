import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <div className="text-xl font-bold">IT Helpdesk</div>
          <nav className="ml-auto">
            <ul className="flex items-center gap-4">
              <li>
                <a href="/" className="text-foreground hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/login" className="text-foreground hover:text-primary">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header
