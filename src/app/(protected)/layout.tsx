import "../../app/globals.css";
import HeaderView from "@/shared/components/header.component";
import FooterView from "@/features/Footer/views/footer.view";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col ">
        <HeaderView/>
        <main className="flex-1 border-[#CBD4E1] bg-[#F9F9FB] flex flex-col overflow-hidden">
          {children}
        </main>
        <FooterView/>
      </div>
  );
}
