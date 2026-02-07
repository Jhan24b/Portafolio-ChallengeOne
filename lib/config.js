import React from 'react';
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

// Hypothetical icons for DE tech (using Lucide or similar if available, or placeholders)
// In a real scenario, I'd add actual SVGs for Spark, Azure, AWS, etc.
import { Database, Cloud, Zap, Cpu, Layers, HardDrive } from 'lucide-react';

export const CONFIG = {
  softwareEngineer: {
    name: "Anthony J. Torres",
    title: "Full Stack (MERN) - Software Engineer",
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
    title: "Data Engineer - Cloud & Infrastructure",
    bio: "Especializado en la construcción de pipelines de datos escalables y arquitecturas robustas. Apasionado por transformar datos crudos en insights accionables utilizando tecnologías de vanguardia en la nube.",
    projects: [
      {
        title: "Big Data Pipeline",
        subtitle: "Spark-Driven ETL",
        role: "Data Engineer",
        tech: [Zap, Database, Layers], // Placeholders for Spark, Databricks
        img: "/decod_print.png", // Using existing as placeholder
        description: "Implementación de un pipeline ETL distribuido procesando TBs de datos diarios usando Apache Spark y Databricks.",
        urlRepository: "https://github.com/Jhan24b",
        urlProduction: "#",
      },
      {
        title: "Cloud Data Warehouse",
        subtitle: "Azure Synapse Architecture",
        role: "Data Architect",
        tech: [Cloud, HardDrive, Cpu], // Placeholders for Azure, SQL
        img: "/pyyesProject.png", // Using existing as placeholder
        description: "Diseño y despliegue de un Data Warehouse en Azure, optimizando costos y rendimiento de consultas mediante particionamiento.",
        urlRepository: "https://github.com/Jhan24b",
        urlProduction: "#",
      },
      {
        title: "Real-time Streaming",
        subtitle: "AWS Kinesis & Lambda",
        role: "Data Engineer",
        tech: [Cloud, Zap, Database], // Placeholders for AWS
        img: "/chatMe.png", // Using existing as placeholder
        description: "Arquitectura serverless para el procesamiento de eventos en tiempo real con AWS Kinesis, Lambda y DynamoDB.",
        urlRepository: "https://github.com/Jhan24b",
        urlProduction: "#",
      }
    ],
    desktopProjects: []
  }
};
