# Estudio SC — Sitio web

Sitio institucional para **Estudio SC**, estudio jurídico en Santiago de Chile.
Diseño editorial oscuro con animaciones físicas, menú de navegación circular y
formulario de contacto con validación.

🔗 **Demo:** https://estudiosc-premium.vercel.app

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (animaciones)
- Despliegue: Vercel

## Estructura

```
src/
├── components/   # Nav, Hero, About, Criteria, Practice, Process, Team, Contact, Footer…
├── data.ts       # Todo el contenido del sitio en un solo lugar
├── utils/        # cn() y scroll suave entre secciones
└── assets/       # Logo oficial del estudio e imagen del hero
```

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

## Notas

- El contenido (textos, áreas de práctica, equipo) vive en `src/data.ts` para que
  sea fácil de editar sin tocar componentes.
- El formulario valida en el cliente y está listo para conectarse al endpoint
  de contacto del hosting definitivo.
