import Header from "@/components/organisms/header";
import Dashboard from "@/components/organisms/dashboard";

export default function Home() {
  return (
    <div className="min-h-screen font-playfair">
      <Header />
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-10 border-4 border-green-700 flex justify-center ">
        <Dashboard />
      </div>
    </div>
  );
}
