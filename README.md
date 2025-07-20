<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center"><b>Microservicio de Películas 🎬 | NestJS + TypeORM + PostgreSQL</b></p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
</p>

---

# 🎬 CineVerse: Aplicación backend desarrollada con **NestJS** para la gestión de películas, siguiendo una arquitectura modular y buenas prácticas.

<p align="center">
  <a href="https://github.com/byronroman/movies-frontend-angular" target="_blank">
    <img src="https://img.shields.io/badge/Ver%20Frontend%20Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Ver Frontend Angular">
  </a>
</p>

## 📂 Estructura del proyecto

```
nest-ms-movies/
├── .vscode/                # Configuración de VS Code
├── src/                    # Código fuente principal
│   ├── movies-ms/          # Microservicio de películas
│   │   ├── application/
│   │   │   └── services/
│   │   │       ├── movie.service.ts
│   │   │       ├── typeorm.service.ts
│   │   ├── domain/
│   │   │   └── model/
│   │   │       └── movies.model.ts
│   │   ├── infrastructure/
│   │   │   └── controller/
│   │   │       └── movie/
│   │   │           └── movie.controller.ts
│   │   └── movie.module.ts
│   ├── shared/
│   │   └── database/
│   │       └── database.config.ts
│   │   └── logger/
│   │       ├── custom-logger.service.ts
│   │       └── logger.module.ts
│   ├── app.module.ts
│   └── main.ts
├── .env                    # Variables de entorno
├── dev.env                 # Entorno de desarrollo
├── package.json            # Dependencias
├── pnpm-lock.yaml          # Bloqueo de dependencias
├── tsconfig.json           # Configuración de TypeScript
└── README.md
```

## 📊 Descripción

Este proyecto implementa un microservicio RESTful para gestionar películas usando **NestJS**, **PostgreSQL** y **TypeORM**, dividido en capas:

- **application/**: Lógica de negocio y servicios
- **domain/**: Modelos de dominio
- **infrastructure/**: Controladores y entradas HTTP
- **shared/**: Configuraciones reutilizables (DB, logger)

## 🔗 Endpoints principales

| Método | Ruta                | Descripción                   |
| ------ | ------------------- | ----------------------------- |
| GET    | `/movie`            | Obtener todas las películas   |
| POST   | `/movie`            | Crear una nueva película      |
| POST   | `/movie/update`     | Actualizar película existente |
| GET    | `/movie/delete/:id` | Eliminar película por ID      |

## 📄 Tabla y ejemplo de inserción

```sql
CREATE TABLE cinema.movies (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL,
  description varchar(255),
  time varchar(20),
  image text,
  status boolean
);

INSERT INTO cinema.movies (name, description, time, image, status)
VALUES (
  'Spider-Man: Into the Spider-Verse',
  'Teen Miles Morales becomes Spider-Man in his universe and joins others from different dimensions to save the multiverse.',
  '1h 57m',
  'https://m.media-amazon.com/images/I/81k8XlRibzL._AC_SY679_.jpg',
  TRUE
);
```

## 🚀 Instalación

```bash
pnpm install
```

## 🔄 Ejecución

```bash
# Desarrollo
pnpm run start:dev
```

## 🔮 Pruebas

```bash
# Unitarias
pnpm run test

# Cobertura
pnpm run test:cov
```

## 🔧 Configuración

- Variables en `.env` y `dev.env`
- Conexión a DB en `src/shared/database/database.config.ts`

## 📝 Notas adicionales

- Este proyecto fue creado con fines educativos y se basa en una arquitectura limpia que puedes expandir o integrar con otros microservicios.

---

## 🧑‍💻 Autor

> Desarrollado por [Byron Román](https://github.com/byronroman) — IBM Intern & Fullstack Developer.
