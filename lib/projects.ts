export type Project = {
  title: string;
  subtitle: string;
  text: string;
  slug: string;
  tech: string[];
  details: string;
  image: string | null;
};

export const projects: Project[] = [
  {
    title: "Anjai Voice",
    subtitle: "Conversational Dispatcher Portal",
    text: "Voice/text commands sent to AI for autonomous task execution. Built with React, WebSocket integration, and real-time streaming UI.",
    slug: "anjai-voice",
    tech: ["React", "WebSocket", "AI", "Streaming UI", "TypeScript"],
    details:
      "Anjai Voice is a conversational dispatcher portal that lets operators issue voice or text commands which are relayed to an AI backend for autonomous task execution. The interface streams AI responses in real time using WebSocket connections, keeping dispatchers informed without page reloads. I designed and built the streaming UI layer — including message queuing, partial-render handling, and reconnection logic — as well as the command input component that accepts both typed and transcribed voice input.",
    image: null,
  },
  {
    title: "Anjai Forecast",
    subtitle: "12-Hour Booking Forecasting Dashboard",
    text: "Integrated ML model (Prophet & XGBoost) outputs into a responsive dashboard with weather and holiday overlays.",
    slug: "anjai-forecast",
    tech: ["React", "Python", "Prophet", "XGBoost", "Data Visualisation"],
    details:
      "Anjai Forecast is a 12-hour booking prediction tool built for the Cab9 operations team. I integrated the outputs of a machine learning pipeline (Prophet for trend forecasting, XGBoost for short-term spikes) into an interactive dashboard. The UI overlays weather conditions and public holiday markers on the forecast chart, giving dispatchers contextual signals alongside raw predictions.",
    image: null,
  },
  {
    title: "Cab9 Onboarding",
    subtitle: "Multi-Step Company Onboarding Portal",
    text: "Multi-step company onboarding flow with persistent progress tracking, role configuration, and guided setup wizards.",
    slug: "cab9-onboarding",
    tech: ["React", "TypeScript", "Formik", "REST API", "Storybook"],
    details:
      "The Cab9 Onboarding Portal guides new companies through a multi-step setup process covering fleet configuration, user role assignment, billing setup, and integration preferences. I built the wizard framework from scratch — step routing, validation, progress persistence across sessions, and a branching flow that adapts to each company's selected plan.",
    image: null,
  },
  {
    title: "Hyperstart CLM",
    subtitle: "AI-Powered Contract Lifecycle Management",
    text: "Document upload, clause tagging, pre/post-execution tracking. Built 0-to-1 in React for law firms.",
    slug: "hyperstart-clm",
    tech: ["React", "TypeScript", "AI/NLP", "PDF.js", "REST API"],
    details:
      "Hyperstart CLM is an AI-powered contract lifecycle management tool built for law firms. I joined the project at inception and took it from zero to a working product — designing the information architecture, building the document upload and parsing pipeline UI, implementing clause tagging with AI-suggested labels, and wiring up pre- and post-execution contract tracking views.",
    image: "/projects/hyperstart.png",
  },
  {
    title: "Rideshare Feature",
    subtitle: "End-to-End Rideshare Matching Interface",
    text: "Passenger grouping, route visualisation, and real-time seat availability for Cab9.",
    slug: "rideshare-feature",
    tech: ["React", "Maps API", "WebSocket", "TypeScript", "SCSS"],
    details:
      "The Rideshare feature for Cab9 allows dispatchers to group passengers travelling similar routes into shared rides. I built the full frontend — the passenger grouping panel, an interactive route visualisation map showing merged paths, real-time seat availability indicators, and the confirmation and dispatch flow.",
    image: null,
  },
  {
    title: "Instagram Clone",
    subtitle: "Interactive Social UI",
    text: "Functional Instagram-style interface with account creation, image posting, comments, and likes built with React and Firebase.",
    slug: "instagram-clone",
    tech: ["React", "Firebase", "CSS Modules"],
    details:
      "A functional Instagram-style interface featuring account creation, a photo feed, post liking, and comment threads, built with React and backed by Firebase for auth and data storage.",
    image: null,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
