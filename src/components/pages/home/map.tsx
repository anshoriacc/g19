export default function Map() {
  return (
    <div className="relative h-[240px] w-full max-w-[360px] self-center overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-300 dark:border-neutral-800">
      <div className="h-full w-full overflow-hidden">
        <iframe
          className="h-full w-full"
          src="https://maps.google.com/maps?width=360&amp;height=240&amp;hl=en&amp;q=Jl. Margo Basuki&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}
