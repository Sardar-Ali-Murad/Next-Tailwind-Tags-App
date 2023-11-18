import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "[Free] Youtube/TikTok Tags Generator",
  description:
    "Unlock the potential of your content with Tags Generator, a powerful API designed for seamless tag retrieval. Tailored for both YouTube and TikTok, this tool simplifies the process of enhancing your content's discoverability. Whether you're a developer, organization, or content creator, Tags Generator empowers you to effortlessly retrieve relevant tags using queries, titles, or keywords. Elevate your online presence and optimize your reach with this user-friendly solution, making content management a breeze for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
