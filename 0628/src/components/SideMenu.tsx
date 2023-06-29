import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface SideMenuProps {
  children: ReactNode;
}

const SideMenu: FC<SideMenuProps> = ({ children }) => {
  return (
    <div className="bg-red-100 min-h-screen flex">
      <nav className="bg-yellow-100 w-60 shrink-0">
        <div>프로젝트 다덴부</div>
        <div className="bg-orange-100 grow pt-12">
          <Link href="/">
            <button>Dadenbu ???</button>
          </Link>
        </div>
        <div>Created by ollok.</div>
      </nav>
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
};

export default SideMenu;
