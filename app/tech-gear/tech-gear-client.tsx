type GearItem = {
  name: string;
  image: string;
};

export function TechGearClient({ gear }: { gear: readonly GearItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3">
      {gear.map((item, index) => (
        <figure key={item.name} className="group min-w-0">
          <div className="aspect-square overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.025]">
            <img
              src={item.image}
              alt={item.name}
              className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />
          </div>

          <figcaption className="mt-3 grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 border-t border-foreground/10 pt-3 sm:grid-cols-[1.75rem_minmax(0,1fr)] sm:gap-3">
            <span className="text-[10px] tabular-nums opacity-30 sm:text-[11px]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[13px] font-medium leading-snug tracking-tight sm:text-sm">
              {item.name}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
