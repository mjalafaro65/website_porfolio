import { Archive, Database, GitBranch, Sparkles } from 'lucide-react';

const archiveItems = [
  {
    title: 'Online Bookstore Database System',
    stack: 'PHP, SQL, MySQL, phpMyAdmin',
    note: 'Built a relational schema for inventory, orders, customers, and transactions with consistency checks.',
  },
  {
    title: 'Machine Learning Prediction Models',
    stack: 'Python, Scikit-learn, Pandas, NumPy',
    note: 'Explored sleep health and customer churn modeling to compare feature engineering and model performance.',
  },
  {
    title: 'Supporting UI & C/C++/Linux Reps',
    stack: 'C, C++, Bash, Git, Selenium',
    note: 'Worked through low-level systems exercises, scripting tasks, and command-line tooling practice.',
  },
];

export default function ArchivePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#664A7A]">Archive</p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-stone-900">Practice, iteration, and foundational skill-building.</h1>
        <p className="max-w-2xl text-base leading-relaxed text-stone-600">
          The archive captures the smaller reps, labs, and experiments that sharpened my instincts for distributed systems, automation, and data-driven product work.
        </p>
      </section>

      <div className="grid gap-4">
        {archiveItems.map((item, index) => (
          <article key={item.title} className="rounded-3xl border border-stone-300 bg-white/80 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="text-xl font-semibold text-stone-900">{item.title}</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.15em] text-stone-600">
                <Sparkles className="h-3 w-3 text-[#664A7A]" /> Archive
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.5fr]">
              <div className="rounded-2xl border border-stone-200 bg-[#f7f4f1] p-4">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">
                  {index === 0 ? <Database className="h-3.5 w-3.5 text-[#664A7A]" /> : index === 1 ? <GitBranch className="h-3.5 w-3.5 text-[#664A7A]" /> : <Archive className="h-3.5 w-3.5 text-[#664A7A]" />}
                  Stack
                </div>
                <p className="text-sm font-mono text-stone-700">{item.stack}</p>
              </div>

              <p className="text-sm leading-relaxed text-stone-600">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
