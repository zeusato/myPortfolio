# 🌟 Nguyễn Mạnh Quyết's Personal Portfolio

![Portfolio Preview](./public/og_image.png)

A modern, high-performance personal portfolio showcasing my experience, skills, and projects as a **Product Systems Team Lead**. Built with cutting-edge web technologies and designed with a premium glassmorphic UI to reflect professionalism and technical expertise.

## ✨ Key Features

- **Modern Tech Stack**: Powered by **React 19** and **Vite** for lightning-fast performance and seamless development.
- **Fluid Animations**: Beautiful page transitions and micro-interactions using **Framer Motion**.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with a custom Sidebar and Mobile Header.
- **Glassmorphism UI**: Premium visual aesthetics featuring frosted glass effects, dynamic blurs, and sophisticated gradients.
- **Centralized Data**: Easy to update all textual content, links, and images via a single `/src/data.js` file.
- **Comprehensive Project Showcase**: Categorized portfolio displaying:
  - Collaborative FinTech/Enterprise Projects
  - Major Personal Projects (Web Apps, PWA)
  - Minor Personal Projects (AI Tools, Utilities)

## 🛠️ Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS with CSS Variables & Modern CSS Features
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Hi2, Fa)

## 📂 Project Structure

```text
myCV/
├── public/              # Static assets (images, logos, thumbnails)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── sections/    # Main content sections (About, Experience, Projects, etc.)
│   │   ├── MainContent.jsx 
│   │   ├── MobileHeader.jsx
│   │   └── ...
│   ├── data.js          # 📝 All portfolio content & data lives here
│   ├── App.jsx          # Root component & state management
│   ├── main.jsx         # React application entry point
│   └── index.css        # Global variables, themes, and styles
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zeusato/myPortfolio.git
   cd myCV
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📝 How to Customize

This portfolio is designed to be easily customizable without digging deep into the component code.

Update your information by editing the `src/data.js` file:
- **`profile`**: Name, Role, Contact Information, and Social Links.
- **`about`**: Headline, Description, and Key Highlights.
- **`experience` & `education`**: Add or remove items using the provided structure.
- **`projects`**: Organize your work into `collaborative`, `personalMajor`, and `personalMinor`.
- **`skills` & `others`**: Technical skills, languages, and specific achievements.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Crafted with ❤️ by [Nguyễn Mạnh Quyết](https://github.com/zeusato)*
