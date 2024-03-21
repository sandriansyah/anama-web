import { useNavigate } from "@solidjs/router";
import { CgChevronDoubleRight } from "solid-icons/cg";
import { TbUsers } from "solid-icons/tb";
import { OcHome2 } from "solid-icons/oc";
import { OcHomefill3 } from "solid-icons/oc";
import { SiHomeadvisor } from "solid-icons/si";
import { SiHomebridge } from "solid-icons/si";
import { FiHome } from "solid-icons/fi";
import { features } from "./listFeature";

interface SidebarMobileProps {
  sidebarOpen: boolean;
  onCloseSidebarMobile: () => void;
}

function SidebarMobile(props: SidebarMobileProps) {
  const navigate = useNavigate();

  return (
    <>
      <div
        class={`bg-cyan-500  w-48 h-screen z-50 fixed right-0 ease-in sm:hidden ${
          props.sidebarOpen ? "" : "hidden"
        } `}
      >
        <button
          class="flex  px-2 py-1 items-center gap-2 active:bg-cyan-100 active:rounded-md w-full"
          onClick={props.onCloseSidebarMobile}
        >
          <CgChevronDoubleRight size={35} color="#FDFEFE" />
        </button>

        {features.map((item) => {
          return (
            <div class="mt-4">
              <button
                onClick={() => navigate(item.url)}
                class="flex px-2 py-1 items-center gap-2 hover:bg-cyan-500 hover:border-none hover:rounded-md w-full focus:border-none"
              >
                {item.iconName}
                <span class={`text-white  ${props.sidebarOpen ? "" : ""}  `}>
                  {item.featureName}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SidebarMobile;
