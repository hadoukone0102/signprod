import "../../app/globals.css";
import HeaderView from "@/shared/components/header.component";
import FooterView from "@/features/Footer/views/footer.view";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col">
        <HeaderView/>
        <main className="flex flex-1 flex-col border-[#CBD4E1] bg-[#F9F9FB] px-3 pt-4 md:px-5 md:pt-6 lg:px-6">
          {children}
        </main>
        <FooterView/>
      </div>
  );
}
