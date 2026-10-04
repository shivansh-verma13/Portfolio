// Internal work deliberately has no invented public repository or demo link.
export const projects = [
  {
    id: "ai-interviewer",
    title: "AI Interviewer",
    type: "Internal hackathon",
    badge: "1st prize · iSchoolConnect",
    visual: "interview",
    description:
      "An interview workflow that moves from a resume to domain-aware questions, scheduling, and a transcript.",
    stack: ["Next.js", "Node.js", "Vapi", "AI"],
    highlights: [
      "Resume upload and domain-aware interview questions",
      "AI-assisted and manual scheduling flows",
      "Interview transcripts, streaming, idempotency, and retries",
    ],
  },
  {
    id: "rag-systems",
    title: "Conversational AI systems",
    type: "Professional work",
    badge: "Production systems",
    visual: "rag",
    description:
      "Chat, voice, and SMS experiences with retrieval and multi-agent orchestration for university workflows.",
    stack: ["LLMs", "RAG", "FAISS", "Vapi", "Langfuse"],
    highlights: [
      "Embeddings and retrieval with prompt engineering and guardrails",
      "Multi-agent response latency: 30–45s → 4–10s",
      "Evaluations and observability; interim responses during retrieval",
    ],
  },
  {
    id: "document-extractor",
    title: "Email & document extractor",
    type: "Professional work",
    visual: "extractor",
    badge: "Workflow automation",
    description:
      "An extraction workflow that turns incoming email bodies and attachments into structured information for review.",
    stack: ["Backend APIs", "Automation", "Document processing"],
    highlights: [
      "Mailbox monitoring and attachment extraction",
      "Email-body extraction and user mapping",
      "Human-in-the-loop validation before downstream use",
    ],
  },
  {
    id: "interview-lab",
    title: "Interview Lab",
    type: "Personal project",
    badge: "Live AI practice",
    image: "/images/interview-lab.png",
    alt: "Interview Lab saved review with answer-grounded feedback",
    description: "Role-specific interview practice across text, audio and video, with editable transcripts and saved private reviews.",
    stack: ["React", "TypeScript", "Express", "MongoDB", "Gemini"],
    highlights: ["Three questions and one follow-up with quote-validated feedback", "Consent-based audio transcription and local camera preview", "Owner-scoped sessions, replay protection and bounded AI usage"],
    links: [{label: "Live app", url: "https://shivansh-interview-lab.netlify.app/"}, {label: "Source", url: "https://github.com/shivansh-verma13/MERN-gpt/tree/upgrade/interview-lab"}],
  },
  {
    id: "videomeet",
    title: "VideoMeet",
    type: "Personal project",
    image: "/images/video-meet.webp",
    alt: "VideoMeet interface showing a two-peer video call and meeting controls",
    description:
      "A peer-to-peer video application built around WebRTC, with a MERN backend and responsive meeting controls.",
    stack: ["WebRTC", "MERN", "Tailwind CSS"],
    highlights: [
      "Real-time peer video communication",
      "Responsive meeting interface",
    ],
    links: [{ label: "Live demo", url: "https://videomeeet.netlify.app/" }],
  },
];
export const otherProjects = [
  {
    id: "realtime-chat",
    title: "Real-time chat",
    stack: "WebSockets · MERN · Tailwind",
    description:
      "Real-time messaging with emoji support and sub-second message latency.",
    image: "/images/chat.webp",
    alt: "Real-time chat interface with contacts and messages",
    links: [{ label: "Video demo", url: "https://youtu.be/Mva_jt6xWJo" }],
  },
  {
    id: "recipe-blog",
    title: "Recipe blog",
    stack: "MERN · Material UI · Authentication",
    description: "Authenticated recipe publishing and discovery.",
    links: [{ label: "Video demo", url: "https://youtu.be/NR5wuXwaJ0Q" }],
  },
  {
    id: "notepad",
    title: "MERN Notepad",
    stack: "MERN · Material UI",
    description: "A notes application with create, update, and delete flows.",
    links: [{ label: "Video demo", url: "https://youtu.be/z_Xg0T2b-AY" }],
  },
];
