export default function InputSection({
  handleSubmit,
  labelText,
  value,
  handleChange,
  btnText,
}: {
  handleSubmit: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  btnText: string;
}) {
  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <label
        htmlFor="plateNumbers"
        className="text-xl font-bold text-[#C8D0E0]"
      >
        {labelText}
      </label>
      <input
        type="text"
        id="plateNumbers"
        name="plateNumbers"
        className="w-full border border-black p-2 text-lg rounded-lg bg-white focus:outline-red-400"
        value={value}
        onChange={(event) => {
          event.preventDefault();
          handleChange(event);
        }}
      />
      <button
        type="submit"
        disabled={!value}
        className="w-1/3 border disabled:bg-gray-400 disabled:cursor-default outline-none border-none rounded-2xl self-end mt-1 bg-red-500 text-white font-bold cursor-pointer py-2 hover:-translate-y-px hover:bg-red-500/80 duration-100 transition-all ease-in-out"
      >
        {btnText}
      </button>
    </form>
  );
}
