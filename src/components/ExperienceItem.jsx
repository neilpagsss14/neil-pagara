export default function ExperienceItem({
  company,
  role,
  dateRange,
  highlights,
}) {
  return (
    <article className="rounded-xl border border-black/90 bg-white p-6 shadow-[4px_4px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#111]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{role}</h3>
          <p className="text-sm text-neutral-700">{company}</p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">{dateRange}</p>
      </div>

      <ul className="mt-4 list-none space-y-3">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm leading-relaxed text-neutral-800">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

