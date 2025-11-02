export default function TicketBody({
  label,
  value,
  customStyle,
  textColor = "text-white",
}: {
  label: string;
  value: string | number;
  customStyle?: string;
  textColor?: string;
}) {
  return (
    <div className={`w-full flex flex-col gap-2 ${customStyle}`}>
      <h1 className="text-sm font-bold col-span-2">{label}</h1>
      <span
        className={`overflow-clip text-ellipsis whitespace-nowrap text-sm font-bold ${textColor}`}
      >
        {value}
      </span>
    </div>
  );
}
