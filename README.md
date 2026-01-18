# ✨ Notas Con IA - Creador de Notas Inteligentes

Una aplicación moderna que utiliza Inteligencia Artificial para transformar textos largos en resúmenes claros y concisos, almacenándolos de forma segura en la nube.

## 🚀 Tecnologías Utilizadas

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Base de Datos:** [Supabase](https://supabase.com/) (PostgreSQL)
- **IA:** [Hugging Face Inference API](https://huggingface.co/inference-api) (Modelo: `facebook/bart-large-cnn`)

## 🛠️ Características

- **Resumen Automático:** Integración directa con modelos de procesamiento de lenguaje natural.
- **Persistencia de Datos:** Guardado automático de notas y resúmenes en base de datos.
- **Historial en Tiempo Real:** Visualización instantánea de las notas guardadas.
- **Diseño Responsivo:** Interfaz optimizada para dispositivos móviles y escritorio.
- **Seguridad:** Manejo profesional de variables de entorno y protección de API Keys.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/). También necesitarás:
1. Una cuenta en **Supabase** (para la base de datos).
2. Un Token de acceso de **Hugging Face** (gratuito).

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/N0va-hub/Notas-Con-IA.git](https://github.com/N0va-hub/Notas-Con-IA.git)
   cd Notas-Con-IA

2. **Instalar Dependencias**
-npm install

3. **Variables**
Crea un archivo .env.local en la raíz del proyecto y añade tus credenciales siguiendo el modelo de .env.example

NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_llave_anon_de_supabase
NEXT_PUBLIC_HUGGING_FACE_TOKEN=tu_token_de_hugging_face

4. **Ejecutar en Local**
-npm run dev

5. **La Aplicacion Estara Disponible En**
http://localhost:3000
