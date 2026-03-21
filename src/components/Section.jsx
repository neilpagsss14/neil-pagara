export default function Section({ id, title, withBorder = true, children }) {
  return (
    <section
      id={id}
      className={[
        withBorder ? 'border-t border-black/80' : '',
        'scroll-mt-24 py-12 sm:py-16',
      ].join(' ')}
    >
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Section
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

