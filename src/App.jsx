import { useState, useEffect } from 'react'
import Section from './components/Section.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import TechGrid from './components/TechGrid.jsx'
import ExperienceItem from './components/ExperienceItem.jsx'
import HorizontalTimeline from './components/HorizontalTimeline.jsx'
import { resume } from './content/resumeData.js'

const profileImages = import.meta.glob('./assets/images/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
})
const resumeDocuments = import.meta.glob('./assets/documents/*.{pdf,doc,docx}', {
  eager: true,
  import: 'default',
})

const profileImagesList = Object.entries(profileImages)
const mainImageEntry = profileImagesList.find(([path]) => !path.includes('hover'))
const profileImageSrc = mainImageEntry ? mainImageEntry[1] : null
const hoverImageEntry = profileImagesList.find(([path]) => path.includes('hover-photo.png'))
const hoverImageSrc = hoverImageEntry ? hoverImageEntry[1] : null

const resumeFileSrc = Object.values(resumeDocuments)[0] ?? resume.contact.resumeDownloadUrl

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-neutral-50 text-black selection:bg-black selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <section id="hero" className="scroll-mt-24 py-12 sm:py-16">
          <div className="rounded-2xl border border-black/80 bg-white p-6 shadow-[8px_8px_0_0_#000] sm:p-8 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[8px_8px_0_0_#fff] transition-all duration-300">

            {/* Custom Toggle Switch for Dark Mode */}
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                className="relative inline-flex h-8 w-16 items-center rounded-full border-2 border-black bg-neutral-200 transition-colors focus:outline-none dark:border-white dark:bg-neutral-800 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]"
                aria-label="Toggle Dark Mode"
              >
                <span
                  className={`${isDark ? 'translate-x-9 bg-neutral-950' : 'translate-x-[2px] bg-white'
                    } inline-flex h-6 w-6 transform items-center justify-center rounded-full border-2 border-black transition-transform duration-300 dark:border-white`}
                >
                  <span className="text-[10px] leading-none">
                    {isDark ? '🌙' : '☀️'}
                  </span>
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 sm:gap-6">
                {profileImageSrc ? (
                  <div className="relative group h-35 w-35 sm:h-40 sm:w-40 shrink-0">
                    <img
                      src={profileImageSrc}
                      alt={`${resume.hero.name} portrait`}
                      className={`h-full w-full rounded-md border border-black object-cover dark:border-neutral-200 transition-opacity duration-300 ${hoverImageSrc ? 'group-hover:opacity-0 absolute inset-0' : ''}`}
                    />
                    {hoverImageSrc && (
                      <img
                        src={hoverImageSrc}
                        alt={`${resume.hero.name} hover portrait`}
                        className="absolute inset-0 h-full w-full rounded-md border border-black object-cover dark:border-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    )}
                  </div>
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-md border border-black bg-black text-2xl font-semibold text-white sm:h-28 sm:w-28 dark:border-white dark:bg-white dark:text-black">
                    NP
                  </div>
                )}
                <div>
                  <p className="inline-flex border border-black px-3 py-1 text-xs font-semibold uppercase tracking-wider dark:border-white">
                    {resume.hero.title}
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                    {resume.hero.name}
                  </h1>
                </div>
              </div>

              <a
                href={resumeFileSrc}
                download
                className="mt-4 sm:mt-0 inline-flex items-center justify-center border border-black px-4 py-2.5 text-sm font-medium transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-1 hover:shadow-none dark:hover:shadow-none bg-white dark:bg-neutral-900"
              >
                Download Resume
              </a>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-800 sm:text-lg dark:text-neutral-300">
              {resume.hero.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                ['about', 'About'],
                ['skills', 'Tech Stack'],
                ['projects', 'Projects'],
                ['journey', 'Journey'],
                ['experience', 'Experience'],
                ['contact', 'Contact'],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center border border-black px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition hover:bg-black hover:text-white dark:border-neutral-400 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="flex flex-col gap-4">
            {resume.about.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed break-words text-neutral-800 dark:text-neutral-300">
                {p}
              </p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Tech Stack">
          <TechGrid categories={resume.skills.categories} />
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 gap-6">
            {resume.projects.map((proj) => (
              <ProjectCard
                key={proj.title}
                title={proj.title}
                description={proj.description}
                keyTech={proj.keyTech}
              />
            ))}
          </div>
        </Section>

        <Section id="journey" title="Career Journey">
          <HorizontalTimeline items={resume.timeline} />
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid grid-cols-1 gap-6">
            {resume.experience.map((exp) => (
              <ExperienceItem
                key={`${exp.company}-${exp.role}`}
                company={exp.company}
                role={exp.role}
                dateRange={exp.dateRange}
                highlights={exp.highlights}
              />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-black/90 bg-white p-5 shadow-[3px_3px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#111] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[3px_3px_0_0_#fff] dark:hover:shadow-[7px_7px_0_0_#fff]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Phone</p>
              <p className="mt-3 text-sm font-medium break-words text-black dark:text-white">{resume.contact.phone}</p>
              <a
                href={`tel:${resume.contact.phone}`}
                className="mt-4 inline-flex items-center border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                Call Now
              </a>
            </div>

            <div className="rounded-xl border border-black/90 bg-white p-5 shadow-[3px_3px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#111] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[3px_3px_0_0_#fff] dark:hover:shadow-[7px_7px_0_0_#fff]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Email</p>
              <p className="mt-3 text-sm font-medium break-words text-black dark:text-white">{resume.contact.email}</p>
              <a
                href={`mailto:${resume.contact.email}`}
                className="mt-4 inline-flex items-center border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                Send Email
              </a>
            </div>

            <div className="rounded-xl border border-black/90 bg-white p-5 shadow-[3px_3px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#111] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[3px_3px_0_0_#fff] dark:hover:shadow-[7px_7px_0_0_#fff]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Location</p>
              <p className="mt-3 text-sm font-medium break-words text-black dark:text-white">{resume.contact.location}</p>
              <a
                href={resume.contact.sampleProjectsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                View Sample Work
              </a>
            </div>

            <div className="md:col-span-3 rounded-xl border border-black/90 bg-gradient-to-r from-white via-neutral-100 to-white p-5 shadow-[3px_3px_0_0_#111] dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:border-neutral-700 dark:shadow-[3px_3px_0_0_#fff]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
                Socials
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {resume.contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border border-black bg-white px-3 py-1.5 text-xs font-medium transition hover:bg-black hover:text-white dark:border-white dark:bg-neutral-900 dark:hover:bg-white dark:hover:text-black"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <footer className="border-t border-black/80 py-8 dark:border-neutral-700">
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-500">
            © {new Date().getFullYear()} Neil Pagara. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}