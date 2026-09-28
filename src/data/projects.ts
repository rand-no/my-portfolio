export type Project = {
  slug: string
  title: string
  role: string
  summary: string
  tech: string[]
  description: string
  outcome?: string
  features: string[]
  sections: {
    title: string
    body: string
    bullets?: string[]
  }[]
  image: string
  github?: string
  demo?: string
  sourcePath?: string
  status: 'Complete' | 'In progress' | 'Planned'
  apiShowcase?: {
    title: string
    baseUrl: string
    description: string
    endpoints: {
      method: string
      path: string
      description: string
    }[]
    requestExample: string
    responseExample: string
  }
  playground?: {
    title: string
    promptLabel: string
    buttonLabel: string
    defaultQuestion: string
    defaultTopK: number
  }
}

const faqApiBaseUrl = process.env.NEXT_PUBLIC_FAQ_API_BASE_URL ?? 'http://localhost:8000'

export const projects: Project[] = [
  {
    slug: 'real-time-cdr-pipeline',
    title: 'Real-Time Telecom CDR Pipeline',
    role: 'Lead Data Engineer',
    summary: 'A production-minded telecom ingestion pipeline for streaming CDR events into operational analytics and monitoring.',
    tech: ['Kafka', 'Spark', 'Airflow', 'Docker', 'Kubernetes'],
    description:
      'Built an operational telecom ETL pipeline processing 1M+ daily CDRs for anomaly detection, SLA measurement, and automated alerts.',
    outcome: 'Improved visibility for operations teams with automated data quality monitoring and SLA reporting.',
    features: [
      'Real-time ingest and ETL for telecom CDRs',
      'Auto-scaling Kubernetes deployment',
      'Data quality monitoring and alerting',
    ],
    sections: [
      {
        title: 'Architecture',
        body: 'Kafka receives CDR events, Spark transforms the stream, and Airflow coordinates scheduled checks and downstream reporting tasks.',
        bullets: ['Kafka topic for incoming CDRs', 'Spark ETL for cleaning and enrichment', 'Airflow DAGs for orchestration and alerts'],
      },
      {
        title: 'Repository contents',
        body: 'The telecom repo now includes the Docker Compose stack, data generator, Spark ETL entrypoint, and setup documentation needed to run the pipeline locally.',
        bullets: ['Docker Compose stack', 'Python-based CDR generator', 'Spark ETL job scaffold'],
      },
      {
        title: 'Run instructions',
        body: 'Project 1 is the most complete implementation and can be started directly from the telecom repo root with Docker Compose and the helper scripts.',
        bullets: ['docker-compose up -d', 'scripts/up.ps1 or scripts/up.sh', 'data generator helper scripts'],
      },
    ],
    image: '/pexels-energepic-com-27411-159888.jpg',
    sourcePath: 'telecom-data-portfolio/Project_1_CDR_Pipeline',
    status: 'Complete',
  },
  {
    slug: 'network-anomaly-detection',
    title: '5G Network Anomaly Detection',
    role: 'Data / ML Engineer',
    summary: 'A Spark ML starter project for spotting outliers in 5G network telemetry and turning them into actionable alerts.',
    tech: ['PySpark', 'ML Pipelines', 'Feature Engineering', 'Docker'],
    description:
      'Designed an anomaly detection concept for 5G network traffic that can flag unusual patterns before they impact service quality.',
    outcome: 'Adds a monitoring layer for network health and early warning analysis.',
    features: [
      'Streaming-friendly feature preparation',
      'Anomaly scoring for network events',
      'Containerized reproducible workflow',
    ],
    sections: [
      {
        title: 'Architecture',
        body: 'The project is scaffolded as a Spark batch pipeline that loads network telemetry, engineers features, and scores anomalies for downstream reporting.',
        bullets: ['Schema-first data loading', 'Feature engineering and normalization', 'Anomaly scoring with a Spark ML pipeline'],
      },
      {
        title: 'Repository contents',
        body: 'The folder now includes a runnable starter script, requirements, and a README that explains how to extend the prototype into a full detector.',
        bullets: ['PySpark pipeline scaffold', 'Dependency list', 'Project documentation'],
      },
      {
        title: 'Run instructions',
        body: 'The pipeline can run against a CSV/Parquet input or the built-in demo dataset for local validation.',
        bullets: ['python spark_ml_pipeline.py --demo', 'python spark_ml_pipeline.py --input data/network_telemetry.csv', 'Outputs parquet anomaly scores'],
      },
    ],
    image: '/5G-cover-image.jpg',
    sourcePath: 'telecom-data-portfolio/Project_2_Anomaly_Detection',
    status: 'In progress',
  },
  {
    slug: 'llm-faq-bot',
    title: 'LLM-Powered Telecom FAQ Bot',
    role: 'ML / Automation Engineer',
    summary: 'A retrieval-augmented FAQ assistant for telecom documentation, procedures, and troubleshooting workflows.',
    tech: ['FastAPI', 'TF-IDF Retrieval', 'RAG', 'Hugging Face Datasets', 'Uvicorn', 'httpx', 'Ollama'],
    description:
      'Built a retrieval-augmented telecom FAQ assistant that combines local TF-IDF search, automatic web-source fallback, and optional LLM synthesis. It answers open-ended telecom questions from a dynamic, expanding corpus.',
    outcome: 'Can answer novel telecom questions even when they are not in the original static corpus, by combining retrieval enrichment with free LLM backends like Ollama.',
    features: [
      'Local TF-IDF vector search over a 60+ article telecom knowledge base',
      'Automatic fallback enrichment from public sources (3GPP, GSMA, O-RAN, etc.) when local confidence is low',
      'Optional RAG pipeline with free LLM backends (Ollama, Groq, OpenAI-compatible APIs) for synthesized answers',
      'FastAPI service with playground and structured JSON responses',
      'Expandable corpus with automatic chunking and keyword tagging',
    ],
    sections: [
      {
        title: 'Architecture',
        body: 'The bot is organized as a FastAPI service with a retriever layer, a lightweight API, and room for local or hosted model backends.',
        bullets: ['FastAPI app entrypoint', 'Knowledge base and retrieval utilities', 'Response schema for FAQ answers'],
      },
      {
        title: 'Repository contents',
        body: 'The repo now contains the first service files, dependency list, and README setup steps so the project can grow into a full assistant implementation.',
        bullets: ['API scaffold', 'Service layer scaffold', 'Project README and environment notes'],
      },
      {
        title: 'Run instructions',
        body: 'The service can be launched locally with Uvicorn and queried through the FAQ endpoint or the document listing endpoint.',
        bullets: ['uvicorn app.main:app --reload', 'GET /health', 'POST /faq and GET /documents'],
      },
      {
        title: 'How it answers open-ended questions',
        body: 'The FAQ bot uses a RAG pipeline instead of a static article matcher.',
        bullets: [
          'Local TF-IDF search over 60+ telecom articles for fast grounded answers.',
          'Automatic fallback fetches public telecom pages if local confidence is low, then re-searches.',
          'Optional LLM synthesis (Ollama, Groq, OpenAI, Cloudflare Workers AI) rewrites retrieved context into a fluent grounded answer.',
          'If no LLM is configured, the bot still returns retrieval-based answers with source citations.',
        ],
      },
      {
        title: 'Sample knowledge base',
        body: 'The initial corpus covers core telecom topics and can be expanded dynamically through ingestion endpoints.',
        bullets: [
          'What is 5G? - 5G is the fifth generation of mobile networks. It improves speed, latency, and capacity.',
          '5G Core Network - The 5GC is a cloud-native, service-based architecture with AMF, SMF, UDM, AUSF, and PCF.',
          'Network Slicing - Creates logically isolated virtual networks tailored for eMBB, URLLC, or mMTC.',
          'Open RAN (O-RAN) - Opens the RAN to multi-vendor interoperability with open interfaces between RU, DU, and CU.',
          'Telecom Security - 5G security includes SUPI privacy through SUCI, mutual authentication, and encrypted user-plane traffic.',
        ],
      },
      {
        title: 'Example conversations',
        body: 'These examples show how the FAQ bot retrieves grounded answers from the telecom knowledge base.',
        bullets: [
          'Q: What is 5G? A: Retrieves the 5G article with 0.87 similarity and returns the core definition with source citation.',
          'Q: How does network slicing work? A: Matches the slicing article and explains eMBB, URLLC, and mMTC use cases.',
          'Q: What is Open RAN? A: Returns the O-RAN article covering RU/DU/CU separation and multi-vendor interoperability.',
          'Q: Tell me about 5G security. A: Retrieves the security article detailing SUPI/SUCI privacy, authentication, and encryption.',
        ],
      },
      {
        title: 'Open-source data enrichment',
        body: 'The API includes two ingestion endpoints to expand the knowledge base with external telecom content.',
        bullets: [
          'POST /ingest/web - Fetches and chunks public telecom sources: 3GPP, GSMA Open RAN, O-RAN Alliance, Telecom Infra Project, and 5G-ACIA.',
          'POST /ingest/hf - Pulls from Hugging Face datasets such as mantisnlp/gsma_prd_synthetic_qa and converts Q&A rows into searchable articles.',
          'Chunked articles are tagged automatically with telecom keywords and appended to the live TF-IDF index.',
        ],
      },
      {
        title: 'Live API examples',
        body: 'Use these curl commands to interact with the running FastAPI service.',
        bullets: [
          'curl -X POST http://localhost:8000/faq -H "Content-Type: application/json" -d \'{"question":"What is 5G?","top_k":2}\'',
          'curl "http://localhost:8000/search?q=network+slicing&top_k=3"',
          'curl -X POST http://localhost:8000/ingest/web',
          'curl -X POST "http://localhost:8000/ingest/hf?dataset=mantisnlp/gsma_prd_synthetic_qa&limit=50"',
        ],
      },
    ],
    image: '/pexels-googledeepmind-18069697.jpg',
    sourcePath: 'telecom-data-portfolio/Project_3_LLM_FAQ_Bot',
    status: 'In progress',
    apiShowcase: {
      title: 'Local API Demo',
      baseUrl: faqApiBaseUrl,
      description: 'Run the FastAPI service locally and try the FAQ endpoint against the telecom knowledge base. The bot uses local TF-IDF search, automatic fallback enrichment, and optional LLM synthesis.',
      endpoints: [
        { method: 'GET', path: '/health', description: 'Health check for the service.' },
        { method: 'GET', path: '/documents', description: 'List the searchable telecom documents.' },
        { method: 'GET', path: '/search?q=what is 5g', description: 'Search the telecom FAQ corpus.' },
        { method: 'POST', path: '/faq', description: 'Return a grounded FAQ answer with sources. Enable ENABLE_LLM=true to synthesize answers through an LLM.' },
        { method: 'POST', path: '/ingest/web', description: 'Ingest public telecom web sources into the knowledge base.' },
        { method: 'POST', path: '/ingest/hf', description: 'Ingest a Hugging Face dataset into the knowledge base.' },
      ],
      requestExample: `# Ask a question (local retrieval only)
curl -X POST ${faqApiBaseUrl}/faq \\
  -H "Content-Type: application/json" \\
  -d '{"question":"What is DPI?","top_k":3}'

# Enable local LLM synthesis with Ollama
ENABLE_LLM=true uvicorn app.main:app --reload

# With LLM enabled, the same request returns a synthesized grounded answer`,
      responseExample: `{
  "answer": "Deep Packet Inspection (DPI) inspects packet payloads beyond IP headers to classify traffic, enforce QoS, detect threats, and enable lawful interception. Operators use it for traffic shaping and policy enforcement.",
  "sources": [
    {
      "title": "DPI (Deep Packet Inspection)",
      "snippet": "DPI inspects packet payloads beyond IP headers...",
      "score": 0.71
    }
  ]
}`,
    },
    playground: {
      title: 'Interactive FAQ Playground',
      promptLabel: 'Ask the telecom FAQ bot',
      buttonLabel: 'Run FAQ',
      defaultQuestion: 'What is 5G network slicing?',
      defaultTopK: 2,
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
