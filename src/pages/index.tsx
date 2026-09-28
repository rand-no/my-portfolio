import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import { FiMail, FiLinkedin } from 'react-icons/fi'
import { projects } from '../data/projects'

export default function Home() {
  const skillGroups = [
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "Kafka", "Airflow", "SQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "AWS/GCP", "Terraform"]
    },
    {
      title: "AI & Automation",
      skills: ["LLMs", "LangChain", "Hugging Face", "FastAPI"]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Head>
        <title>Rand Nomairi — Data Engineer | Telecom Data Systems & LLM Automation</title>
        <meta name="description" content="Data Engineer specializing in telecom data pipelines, AI tooling, and production systems." />
      </Head>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 opacity-95"></div>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl"></div>
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="relative z-10 py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="inline-flex rounded-full border border-slate-700 bg-white/5 px-4 py-1 text-sm font-medium uppercase tracking-[0.3em] text-slate-300 mb-6">
              Data engineering · Telecom systems · LLM automation
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Hi, I’m Rand Nomairi</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Delivering production-ready telecom data platforms and intelligent automation.
            </h1>
            <p className="mx-auto max-w-3xl text-base md:text-lg text-slate-300 leading-8 mb-10">
              I build resilient data pipelines, cloud-native monitoring, and AI tooling that unlocks operational insight for telecom teams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Explore projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-200 transition hover:border-white hover:bg-white/10">
                Contact me
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { label: '1M+ CDRs/day', value: 'Telecom scale' },
                { label: 'LLM tools', value: 'Operational AI' },
                { label: 'Cloud-native', value: 'Docker • Kubernetes' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-700 bg-white/5 p-5 text-left backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.7)] backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">About my work</h2>
                <p className="text-slate-300 leading-8 mb-4">
                  I design telecom data systems and AI automation with strong observability, resilient deployment, and operational value built in from day one.
                </p>
                <p className="text-slate-400 leading-7">
                  My focus is on delivering production-ready pipelines, intelligent assistants, and cloud-native services that help telecom teams move faster while keeping operations stable.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 mb-3">Problem</h3>
                  <p className="text-slate-300 text-sm">Telecom operations need trustworthy pipelines and intelligent automation to keep services running smoothly.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 mb-3">Approach</h3>
                  <p className="text-slate-300 text-sm">I build observable, reusable data workflows and AI assistants that integrate with real-world telecom documentation and systems.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 mb-3">Impact</h3>
                  <p className="text-slate-300 text-sm">Faster troubleshooting, stronger SLA confidence, and automation that supports both engineering and operations teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Projects</h2>
        <p className="mx-auto max-w-2xl text-center text-slate-400 mb-10">
          Each project showcases the tools, architecture, and outcomes behind telecom data systems and LLM automation work.
        </p>
        <div className="mb-8 text-center">
          <Link href="/projects" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
            See all project pages
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Technical Skills</h2>
          <p className="mx-auto max-w-2xl text-center text-slate-400 mb-10">
            Deep expertise across data engineering, cloud-native systems, and AI automation tools.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
                <h3 className="text-lg font-semibold text-white mb-4">{group.title}</h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill} className="rounded-2xl bg-slate-950/90 px-3 py-2 text-sm text-slate-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-center text-slate-400 mb-10">
            Interested in telecom data systems, AI automation, or collaboration? I’m happy to connect and discuss your next project.
          </p>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.75)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <FiMail className="text-cyan-400 text-2xl" />
                <a href="mailto:rand.nomairi@gmail.com" className="text-lg text-white hover:text-cyan-300 transition">
                  rand.nomairi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FiLinkedin className="text-cyan-400 text-2xl" />
                <a href="https://www.linkedin.com/in/rand-alnomairi" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-cyan-300 transition">
                  linkedin.com/in/rand-alnomairi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}