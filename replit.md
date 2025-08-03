# AiCloud Mania - Professional Cloud & AI Solutions Platform

## Overview

AiCloud Mania is a modern, full-stack web application for a cloud services and AI solutions company. The platform showcases enterprise-grade DevOps, Cloud Architecture, and AI/ML services with a focus on professional presentation and user experience. Built as a service-based company website, it features comprehensive sections including hero presentation, service offerings, technology showcases, team information, portfolio projects, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **Animation**: Framer Motion for smooth animations and transitions throughout the site
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Icons**: Lucide React icons and React Icons for comprehensive icon coverage

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development Server**: Vite with custom Express integration for development
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **API Design**: RESTful API structure with /api prefix routing

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless hosting
- **Migrations**: Drizzle Kit for database schema management
- **Schema**: Shared schema definitions between client and server
- **Connection**: @neondatabase/serverless for optimized cloud database connectivity

### Design System
- **Color Palette**: Professional blue (#2563EB) and teal (#06B6D4) primary colors with navy (#1E293B) for contrast
- **Typography**: Inter font family for body text, Poppins/Montserrat for headers
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Theme Support**: CSS custom properties for consistent theming

### Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement with runtime error overlay
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Code Quality**: ESLint integration through Vite plugins

### Authentication & Security
- **Session-based**: Express sessions with PostgreSQL storage
- **Form Validation**: Client and server-side validation with Zod schemas
- **CORS**: Configured for cross-origin resource sharing
- **Environment**: Secure environment variable management

## External Dependencies

### Cloud & Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Deployment Platform**: Configured for Replit deployment with development banner integration

### UI & Design Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives including dialogs, dropdowns, forms, and navigation components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **shadcn/ui**: Pre-built component library built on Radix UI primitives
- **Framer Motion**: Production-ready motion library for React animations
- **React Icons**: Popular icon libraries including Simple Icons for technology logos

### Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation

### Form & Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation
- **Drizzle Zod**: Integration between Drizzle ORM and Zod schemas

### Content & Media
- **Embla Carousel**: Lightweight carousel library for project showcases
- **Date-fns**: Modern JavaScript date utility library
- **Lucide React**: Beautiful and consistent icon set
- **Simple Icons**: Brand icons for technology showcase section

The application follows a monorepo structure with shared TypeScript definitions, enabling type safety across the full stack while maintaining clear separation between client and server concerns.