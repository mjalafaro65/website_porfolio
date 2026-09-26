import { ArrowUpRight, BriefcaseBusiness, Code2, Layers3, ServerCog, Sparkles } from 'lucide-react';

const workItems = [
  {
    title: 'Multi-Caretaker Pet Tracking System',
    period: 'Aug 2026 – Present',
    summary:
      'A full-stack pet health and care coordination platform with RBAC, relational integrity, and audit-friendly APIs.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    highlights: [
      'Secured API endpoints with JWT-based auth and role filtering.',
      'Modeled caretaker-pet relationships with composite constraints and safe cascade rules.',
      'Built a clean REST API for health logs, scheduling, and notifications.',
    ],
    repoUrl: 'https://github.com/mjalafaro65/pet_management_app_backnd', // TODO: replace with actual repo link
  },
  {
    title: 'RAG Policy Question-Answering System',
    period: 'Sept 2026',
    summary:
      'A retrieval pipeline for policy document Q&A with chunking, vector search, and citation-aware LLM responses.',
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gemini'],
    highlights: [
      'Chunked markdown policy docs and embedded them into a vector store for retrieval.',
      'Injected source metadata into context windows to improve attribution and reliability.',
      'Added fallback logic to detect low-confidence answers before returning them.',
    ],
    repoUrl: 'https://github.com/mjalafaro65/rag_model', // TODO: replace with actual repo link
  },
  {
    title: 'Fitness Platform (Team Leader)',
    period: 'Feb 2026 – May 2026',
    summary:
      'Led the backend and testing strategy for a fitness tracking platform for coaches and clients.',
    stack: ['Python', 'Flask-Smorest', 'MySQL', 'React', 'Pytest', 'Selenium'],
    highlights: [
      'Defined modular API blueprints and generated OpenAPI contracts to reduce drift.',
      'Built E2E and functional tests around client-coach workflows and auth flows.',
      'Improved maintainability by enforcing explicit schema validation at the service boundary.',
    ],
    repoUrl: 'https://github.com/mjalafaro65/pet_management_app_backnd', // TODO: replace with actual repo link
  },
  {
    title: 'Machine Learning Prediction Models',
    period: 'Nov 2025 – Dec 2025',
    summary:
      'A comparative modeling project evaluating classical ML approaches on two prediction tasks: sleep health and customer churn.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    highlights: [
      'Built and compared Random Forest, SVM, ANN, and Logistic Regression models across both tasks.',
      'Evaluated model outputs against expected results to assess accuracy and surface failure cases.',
      'Used pandas and NumPy for preprocessing and feature engineering ahead of training.',
    ],
    repoUrl: 'https://github.com/mjalafaro65', // TODO: replace with actual repo link
  },
  {
    title: 'Online Bookstore Database System',
    period: 'Nov 2025 – Dec 2025',
    summary:
      'A relational database system for managing books, users, inventory, and transactions with data-integrity checks built in.',
    stack: ['PHP', 'SQL', 'MySQL', 'phpMyAdmin'],
    highlights: [
      'Designed normalized schemas for books, users, inventory, and transaction history.',
      'Wrote SQL queries and validation checks to confirm data accuracy across related tables.',
      'Built PHP-based CRUD flows on top of the schema for common bookstore operations.',
    ],
    repoUrl: 'https://github.com/mjalafaro65', // TODO: replace with actual repo link
  },
  {
    title: 'Movie/Review RESTful API',
    period: 'Summer 2024',
    summary:
      'A Java-based REST API for movie discovery and user reviews, backed by MongoDB and validated end-to-end in Postman.',
    stack: ['Java', 'Spring Boot', 'MongoDB', 'Postman'],
    highlights: [
      'Designed endpoints for movie retrieval and CRUD-based user reviews.',
      'Wrote and ran Postman test suites to validate request/response contracts before release.',
      'Structured MongoDB documents to support flexible querying of reviews and ratings.',
    ],
    repoUrl: 'https://github.com/mjalafaro65', // TODO: replace with actual repo link
  },
  {
    title: 'Product & Shipping Management System',
    period: 'Spring 2024',
    summary:
      'A full-stack inventory and logistics application with tiered user roles and a full CRUD product catalog.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'phpMyAdmin', 'XAMPP'],
    highlights: [
      'Implemented user authentication and role-based access control across admin, manager, and user levels.',
      'Built a full CRUD product catalog for tracking inventory and shipping records.',
      // TODO: finish this line once the cut-off "modu..." detail is confirmed
    ],
    repoUrl: 'https://github.com/mjalafaro65/ProductManagmentWebsite', // TODO: replace with actual repo link
  },
];

export default function WorksPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#664A7A]">Selected Works</p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-stone-900">Projects.</h1>
        <p className="max-w-2xl text-base leading-relaxed text-stone-600">
          I build practical tools across backend architecture, data modeling, and AI systems—always aiming for clarity, correctness, and a trustworthy user experience.
        </p>
      </section>

      <div className="space-y-6">
        {workItems.map((item) => (
          <article key={item.title} className="rounded-3xl border border-stone-300 bg-white/80 p-6 sm:p-7 shadow-sm">
            <div className="flex flex-col gap-3 pb-4 border-b border-stone-200">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">{item.period}</span>
                {item.repoUrl && (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-stone-500 hover:text-[#664A7A] transition-colors"
                  >
                    Code
                  </a>
                )}
              </div>
              <h2 className="text-xl font-semibold text-stone-900">{item.title}</h2>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_0.9fr]">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-stone-600">{item.summary}</p>
                <ul className="space-y-2 text-sm text-stone-700">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#C2410C]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-[#f8f5f2] p-4">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">
                  <Layers3 className="h-3.5 w-3.5 text-[#664A7A]" /> Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-stone-300 bg-white px-2.5 py-1 text-[11px] font-mono text-stone-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* <section className="rounded-3xl border border-stone-300 bg-[#f3efe9] p-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-stone-600">
          <Code2 className="h-4 w-4 text-[#664A7A]" /> Product mindset
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <ServerCog className="mb-3 h-5 w-5 text-[#664A7A]" />
            <p className="text-sm font-medium text-stone-900">Backend-first design</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <BriefcaseBusiness className="mb-3 h-5 w-5 text-[#664A7A]" />
            <p className="text-sm font-medium text-stone-900">Business clarity</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <ArrowUpRight className="mb-3 h-5 w-5 text-[#664A7A]" />
            <p className="text-sm font-medium text-stone-900">Ship-ready systems</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}