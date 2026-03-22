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

const profileImageSrc = Object.values(profileImages)[0] ?? null
const resumeFileSrc = Object.values(resumeDocuments)[0] ?? resume.contact.resumeDownloadUrl

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-black selection:bg-black selection:text-white">
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <section id="hero" className="scroll-mt-24 py-12 sm:py-16">
          <div className="rounded-2xl border border-black/80 bg-white p-6 shadow-[8px_8px_0_0_#000] sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                {profileImageSrc ? (
                  <img
                    src={profileImageSrc}
                    alt={`${resume.hero.name} portrait`}
                    className="h-16 w-16 rounded-md border border-black object-cover sm:h-20 sm:w-20"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-md border border-black bg-black text-xl font-semibold text-white sm:h-20 sm:w-20">
                    NP
                  </div>
                )}
                <div>
                  <p className="inline-flex border border-black px-3 py-1 text-xs font-semibold uppercase tracking-wider">
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
                className="inline-flex items-center justify-center border border-black px-4 py-2.5 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Download Resume
              </a>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-800 sm:text-lg">
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
                  className="inline-flex items-center border border-black px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition hover:bg-black hover:text-white"
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
              <p key={p} className="leading-relaxed break-words">
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
            <div className="rounded-xl border border-black/90 bg-white p-5 shadow-[3px_3px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#111]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Phone</p>
              <p className="mt-3 text-sm font-medium break-words">{resume.contact.phone}</p>
              <a
                href={`tel:${resume.contact.phone}`}
                className="mt-4 inline-flex items-center border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white"
              >
                Call Now
              </a>
            </div>

            <div className="rounded-xl border border-black/90 bg-white p-5 shadow-[3px_3px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#111]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Email</p>
              <p className="mt-3 text-sm font-medium break-words">{resume.contact.email}</p>
              <a
                href={`mailto:${resume.contact.email}`}
                className="mt-4 inline-flex items-center border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white"
              >
                Send Email
              </a>
            </div>

            <div className="rounded-xl border border-black/90 bg-white p-5 shadow-[3px_3px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#111]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Location</p>
              <p className="mt-3 text-sm font-medium break-words">{resume.contact.location}</p>
              <a
                href={resume.contact.sampleProjectsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white"
              >
                View Sample Work
              </a>
            </div>

            <div className="md:col-span-3 rounded-xl border border-black/90 bg-gradient-to-r from-white via-neutral-100 to-white p-5 shadow-[3px_3px_0_0_#111]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Socials
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {resume.contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border border-black bg-white px-3 py-1.5 text-xs font-medium transition hover:bg-black hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <footer className="border-t border-black/80 py-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-neutral-600">
          © {new Date().getFullYear()} Neil Pagara. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}