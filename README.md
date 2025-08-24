# Personal Portfolio

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fadrianenev.com&label=adrianenev.com&style=for-the-badge)](https://adrianenev.com)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and achievements in a clean, interactive interface.

## 🚀 Features

- **Modern UI/UX** with smooth animations using Framer Motion
- **Fully Responsive** design that works on all devices
- **Dark/Light Mode** (if implemented)
- **Interactive Components** including animated text and scroll-triggered elements
- **Project Showcase** with detailed case studies
- **Contact Form** powered by Netlify Functions + Amazon SES (SMTP via Nodemailer)
- **Multilingual Support** (if implemented)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, Rough Notation
- **Routing**: Wouter
- **Icons**: Lucide Icons, Font Awesome
- **Form Handling**: Netlify Functions + Amazon SES
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdrianEnev/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, icons, etc.)
├── components/       # Reusable UI components
│   ├── About/        # About page components
│   ├── Achievements/ # Achievement components
│   ├── Bars/         # Header and Sidebar components
│   ├── Contact/      # Contact page components
│   ├── Home/         # Home page components
│   └── Projects/     # Project showcase components
├── routes/           # Page components
├── types/            # TypeScript type definitions
└── use/              # Custom React hooks

netlify/
└── functions/        # Serverless functions (send-email)
```

## 🔧 Configuration

Environment variables are configured in your Netlify Site settings (do not expose these in the public Vite env):

```env
# Email provider
EMAIL_PROVIDER=ses

# SES SMTP
SES_SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SES_SMTP_PORT=587
SES_SMTP_USER=your_ses_smtp_username
SES_SMTP_PASS=your_ses_smtp_password

# Routing
EMAIL_FROM=portfolio@adrianenev.com
EMAIL_FROM_NAME=adrianenev.com
EMAIL_TO=you@yourdomain.com

# CORS / Origin
APP_BASE_URL=https://adrianenev.com
```

Notes:
- Make sure your SES domain and From address are verified, and your account is out of sandbox or the To address is verified.
- Do NOT prefix these with `VITE_`—they must remain server-only.

## 🧪 Local development for functions

To test the Netlify Function locally with the frontend, use Netlify CLI (optional):

```bash
npm i -g netlify-cli
netlify dev
```

This runs the Vite dev server and proxies `/.netlify/functions/*` to local functions.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Netlify](https://www.netlify.com/) for deployment

## 📬 Contact

- **Name**: Adrian Enev
- **Email**: [enevadria@gmail.com](mailto:enevadria@gmail.com)
- **Website**: [adrianenev.com](https://adrianenev.com)
- **GitHub**: [github.com/AdrianEnev](https://github.com/AdrianEnev)

---

Made with ❤️ by Adrian Enev