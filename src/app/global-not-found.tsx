import { Navbar } from "@/components/navbar";
import "./globals.css";
import { QuickContact } from "@/components/ui/QuickContact";

export default function NotFound() {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="relative flex w-full max-w-506 flex-col items-center justify-center overflow-x-hidden">
        <QuickContact />
        <Navbar />
        <div className="mt-32">Page Not found!</div>
      </body>
    </html>
  );
}
