export default function Map() {
  return (
    <div className="relative h-[240px] w-full max-w-[360px] self-center overflow-hidden rounded-md shadow-md">
      <div className="h-full w-full overflow-hidden">
        <iframe
          className="h-full w-full"
          src="https://maps.google.com/maps?width=360&amp;height=240&amp;hl=en&amp;q=Jl. Margo Basuki&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}
