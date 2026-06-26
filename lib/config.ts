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

import { Database, Cloud, Zap, Cpu, Layers, HardDrive, Server, Box, Trello, FileSpreadsheet, BarChart, Users, Globe, Layout, Terminal, Code2, Brain, Network, Eye, MessageSquare, LineChart, Workflow, Sparkles, BookOpen, Container, GitBranch } from 'lucide-react';
import { ConfigType } from "@/types";

export const CONFIG: ConfigType = {
  en: {
    softwareEngineer: {
      name: "Anthony J. Torres",
      title: "Full Stack (MERN) - Software Engineer",
      bio: "Greetings! I am a passionate Systems and Informatics Engineering student at UTP. My fascination with technology and programming has led me to specialize in software development.",
      projects: [
        {
          title: "Chat App",
          subtitle: "ChatMe",
          role: "Full Stack",
          tech: [Next, Tailwind, LogoJavaScript, SocketIoIcon, ViteIcon],
          img: "/chatMe.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://chatme-fxip.onrender.com",
        },
        {
          title: "Auth Page",
          subtitle: "Pyyes - Auth",
          role: "Full Stack",
          tech: [Next, TypeScripIcon, Mongo, Tailwind],
          img: "/authpyyes.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://authpyees.vercel.app",
        },
        {
          title: "Ordering App",
          subtitle: "Pyyes - Bakery",
          role: "Full Stack",
          tech: [Next, Mongo, Tailwind, Stripe],
          img: "/pyyesProject.png",
          urlRepository: "https://github.com/Jhan24b/Pyyes",
          urlProduction: "https://pyyes.vercel.app",
        }
      ],
      desktopProjects: [
        {
          title: "Minimarket Management System",
          tech: [Java, mysqlLogo],
          img: "/minimarketSystem.png",
          Arquitectura: "MVC",
          description: "This system allows inventory management, sales control, and order tracking effectively.",
          status: "Sold",
          caracteristicas: ["Inventory Management", "Sales Management", "Purchasing Management"]
        }
      ],
      skills: [
        {
          category: "Programming Languages & Frameworks",
          items: [
            { name: "Java", icon: Java, years: "3 years", level: "Intermediate" },
            { name: "Python", icon: Python, years: "3 years", level: "Intermediate" },
            { name: "JavaScript", icon: LogoJavaScript, years: "3 years", level: "Intermediate" },
            { name: "ReactJS", icon: ReactIcon, years: "2 years", level: "Intermediate" },
            { name: "TypeScript", icon: TypeScripIcon, years: "2 years", level: "Intermediate" },
            { name: "Flutter", icon: Flutter, years: "1 year", level: "Intermediate" }
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
      bio: "Specialized in building scalable data pipelines and robust architectures. Passionate about transforming raw data into actionable insights using cutting-edge cloud technologies.",
      projects: [
        {
          title: "Big Data Pipeline",
          subtitle: "Spark-Driven ETL",
          role: "Data Engineer",
          tech: [Zap, Database, Layers],
          img: "/data-img1.jpg",
          Arquitectura: "Medallion (Bronze, Silver, Gold)",
          description: "Implementation of a distributed ETL pipeline processing TBs of daily data using Apache Spark and Databricks, ensuring data quality and lineage.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Distributed Processing", "Auto-scaling Clusters", "Data Quality Validation"]
        },
        {
          title: "Cloud Data Warehouse",
          subtitle: "Azure Synapse Architecture",
          role: "Data Architect",
          tech: [Cloud, HardDrive, Cpu],
          img: "/data-img2.jpg",
          Arquitectura: "Hub-and-Spoke",
          description: "Design and deployment of a Data Warehouse in Azure, optimizing costs and query performance through partitioning and indexing strategies.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Query Optimization", "Cost Management", "Schema Modeling"]
        },
        {
          title: "Real-time Streaming",
          subtitle: "AWS Kinesis & Lambda",
          role: "Data Engineer",
          tech: [Cloud, Zap, Database],
          img: "/data-img3.jpg",
          Arquitectura: "Kappa Architecture",
          description: "Serverless architecture for real-time event processing with AWS Kinesis, Lambda, and DynamoDB, achieving sub-second latency.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Low Latency", "Event-Driven", "Serverless Infrastructure"]
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
      bio: "Passionate about building intelligent systems that learn and evolve. Experienced in developing end-to-end ML pipelines, from data ingestion and feature engineering to model deployment and monitoring. Focused on creating AI solutions that push the boundaries of automation and cognition.",
      projects: [
        {
          title: "Neural Compass",
          subtitle: "RAG & LLM Fine-tuning",
          role: "AI Engineer",
          tech: [Python, Layers, Workflow, Zap],
          img: "/ai-project1.jpg",
          Arquitectura: "Retrieval-Augmented Generation",
          description: "Fine-tuned LLaMA-2 using LoRA and built a RAG pipeline with LangChain, ChromaDB, and OpenAI embeddings for intelligent document querying over technical manuals.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["LLM Fine-tuning", "Semantic Search", "Context-aware Q&A"]
        },
        {
          title: "Deep Space Vision",
          subtitle: "Satellite Imagery AI",
          role: "ML Engineer",
          tech: [Eye, Cpu, Layers, Python],
          img: "/ai-project2.jpg",
          Arquitectura: "Convolutional Neural Network",
          description: "Designed and deployed a YOLOv8-based object detection system for satellite imagery analysis, achieving 94% mAP on custom dataset with real-time inference via FastAPI.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Real-time Detection", "Transfer Learning", "Model Quantization"]
        },
        {
          title: "AstraPredict",
          subtitle: "Time Series Forecasting",
          role: "AI/ML Engineer",
          tech: [LineChart, Database, Cloud, Python],
          img: "/ai-project3.jpg",
          Arquitectura: "Encoder-Decoder LSTM",
          description: "Built a telemetry prediction engine using ensemble methods (Prophet + LSTM) for anomaly detection in spacecraft sensor data, reducing false positives by 60%.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Anomaly Detection", "Ensemble Modeling", "AutoML Pipeline"]
        }
      ],
      desktopProjects: [],
      skills: [
        {
          category: "AI & ML Frameworks",
          items: [
            { name: "TensorFlow", icon: Brain, years: "2 years", level: "Advanced" },
            { name: "PyTorch", icon: Cpu, years: "2 years", level: "Advanced" },
            { name: "scikit-learn", icon: Layers, years: "3 years", level: "Advanced" },
            { name: "Keras", icon: Brain, years: "2 years", level: "Intermediate" },
            { name: "Hugging Face", icon: BookOpen, years: "1 year", level: "Intermediate" },
            { name: "LangChain", icon: Workflow, years: "1 year", level: "Intermediate" }
          ]
        },
        {
          category: "Programming & Data",
          items: [
            { name: "Python", icon: Python, years: "3 years", level: "Advanced" },
            { name: "R", icon: BarChart, years: "1 year", level: "Intermediate" },
            { name: "SQL", icon: Database, years: "3 years", level: "Intermediate" },
            { name: "Pandas", icon: FileSpreadsheet, years: "3 years", level: "Advanced" },
            { name: "NumPy", icon: Box, years: "3 years", level: "Advanced" },
            { name: "Spark", icon: Zap, years: "2 years", level: "Intermediate" }
          ]
        },
        {
          category: "MLOps & Deployment",
          items: [
            { name: "Docker", icon: Container, years: "2 years", level: "Intermediate" },
            { name: "MLflow", icon: LineChart, years: "1 year", level: "Intermediate" },
            { name: "AWS SageMaker", icon: Cloud, years: "1 year", level: "Intermediate" },
            { name: "FastAPI", icon: Zap, years: "2 years", level: "Intermediate" },
            { name: "Git", icon: GitBranch, years: "3 years", level: "Advanced" },
            { name: "CI/CD", icon: Workflow, years: "2 years", level: "Intermediate" }
          ]
        },
        {
          category: "Specializations",
          items: [
            { name: "NLP & LLMs", icon: MessageSquare, years: "1 year", level: "Intermediate" },
            { name: "Computer Vision", icon: Eye, years: "2 years", level: "Intermediate" },
            { name: "Time Series", icon: LineChart, years: "2 years", level: "Intermediate" },
            { name: "Deep Learning", icon: Network, years: "2 years", level: "Intermediate" },
            { name: "Feature Engineering", icon: Sparkles, years: "3 years", level: "Advanced" },
            { name: "Model Optimization", icon: Cpu, years: "2 years", level: "Intermediate" }
          ]
        }
      ]
    }
  },
  es: {
    softwareEngineer: {
      name: "Anthony J. Torres",
      title: "Full Stack (MERN) - Ingeniero de Software",
      bio: "¡Saludos! Soy un estudiante apasionado de Ingeniería de Sistemas e Informática en la Universidad Tecnológica del Perú. Mi fascinación por la tecnología y la programación me ha llevado a especializarme en el desarrollo de software.",
      projects: [
        {
          title: "Chat App",
          subtitle: "ChatMe",
          role: "Full Stack",
          tech: [Next, Tailwind, LogoJavaScript, SocketIoIcon, ViteIcon],
          img: "/chatMe.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://chatme-fxip.onrender.com",
        },
        {
          title: "Auth Page",
          subtitle: "Pyyes - Auth",
          role: "Full Stack",
          tech: [Next, TypeScripIcon, Mongo, Tailwind],
          img: "/authpyyes.png",
          urlRepository: "https://github.com/Jhan24b/AuthPyees",
          urlProduction: "https://authpyees.vercel.app",
        },
        {
          title: "Ordering App",
          subtitle: "Pyyes - Bakery",
          role: "Full Stack",
          tech: [Next, Mongo, Tailwind, Stripe],
          img: "/pyyesProject.png",
          urlRepository: "https://github.com/Jhan24b/Pyyes",
          urlProduction: "https://pyyes.vercel.app",
        }
      ],
      desktopProjects: [
        {
          title: "Sistema para Gestion de Minimarket",
          tech: [Java, mysqlLogo],
          img: "/minimarketSystem.png",
          Arquitectura: "MVC",
          description: "Este sistema permite la gestión de inventarios, control de ventas, y seguimiento de pedidos de manera efectiva.",
          status: "Vendido",
          caracteristicas: ["Gestion de Inventarios", "Gestion de Ventas", "Gestion de Compras"]
        }
      ],
      skills: [
        {
          category: "Lenguajes de Programación y Frameworks",
          items: [
            { name: "Java", icon: Java, years: "3 años", level: "Intermedio" },
            { name: "Python", icon: Python, years: "3 años", level: "Intermedio" },
            { name: "JavaScript", icon: LogoJavaScript, years: "3 años", level: "Intermedio" },
            { name: "ReactJS", icon: ReactIcon, years: "2 años", level: "Intermedio" },
            { name: "TypeScript", icon: TypeScripIcon, years: "2 años", level: "Intermedio" },
            { name: "Flutter", icon: Flutter, years: "1 año", level: "Intermedio" }
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
      bio: "Especializado en la construcción de pipelines de datos escalables y arquitecturas robustas. Apasionado por transformar datos crudos en insights accionables utilizando tecnologías de vanguardia en la nube.",
      projects: [
        {
          title: "Pipeline de Big Data",
          subtitle: "ETL impulsado por Spark",
          role: "Ingeniero de Datos",
          tech: [Zap, Database, Layers],
          img: "/data-img1.jpg",
          Arquitectura: "Medallion (Bronze, Silver, Gold)",
          description: "Implementación de un pipeline ETL distribuido procesando TBs de datos diarios usando Apache Spark y Databricks, asegurando la calidad y el linaje de los datos.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Procesamiento Distribuido", "Clusters con Auto-escalado", "Validación de Calidad de Datos"]
        },
        {
          title: "Almacén de Datos en la Nube",
          subtitle: "Arquitectura Azure Synapse",
          role: "Arquitecto de Datos",
          tech: [Cloud, HardDrive, Cpu],
          img: "/data-img2.jpg",
          Arquitectura: "Hub-and-Spoke",
          description: "Diseño y despliegue de un Data Warehouse en Azure, optimizando costos y rendimiento de consultas mediante estrategias de particionamiento e indexación.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Optimización de Consultas", "Gestión de Costos", "Modelado de Esquemas"]
        },
        {
          title: "Streaming en Tiempo Real",
          subtitle: "AWS Kinesis y Lambda",
          role: "Ingeniero de Datos",
          tech: [Cloud, Zap, Database],
          img: "/data-img3.jpg",
          Arquitectura: "Arquitectura Kappa",
          description: "Arquitectura serverless para el procesamiento de eventos en tiempo real con AWS Kinesis, Lambda y DynamoDB, logrando latencias inferiores al segundo.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Baja Latencia", "Basado en Eventos", "Infraestructura Serverless"]
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
      bio: "Apasionado por construir sistemas inteligentes que aprenden y evolucionan. Experiencia en el desarrollo de pipelines de ML completos, desde la ingesta de datos y el feature engineering hasta el despliegue y monitoreo de modelos. Enfocado en crear soluciones de IA que expanden los límites de la automatización y la cognición.",
      projects: [
        {
          title: "Neural Compass",
          subtitle: "RAG & Fine-tuning de LLMs",
          role: "Ingeniero de IA",
          tech: [Python, Layers, Workflow, Zap],
          img: "/ai-project1.jpg",
          Arquitectura: "Generación Aumentada por Recuperación",
          description: "Ajusté LLaMA-2 usando LoRA y construí un pipeline RAG con LangChain, ChromaDB y embeddings de OpenAI para consultas inteligentes sobre manuales técnicos.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Fine-tuning de LLMs", "Búsqueda Semántica", "Q&A Contextual"]
        },
        {
          title: "Deep Space Vision",
          subtitle: "IA para Imágenes Satelitales",
          role: "Ingeniero de ML",
          tech: [Eye, Cpu, Layers, Python],
          img: "/ai-project2.jpg",
          Arquitectura: "Red Neuronal Convolucional",
          description: "Diseñé y desplegué un sistema de detección de objetos basado en YOLOv8 para análisis de imágenes satelitales, alcanzando 94% mAP en dataset personalizado con inferencia en tiempo real mediante FastAPI.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Detección en Tiempo Real", "Transfer Learning", "Cuantización de Modelos"]
        },
        {
          title: "AstraPredict",
          subtitle: "Predicción de Series Temporales",
          role: "Ingeniero en IA/ML",
          tech: [LineChart, Database, Cloud, Python],
          img: "/ai-project3.jpg",
          Arquitectura: "Encoder-Decoder LSTM",
          description: "Construí un motor de predicción de telemetría usando métodos ensemble (Prophet + LSTM) para detección de anomalías en datos de sensores espaciales, reduciendo falsos positivos en un 60%.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Detección de Anomalías", "Modelado Ensemble", "Pipeline AutoML"]
        }
      ],
      desktopProjects: [],
      skills: [
        {
          category: "Frameworks de IA y ML",
          items: [
            { name: "TensorFlow", icon: Brain, years: "2 años", level: "Avanzado" },
            { name: "PyTorch", icon: Cpu, years: "2 años", level: "Avanzado" },
            { name: "scikit-learn", icon: Layers, years: "3 años", level: "Avanzado" },
            { name: "Keras", icon: Brain, years: "2 años", level: "Intermedio" },
            { name: "Hugging Face", icon: BookOpen, years: "1 año", level: "Intermedio" },
            { name: "LangChain", icon: Workflow, years: "1 año", level: "Intermedio" }
          ]
        },
        {
          category: "Programación y Datos",
          items: [
            { name: "Python", icon: Python, years: "3 años", level: "Avanzado" },
            { name: "R", icon: BarChart, years: "1 año", level: "Intermedio" },
            { name: "SQL", icon: Database, years: "3 años", level: "Intermedio" },
            { name: "Pandas", icon: FileSpreadsheet, years: "3 años", level: "Avanzado" },
            { name: "NumPy", icon: Box, years: "3 años", level: "Avanzado" },
            { name: "Spark", icon: Zap, years: "2 años", level: "Intermedio" }
          ]
        },
        {
          category: "MLOps y Despliegue",
          items: [
            { name: "Docker", icon: Container, years: "2 años", level: "Intermedio" },
            { name: "MLflow", icon: LineChart, years: "1 año", level: "Intermedio" },
            { name: "AWS SageMaker", icon: Cloud, years: "1 año", level: "Intermedio" },
            { name: "FastAPI", icon: Zap, years: "2 años", level: "Intermedio" },
            { name: "Git", icon: GitBranch, years: "3 años", level: "Avanzado" },
            { name: "CI/CD", icon: Workflow, years: "2 años", level: "Intermedio" }
          ]
        },
        {
          category: "Especializaciones",
          items: [
            { name: "NLP y LLMs", icon: MessageSquare, years: "1 año", level: "Intermedio" },
            { name: "Visión por Computadora", icon: Eye, years: "2 años", level: "Intermedio" },
            { name: "Series Temporales", icon: LineChart, years: "2 años", level: "Intermedio" },
            { name: "Deep Learning", icon: Network, years: "2 años", level: "Intermedio" },
            { name: "Feature Engineering", icon: Sparkles, years: "3 años", level: "Avanzado" },
            { name: "Optimización de Modelos", icon: Cpu, years: "2 años", level: "Intermedio" }
          ]
        }
      ]
    }
  }
};
