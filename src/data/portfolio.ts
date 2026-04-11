import { LucideIcon } from "lucide-react";

export const portfolioData = {
  hero: {
    name: "Rahul Jadhav",
    role: "Senior Software Engineer",
    taglines: [
      "Architecting Scalable Systems. Engineering the Future.",
      "Building Resilient Backends & Distributed Data Pipelines.",
      "Data-Driven Engineering. Cloud-Native Performance."
    ]
  },
  about: {
    short: "I'm Rahul Jadhav, a Senior Software Engineer specializing in backend architecture, event-driven integrations with Kafka, and scalable cloud deployments.",
    detailed: "With over 5 years of experience building enterprise-grade backend systems at Tata Consultancy Services (TCS) and KPIT, I design and orchestrate complex microservices and data pipelines that power modern applications. I thrive on solving intricate problems regarding scalability, performance, and fault tolerance. From secure REST API development to cloud-native Kubernetes integrations, my goal is to craft architecture that stands the test of time and scale."
  },
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tata Consultancy Services (TCS)",
      duration: "Present",
      highlights: [
        "Architecting and delivering enterprise-grade backend microservices.",
        "Designing event-driven systems utilizing Apache Kafka for real-time processing.",
        "Implementing containerized CI/CD cloud deployments via Azure DevOps and Kubernetes."
      ]
    },
    {
      role: "Software Engineer",
      company: "KPIT",
      duration: "Previous",
      highlights: [
        "Developed secure, highly available REST APIs.",
        "Mentored junior developers and instituted code quality best practices.",
        "Optimized data pipelines using Python, Pandas, and MySQL."
      ]
    }
  ],
  projects: [
    {
      title: "Distributed Order Processing System",
      category: "Kafka-based system",
      description: "An event-driven architecture using Apache Kafka to process millions of transactions daily with high fault-tolerance and zero data loss.",
      tech: ["Java", "Spring Boot", "Apache Kafka", "Kubernetes"]
    },
    {
      title: "Enterprise Identity & Auth Platform",
      category: "Microservices Platform",
      description: "A centralized, highly secure authentication platform built with modern OAuth2.0 standards, supporting SSO for multiple internal applications.",
      tech: ["Spring Security", "Java", "Docker", "Azure DevOps"]
    },
    {
      title: "Real-Time Telemetry Pipeline",
      category: "Data Pipeline",
      description: "A Python and Pandas driven pipeline ingesting distributed sensor data, transforming payload structures, and dumping into a scalable MySQL cluster.",
      tech: ["Python", "Pandas", "MySQL", "Azure"]
    }
  ],
  skills: {
    backend: ["Java", "Spring Boot", "Python"],
    architecture: ["Apache Kafka", "Microservices", "REST APIs"],
    infrastructure: ["Kubernetes", "Docker", "Azure DevOps", "MySQL & Pandas"]
  },
  certifications: [
    "Agile Project Management (Jira Cloud)",
    "Microsoft Azure Fundamentals",
    "SQL Certification",
    "GitHub Copilot"
  ],
  awards: [
    "GO Getter Award",
    "The Comrade Award"
  ],
  closing: "Building robust infrastructure is just the beginning. Let's scale your vision together."
};
