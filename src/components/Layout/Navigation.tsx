import UserDrawer from "../UserDrawer";
import MenuModal from "./MenuModal";
import Search from "./Search";

type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
  return (
    <nav className="z-20 sticky top-0 flex items-center justify-between bg-black/70 backdrop-blur-md h-nav w-full gap-2 px-3">
      <MenuModal className="w-8" />
      <div className="flex items-center gap-2">
        <Search className="p-1 w-10 flex justify-center" />
        <UserDrawer />
      </div>
    </nav>
  );
};

export default Navigation;
