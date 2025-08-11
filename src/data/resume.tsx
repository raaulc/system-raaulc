import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Rahul Rathod",
  initials: "RR",
  url: "mailto:raaulc@outlook.com",
  location: "Leeds, UK",
  locationLink: "https://www.google.com/maps/place/Leeds,+UK",
  description:
    "Senior Backend Architect — 14+ Years Building Scalable Systems | Python | Java | Kotlin | Cloud-Native",
  summary: "I design and lead cloud-native microservices that are secure, observable, and built for scale. With 14+ years of experience, I specialize in Python/FastAPI, distributed systems, and production-ready architectures that handle millions of requests. I'm passionate about clean code, system design, and mentoring teams to deliver reliable, scalable solutions.",
  avatarUrl: "/favicons/profile-pic.jpeg",
  skills: [
    "Python",
    "Java",
    "Kotlin",
    "FastAPI",
    "Micronaut",
    "Spring Boot",
    "Apache Kafka",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "GitHub Actions",
    "Jenkins",
    "Microservices",
    "Event-Driven Architecture",
    "Distributed Systems",
    "System Design",
    "Performance Tuning",
    "Observability",
    "CI/CD",
    "Clean Code",
    "Mentoring",
    "Cross-functional Leadership",
    "REST APIs",
    "GraphQL",
    "gRPC",
    "Message Queues",
    "Circuit Breakers",
    "Load Balancing",
    "Auto Scaling",
    "Infrastructure as Code",
    "Terraform",
    "Ansible",
    "Cassandra",
    "RabbitMQ",
    "Akka",
    "Unit Testing",
    "Integration Testing",
    "JIRA",
    "Agile/Scrum"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "raaulc@outlook.com",
    tel: "+44-7424939000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raaulc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raaulc/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email me",
        url: "mailto:raaulc@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
      downloadCV: {
        name: "View CV (PDF)",
        url: "https://drive.google.com/file/d/1xHBbQxeqc1hmQMfJLr99C3RmA6PeR9BX/view?usp=sharing",
        icon: Icons.files,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sky Betting & Gaming",
      href: "https://www.skybettingandgaming.com",
      badges: [],
      location: "Leeds, UK",
      title: "Backend Engineer - Discovery & Bet Lifecycle",
      logoUrl: "/atomic.png",
      start: "2023",
      end: "Present",
      description:
        "• Owned frontend + internal APIs for high-traffic betting features (10M+ daily requests, 99.9% uptime)\n• Built FastAPI experimentation tooling → reduced rollout time by 60%\n• Improved resilience & observability with Grafana → reduced incident response by 40%\n• Led Kafka event-driven architecture for odds updates\n• Mentored junior developers in backend best practices",
    },
    {
      company: "Marks & Spencer",
      href: "https://www.marksandspencer.com",
      badges: [],
      location: "Leeds, UK",
      title: "Backend Engineer",
      logoUrl: "/atomic.png",
      start: "2022",
      end: "2023",
      description:
        "• Built backend services + React Native login flows → served 5M+ users\n• Resolved critical login bug affecting 20% of users (Regex fix + retry handling)\n• Integrated Kafka + Redis → +15% conversion rate\n• Improved campaign analytics with Looker/Adobe integration\n• Implemented microservices architecture with Python/FastAPI",
    },
    {
      company: "Best Buy",
      href: "https://www.bestbuy.com",
      badges: [],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/atomic.png",
      start: "2021",
      end: "2022",
      description:
        "• Reduced API latency by 70% using Redis caching + Kafka streams\n• Built backend for recommendations & dynamic pricing engine\n• Implemented Grafana dashboards for API SLOs and monitoring\n• Designed event-driven microservices architecture\n• Optimized PostgreSQL queries and database performance",
    },
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "• Implemented Bitcoin discreet log contract (DLC) protocol as TypeScript SDK\n• Dockerized microservices and setup production Kubernetes cluster\n• Architected data lake using AWS S3 and Athena for historical backtesting\n• Built mobile app using React Native and TypeScript\n• Designed event-driven architecture for real-time trading data",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "• Implemented custom Kubernetes controller in Go for MySQL/ProxySQL automation\n• Enabled 2,000+ developers to deploy databases instantly\n• Wrote Go scripts for MySQL failover automation with master-slave replication\n• Maintained Zookeeper consistency during topology changes\n• Built observability tools for database health monitoring",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "• Architected MVP of GeForce Now Cloud Gaming admin dashboard\n• Built A/B testing framework using React, Redux, TypeScript, and Python\n• Implemented real-time analytics and monitoring systems\n• Designed scalable backend services for gaming platform\n• Created data pipelines for user behavior analysis",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "• Co-developed iOS app for Splunk Phantom security orchestration (publicly demoed at .conf)\n• Implemented real-time service in Django (Python) and C++\n• Used protobufs over gRPC → 500% increase in data throughput\n• Built distributed systems for security event processing\n• Designed microservices architecture for security platform",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "• Built internal Ruby API for scooter commands over LTE networks\n• Developed automated firmware update system for 100,000+ scooters\n• Used React, Ruby on Rails, PostgreSQL, AWS EC2\n• Implemented real-time progress reporting\n• Saved hundreds of developer hours through automation",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "• Designed robust password encryption and browser cookie storage system\n• Leveraged Yahoo Finance API for dividend.com equity screener\n• Built secure authentication and authorization systems\n• Implemented data processing pipelines for financial data\n• Created RESTful APIs for financial services",
    },
  ],
  education: [
    {
      school: "Dharmsinh Desai University",
      href: "https://www.ddu.ac.in/",
      degree: "Bachelor of Engineering: Electronics and Communication",
      logoUrl: "",
      start: "05/2005",
      end: "05/2009",
      location: "Gujarat, India"
    }
  ],
  showAllProjects: false,
  projects: [
    {
      title: "Driving Events Pipeline",
      href: "https://github.com/raaulc/driving-events-pipeline",
      dates: "2024",
      active: true,
      description:
        "Real-time event processing pipeline for driving data using FastAPI, Kafka, Redis, and PostgreSQL. Features Grafana dashboards for observability, event streaming for real-time analytics, and scalable microservices architecture.",
      technologies: [
        "FastAPI",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Grafana",
        "Docker"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/raaulc/driving-events-pipeline",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Real-time event streaming with Kafka",
        "Redis caching for high-performance data access",
        "PostgreSQL for persistent storage",
        "Grafana dashboards for monitoring",
        "Docker containerization",
        "RESTful API with FastAPI"
      ],
      image: "",
      video: "",
    },
    {
      title: "Claims Service",
      href: "https://github.com/raaulc/claims-service",
      dates: "2024",
      active: true,
      description:
        "Resilient claims processing service with retry mechanisms, circuit breakers, and Prometheus monitoring. Built for high availability and fault tolerance in distributed systems.",
      technologies: [
        "Python",
        "FastAPI",
        "Redis",
        "Prometheus",
        "Circuit Breakers",
        "Retry Logic"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/raaulc/claims-service",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Circuit breaker pattern implementation",
        "Exponential backoff retry logic",
        "Prometheus metrics and monitoring",
        "Redis for caching and session management",
        "Health checks and readiness probes",
        "Graceful degradation handling"
      ],
      image: "",
      video: "",
    },
    {
      title: "Pricing Engine",
      href: "https://github.com/raaulc/pricing-engine",
      dates: "2024",
      active: true,
      description:
        "Rules-based pricing engine with Redis caching and JWT security. Handles dynamic pricing calculations with high throughput and low latency for e-commerce applications.",
      technologies: [
        "Python",
        "FastAPI",
        "Redis",
        "JWT",
        "Rules Engine",
        "PostgreSQL"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/raaulc/pricing-engine",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Rules-based pricing logic",
        "Redis caching for performance",
        "JWT authentication and authorization",
        "PostgreSQL for rule storage",
        "Real-time price calculations",
        "A/B testing support"
      ],
      image: "",
      video: "",
    },
    {
      title: "Policy Admin Dashboard",
      href: "https://github.com/raaulc/policy-admin",
      dates: "2024",
      active: true,
      description:
        "React frontend with FastAPI backend for policy administration. Features role-based access control (RBAC), real-time updates, and comprehensive policy management capabilities.",
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "RBAC",
        "WebSockets",
        "Docker"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/raaulc/policy-admin",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Role-based access control (RBAC)",
        "Real-time policy updates via WebSockets",
        "React frontend with TypeScript",
        "FastAPI backend with OpenAPI docs",
        "PostgreSQL for data persistence",
        "Docker containerization"
      ],
      image: "",
      video: "",
    },
    {
      title: "Coming Soon - Backend Projects",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Working on additional backend engineering projects showcasing distributed systems, high-performance APIs, and scalable microservices architecture. More projects will be added soon featuring advanced Python patterns, cloud-native deployments, and real-world system design implementations.",
      technologies: [
        "Python",
        "FastAPI",
        "Microservices",
        "Cloud Native",
        "System Design",
        "Distributed Systems"
      ],
      links: [
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Advanced microservices patterns and best practices",
        "Cloud-native deployment strategies",
        "System design and scalability implementations",
        "Real-world backend engineering solutions"
      ],
      image: "",
      video: "",
    }
  ],
  blogs: [
    {
      title: "Building Scalable Microservices with FastAPI — From Bottlenecks to Breakthroughs",
      href: "https://medium.com/@raaulc/fastapi-microservices",
      date: "2024-06-01",
      summary: "A real-world journey from monolithic chaos to microservices success. How we reduced API response times by 40%, deployment cycles from days to hours, and handled 3x normal load with zero downtime using FastAPI, Kafka, Redis, and Prometheus.",
      image: "/blog-images/fastapi-microservices.svg"
    },
    {
      title: "Event-Driven Architecture with Apache Kafka: Building Scalable Systems",
      href: "https://medium.com/@raaulc/event-driven-kafka-architecture",
      date: "2024-05-15",
      summary: "How we transformed a synchronous request/response system into a decoupled, fault-tolerant event-driven architecture. Achieved 99.99% uptime, processed 3x more events per second, and gained the power of event replay.",
      image: "/blog-images/kafka-event-driven.svg"
    },
    {
      title: "Observability in Distributed Systems: Seeing the Whole Picture",
      href: "https://medium.com/@raaulc/observability-distributed-systems",
      date: "2024-04-20",
      summary: "From 'the system's slow' to pinpoint problem resolution in minutes. How structured logging, Prometheus metrics, Grafana dashboards, and OpenTelemetry tracing turned debugging from guessing into knowing.",
      image: "/blog-images/observability-distributed.svg"
    },
    {
      title: "Redis Caching Patterns for High-Performance Backend Services",
      href: "https://medium.com/@raaulc/redis-caching-patterns",
      date: "2024-03-30",
      summary: "How Redis caching patterns reduced API latency from 900ms to under 200ms, cut database load by 60%, and eliminated peak-time errors. Real strategies for read-through, write-through, and cache-aside patterns.",
      image: "/blog-images/redis-caching.svg"
    },
    {
      title: "System Design for High-Scale Backend Services",
      href: "https://medium.com/@raaulc/system-design-backend-services",
      date: "2024-08-20",
      summary: "Comprehensive guide to designing scalable backend systems with practical patterns for high-concurrency applications, covering architecture decisions, trade-offs, and real-world implementation strategies.",
      image: "/blog-images/system-design.svg"
    }
  ],
  likesBuilding: "I like building scalable backend systems, high-performance APIs, and distributed services that handle millions of transactions with production rigor and observability.",
  contactDetails: {
    email: "raaulc@outlook.com",
    tel: "+44-7424939000"
  },
  youtube: [
    {
      title: "Microservices Architecture",
      description: "Building Scalable Backend Systems",
      thumbnail: "/placeholder-product.jpg",
      url: "https://www.youtube.com/watch?v=0Mzft2Kcev0",
      date: "2024-01-01"
    }
  ],
} as const;
