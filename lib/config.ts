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

import { Database, Cloud, Zap, Cpu, Layers, HardDrive } from 'lucide-react';
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
          img: "https://images.stockcake.com/canvas/2024/05/18/network-connection-nodes_1716023363.jpg",
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
          img: "https://images.stockcake.com/canvas/2024/03/10/digital-cloud-abstract_1710111652.jpg",
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
          img: "https://images.stockcake.com/canvas/2024/05/15/neon-data-stream_1715801334.jpg",
          Arquitectura: "Kappa Architecture",
          description: "Serverless architecture for real-time event processing with AWS Kinesis, Lambda, and DynamoDB, achieving sub-second latency.",
          urlRepository: "https://github.com/Jhan24b",
          urlProduction: "#",
          caracteristicas: ["Low Latency", "Event-Driven", "Serverless Infrastructure"]
        }
      ],
      desktopProjects: []
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
      desktopProjects: []
    }
  }
};
