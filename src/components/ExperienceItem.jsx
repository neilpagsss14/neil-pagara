export default function ExperienceItem({
  company,
  role,
  dateRange,
  highlights,
}) {
  return (
    <article className="rounded-xl border border-black/90 bg-white p-6 shadow-[4px_4px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#111] dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[4px_4px_0_0_#fff] dark:hover:shadow-[8px_8px_0_0_#fff]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight dark:text-white">{role}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{company}</p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">{dateRange}</p>
      </div>

      <ul className="mt-4 list-none space-y-3">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black dark:bg-white" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
