import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
