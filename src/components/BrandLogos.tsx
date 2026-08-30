const brands = ["Google", "Meta", "Microsoft", "Intel", "AWS", "Shopify", "Slack"];

export default function BrandLogos() {
  return (
    <section className="border-y border-white/5 bg-surface/60 py-10">
      <div className="container-px">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Trusted by <span className="text-accent">Brands</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg font-bold tracking-tight text-neutral-500 transition-colors hover:text-white sm:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
