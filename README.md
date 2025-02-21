# XJson - Clon de Twitter (X)

[![Project](https://github.com/user-attachments/assets/78cb93c5-a069-4fb2-b43e-568ef815806b)](x-json-kha7.vercel.app/)  
*(Verifica este enlace. ¿Es correcto para *XJson* o debe ser otro?)*

---

## Diagrama de Arquitectura del Proyecto

```mermaid
graph LR
    subgraph "Frontend Container"
        direction TB
        FrontendApp["Next.js App"]
        style FrontendApp fill:#lightblue,stroke:#333,stroke-width:2px

        subgraph "Frontend Components"
            direction TB
            AuthComponents["Auth Components"]
            style AuthComponents fill:#skyblue,stroke:#333,stroke-width:2px
            PostComponents["Post Components"]
            style PostComponents fill:#skyblue,stroke:#333,stroke-width:2px

            subgraph "Auth Components Details"
                direction TB
                AuthCallback["Auth Callback"]
                style AuthCallback fill:#lightsteelblue,stroke:#333,stroke-width:2px
            end

            subgraph "Post Components Details"
                direction TB
                PostList["Post List\nReact Component"]
                style PostList fill:#lightsteelblue,stroke:#333,stroke-width:2px
                PostCard["Post Card\nReact Component"]
                style PostCard fill:#lightsteelblue,stroke:#333,stroke-width:2px
                ComposePost["Compose Post\nReact Component"]
                style ComposePost fill:#lightsteelblue,stroke:#333,stroke-width:2px
            end

            AuthComponents -- Contains --> AuthCallback
            PostComponents -- Contains --> PostList
            PostComponents -- Contains --> PostCard
            PostComponents -- Contains --> ComposePost
        end
        FrontendApp -- Renders --> FrontendComponents
    end

    subgraph "Backend Container"
        direction TB
        Authentication["Authentication"]
        style Authentication fill:#lightgreen,stroke:#333,stroke-width:2px
        DataLayer["Data Layer"]
        style DataLayer fill:#lightgreen,stroke:#333,stroke-width:2px

        subgraph "Authentication Details"
            direction TB
            ServerActions["Server Actions"]
            style ServerActions fill:#palegreen,stroke:#333,stroke-width:2px
            SupabaseAuth["Supabase Auth"]
            style SupabaseAuth fill:#palegreen,stroke:#333,stroke-width:2px
        end

        subgraph "Data Layer Details"
            direction TB
            DatabaseClient["Database Client"]
            style DatabaseClient fill:#plum,stroke:#333,stroke-width:2px
            Manage["Manage"]
            style Manage fill:#plum,stroke:#333,stroke-width:2px

            subgraph "Database Tables"
                direction TB
                UsersTable["Users Table"]
                style UsersTable fill:#violet,stroke:#333,stroke-width:2px
                PostsTable["Posts Table"]
                style PostsTable fill:#violet,stroke:#333,stroke-width:2px
            end
            DatabaseClient -- Contains --> DatabaseTables
        end
        Authentication -- InteractsWith --> DataLayer
        Authentication -- Contains --> ServerActions
        Authentication -- Contains --> SupabaseAuth
    end

    ExternalUser(External User)
    style ExternalUser fill:#87cefa,stroke:#333,stroke-width:2px

    ExternalUser -- Interacts with --> FrontendApp
    FrontendApp -- Handles auth callback --> Authentication
    FrontendApp -- Creates posts via --> Authentication

    FrontendContainer --> BackendContainer
```

---

## Descripción

**XJson** es una réplica funcional de la red social Twitter (ahora X), construida con **Next.js** en el frontend y un backend robusto basado en **Supabase**. Este proyecto se centra en la creación de una experiencia de usuario similar a Twitter, implementando funcionalidades clave como:

- **Autenticación de Usuarios:** Registro e inicio de sesión seguros.
- **Gestón de Sesiones:** Manejo eficiente de sesiones de usuario, incluyendo cierre de sesión.
- **Interacción con Publicaciones:** Permite agregar comentarios a los posts.
- **Base de Datos Funcional:** Almacena usuarios, posts y comentarios.

El objetivo es recrear la esencia de Twitter con un enfoque en la funcionalidad y experiencia del usuario.

🔗 **[Demo en Vercel](https://x-json-kha7.vercel.app/)**

---

## 🚀 Inicio Rápido

### 1️⃣ Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO_XJSON>
cd XJson
```

### 2️⃣ Instalar dependencias
```bash
pnpm install  # o yarn install  o npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto y define las variables necesarias.

Ejemplo:
```ini
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_supabase
# ... otras variables de entorno necesarias ...
```

### 4️⃣ Ejecutar el servidor de desarrollo
```bash
pnpm dev  # o yarn dev  o npm run dev
```

### 5️⃣ Abrir la aplicación en el navegador
Accede a **[http://localhost:3000](http://localhost:3000)**.

---

## 📂 Estructura del Proyecto

```
XJson/
│── src/
│   ├── app/
│   │   ├── page.tsx  # Página principal
│   │   ├── auth.tsx  # Autenticación
│   ├── components/
│   │   ├── AuthComponents.tsx
│   │   ├── PostComponents.tsx
│── public/
│── styles/
│── .env.local.example  # Ejemplo de configuración de variables de entorno
│── README.md  # Este archivo 📄
│── package.json
│── tailwind.config.ts
│── tsconfig.json
```

---

## 📜 Licencia
Este proyecto se encuentra bajo la licencia **MIT**. Puedes usarlo y modificarlo libremente. ✨

