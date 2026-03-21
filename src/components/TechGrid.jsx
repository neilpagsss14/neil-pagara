export default function TechGrid({ categories }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="rounded-xl border border-black/90 bg-white p-6 shadow-[4px_4px_0_0_#111] transition duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#111]"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">{cat.name}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-md border border-black bg-white px-2 py-1 text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

