import Navbar from "@/app/component/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-14">{children}</main>
    </>
  );
}
