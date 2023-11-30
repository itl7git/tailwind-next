export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="mt-2 dark:text-slate-400">
          Amet et itaque distinctio illum eius provident cupiditate
          necessitatibus nulla numquam reprehenderit dolor explicabo nisi
        </p>
        <button className="mt-4 rounded bg-sky-500 px-4 py-2 font-medium text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-sky-950">
          Sign In
        </button>
      </div>
    </div>
  )
}
