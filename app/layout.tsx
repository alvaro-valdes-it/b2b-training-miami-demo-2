import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://b2b-training-miami-demo-2.vercel.app"),
  title: "B2B Training Miami — Demo 2",
  description: "Personal training, small group training, and online coaching in Hialeah, Florida.",
  openGraph: { title: "B2B Training Miami — Demo 2", description: "Personalized coaching built around your goals — in Hialeah or wherever you train.", type: "website", images: [{ url: "/og.png", width: 1536, height: 864, alt: "B2B Training Miami — Build a body that performs." }] },
  twitter: { card: "summary_large_image", title: "B2B Training Miami — Demo 2", description: "Personal training, small groups, and online coaching.", images: ["/og.png"] },
  icons: { icon: "/images/originals/logo.png", shortcut: "/images/originals/logo.png" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
