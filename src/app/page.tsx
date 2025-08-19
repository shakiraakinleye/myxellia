import Header from "@/components/organisms/header";
import Dashboard from "@/components/organisms/dashboard";
import FeaturedSection from "@/components/organisms/featured-section";
import CalendarDrawer from "@/components/molecules/calendar-drawer";

export default function Home() {
  return (
    <div className="min-h-screen font-playfair">
      <Header />
      <div className="relative w-full px-4 md:px-6 lg:px-8 xl:px-10 py-5 flex flex-col items-center gap-y-5">
        <Dashboard />
        <FeaturedSection />
        <CalendarDrawer />
      </div>
    </div>
  );
}
