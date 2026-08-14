import "./globals.css";
import NavAuth from "./components/NavAuth";

export const metadata = {
  title: "Charm — the next line, found",
  description: "Paste the conversation you're already having. Get one good line back.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-nav">
          <nav className="nav-inner wrap">
            <a href="/" className="brand" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20.5C7.2 16.5 3.5 13 3.5 9.2 3.5 6.6 5.6 4.5 8 4.5c1.5 0 2.8.7 4 2 1.2-1.3 2.5-2 4-2 2.4 0 4.5 2.1 4.5 4.7 0 3.8-3.7 7.3-8.5 11.3z"/><path d="M18 3l.8 1.8L20.5 5.5 18.8 6.3 18 8l-.8-1.7L15.5 5.5l1.7-.7L18 3z"/></svg>Charm</a>
            <div className="nav-links">
              <a href="/#how">How it works</a>
              <a href="/#features">Why</a>
              <a href="/#pricing">Pricing</a>
            </div>
            <NavAuth />
          </nav>
        </header>

        <div className="wrap">
          {children}
        </div>

        <footer className="site-footer">
          <div className="wrap footer-inner">
            <span className="footer-brand" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20.5C7.2 16.5 3.5 13 3.5 9.2 3.5 6.6 5.6 4.5 8 4.5c1.5 0 2.8.7 4 2 1.2-1.3 2.5-2 4-2 2.4 0 4.5 2.1 4.5 4.7 0 3.8-3.7 7.3-8.5 11.3z"/><path d="M18 3l.8 1.8L20.5 5.5 18.8 6.3 18 8l-.8-1.7L15.5 5.5l1.7-.7L18 3z"/></svg>Charm</span>
            <span className="footer-tag">written between the lines, sent as your own</span>
            <div className="footer-links">
              <a href="/#how">How it works</a>
              <a href="/#pricing">Pricing</a>
              <a href="/dashboard?mode=login">Log in</a>
              <a href="/dashboard?mode=signup">Create account</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
