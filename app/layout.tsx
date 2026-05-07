import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Slack Distributor — Auto-post changelogs to relevant Slack channels",
  description: "Parse Git commits and distribute changelog updates to specific Slack channels based on file paths and teams. Built for engineering teams with multiple Slack channels and microservices."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="31718ca9-f204-4988-b721-f45ec677c644"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
