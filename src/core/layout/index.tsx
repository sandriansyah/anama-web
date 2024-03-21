// import { Link } from "solid-app-router";
import { BiRegularMenuAltLeft } from "solid-icons/bi";
import { TbUsers } from "solid-icons/tb";
import { Outlet } from "@solidjs/router";
import { createSignal } from "solid-js";
import { AiFillCloseCircle } from "solid-icons/ai";
import { IoCloseCircle } from "solid-icons/io";
import { FaSolidArrowRightLong } from "solid-icons/fa";
import { CgChevronDoubleRight } from "solid-icons/cg";
import AppBar from "./appBar";
import SidebarDekstop from "./sideBarDekstop";
import SidebarMobile from "./sideBarMobile";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  const onClickMenu = () => {
    setSidebarOpen(!sidebarOpen());
  };
  const onCloseSidebarMobile = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div class={`h-screen bg-cyan-50 flex `}>
        <SidebarDekstop sidebarOpen={sidebarOpen()} />
        <SidebarMobile
          sidebarOpen={sidebarOpen()}
          onCloseSidebarMobile={onCloseSidebarMobile}
        />

        <div
          class={`flex flex-col flex-1 overflow-hidden  ${
            sidebarOpen() ? "" : "w-full"
          }`}
        >
          <AppBar onClickMenu={onClickMenu} sidebarOpen={sidebarOpen()} />

          <div
            class={` mx-2 mt-4 overflow-auto p-4 ${
              sidebarOpen() ? "" : "lg:ml-16"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default Layout;
