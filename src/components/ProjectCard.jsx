export default function ProjectCard({ title, description, keyTech }) {
  return (
    <article className="group rounded-xl border border-black/90 bg-white p-6 shadow-[4px_4px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#111]">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 leading-relaxed text-neutral-700">{description}</p>

      <div className="mt-5">
        <p className="text-sm font-semibold">Key features / technologies</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {keyTech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md border border-black bg-white px-2 py-1 text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

