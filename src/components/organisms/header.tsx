import MainNavBar from "./main-nav-bar";
import PagesNavBar from "./pages-nav-bar";

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <MainNavBar />
      <PagesNavBar />
    </header>
  );
};

export default Header;
