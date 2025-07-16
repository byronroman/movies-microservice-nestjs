<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# nest-microservice-movies

Aplicación backend desarrollada con **NestJS** para la gestión de películas, siguiendo una arquitectura modular y buenas prácticas de desarrollo.

## Estructura del proyecto

```
nest-ms-movies
├── .vscode/                # Configuración de VS Code
│   └── launch.json
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
│   ├── app.module.ts
│   └── main.ts
├── test/                   # Pruebas end-to-end
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .env                    # Variables de entorno
├── .gitignore              # Exclusiones de git
├── .prettierrc             # Configuración de Prettier
├── dev.env                 # Variables de entorno de desarrollo
├── eslint.config.mjs       # Configuración de ESLint
├── nest-cli.json           # Configuración de Nest CLI
├── package.json            # Dependencias y scripts
├── pnpm-lock.yaml          # Bloqueo de dependencias
├── README.md               # Documentación principal
├── tsconfig.build.json     # Configuración de TypeScript para build
└── tsconfig.json           # Configuración de TypeScript
```

## Descripción

Este proyecto implementa un microservicio para la gestión de películas usando NestJS y TypeORM. La arquitectura está dividida en capas (aplicación, dominio, infraestructura y compartida), facilitando la escalabilidad y el mantenimiento.

## Instalación

```bash
pnpm install
```

## Ejecución

```bash
# Desarrollo
pnpm run start

# Modo watch
pnpm run start:dev

# Producción
pnpm run start:prod
```

## Pruebas

```bash
# Unitarias
pnpm run test

# End-to-end
pnpm run test:e2e

# Cobertura
pnpm run test:cov
```

## Configuración

- Variables de entorno en `.env` y `dev.env`.
- Configuración de base de datos en `src/shared/database/database.config.ts`.
