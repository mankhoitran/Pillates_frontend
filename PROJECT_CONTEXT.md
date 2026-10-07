# PROJECT_CONTEXT.md — HPILATES & Wellness

## 1. Project Purpose
HPILATES & Wellness is a luxury boutique Pilates studio web application ("Nghệ Thuật Của Sự Chuyển Động") located in Bảo Lộc, Vietnam. It serves studio clients, prospective members, and trainee instructors by presenting studio disciplines, rooms, philosophies, and schedules. Its primary client-side workflows include interactive class reservation, personal timetable and booking status lookup via phone/email, consultation inquiries, and an ambient sensory experience.

## 2. Technology Stack
- **Frontend Framework**: React 19 (`react` 19.0.1, `react-dom` 19.0.1)
- **Language**: TypeScript 5.8.2 (`tsconfig.json`, ES2022 target, bundler module resolution)
- **Bundler & Tooling**: Vite 6.2.3 with `@vitejs/plugin-react` 5.0.4
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` 4.1.14) with `@theme` custom tokens in `src/index.css`
- **Animations**: Motion (`motion/react` 12.23.24)
- **Icons**: Lucide React (`lucide-react` 0.546.0)
- **State & Persistence**: React Hooks + Browser `localStorage` (key: `hp_studio_customer_bookings`)
- **Audio Engine**: Web Audio API procedural synthesizer (432 Hz Solfeggio harmonics in `audioAmbience.ts`)
- **Template Heritage**: Google AI Studio applet export (includes placeholder dependencies `express`, `@google/genai`, `dotenv`; server capabilities are currently inactive in `src/`)

## 3. Architecture
```text
Browser Client
  │
  ├── index.html (Iframe fetch defense shim, Google Fonts: Noto Serif Display + Be Vietnam Pro)
  │     └── src/main.tsx (StrictMode bootstrap)
  │           └── src/App.tsx (Root Layout & State Orchestrator)
  │                 │
  │                 ├── Visual Presentation Components (Hero, Intro, Rooms, Philosophy, Gallery, Testimonials)
  │                 ├── Interactive Features (CustomCursor, FloatingContact, StudioScheduleSection)
  │                 ├── Overlays & Modals (BookingModal, Lightbox in ConsultationSection)
  │                 │
  │                 └── Data & Service Layers
  │                       ├── src/config/siteConfig.ts (Static Studio Metadata & Contacts)
  │                       ├── src/data/studioData.ts (Disciplines, Timetable, Initial Bookings)
  │                       ├── src/utils/scheduleStorage.ts (LocalStorage CRUD & Search Engine)
  │                       └── src/utils/audioAmbience.ts (Synthesized Web Audio Engine)
```

## 4. Data Flow
### A. Class Reservation Flow
1. User clicks booking CTA in `Navbar`, `Hero`, `PilatesExperience`, `RoomShowcase`, or `StudioScheduleSection`.
2. `App.tsx` sets modal state with optional pre-selected discipline/slot (`bookingInitialClass`, `bookingInitialSlot`).
3. `BookingModal.tsx` steps the user through form inputs (Discipline, Instructor, Date/Time, Name, Phone/Email).
4. On submit, `scheduleStorage.saveBooking()` generates a code (`HP-XXXXXX`), prepends the item to `localStorage`, and displays confirmation.

### B. Customer Schedule Lookup Flow
1. User inputs Phone, Email, or Booking Code in `StudioScheduleSection.tsx`.
2. `scheduleStorage.findBookingsByCustomer()` matches queries against cached bookings (normalized digit matching for phone numbers).
3. Matches render interactive cards allowing status verification or self-service cancellation via `cancelBooking()`.

### C. Procedural Audio Flow
1. User toggles sound in `Footer.tsx` or triggers UI interactions.
2. `StudioAudioAmbience` initializes an `AudioContext` (handling browser auto-play suspension) and synthesizes 432 Hz sine waves with exponential decay gain envelopes without fetching external audio files.

## 5. Repository Map
```text
Frontend/
├── public/                 → Static image assets served at root (rooms, logos, consultation cards)
├── src/
│   ├── assets/images/      → High-res photography assets (Reformer, Cadillac, Lounge, Barrels)
│   ├── components/         → 20 UI section components and modals
│   ├── config/             → Centralized contact, address, founder, and business configuration
│   │   └── siteConfig.ts
│   ├── data/               → Domain types, static schedules, mock data, initial bookings
│   │   └── studioData.ts
│   ├── utils/              → LocalStorage booking engine and Web Audio API synthesizer
│   │   ├── audioAmbience.ts
│   │   └── scheduleStorage.ts
│   ├── App.tsx             → Main single-page application orchestrator
│   ├── index.css           → Tailwind v4 @theme variables, architectural arch utilities, scrollbar
│   └── main.tsx            → Application mount point with fetch protection shim
├── index.html              → HTML shell, typography preconnects, favicon
├── metadata.json           → Google AI Studio metadata manifest
├── package.json            → Dependency and script definitions
├── tsconfig.json           → TypeScript compiler options (paths alias: @/* -> ./*)
└── vite.config.ts          → Vite plugins, path aliases, HMR control
```

## 6. Important Files
| File | Purpose | Why Important |
| :--- | :--- | :--- |
| `src/App.tsx` | Main Application Container | Orchestrates all page sections, modal visibility, scroll-based sticky CTAs, and booking handlers |
| `src/config/siteConfig.ts` | Studio Configuration | Single source of truth for phone, Zalo, address, Google Maps link, social links, and owner info |
| `src/data/studioData.ts` | Data Models & Seeds | Contains all domain interfaces (`CustomerBooking`, `TimetableSlot`, `ClassDiscipline`) and mock datasets |
| `src/utils/scheduleStorage.ts` | Client Persistence Layer | Encapsulates `localStorage` CRUD, query normalization, booking code generation, and cancellation |
| `src/components/BookingModal.tsx` | Reservation Concierge | Multi-step interactive booking form connected to `scheduleStorage` |
| `src/components/StudioScheduleSection.tsx` | Schedule & Lookup Portal | Timetable visualization and customer booking lookup engine by phone/email/code |
| `src/components/ConsultationSection.tsx` | Policies & Training Info | Member consultation cards with photo lightbox and instructor certification program details |
| `src/components/Navbar.tsx` | Global Navigation | IntersectionObserver scroll-spy, smooth navigation, mobile menu drawer, and booking entry point |
| `src/index.css` | Design System Tokens | Tailwind v4 `@theme`, color palette (ivory, sand, coffee, gold), and custom arch curves (`arch-top`) |
| `src/utils/audioAmbience.ts` | Ambient Sound Synthesizer | Zero-dependency Web Audio oscillator engine providing meditative audio feedback |
| `vite.config.ts` | Bundler Configuration | Path aliases (`@/*`), Tailwind plugin, and AI Studio HMR settings (`DISABLE_HMR`) |

## 7. Entry Points
- **Frontend App Entry**: `src/main.tsx` (rendered into `<div id="root">` inside `index.html`)
- **Development Server**: `npm.cmd run dev` (Vite dev server on `http://0.0.0.0:3000`)
- **Production Build**: `dist/index.html` (built via `npm.cmd run build`)
- **Backend / Workers / Tests**: `UNKNOWN` (No active backend, background worker, or automated test runner currently configured)

## 8. Commands
> **PowerShell / Windows Note**: Always run `npm.cmd` instead of `npm` if PowerShell script execution policies block `.ps1` files.

- **Install Dependencies**: `npm.cmd install`
- **Start Dev Server**: `npm.cmd run dev`
- **Typecheck & Lint**: `npm.cmd run lint` (runs `tsc --noEmit`)
- **Production Build**: `npm.cmd run build` (outputs optimized bundle to `dist/`)
- **Preview Build**: `npm.cmd run preview`
- **Clean Artifacts**: `npm.cmd run clean` (removes `dist` and `server.js`)

## 9. Environment Configuration
Variables defined in `.env.example` (inherited from the AI Studio container template):
- `GEMINI_API_KEY`: Reserved for Gemini AI API calls (injected by AI Studio at runtime; currently unused in client-side code).
- `APP_URL`: Host URL for Cloud Run deployments and callbacks (currently unused in client-side code).
- `DISABLE_HMR`: If set to `'true'`, disables Vite HMR and file watching in `vite.config.ts` to prevent reload loops during automated agent edits.

## 10. Architectural Decisions
- **Client-Side Booking Simulation**: Bookings persist to browser `localStorage` (`scheduleStorage.ts`) with pre-seeded data rather than a remote database. This allows instant standalone demonstration without backend dependencies.
- **Synthesized Audio vs. Audio Assets**: Ambience sound is procedurally synthesized via Web Audio API oscillators (`audioAmbience.ts`) at 432 Hz to avoid loading bulky audio files over the network.
- **Tailwind CSS v4 `@theme` Architecture**: Design tokens (ivory, sand, coffee, gold) and typography are declared natively in `src/index.css` using modern Tailwind v4 `@theme` syntax instead of legacy `tailwind.config.js`.
- **Iframe Sandboxing Resilience**: `index.html` and `main.tsx` include defensive shims protecting `window.fetch` accessor definitions against sandboxed iframe setter conflicts in hosting preview environments.

## 11. Constraints and Invariants
- **MUST** preserve Vietnamese language accents and typography in all user-facing strings and data records.
- **MUST** keep phone number search normalized (`\D` stripped) in `scheduleStorage.ts` to ensure flexible customer lookup.
- **MUST** reference static assets directly from `/public` root paths (e.g., `/room_img.jpg`, `/logo.jpg`) or import from `src/assets/`.
- **MUST NOT** remove the safe-area padding or z-index layering (`z-[90]`, `z-[95]`, `z-[9999]`) on mobile floating widgets (`FloatingContact`, sticky bottom CTA, `CustomCursor`).
- **SHOULD NOT** assume a running Node/Express backend; the app must remain fully functional as a static single-page application.

## 12. Known Issues and Gotchas
1. **Windows PowerShell Execution Policy**: Running bare `npm` on Windows PowerShell may fail with `PSSecurityException` (`npm.ps1 cannot be loaded`). Always invoke `npm.cmd` or run via `cmd.exe /c`.
2. **AI Studio Template Artifacts**: `package.json` contains dependencies (`@google/genai`, `express`, `dotenv`, `tsx`) and `metadata.json` declares server capabilities that are not currently wired into the `src/` application code.
3. **No Automated Test Harness**: There are no unit or end-to-end tests configured (`npm test` does not exist). Code verification relies on `npm.cmd run lint` (`tsc --noEmit`) and `npm.cmd run build`.
4. **Git Repository Boundaries**: The `Frontend/` folder is not itself a Git root (`.git` is located in parent or uninitialized).

## 13. Task Routing Map
| If the task involves... | Start here |
| :--- | :--- |
| Updating phone, Zalo, address, or map links | `src/config/siteConfig.ts` |
| Modifying class disciplines, schedules, or pricing data | `src/data/studioData.ts` |
| Changing booking validation, storage, or lookup logic | `src/utils/scheduleStorage.ts` |
| Modifying reservation popup modal UI/UX | `src/components/BookingModal.tsx` |
| Timetable display, filters, or customer lookup UI | `src/components/StudioScheduleSection.tsx` |
| Consultation cards, training info, or policy lightbox | `src/components/ConsultationSection.tsx` |
| Color scheme, fonts, arch borders, or global CSS | `src/index.css` |
| Navigation bar, links, or mobile drawer | `src/components/Navbar.tsx` |
| Hero visual, animated headings, or parallax effects | `src/components/Hero.tsx` |
| Audio ambience pitch, duration, or volume | `src/utils/audioAmbience.ts` |
| Custom cursor behavior or pointer detection | `src/components/CustomCursor.tsx` |
| Vite build configuration, port, or path aliases | `vite.config.ts`, `tsconfig.json` |

---

## Context Maintenance

This document is a high-level project map for coding agents.

It should be updated when any of the following change:

- architecture
- major dependencies
- entry points
- important directory structure
- API boundaries
- database architecture
- deployment architecture
- major architectural decisions

Do not update this document for ordinary implementation changes unless they change the project's architectural mental model.

Last generated: 2026-09-08
