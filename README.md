# 🚀 ProLancer Platform

A modern **freelancing platform** built with **Next.js (App Router)** that connects **Service Providers** and **Service Requesters** in a clean, scalable, and multilingual environment.

The platform supports role-based views, financial management, disputes handling, and a professional dashboard experience.

---

## 📑 Table of Contents

- [Getting Started](#-getting-started)
- [Project Overview](#-project-overview)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [State Management](#-state-management)
- [Internationalization (i18n)](#-internationalization-i18n)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.x
- **npm / yarn / pnpm**

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 Project Overview

**ProLancer Platform** is designed to:

- Support **two roles**:
  - 👤 Service Requester
  - 🧑‍💼 Service Provider
- Provide role-based dashboards and navigation
- Handle:
  - Projects & services
  - Wallet & financial transactions
  - Disputes & support
  - User settings & profiles
- Be fully **responsive** and **RTL-ready**
- Support **multi-language** content

---

## 🗺️ Project Structure

```bash
app/
├─ (all)/                    # Authenticated area
│  ├─ (home)/
│  ├─ blog/
│  ├─ disputes/
│  ├─ favorite/
│  ├─ service-details/
│  ├─ setting/
│  │  ├─ account-setting/
│  │  ├─ financial/
│  │  ├─ privacy-and-security/
│  │  └─ professional-settings/
│  ├─ support/
│  ├─ walet/
│  └─ layout.tsx
│
├─ (auth)/                   # Authentication flow
│  ├─ login/
│  ├─ register/
│  ├─ verify/
│  ├─ recovery-password/
│  └─ layout.tsx
│
├─ globals.css
├─ layout.tsx
└─ favicon.ico
```

---

## 🧩 Shared Components

```bash
components/
├─ navbar/                   # Main navigation
├─ footer/                   # Footer
├─ dropdown/
├─ services/
├─ landing/
├─ faqs/
└─ title/
```

---

## 🛠️ Technologies Used

### Frontend
- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Redux**
- **next-intl** (Internationalization)
- **Swiper.js**
- **React Icons**

### State Management
- **Redux Toolkit** for global state
- Global role toggle:
  - `Service Provider`
  - `Service Requester`

### Styling & UI
- Utility-first styling with **Tailwind CSS**
- Fully responsive layouts
- RTL & LTR support

---

## 🔄 State Management

Global state is managed using **Redux Toolkit**.

### Example Global State:
- User role (Service Provider / Service Requester)
- UI toggles
- Shared application states

```ts
isServiceProvider: boolean
```

Redux store is initialized in:

```bash
lib/store/
├─ store.ts
├─ roleSlice.ts
└─ ReduxProvider.tsx
```

---

## 🌍 Internationalization (i18n)

The project uses **next-intl** for translations.

```bash
i18n/
messages/
```

- Supports Arabic 🇸🇦 and English 🇺🇸
- RTL support enabled globally
- Translations managed via JSON message files

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> Add additional API keys here when backend services are integrated.

---

## 🚀 Deployment

The easiest way to deploy the app is using **Vercel**:

- https://vercel.com/new

Follow the official Next.js deployment guide:
- https://nextjs.org/docs/app/building-your-application/deploying

---

## 🤝 Contributing

Contributions are welcome 🙌

1. Fork the repository
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## ❤️ Credits

Built with care to deliver a **professional freelancing experience**  
Designed for scalability, clarity, and clean architecture.
