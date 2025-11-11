import "./globals.css";

export const metadata = {
  title: "FIRSTCARE Client Portal",
  description: "Client portal for FIRSTCARE Financial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100">{children}</body>
    </html>
  );
}
