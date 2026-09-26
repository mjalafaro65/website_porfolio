import { ArrowUpRight, BrainCircuit, Cpu, GraduationCap, Layers3 } from 'lucide-react';

const traits = [
  {
    title: 'Academic track',
    icon: GraduationCap,
    description:
      'NJIT — BS/MS in Computer Science, IT minor. Most of my coursework has been databases, algorithms, and lately generative AI.',
  },
  {
    title: 'How I think about it',
    icon: BrainCircuit,
    description:
      "I'd rather ship something boring that works than something clever that breaks in six months. If I can't explain why a system failed, I don't trust it yet.",
  },
  {
    title: 'How I build',
    icon: Layers3,
    description:
      'Clear schemas, explicit validation, and AI pipelines I can actually explain — not just prompt at until the output looks right.',
  },
];

const courses = [
  'Data Structures & Algorithms',
  'Database Systems',
  'Software Engineering',
  'Java Programming',
  'Cybersecurity',
  'Machine Learning',
  'Intro to Generative AI',
  'Programming in Linux',
  'Systems Administration',
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#8A71AC]">About</p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-[#2D173B]">I build things I can still explain six months later.</h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#363331]">
          I'm a Computer Science BS/MS student at NJIT. Most of what I build is backend and data-heavy — REST APIs,
          relational schemas, and more recently RAG pipelines — and I care about the unglamorous parts just as much
          as the feature: does the schema hold up, does the auth actually restrict what it's supposed to, can someone
          else pick this up without me in the room.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {traits.map(({ title, icon: Icon, description }) => (
          <div key={title} className="rounded-3xl border border-[#d7ccc3] bg-[#f9f5f1]/80 p-5 shadow-sm">
            <Icon className="mb-4 h-5 w-5 text-[#8A71AC]" />
            <h2 className="mb-2 text-base font-semibold text-[#2D173B]">{title}</h2>
            <p className="text-sm leading-relaxed text-[#363331]">{description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-[#d7ccc3] bg-[#f5f0eb] p-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#363331]">
          <Cpu className="h-4 w-4 text-[#8A71AC]" /> Technical Skills
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#e4d9d0] bg-[#fffdfb] p-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#605d5a]">Languages</span>
            <p className="mt-2 font-mono text-xs text-[#1f1d1b]">Python, Java, C/C++, SQL, PHP, TS/JS</p>
          </div>
          <div className="rounded-2xl border border-[#e4d9d0] bg-[#fffdfb] p-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#605d5a]">Backend / infra</span>
            <p className="mt-2 font-mono text-xs text-[#1f1d1b]">Spring Boot, Flask, PostgreSQL, MySQL, Docker, Git</p>
          </div>
          <div className="rounded-2xl border border-[#e4d9d0] bg-[#fffdfb] p-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#605d5a]">AI / ML / test</span>
            <p className="mt-2 font-mono text-xs text-[#1f1d1b]">PyTorch, LangChain, ChromaDB, Scikit-learn, Pytest, Selenium</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#d7ccc3] bg-[#f5f0eb] p-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#363331]">
          <GraduationCap className="h-4 w-4 text-[#8A71AC]" /> Coursework
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {courses.map((course) => (
            <span
              key={course}
              className="rounded-md border border-[#e4d9d0] bg-[#fffdfb] px-2.5 py-1 text-[11px] font-mono text-[#1f1d1b]"
            >
              {course}
            </span>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-2 text-sm text-[#363331]">
        <span>Open to engineering and AI-focused opportunities</span>
        <ArrowUpRight className="h-4 w-4 text-[#8A71AC]" />
      </div>
    </div>
  );
}