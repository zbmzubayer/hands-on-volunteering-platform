# HandsOn - Volunteering Platform

## Overview

HandsOn is a community-driven social volunteering platform that connects individuals with meaningful social impact opportunities. Users can discover and join volunteer-driven events, post requests for community help, form teams for large-scale initiatives, and track their impact with contributions logged on a personal and team level.

## Tech Stack

Language: TypeScript

Frontend - NextJS (v15),
[NextAuth](https://next-auth.js.org)(authentication),
Tanstack React Query (data fetching),
Zustand (state management),
Zod (schema validation)

Backend - ExpressJS, Zod (schema validation)

Database - PostgreSQL, Prisma (ORM)

## Features

1. User can register and login with email and password
2. User can create profile and update profile

## Setup Instructions

Requirement:
Make sure NodeJS is installed on the system. (Recommended version LTS)
Package manager: PNPM

If pnpm is not installed on the system, install it via command:

```
npm i -g pnpm
```

**Step - 1**: Install all the dependencies:

```
pnpm install
```

**Step - 2**: Database server setup via following command:
Make sure docker is installed on the system:

```
pnpm docker:db
```

**Step - 3**: Create .env file and fill all the values of .env.example file for both web and api

**Step - 4**: Generate prisma client:

```
pnpm db-generate
```

Step - 5: Run both backend (api) and frontend (web)

```
pnpm dev
```

Or individual run

Run Backend (api) only:

```
pnpm dev:api
```

Run frontend (web) only:

```
pnpm dev:web
```

## Running the project

### Run the project locally

After completing the setup project setup steps, run command:

```
pnpm dev
```

Individually run frontend (web):

```
pnpm dev:web
```

Individually run backend (api):

```
pnpm dev:api
```

### Run the project in production

To build both frontend (web) and backend (api), run the command:

```
pnpm build
```

Individually build frontend (web):

```
pnpm build:web
```

Individually build backend (api):

```
pnpm build:api
```

Run the frontend (web):

```
pnpm start:web
```

Run the backend (api):

```
pnpm start:api
```
