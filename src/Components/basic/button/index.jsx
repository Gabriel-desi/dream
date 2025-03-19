export default function index({ text, onClick, isDisabled = true }) {
  return (
    <div>
      <button
        disabled={isDisabled}
        type="submit"
        onClick={onClick}
        className={` px-5 py-2 mx-25 font-bold  rounded-2xl  ${
          isDisabled
            ? "bg-slate-300 hello md:text-sm"
            : "bg-slate-600 cursor-pointer duration-300 hover:scale-105 transition-all md:text-sm"
        }`}
      >
        {text}
      </button>
    </div>
  );
}
