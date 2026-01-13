import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const ptSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title:
    "Grow with the Top 3% Digital Marketing Agencies in India | #1 in Hyderabad – ShootOrder®",
  description:
    "ShootOrder® is an award-winning digital marketing agency based in Hyderabad, India, recognized among the top 3% of agencies globally. Trusted by 300+ clients worldwide, we help brands achieve measurable growth through performance-driven SEO, PPC, content marketing, and social media marketing solutions. Grow your brand with strategies that deliver real results.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://leadbooster-chat.pipedrive.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link
          rel="dns-prefetch"
          href="https://leadbooster-chat.pipedrive.com"
        />

        {/* GTM Script - Load early but non-blocking */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W4DMQQQ6');
          `}
        </Script>
      </head>

      <body className={`${ptSans.variable} font-sans antialiased`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4DMQQQ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />

        <main>{children}</main>

        {/* Background decoration - simplified */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <Footer />

        {/* Pipedrive LeadBooster - Load after page is interactive */}
        <Script id="pipedrive-leadbooster-config" strategy="lazyOnload">
          {`
            window.pipedriveLeadboosterConfig = {
              base: 'leadbooster-chat.pipedrive.com',
              companyId: 14154511626,
              playbookUuid: 'a1c1352f-7b6c-4f7a-9065-1f7ecde7c714',
              version: 2
            };
            (function () {
              var w = window;
              if (w.LeadBooster) {
                console.warn('LeadBooster already exists');
              } else {
                w.LeadBooster = {
                  q: [],
                  on: function (n, h) {
                    this.q.push({ t: 'o', n: n, h: h });
                  },
                  trigger: function (n) {
                    this.q.push({ t: 't', n: n });
                  },
                };
              }
            })();
          `}
        </Script>

        <Script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          strategy="lazyOnload"
          async
        />
      </body>
    </html>
  );
}
