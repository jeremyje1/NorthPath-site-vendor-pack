import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "NorthPath Strategies – AI Picks & Shovels",
  description: "Compliance, integrations, and evals for EdTech AI builders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main className="container py-10">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
