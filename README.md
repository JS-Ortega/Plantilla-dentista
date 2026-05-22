# Plantilla Dentista

Una plantilla moderna y profesional para clínicas dentales, construida con las últimas tecnologías web.

## 🚀 Tecnologías Utilizadas

Este proyecto está desarrollado utilizando un stack moderno para ofrecer el mejor rendimiento y experiencia de usuario:

- **[Next.js](https://nextjs.org/)** (v16.2) - Framework de React para desarrollo web rápido y optimizado.
- **[React](https://react.dev/)** (v19) - Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **[TypeScript](https://www.typescriptlang.org/)** - Añade tipado estático a JavaScript, mejorando la robustez del código.
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Framework de CSS de utilidad (Utility-first) para un diseño rápido y flexible.
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca potente para crear animaciones fluidas en React.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de iconos modernos y consistentes.

## 🛠️ Cómo levantar el proyecto localmente

Sigue estos pasos para descargar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

Abre tu terminal y ejecuta el siguiente comando para clonar el proyecto, luego entra en la carpeta creada:

```bash
git clone <url-del-repositorio>
cd plantilla-dentista
```

*(Nota: Reemplaza `<url-del-repositorio>` con la URL real de tu repositorio Git).*

### 2. Instalar las dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, instala las dependencias del proyecto:

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

Para levantar el proyecto en modo de desarrollo, ejecuta:

```bash
npm run dev
```

### 4. Visualizar en el navegador

Abre tu navegador web favorito y navega a [http://localhost:3000](http://localhost:3000). Podrás ver la aplicación corriendo. El proyecto cuenta con "Hot Reload", por lo que se recargará automáticamente a medida que guardes cambios en el código.

## 📁 Estructura del Proyecto

A continuación se describen los directorios más importantes para entender el código:

- `app/` - Contiene las rutas de Next.js (App Router), páginas principales y layouts.
- `components/` - Archivos de componentes de React reutilizables (botones, tarjetas, secciones, etc.).
- `constants/` - Contiene valores estáticos, textos y configuraciones (`strings.ts`, etc.) para mantener el código limpio.
- `public/` - Archivos estáticos accesibles públicamente como imágenes, logos o iconos.
- `views/` - Componentes más grandes o secciones completas que conforman las vistas de la página.

## 📜 Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos mediante npm:

- `npm run dev`: Inicia el servidor de desarrollo local.
- `npm run build`: Construye la aplicación optimizada y lista para producción.
- `npm start`: Inicia el servidor de producción (es necesario haber ejecutado `npm run build` previamente).
- `npm run lint`: Ejecuta ESLint para analizar el código y asegurar las buenas prácticas.
