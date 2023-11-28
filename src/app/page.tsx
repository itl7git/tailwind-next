export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold text-5xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500">
        Hello world!
      </h1>
      <h2>Hello world!</h2>
      <p>Hello world!</p>
      <button className="bg-sky-500 px-4 py-2 rounded font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed" disabled>
        Sign In
      </button>
    </div>

  )
}
