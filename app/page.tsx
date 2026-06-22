import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center">
          <div className="inline-block rounded-full p-1 bg-gradient-to-tr from-violet-500 to-teal-400 floaty">
            <Image
              src="/me.png"
              width={160}
              height={160}
              alt="Profile"
              className="rounded-full shadow-2xl border-2 border-white/6"
            />
          </div>

          <h1 className="mt-6 text-5xl font-extrabold mono neon">Panuwat Praserdee</h1>
          <p className="mt-2 text-sm text-muted-foreground">Student • Programmer • Learner</p>

          <div className="mt-4 flex items-center justify-center space-x-3">
            <span className="chip tech">Programmer</span>
            <span className="chip">Khon Kaen University</span>
            <a href="https://github.com/panuwat05" className="chip">GitHub</a>
          </div>
        </header>

        <section className="mt-12 max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 p-6 terminal-card rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mono">About Me</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              I'm a Computer Science student who enjoys building web apps and developer tools.
              I favor clean, maintainable code and vibrant, usable UIs. Currently learning
              full-stack development and exploring Rust and TypeScript ecosystems.
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-medium mono">Tech Stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['TypeScript','React','Next.js','Tailwind','Node.js','Python','Git'].map((t)=> (
                  <span key={t} className="chip tech mono">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="p-6 rounded-lg glass shadow-lg">
            <h4 className="text-lg font-semibold">Details</h4>
            <ul className="mt-3 text-sm space-y-2 text-gray-300">
              <li><strong className="mono">Student ID:</strong> <span className="mono">673450474-0</span></li>
              <li><strong className="mono">Major:</strong> Computer Science and Information Technology</li>
              <li><strong className="mono">Zodiac:</strong> Cancer</li>
            </ul>
          </aside>
        </section>

        <section className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mono">Projects</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <article className="p-4 terminal-card rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold mono">My Portfolio</h4>
                <div className="text-sm text-gray-400 mono">2026</div>
              </div>
              <p className="mt-2 text-gray-300 text-sm">A Next.js/Tailwind portfolio showcasing projects and experiments.</p>
              <div className="mt-3 flex gap-2">
                <a className="chip" href="#">View</a>
                <a className="chip" href="#">Source</a>
              </div>
            </article>

            <article className="p-4 terminal-card rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold mono">CLI Tool</h4>
                <div className="text-sm text-gray-400 mono">Personal</div>
              </div>
              <p className="mt-2 text-gray-300 text-sm">Small CLI utility for automating tasks and releases.</p>
              <div className="mt-3 flex gap-2">
                <a className="chip" href="#">View</a>
                <a className="chip" href="#">Source</a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="mt-12 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mono">Contact</h2>
          <p className="mt-2 text-gray-300">Find me on <a href="https://github.com/panuwat05" className="text-teal-300 hover:underline">GitHub</a></p>
        </section>
      </div>
    </main>
  );
}