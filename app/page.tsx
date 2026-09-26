'use client';

import { useState } from 'react';
import { Mail, ArrowUpRight, Terminal, ChevronDown, CheckCircle2, Code2, Copy, Check } from 'lucide-react';

interface Project {
  index: string;
  title: string;
  period: string;
  stack: string[];
  description: string;
  githubFn?: string;
  githubBn?: string;
  demo?: string;
  curlSnippet?: string;
  architecture: {
    pattern: string;
    highlights: string[];
    tradeoff?: string;
  };
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Multi-Caretaker Pet Tracking System',
    period: 'Aug 2026 – Present',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    description:
      'Full-stack platform managing pet health logs and multi-caretaker access with role-based permissions and relational integrity.',
    githubBn: "https://github.com/mjalafaro65/pet_management_app_backnd",
    curlSnippet: `curl -X POST http://localhost:8080/api/pets/1/logs \\
  -H "Authorization: Bearer <JWT>" \\
  -H "Content-Type: application/json" \\
  -d '{"eventType": "MEDICATION", "note": "Administered 10mg"}'`,
    architecture: {
      pattern: 'Spring Security JWT Filter Chain + JPA/Hibernate + PostgreSQL Foreign Key Cascades',
      highlights: [
        'Enforced composite unique constraints on user-pet association mapping.',
        'REST endpoints returning standard DTO wrappers with global exception handlers.',
      ],
      tradeoff: 'Design decision: Chose denormalized audit logs for frequent reads over heavy join views.',
    },
  },
  {
    index: '02',
    title: 'RAG Policy Question-Answering System',
    period: 'Sept 2026',
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gemini'],
    description:
      'Retrieval-augmented generation system chunking markdown policy docs into Chroma vector DB with LLM-backed attribution.',
    githubBn: 'https://github.com/mjalafaro65/rag_model',
    curlSnippet: `curl -X POST http://localhost:8000/query \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "What is the remote work policy clause 4.2?"}'`,
    architecture: {
      pattern: ' Character Splitter (800/200) → Embeddings → Chroma → Gemini-1.5-Pro',
      highlights: [
        'Injected strict source-id metadata tags into retrieval context windows.',
        'Configured fallback trigger on similarity scores below threshold.',
      ],
      tradeoff: 'Tradeoff: 1000-token chunk window increased context relevance by ~28% vs 512 tokens on dense text.',
    },
  },
  {
    index: '03',
    title: 'Fitness Platform (Team Leader)',
    period: 'Feb 2026 – May 2026',
    stack: ['Python', 'Flask-Smorest', 'MySQL', 'React', 'Pytest', 'Selenium'],
    description:
      'Led dev on fitness tracking platform with role dashboards, coach-client management, and automated E2E test coverage.',
    githubFn: "https://github.com/mjalafaro65/cs490_fitness_app_frontend",
    githubBn : "https://github.com/mjalafaro65/cs490_fitness_app_backend",
    demo: "https://youtu.be/SaD5kGQeago",
    curlSnippet: `curl -X GET http://localhost:5000/api/v1/coaches/1/clients \\
  -H "Authorization: Bearer <TOKEN>"`,
    architecture: {
      pattern: 'Flask-Smorest Modular Blueprints + Marshmallow Schemas + Selenium/Pytest CI Suite',
      highlights: [
        'Generated OpenAPI swagger contracts eliminating client-server schema drift.',
        'Authored isolated database transaction test fixtures rolling back state per test.',
      ],
      tradeoff: 'Tradeoff: Opted for explicit schema validation over dynamic dict payload parsing to catch regression bugs early.',
    },
  },
];

const archiveReps = [
  { name: 'Online Bookstore Database System', stack: 'PHP, SQL, MySQL, phpMyAdmin', note: 'Relational schema design & transactional records' },
  { name: 'Machine Learning Prediction Models', stack: 'Python, Scikit-learn, Pandas, NumPy', note: 'Sleep health & customer churn classifier benchmarks' },
  { name: 'Supporting UI & C/C++/Linux Reps', stack: 'C, C++, Bash, Git, Selenium', note: 'Low-level memory exercises & script utilities' },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<string | null>('01');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const toggleProject = (index: string) => {
    setActiveProject(activeProject === index ? null : index);
  };

  const handleCopy = (text: string, index: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F1ECF6] text-[#2D173B] font-sans selection:bg-[#AB8ECC]/30 selection:text-[#664A7A] overflow-x-hidden">      {/* Warm Lab Notebook Ambient Grid & Tonal Wash */}
      {/* Lavender Ambient Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[15%] w-[520px] h-[520px] rounded-full bg-[#AB8ECC]/20 blur-[140px]" />

        <div className="absolute top-[35%] right-[-5%] w-[420px] h-[420px] rounded-full bg-[#DAA8AF]/15 blur-[130px]" />

        <div className="absolute bottom-[5%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#8A71AC]/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(102,74,122,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(102,74,122,0.045)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      <main className="relative mx-auto z-10 w-full px-6 sm:px-12 lg:px-20 py-24 sm:py-32">
        <section className="space-y-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
bg-[#E7DEF0]
border border-[#C7B4DA]
text-[11px] font-mono uppercase tracking-[0.2em]
text-[#664A7A]
shadow-inner">
              <span className="text-2xl w-2 h-3 rounded-full bg-[#8A71AC] animate-pulse" />
              NJIT BS/MS CS • OPEN TO 2026/2027 ROLES
            </div>

          </div>

          <div className="space-y-4 pt-2">
            <h1 className="text-[4.25rem] sm:text-[6rem] leading-[0.88] tracking-[-0.06em] text-[#2D173B] font-[family-name:var(--font-display)]">
              Maria Alfaro
            </h1>
            <p className="text-2xl sm:text-4xl text-[#8A71AC] font-light tracking-[-0.04em] leading-tight">
              Software Engineering <span className="text-[#66615e]">/</span> Backend & AI Architecture
            </p>
          </div>

          <p className="max-w-3xl text-lg leading-relaxed text-[#363331] sm:text-[1.35rem]">
            Engineering resilient backend APIs (Java/Spring, Python/Flask), relational data models, and production-minded RAG pipelines. Clean abstractions over AI wrappers.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:alfamar2005@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl
  bg-[#664A7A] hover:bg-[#543B67]
  text-white text-sm font-medium transition
  shadow-[0_12px_30px_rgba(102,74,122,0.25)]
  active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a
              href="https://github.com/mjalafaro65"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-2xl bg-[#E7DEF0] border border-[#C7B4DA] hover:border-[#A78CC4] hover:bg-[#DED1EA] text-[#3D294A] text-sm font-medium transition active:scale-[0.98]"
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5 text-[#5d5854]" />
            </a>
            <a
              href="https://linkedin.com/in/mariaalfaromja"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-2xl bg-[#E7DEF0] border border-[#C7B4DA] hover:border-[#A78CC4] hover:bg-[#DED1EA] text-[#3D294A] text-sm font-medium transition active:scale-[0.98]"
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5 text-[#5d5854]" />
            </a>
             <a
              href="https://drive.google.com/file/d/1Dy0W9nEs0DMfeZLd0Ru2tMK3JvRJIKVq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-2xl bg-[#E7DEF0] border border-[#C7B4DA] hover:border-[#A78CC4] hover:bg-[#DED1EA] text-[#3D294A] text-sm font-medium transition active:scale-[0.98]"
            >
              Resume <ArrowUpRight className="w-3.5 h-3.5 text-[#5d5854]" />
            </a>
          </div>
        </section>

        <div className="my-24 h-px bg-stone-300" />

        {/* Selected Works */}
        <section className="space-y-8">
            <h2 className="text-l font-mono uppercase tracking-[0.2em] text-stone-900 border-b border-stone-700 pb-4 font-extrabold">
              FEATURED PROJECTS
            </h2>
            <span className="text-[11px] font-mono text-stone-500">CLICK TO EXPAND</span>
          

          <div className="space-y-4">
            {projects.map((proj) => {
              const isOpen = activeProject === proj.index;
              const isCopied = copiedIndex === proj.index;
              return (
                <article
                  key={proj.title}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden relative ${isOpen
                    ? 'bg-white border-[#C2410C]/40 shadow-[0_12px_40px_rgba(17,17,17,0.08)]'
                    : 'bg-white/80 border-[#D8D8D3] hover:border-[#A8A8A2] hover:bg-white hover:shadow-[0_8px_30px_rgba(17,17,17,0.05)]'
                    }`}
                >
                  <button
                    onClick={() => toggleProject(proj.index)}
                    className="w-full text-left p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center focus:outline-none"
                  >
                    <div className="sm:col-span-2 font-mono text-xs text-[#664A7A] tabular-nums">
                     <span className="block text-[11px] text-stone-500 mt-1 font-normal">{proj.period}</span>
                    </div>

                    <div className="sm:col-span-8 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-medium text-stone-900 tracking-tight">
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#E8E0EF] text-[#594066] border border-[#D0C1DB]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2 flex justify-start sm:justify-end">
                      <span className={`inline-flex items-center gap-1 text-xs font-mono text-stone-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#664A7A]' : ''}`}>
                        Inspect <ChevronDown className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>

                  {/* Expandable Architecture Drawer */}
                  {isOpen && (
                    <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 border-t border-stone-300 bg-[#DDD2E8]/70 border-t border-[#C8B8D4] space-y-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#594066] pt-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8A71AC] shrink-0" />
                        <span className="tracking-wide">{proj.architecture.pattern}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-stone-700 list-disc list-inside marker:text-[#664A7A]">
                        {proj.architecture.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                      {/* {proj.architecture.tradeoff && (
                        <p className="text-xs font-mono text-[#664A7A]
bg-[#F1DFE2]
border border-[#D8B6BD]
p-3 rounded-xl leading-relaxed">
                          {proj.architecture.tradeoff}
                        </p>
                      )} */}

                    

                      {proj.githubFn && (

                         <div className="pt-2 flex items-center gap-4">
                        <a
                          href={proj.githubFn}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#664A7A] hover:text-orange-700 underline underline-offset-4"
                        >
                          <Code2 className="w-3.5 h-3.5" /> Inspect Front End GitHub Repo ↗
                        </a>
                      </div>
                      
                        ) }

                     {proj.githubBn && (
                     
                      <div className="pt-2 flex items-center gap-4">
                        <a
                          href={proj.githubBn}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#664A7A] hover:text-orange-700 underline underline-offset-4"
                        >
                          <Code2 className="w-3.5 h-3.5" /> Inspect Back End GitHub Repo ↗
                        </a>
                      </div>

                     )}

                    {proj.demo && (
                     
                      <div className="pt-2 flex items-center gap-4">
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#664A7A] hover:text-orange-700 underline underline-offset-4"
                        >
                          <Code2 className="w-3.5 h-3.5" /> Watch Video ↗
                        </a>
                      </div>

                    )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <div className="my-24 h-px bg-stone-300" />

        {/* Technical Arsenal */}
        <section className="space-y-6">
          <h2 className="text-l font-mono uppercase tracking-[0.2em] text-stone-900 border-b border-stone-700 pb-4 font-extrabold">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
            <div className="p-5 rounded-2xl bg-white/60 border border-stone-300 space-y-1.5">
              <span className="text-[11px] font-mono text-[#8A71AC] tracking-wider">
                LANGUAGES
              </span>
              <p className="text-[#594066] text-xs font-mono leading-relaxed">Python, Java, C/C++, SQL, PHP, TS/JS</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/60 border border-stone-300 space-y-1.5">
              <span className="text-[11px] font-mono text-[#664A7A] tracking-wider">
                BACKEND / INFRA
              </span>
              <p className="text-[#594066] text-xs font-mono leading-relaxed">Spring Boot, Flask, PostgreSQL, MySQL, Docker, Git</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/60 border border-stone-300 space-y-1.5">
              <span className="text-[11px] font-mono text-[#A66D78] tracking-wider">
                AI / ML / TEST
              </span>              <p className="text-[#594066] text-xs font-mono leading-relaxed">PyTorch, LangChain, ChromaDB, Scikit-learn, Pytest, Selenium</p>
            </div>
          </div>
        </section>

        <div className="my-20 h-px bg-stone-300/60" />

        {/* Archive / Early Work Appendix */}
        <section className="space-y-4">
          <h3 className="text-l font-mono uppercase tracking-[0.2em] text-stone-900 border-b border-stone-700 pb-4 font-extrabold">
            OTHER PROJECTS
          </h3>
          <div className="divide-y divide-stone-300 text-xs">
            {archiveReps.map((item, i) => (
              <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-stone-600">
                <span className="text-stone-900 font-medium">{item.name}</span>
                <span className="text-stone-500 text-[11px]">{item.stack} — {item.note}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}