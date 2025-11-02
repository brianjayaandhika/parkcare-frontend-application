import Clock from "./Clock";

export default function Header({
  title,
  information,
  customStyle = "",
}: {
  title: string;
  information?: string;
  customStyle?: string;
}) {
  return (
    <div
      className={`${customStyle} text-[#C8D0E0] w-full flex flex-col gap-4 border-b-2 pb-4 border-gray-400`}
    >
      <h1 className="text-4xl text-red-600 font-bold">
        Park Care{" "}
        <span className="text-[#C8D0E0]">
          • <Clock />
        </span>
      </h1>

      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-[#C8D0E0]/60">{information}</span>
      </div>
    </div>
  );
}
