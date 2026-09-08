import Css from "../app/components/icons/Css";
import HtmlLogo from "../app/components/icons/HtmlLogo";
import Mongo from "../app/components/icons/Mongo";
import Next from "../app/components/icons/Next";
import Stripe from "../app/components/icons/Stripe";
import Tailwind from "../app/components/icons/Tailwind";
import LogoJavaScript from "../app/components/icons/LogoJavaScript";
import ViteIcon from "../app/components/icons/ViteIcon";
import SocketIoIcon from "../app/components/icons/SocketIoIcon";
import TypeScripIcon from "../app/components/icons/TypeScripIcon";
import Java from "../app/components/icons/Java";
import mysqlLogo from "../app/components/icons/mysqlLogo";

import ReactIcon from "../app/components/icons/React";
import Github from "../app/components/icons/Github";
import Python from "../app/components/icons/Python";
import Flutter from "../app/components/icons/Flutter";
import Figma from "../app/components/icons/Figma";

import {
  Database,
  Cloud,
  Zap,
  Cpu,
  Layers,
  HardDrive,
  Server,
  Box,
  Trello,
  FileSpreadsheet,
  BarChart,
  Users,
  Globe,
  Layout,
  Terminal,
  Brain,
  Network,
  Eye,
  MessageSquare,
  LineChart,
  Workflow,
  Sparkles,
  BookOpen,
  Container,
  GitBranch
} from "lucide-react";
import { ConfigType } from "@/types";

export const CONFIG: ConfigType = {
  en: {
    softwareEngineer: {
      name: "Anthony J. Torres",
      title: "Full Stack (MERN) - Software Engineer",
      bio: "Full-stack developer specialized in the MERN stack (MongoDB, Express, React, Node.js) with TypeScript and Next.js. I build responsive, scalable web applications following clean architecture principles — from polished UIs to robust APIs. Passionate about performance optimization, I turn complex requirements into intuitive digital experiences.",
      projects: [
        {
          title: "Chat App",
          subtitle: "ChatMe",
          role: "Full Stack",
          tech: [Next, Tailwind, LogoJavaScript, SocketIoIcon, ViteIcon],
          img: "/chatMe.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://chatme-fxip.onrender.com"
        },
        {
          title: "Auth Page",
          subtitle: "Pyyes - Auth",
          role: "Full Stack",
          tech: [Next, TypeScripIcon, Mongo, Tailwind],
          img: "/authpyyes.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://authpyees.vercel.app"
        },
        {
          title: "Ordering App",
          subtitle: "Pyyes - Bakery",
          role: "Full Stack",
          tech: [Next, Mongo, Tailwind, Stripe],
          img: "/pyyesProject.png",
          urlRepository: "https://github.com/Jhan24b/Pyyes",
          urlProduction: "https://pyyes.vercel.app"
        }
      ],
      desktopProjects: [
        {
          title: "Minimarket Management System",
          tech: [Java, mysqlLogo],
          img: "/minimarketSystem.png",
          Arquitectura: "MVC",
          description:
            "This system allows inventory management, sales control, and order tracking effectively.",
          status: "Sold",
          caracteristicas: [
            "Inventory Management",
            "Sales Management",
            "Purchasing Management"
          ]
        }
      ],
      skills: [
        {
          category: "Programming Languages & Frameworks",
          items: [
            {
              name: "Java",
              icon: Java,
              years: "3 years",
              level: "Intermediate"
            },
            {
              name: "Python",
              icon: Python,
              years: "3 years",
              level: "Intermediate"
            },
            {
              name: "JavaScript",
              icon: LogoJavaScript,
              years: "3 years",
              level: "Intermediate"
            },
            {
              name: "ReactJS",
              icon: ReactIcon,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "TypeScript",
              icon: TypeScripIcon,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "Flutter",
              icon: Flutter,
              years: "1 year",
              level: "Intermediate"
            }
          ]
        },
        {
          category: "Agile Methodologies",
          items: [
            { name: "Scrum", icon: Users },
            { name: "Kanban", icon: Trello }
          ]
        },
        {
          category: "Technologies",
          items: [
            { name: "HTML", icon: HtmlLogo },
            { name: "CSS", icon: Css },
            { name: "SCSS", icon: Css },
            { name: "Redux", icon: Box },
            { name: "Tailwind", icon: Tailwind },
            { name: "Node.js", icon: Server },
            { name: "Express", icon: Server },
            { name: "Socket.io", icon: SocketIoIcon },
            { name: "SQL (MySQL)", icon: mysqlLogo },
            { name: "NoSQL (MongoDB)", icon: Mongo },
            { name: "Git/GitHub", icon: Github },
            { name: "Stripe", icon: Stripe },
            { name: "Postman", icon: Globe },
            { name: "AWS (S3 - Lambda)", icon: Cloud },
            { name: "NextJS", icon: Next },
            { name: "Webpack", icon: Box },
            { name: "Shadcn", icon: Layout },
            { name: "MaterialUI", icon: Layout }
          ]
        },
        {
          category: "Tools",
          items: [
            { name: "Excel", icon: FileSpreadsheet, level: "Intermediate" },
            { name: "Power BI", icon: BarChart, level: "Intermediate" },
            { name: "Figma", icon: Figma },
            { name: "Trello", icon: Trello }
          ]
        }
      ]
    },
    dataEngineer: {
      name: "Anthony J. Torres",
      title: "Data Engineer - Cloud & Infrastructure",
      bio: "Data engineer specialized in cloud infrastructure and distributed systems — I design scalable ETL pipelines, data warehouses, and real-time streaming architectures using Azure, AWS, Spark, and Databricks. From data ingestion to query optimization, I build the infrastructure that turns raw data into strategic decisions.",
      projects: [
        {
          title: "Telecom Data Pipeline at Scale",
          subtitle: "DigitalRoute MediationZone (UEPE) + Databricks Multi-Node",
          role: "Data Engineer",
          tech: [Database, Layers, Cloud],
          img: "/telecom-pipeline.png", // crea un diagrama simple en Figma/Excalidraw, no screenshot de datos reales
          Arquitectura:
            "Multi-stage: Cleansing (UEPE) → Curated (Databricks/PySpark)",
          description:
            "Designed and operated a multi-stage telecom data pipeline: large-scale cleaning and profiling of ~15TB of daily data using DigitalRoute MediationZone (UEPE) across concurrent nodes, then processing the resulting 1-2TB of curated output via multi-node Databricks/PySpark for analytics, reporting, and ML-readiness.",
          urlRepository: "#", // proprietary — no repo público por confidencialidad
          urlProduction: "#",
          status: "En producción (caso de estudio, código propietario)",
          caracteristicas: [
            "Multi-Node Processing",
            "15TB/day Data Cleansing",
            "ML-Ready Curated Output"
          ]
        },
        {
          title: "Telecom Churn ETL Pipeline",
          subtitle: "dbt + Airflow + PySpark (Open Source Demo)",
          role: "Data Engineer",
          tech: [Workflow, Database, GitBranch],
          img: "/churn-pipeline.png",
          Arquitectura:
            "Medallion (Bronze → Silver → Gold) orchestrated with Airflow",
          description:
            "End-to-end pipeline built on a public telecom churn dataset: ingestion and transformation modeled with dbt (tests + documentation), orchestrated via Airflow DAGs, with PySpark handling heavier transformations. Loaded into a Postgres/BigQuery sandbox with a lightweight dashboard for churn analysis.",
          urlRepository: "https://github.com/Jhan24b/telecom-churn-pipeline",
          urlProduction: "#",
          status: "En desarrollo",
          caracteristicas: [
            "dbt Models & Tests",
            "Airflow Orchestration",
            "Medallion Architecture"
          ]
        }
      ],
      desktopProjects: [],
      skills: [
        {
          category: "Technologies",
          items: [
            { name: "PySpark", icon: Zap },
            { name: "SQL (PostgreSQL, SparkSQL)", icon: Database },
            { name: "NoSQL (MongoDB, DynamoDB)", icon: Mongo },
            { name: "Git", icon: Github },
            { name: "Postman", icon: Globe },
            { name: "AWS Services", icon: Cloud },
            { name: "Azure", icon: Cloud },
            { name: "Shell Scripting", icon: Terminal },
            { name: "CI/CD", icon: Box },
            { name: "Spark", icon: Zap }
          ]
        },
        {
          category: "Tools",
          items: [
            { name: "Databricks", icon: Layers },
            { name: "Mediationzone", icon: Box },
            { name: "UEPE", icon: Box },
            { name: "Excel", icon: FileSpreadsheet, level: "Intermediate" },
            { name: "Power BI", icon: BarChart, level: "Intermediate" },
            { name: "Figma", icon: Figma },
            { name: "Trello", icon: Trello },
            { name: "Linux", icon: Terminal }
          ]
        }
      ]
    },
    aiMLEngineer: {
      name: "Anthony J. Torres",
      title: "AI/ML Engineer - Deep Learning & Neural Architectures",
      bio: "AI/ML engineer covering the full ML lifecycle — from feature engineering and model training (TensorFlow, PyTorch, scikit-learn) to production deployment and monitoring. I specialize in NLP, LLM fine-tuning, RAG architectures, computer vision, and time series forecasting. Beyond the algorithms, I bring MLOps rigor: reproducible experiments, model versioning, and responsible AI.",
      projects: [
        {
          title: "Document Q&A Assistant",
          subtitle: "RAG Pipeline with Claude API",
          role: "AI Engineer",
          tech: [Python, Layers, Workflow],
          img: "/rag-project.png",
          Arquitectura: "Retrieval-Augmented Generation",
          description:
            "Built a retrieval-augmented question-answering assistant using the Claude API combined with a vector database (Chroma/FAISS) for semantic search over technical documents, enabling context-aware answers grounded in source material.",
          urlRepository: "https://github.com/Jhan24b/rag-claude-assistant",
          urlProduction: "#",
          status: "En desarrollo (pulido para demo)",
          caracteristicas: [
            "Claude API Integration",
            "Semantic Search",
            "Context-aware Q&A"
          ]
        },
        {
          title: "Churn Prediction Model",
          subtitle: "Classical ML on Curated Telecom Data",
          role: "ML Engineer",
          tech: [Python, LineChart, Database],
          img: "/churn-model.png",
          Arquitectura: "Classical ML (scikit-learn)",
          description:
            "Built and evaluated a churn prediction model on the curated output of the telecom ETL pipeline, comparing multiple classical models and documenting real evaluation metrics (accuracy, F1, precision/recall) rather than a single headline number.",
          urlRepository: "https://github.com/Jhan24b/telecom-churn-model",
          urlProduction: "#",
          status: "Planificado",
          caracteristicas: [
            "Feature Engineering",
            "Model Comparison",
            "Documented Evaluation Metrics"
          ]
        }
      ],
      desktopProjects: [],
      skills: [
        {
          category: "AI & ML Frameworks",
          items: [
            {
              name: "TensorFlow",
              icon: Brain,
              years: "2 years",
              level: "Advanced"
            },
            { name: "PyTorch", icon: Cpu, years: "2 years", level: "Advanced" },
            {
              name: "scikit-learn",
              icon: Layers,
              years: "3 years",
              level: "Advanced"
            },
            {
              name: "Keras",
              icon: Brain,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "Hugging Face",
              icon: BookOpen,
              years: "1 year",
              level: "Intermediate"
            },
            {
              name: "LangChain",
              icon: Workflow,
              years: "1 year",
              level: "Intermediate"
            }
          ]
        },
        {
          category: "Programming & Data",
          items: [
            {
              name: "Python",
              icon: Python,
              years: "3 years",
              level: "Advanced"
            },
            {
              name: "R",
              icon: BarChart,
              years: "1 year",
              level: "Intermediate"
            },
            {
              name: "SQL",
              icon: Database,
              years: "3 years",
              level: "Intermediate"
            },
            {
              name: "Pandas",
              icon: FileSpreadsheet,
              years: "3 years",
              level: "Advanced"
            },
            { name: "NumPy", icon: Box, years: "3 years", level: "Advanced" },
            {
              name: "Spark",
              icon: Zap,
              years: "2 years",
              level: "Intermediate"
            }
          ]
        },
        {
          category: "MLOps & Deployment",
          items: [
            {
              name: "Docker",
              icon: Container,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "MLflow",
              icon: LineChart,
              years: "1 year",
              level: "Intermediate"
            },
            {
              name: "AWS SageMaker",
              icon: Cloud,
              years: "1 year",
              level: "Intermediate"
            },
            {
              name: "FastAPI",
              icon: Zap,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "Git",
              icon: GitBranch,
              years: "3 years",
              level: "Advanced"
            },
            {
              name: "CI/CD",
              icon: Workflow,
              years: "2 years",
              level: "Intermediate"
            }
          ]
        },
        {
          category: "Specializations",
          items: [
            {
              name: "NLP & LLMs",
              icon: MessageSquare,
              years: "1 year",
              level: "Intermediate"
            },
            {
              name: "Computer Vision",
              icon: Eye,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "Time Series",
              icon: LineChart,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "Deep Learning",
              icon: Network,
              years: "2 years",
              level: "Intermediate"
            },
            {
              name: "Feature Engineering",
              icon: Sparkles,
              years: "3 years",
              level: "Advanced"
            },
            {
              name: "Model Optimization",
              icon: Cpu,
              years: "2 years",
              level: "Intermediate"
            }
          ]
        }
      ]
    }
  },
  es: {
    softwareEngineer: {
      name: "Anthony J. Torres",
      title: "Full Stack (MERN) - Ingeniero de Software",
      bio: "Desarrollador full-stack especializado en el stack MERN (MongoDB, Express, React, Node.js) con TypeScript y Next.js. Construyo aplicaciones web responsivas y escalables siguiendo principios de arquitectura limpia — desde UIs pulidas hasta APIs robustas. Apasionado por la optimización de rendimiento, convierto requerimientos complejos en experiencias digitales intuitivas. ¿Buscas un desarrollador que entregue código de calidad y resuelva problemas reales? Hablemos.",
      projects: [
        {
          title: "Chat App",
          subtitle: "ChatMe",
          role: "Full Stack",
          tech: [Next, Tailwind, LogoJavaScript, SocketIoIcon, ViteIcon],
          img: "/chatMe.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://chatme-fxip.onrender.com"
        },
        {
          title: "Auth Page",
          subtitle: "Pyyes - Auth",
          role: "Full Stack",
          tech: [Next, TypeScripIcon, Mongo, Tailwind],
          img: "/authpyyes.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://authpyees.vercel.app"
        },
        {
          title: "Ordering App",
          subtitle: "Pyyes - Bakery",
          role: "Full Stack",
          tech: [Next, Mongo, Tailwind, Stripe],
          img: "/pyyesProject.png",
          urlRepository: "https://github.com/Jhan24b/Pyyes",
          urlProduction: "https://pyyes.vercel.app"
        }
      ],
      desktopProjects: [
        {
          title: "Sistema para Gestion de Minimarket",
          tech: [Java, mysqlLogo],
          img: "/minimarketSystem.png",
          Arquitectura: "MVC",
          description:
            "Este sistema permite la gestión de inventarios, control de ventas, y seguimiento de pedidos de manera efectiva.",
          status: "Vendido",
          caracteristicas: [
            "Gestion de Inventarios",
            "Gestion de Ventas",
            "Gestion de Compras"
          ]
        }
      ],
      skills: [
        {
          category: "Lenguajes de Programación y Frameworks",
          items: [
            { name: "Java", icon: Java, years: "3 años", level: "Intermedio" },
            {
              name: "Python",
              icon: Python,
              years: "3 años",
              level: "Intermedio"
            },
            {
              name: "JavaScript",
              icon: LogoJavaScript,
              years: "3 años",
              level: "Intermedio"
            },
            {
              name: "ReactJS",
              icon: ReactIcon,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "TypeScript",
              icon: TypeScripIcon,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "Flutter",
              icon: Flutter,
              years: "1 año",
              level: "Intermedio"
            }
          ]
        },
        {
          category: "Metodologías Ágiles",
          items: [
            { name: "Scrum", icon: Users },
            { name: "Kanban", icon: Trello }
          ]
        },
        {
          category: "Tecnologías",
          items: [
            { name: "HTML", icon: HtmlLogo },
            { name: "CSS", icon: Css },
            { name: "SCSS", icon: Css },
            { name: "Redux", icon: Box },
            { name: "Tailwind", icon: Tailwind },
            { name: "Node.js", icon: Server },
            { name: "Express", icon: Server },
            { name: "Socket.io", icon: SocketIoIcon },
            { name: "SQL (MySql)", icon: mysqlLogo },
            { name: "NoSql (MongoDB)", icon: Mongo },
            { name: "GitHub/Git", icon: Github },
            { name: "Stripe", icon: Stripe },
            { name: "Postman", icon: Globe },
            { name: "AWS (s3 - Lambda)", icon: Cloud },
            { name: "NextJS", icon: Next },
            { name: "Webpack", icon: Box },
            { name: "Shadcn", icon: Layout },
            { name: "MaterialUI", icon: Layout }
          ]
        },
        {
          category: "Herramientas",
          items: [
            { name: "Excel", icon: FileSpreadsheet, level: "Nivel Intermedio" },
            { name: "Power BI", icon: BarChart, level: "Nivel Intermedio" },
            { name: "Figma", icon: Figma },
            { name: "Trello", icon: Trello }
          ]
        }
      ]
    },
    dataEngineer: {
      name: "Anthony J. Torres",
      title: "Ingeniero de Datos - Nube e Infraestructura",
      bio: "Ingeniero de datos especializado en infraestructura cloud y sistemas distribuidos — diseño pipelines ETL escalables, data warehouses y arquitecturas de streaming en tiempo real usando Azure, AWS, Spark y Databricks. Desde la ingesta de datos hasta la optimización de consultas, construyo la infraestructura que convierte datos en decisiones estratégicas. ¿Necesitas datos confiables a escala? Yo lo hago posible.",
      projects: [
        {
          title: "Pipeline de Big Data",
          subtitle: "ETL impulsado por Spark",
          role: "Ingeniero de Datos",
          tech: [Zap, Database, Layers],
          img: "/data-img1.jpg",
          Arquitectura: "Medallion (Bronze, Silver, Gold)",
          description:
            "Implementación de un pipeline ETL distribuido procesando TBs de datos diarios usando Apache Spark y Databricks, asegurando la calidad y el linaje de los datos.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: [
            "Procesamiento Distribuido",
            "Clusters con Auto-escalado",
            "Validación de Calidad de Datos"
          ]
        },
        {
          title: "Almacén de Datos en la Nube",
          subtitle: "Arquitectura Azure Synapse",
          role: "Arquitecto de Datos",
          tech: [Cloud, HardDrive, Cpu],
          img: "/data-img2.jpg",
          Arquitectura: "Hub-and-Spoke",
          description:
            "Diseño y despliegue de un Data Warehouse en Azure, optimizando costos y rendimiento de consultas mediante estrategias de particionamiento e indexación.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: [
            "Optimización de Consultas",
            "Gestión de Costos",
            "Modelado de Esquemas"
          ]
        },
        {
          title: "Streaming en Tiempo Real",
          subtitle: "AWS Kinesis y Lambda",
          role: "Ingeniero de Datos",
          tech: [Cloud, Zap, Database],
          img: "/data-img3.jpg",
          Arquitectura: "Arquitectura Kappa",
          description:
            "Arquitectura serverless para el procesamiento de eventos en tiempo real con AWS Kinesis, Lambda y DynamoDB, logrando latencias inferiores al segundo.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: [
            "Baja Latencia",
            "Basado en Eventos",
            "Infraestructura Serverless"
          ]
        }
      ],
      desktopProjects: [],
      skills: [
        {
          category: "Tecnologías",
          items: [
            { name: "PySpark", icon: Zap },
            { name: "SQL (PostgreSQL, SparkSQL)", icon: Database },
            { name: "NoSQL (MongoDB, DynamoDB)", icon: Mongo },
            { name: "Git", icon: Github },
            { name: "Postman", icon: Globe },
            { name: "AWS Services", icon: Cloud },
            { name: "Azure", icon: Cloud },
            { name: "Shell Scripting", icon: Terminal },
            { name: "CI/CD", icon: Box },
            { name: "Spark", icon: Zap }
          ]
        },
        {
          category: "Herramientas",
          items: [
            { name: "Databricks", icon: Layers },
            { name: "Mediationzone", icon: Box },
            { name: "UEPE", icon: Box },
            { name: "Excel", icon: FileSpreadsheet, level: "Nivel Intermedio" },
            { name: "Power BI", icon: BarChart, level: "Nivel Intermedio" },
            { name: "Figma", icon: Figma },
            { name: "Trello", icon: Trello },
            { name: "Linux", icon: Terminal }
          ]
        }
      ]
    },
    aiMLEngineer: {
      name: "Anthony J. Torres",
      title: "Ingeniero en IA/ML - Deep Learning & Arquitecturas Neuronales",
      bio: "Ingeniero en IA/ML que cubre el ciclo de vida completo del ML — desde feature engineering y entrenamiento de modelos (TensorFlow, PyTorch, scikit-learn) hasta despliegue y monitoreo en producción. Me especializo en NLP, fine-tuning de LLMs, arquitecturas RAG, visión por computadora y predicción de series temporales. Más allá de los algoritmos, aplico rigor de MLOps: experimentos reproducibles, versionado de modelos e IA responsable. ¿Buscas construir sistemas inteligentes que realmente entreguen valor? Soy el ingeniero que necesitas.",
      projects: [
        {
          title: "Neural Compass",
          subtitle: "RAG & Fine-tuning de LLMs",
          role: "Ingeniero de IA",
          tech: [Python, Layers, Workflow, Zap],
          img: "/ai-project1.jpg",
          Arquitectura: "Generación Aumentada por Recuperación",
          description:
            "Ajusté LLaMA-2 usando LoRA y construí un pipeline RAG con LangChain, ChromaDB y embeddings de OpenAI para consultas inteligentes sobre manuales técnicos.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: [
            "Fine-tuning de LLMs",
            "Búsqueda Semántica",
            "Q&A Contextual"
          ]
        },
        {
          title: "Deep Space Vision",
          subtitle: "IA para Imágenes Satelitales",
          role: "Ingeniero de ML",
          tech: [Eye, Cpu, Layers, Python],
          img: "/ai-project2.jpg",
          Arquitectura: "Red Neuronal Convolucional",
          description:
            "Diseñé y desplegué un sistema de detección de objetos basado en YOLOv8 para análisis de imágenes satelitales, alcanzando 94% mAP en dataset personalizado con inferencia en tiempo real mediante FastAPI.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: [
            "Detección en Tiempo Real",
            "Transfer Learning",
            "Cuantización de Modelos"
          ]
        },
        {
          title: "AstraPredict",
          subtitle: "Predicción de Series Temporales",
          role: "Ingeniero en IA/ML",
          tech: [LineChart, Database, Cloud, Python],
          img: "/ai-project3.jpg",
          Arquitectura: "Encoder-Decoder LSTM",
          description:
            "Construí un motor de predicción de telemetría usando métodos ensemble (Prophet + LSTM) para detección de anomalías en datos de sensores espaciales, reduciendo falsos positivos en un 60%.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: [
            "Detección de Anomalías",
            "Modelado Ensemble",
            "Pipeline AutoML"
          ]
        }
      ],
      desktopProjects: [],
      skills: [
        {
          category: "Frameworks de IA y ML",
          items: [
            {
              name: "TensorFlow",
              icon: Brain,
              years: "2 años",
              level: "Avanzado"
            },
            { name: "PyTorch", icon: Cpu, years: "2 años", level: "Avanzado" },
            {
              name: "scikit-learn",
              icon: Layers,
              years: "3 años",
              level: "Avanzado"
            },
            {
              name: "Keras",
              icon: Brain,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "Hugging Face",
              icon: BookOpen,
              years: "1 año",
              level: "Intermedio"
            },
            {
              name: "LangChain",
              icon: Workflow,
              years: "1 año",
              level: "Intermedio"
            }
          ]
        },
        {
          category: "Programación y Datos",
          items: [
            {
              name: "Python",
              icon: Python,
              years: "3 años",
              level: "Avanzado"
            },
            { name: "R", icon: BarChart, years: "1 año", level: "Intermedio" },
            {
              name: "SQL",
              icon: Database,
              years: "3 años",
              level: "Intermedio"
            },
            {
              name: "Pandas",
              icon: FileSpreadsheet,
              years: "3 años",
              level: "Avanzado"
            },
            { name: "NumPy", icon: Box, years: "3 años", level: "Avanzado" },
            { name: "Spark", icon: Zap, years: "2 años", level: "Intermedio" }
          ]
        },
        {
          category: "MLOps y Despliegue",
          items: [
            {
              name: "Docker",
              icon: Container,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "MLflow",
              icon: LineChart,
              years: "1 año",
              level: "Intermedio"
            },
            {
              name: "AWS SageMaker",
              icon: Cloud,
              years: "1 año",
              level: "Intermedio"
            },
            {
              name: "FastAPI",
              icon: Zap,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "Git",
              icon: GitBranch,
              years: "3 años",
              level: "Avanzado"
            },
            {
              name: "CI/CD",
              icon: Workflow,
              years: "2 años",
              level: "Intermedio"
            }
          ]
        },
        {
          category: "Especializaciones",
          items: [
            {
              name: "NLP y LLMs",
              icon: MessageSquare,
              years: "1 año",
              level: "Intermedio"
            },
            {
              name: "Visión por Computadora",
              icon: Eye,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "Series Temporales",
              icon: LineChart,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "Deep Learning",
              icon: Network,
              years: "2 años",
              level: "Intermedio"
            },
            {
              name: "Feature Engineering",
              icon: Sparkles,
              years: "3 años",
              level: "Avanzado"
            },
            {
              name: "Optimización de Modelos",
              icon: Cpu,
              years: "2 años",
              level: "Intermedio"
            }
          ]
        }
      ]
    }
  }
};
