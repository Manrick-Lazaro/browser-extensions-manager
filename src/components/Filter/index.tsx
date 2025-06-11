export default function Filter() {
  return (
    <div className="grid grid-cols-1 ">
      <h1 className="flex justify-center text-neutral-900 dark:text-neutral-100 font-[700] text-3xl">
        Extensions List
      </h1>

      <div className="flex flex-row justify-center items-center gap-4 mt-4">
        <button className="bg-neutral-0 dark:bg-neutral-700 cursor-pointer rounded-3xl shadow-lg py-2 px-5 text-center text-neutral-900 dark:text-neutral-100 font-[500] hover:bg-red-700 dark:hover:bg-red-400 active:bg-red-700 dark:active:bg-red-400 hover:text-neutral-100 active:text-neutral-100 dark:active:text-neutral-900 dark:hover:text-neutral-900 border border-neutral-300 dark:border-neutral-600 transition-colors duration-300">
          All
        </button>
        <button className="bg-neutral-0 dark:bg-neutral-700 cursor-pointer rounded-3xl shadow-lg py-2 px-5 text-center text-neutral-900 dark:text-neutral-100 font-[500] hover:bg-red-700 dark:hover:bg-red-400 active:bg-red-700 dark:active:bg-red-400 hover:text-neutral-100 active:text-neutral-100 dark:active:text-neutral-900 dark:hover:text-neutral-900 border border-neutral-300 dark:border-neutral-600 transition-colors duration-300">
          Active
        </button>
        <button className="bg-neutral-0 dark:bg-neutral-700 cursor-pointer rounded-3xl shadow-lg py-2 px-5 text-center text-neutral-900 dark:text-neutral-100 font-[500] hover:bg-red-700 dark:hover:bg-red-400 active:bg-red-700 dark:active:bg-red-400 hover:text-neutral-100 active:text-neutral-100 dark:active:text-neutral-900 dark:hover:text-neutral-900 border border-neutral-300 dark:border-neutral-600 transition-colors duration-300">
          Inactive
        </button>
      </div>
    </div>
  );
}
