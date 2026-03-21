export default function HorizontalTimeline({ items }) {
  return (
    <div className="overflow-x-auto pb-3">
      <div className="relative min-w-[760px] px-1 pt-8 lg:min-w-0">
        <div className="absolute left-0 right-0 top-9 h-px bg-black/35" />

        <div className="grid grid-cols-6 gap-3 lg:gap-2">
          {items.map((item, idx) => (
            <article key={`${item.year}-${item.title}`} className="relative">
              <div className="absolute left-0 top-[-0.55rem] h-3 w-3 rounded-sm border border-black bg-white">
                <span
                  className={[
                    'absolute inset-[2px] rounded-[2px]',
                    idx === 0 ? 'bg-black' : 'bg-white',
                  ].join(' ')}
                />
              </div>

              <div className="rounded-lg border border-black/80 bg-white p-3 shadow-[2px_2px_0_0_#111]">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  {item.year}
                </p>
                <h3 className="mt-1.5 text-base font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-snug text-neutral-700">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

