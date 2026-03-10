# Sales Dashboard

A modern, high-performance sales management and visualization dashboard built with Next.js 15, React 19, and Tailwind CSS 4.

## 🚀 Features

- **Interactive Dashboard**: Real-time KPI tracking with dynamic charts using Recharts.
- **Sales Management**: Comprehensive table view for tracking sales transactions with sorting and filtering capabilities.
- **KPI Control**: easily update and manage Key Performance Indicators via a dedicated modal interface.
- **Data Import**: Seamlessly process and import sales data from Excel/XLSX files.
- **Secure Authentication**: Integrated with Supabase for robust user authentication and data security.
- **Modern UI/UX**: Responsive design powered by Tailwind CSS 4 and smooth micro-animations with Framer Motion.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: ExcelJS, XLSX, date-fns

## 🏁 Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm
- Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

## 📁 Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components (dashboard, tables, modals).
- `src/hooks`: Custom React hooks for data fetching and state management.
- `src/lib`: Core utility functions and Supabase client configuration.
- `supabase`: Database migrations and configuration.

## 📝 License

This project is private and for internal use only.
