import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
