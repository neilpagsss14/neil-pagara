import { useMemo } from 'react'

const navItems = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function TopNav() {
  const downloadHref = '/resume.pdf'

  const orderedLabels = useMemo(() => navItems.map((i) => i.label), [])

  function scrollToId(id) {
    const el = document.getElementById(id)
    if (!el) return

    // scrollIntoView + scroll-mt on sections avoids the sticky nav overlap.
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-black bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => scrollToId('hero')}
            className="text-left font-semibold tracking-tight"
            aria-label="Go to top"
          >
            Neil Pagara
          </button>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className="text-sm font-medium hover:bg-black hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={downloadHref}
              className="inline-flex items-center border border-black px-3 py-2 text-sm font-medium hover:bg-black hover:text-white"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3 md:hidden">
          <div className="flex min-w-0 flex-1 overflow-x-auto">
            <div className="flex gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="shrink-0 border border-black px-3 py-1.5 text-xs font-medium hover:bg-black hover:text-white"
                  aria-label={`Jump to ${orderedLabels.join(', ')}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <a
            href={downloadHref}
            className="hidden shrink-0 border border-black px-3 py-1.5 text-xs font-medium hover:bg-black hover:text-white sm:inline-flex"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

