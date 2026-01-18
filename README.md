# ✨ Smart Notes IA - Resumidor de Notas Inteligente

La Pagina de Notas con IA es una aplicación **Full Stack** desarrollada como prueba técnica. Permite a los usuarios ingresar textos extensos y obtener un resumen preciso generado por Inteligencia Artificial, almacenando tanto el original como el resumen en una base de datos persistente.

![Versión de la App](https://img.shields.io/badge/Version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Framework-Next.js%2014-black)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)

## 🚀 Características

- **Resumen con IA**: Utiliza el modelo `facebook/bart-large-cnn` mediante la API de Hugging Face para procesar lenguaje natural.
- **Persistencia de Datos**: Conexión en tiempo real con **Supabase (PostgreSQL)**.
- **Interfaz Moderna**: Diseño limpio y responsivo construido con **Tailwind CSS**.
- **Historial Dinámico**: Visualización instantánea de las notas guardadas recientemente.

## 🛠️ Stack Tecnológico

- **Frontend**: [Next.js](https://nextjs.org/) (App Router) + [React](https://reactjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Base de Datos**: [Supabase](https://supabase.com/)
- **IA/ML**: [Hugging Face Inference API](https://huggingface.co/docs/inference-js/index)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)

## ⚙️ Configuración del Proyecto

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/mi-app-notas.git](https://github.com/TU_USUARIO/mi-app-notas.git)
   cd mi-app-notas
   .