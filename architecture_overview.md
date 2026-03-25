# Architecture Overview: saberprivateer.github.io

This repository serves as a multi-project personal hub, hosting various independent web applications and experiments on GitHub Pages. The architecture is a "loose monorepo" where multiple disjointed tech stacks coexist.

## 🏛️ Core Components

### 1. Main Portfolio Hub (Root)

- **Tech Stack**: AngularJS 1.x, Google Material Design (Angular Material), Foundation CSS.
- **Entry Point**: `index.html`
- **Logic**: Managed via `js/app.js`, `js/work_controller.js`, `js/edu_controller.js`, etc.
- **Views**: Located in `partials/`.
- **Purpose**: Acts as the primary resume and project showcase site.

### 2. RiotTracker (Custom SPA)

- **Tech Stack**: Vanilla JavaScript (ES6+), CSS3.
- **Architecture**: A lightweight "header-injection" SPA (`spa.js`).
- **Purpose**: Tracking analytics or data (likely Riot Games related).
- **Structure**: Uses `partials/` for content fragments.

### 3. Utility / Flutter App (`/utility` and `/web`)

- **Tech Stack**: Flutter Web (Dart).
- **Architecture**: Compiled Flutter project. Source is in `/utility`, build output is served from `/web`.
- **Features**: Includes PWA support via `flutter_service_worker.js`.

### 4. ChoicePolls / Legacy Apps (`/app/src`)

- **Tech Stack**: AngularJS 1.x (2016-era).
- **Purpose**: Historical projects (e.g., a 2016 election polling tracker).
- **Dependencies**: Uses `bower_components` and local JSON datasets (`polls.json`).

### 5. Garry's List (Prototypes)

- **Tech Stack**: Vanilla JS/CSS (Scanned from garryslist.org).
- **Architecture**: A dedicated folder containing design suggestions and prototypes.
- **Location**: `/garryslist/`

---

## 🛠️ Build & Development

- **Package Manager**: `npm` (for dev tools), `bower` (legacy front-end dependencies).
- **Build System**: `gulp` (tasks for concatenation and minification in `gulpfile.js`).
- **Hosting**: GitHub Pages (Static hosting).

## 📂 Key Directories

| Directory | Purpose |
| :--------- | :------- |
| `/js` | Core portfolio logic (AngularJS) |
| `/partials` | HTML templates for the main hub |
| `/RiotTracker` | Standalone SPA for team/player tracking |
| `/utility` | Flutter source code |
| `/web` | Flutter web distribution files |
| `/app/src` | Legacy AngularJS polling application |
| `/garryslist` | Garry's List design prototypes and assets |

---
Last Updated: March 2026
