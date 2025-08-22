# ShootOrder - Digital Marketing Agency Website

This is the official website for ShootOrder, a top-ranked digital marketing agency. This project is built with Next.js and showcases the services offered by ShootOrder, including SEO, PPC, content marketing, and social media marketing.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

*   **Framework**: [Next.js](https://nextjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)
*   **Linting**: [ESLint](https://eslint.org/)

## Project Structure

The project is organized as follows:

*   `src/app`: Contains the main application pages and layouts.
    *   `src/app/page.js`: The homepage of the application.
    *   `src/app/layout.js`: The main layout for the application.
    *   `src/app/services/[slug]/page.js`: The dynamic page for individual services.
*   `src/components`: Contains all the reusable React components.
    *   `src/components/Header`: The header component.
    *   `src/components/Footer`: The footer component.
*   `src/lib`: Contains utility functions and data fetching logic.
    *   `src/lib/services.js`: Functions for fetching service data.
*   `public`: Contains all the static assets, such as images and fonts.
*   `data`: Contains JSON files with data for services, blogs, and admin users.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.