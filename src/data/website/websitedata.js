// src/data/website/websitedata.js
const websiteData = {
  development: {
    title: "Development Portfolio",
    description: "Explore my technical projects across web development, systems, and applications",
    categories: [
      {
        id: "web-dev",
        name: "Web Development",
        description: "Full-stack web applications and sites",
        projects: [

            {
            id: "Grains Export/Import Website",
            title: "Grains Export/Import Website",
            description: "Complete website for a grains export/import business, featuring product listings, and contact forms",
            year: "2024",
            client: "Retail Startup",
            technologies: ["React", "Node.js"],
            liveUrl: "https://vittoriostrades.com/",
            githubUrl: "https://github.com/username/ecommerce-platform",
            images: [
              "/images/websites/vittorios.webp",
              "/images/websites/vittorios1.jpeg",
              "/images/websites/vittorios2.jpeg"
            ],
            features: [
              "Payment processing with Stripe integration",
              "Real-time inventory management",
              "User authentication & authorization",
              "Responsive design for all devices",
              "Admin dashboard for product management"
            ]
          },

          {
            id: "ecommerce-platform",
            title: "Full-Stack E-commerce Platform",
            description: "Complete e-commerce solution with user accounts, payment processing, inventory management, and admin dashboard",
            year: "2024",
            client: "Retail Startup",
            technologies: ["React", "Node.js", "MongoDB", "Redux", "Express"],
            liveUrl: "https://adit-investment.netlify.app/",
            githubUrl: "https://github.com/username/ecommerce-platform",
            images: [
              "/images/websites/adit-admin.png",
              "/images/websites/adit-products.png",
              "/images/websites/adit-phone-view.jpeg"
            ],
            features: [
              "Payment processing with Stripe integration",
              "Real-time inventory management",
              "User authentication & authorization",
              "Responsive design for all devices",
              "Admin dashboard for product management"
            ]
          },

          
          
          {
            id: "real-time-chat",
            title: "Real-time Chat Application",
            description: "WebSocket-based messaging platform with rooms, file sharing, and real-time notifications",
            year: "2024",
            client: "Tech Company",
            technologies: ["Socket.io", "React", "Express", "JWT", "MongoDB"],
            liveUrl: "https://chat.example.com",
            githubUrl: "https://github.com/username/chat-app",
            images: [
              "/projects/chat/main.jpg",
              "/projects/chat/rooms.jpg",
              "/projects/chat/mobile.jpg"
            ],
            features: [
              "Real-time messaging with WebSockets",
              "File upload and sharing",
              "Multiple chat rooms",
              "User presence indicators",
              "Message history"
            ]
          },
          {
            id: "saas-analytics",
            title: "SaaS Analytics Dashboard",
            description: "Business intelligence dashboard with data visualization, user management, and reporting features",
            year: "2023",
            client: "Enterprise Client",
            technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL", "Tailwind"],
            liveUrl: "https://analytics.example.com",
            githubUrl: "https://github.com/username/saas-dashboard",
            images: [
              "/projects/saas/dashboard.jpg",
              "/projects/saas/reports.jpg",
              "/projects/saas/settings.jpg"
            ],
            features: [
              "Interactive data visualizations",
              "Custom reporting engine",
              "User role management",
              "Data export functionality",
              "Real-time updates"
            ]
          }
        ]
      },
      {
        id: "system-dev",
        name: "System Development",
        description: "Backend systems, APIs, and infrastructure",
        projects: [
          {
            id: "api-gateway",
            title: "API Gateway & Microservices",
            description: "Scalable microservices architecture with API gateway, service discovery, and load balancing",
            year: "2024",
            client: "Financial Institution",
            technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "Nginx"],
            githubUrl: "https://github.com/username/api-gateway",
            images: [
              "/projects/api/architecture.jpg",
              "/projects/api/dashboard.jpg"
            ],
            features: [
              "Request routing and load balancing",
              "Authentication and authorization",
              "Rate limiting and caching",
              "Service discovery",
              "Health monitoring"
            ]
          },
          {
            id: "data-pipeline",
            title: "Data Processing Pipeline",
            description: "ETL pipeline for processing large datasets with real-time analytics and reporting",
            year: "2023",
            client: "Data Analytics Company",
            technologies: ["Python", "Apache Kafka", "PostgreSQL", "Redis", "Docker"],
            githubUrl: "https://github.com/username/data-pipeline",
            images: [
              "/projects/data-pipeline/flow.jpg",
              "/projects/data-pipeline/monitoring.jpg"
            ],
            features: [
              "Real-time data ingestion",
              "Batch processing capabilities",
              "Data validation and cleansing",
              "Performance monitoring",
              "Scalable architecture"
            ]
          }
        ]
      },
      {
        id: "mobile-apps",
        name: "Mobile Applications",
        description: "Cross-platform mobile applications",
        projects: [
          {
            id: "task-manager",
            title: "Cross-platform Task Manager",
            description: "Productivity app with task management, reminders, and team collaboration features",
            year: "2024",
            client: "Productivity Startup",
            technologies: ["React Native", "Redux", "Firebase", "Push Notifications"],
            appStoreUrl: "https://apps.apple.com/app/id123456",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.taskmanager",
            githubUrl: "https://github.com/username/task-manager",
            images: [
              "/projects/mobile/tasks.jpg",
              "/projects/mobile/teams.jpg",
              "/projects/mobile/stats.jpg"
            ],
            features: [
              "Offline-first architecture",
              "Real-time synchronization",
              "Push notifications",
              "Team collaboration",
              "Progress tracking"
            ]
          }
        ]
      },
      {
        id: "devops",
        name: "DevOps & Infrastructure",
        description: "CI/CD, deployment, and cloud infrastructure",
        projects: [
          {
            id: "ci-cd-pipeline",
            title: "CI/CD Pipeline Automation",
            description: "Automated deployment pipeline with testing, building, and deployment to cloud infrastructure",
            year: "2024",
            client: "Multiple Clients",
            technologies: ["GitHub Actions", "Docker", "AWS", "Terraform", "Kubernetes"],
            githubUrl: "https://github.com/username/ci-cd-pipeline",
            images: [
              "/projects/devops/pipeline.jpg",
              "/projects/devops/monitoring.jpg"
            ],
            features: [
              "Automated testing and deployment",
              "Infrastructure as Code",
              "Environment management",
              "Monitoring and alerts",
              "Rollback capabilities"
            ]
          }
        ]
      }
    ]
  }
};

export default websiteData;