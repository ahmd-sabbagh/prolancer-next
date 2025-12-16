import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import ReduxProvider from "@/lib/store/ReduxProvider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </ReduxProvider>
  );
}
