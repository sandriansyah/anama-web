import { useNavigate } from "@solidjs/router";
import { TbUsers } from "solid-icons/tb";
import { features } from "./listFeature";

interface SidebarDekstopProps {
  sidebarOpen: boolean;
}

function SidebarDekstop(props: SidebarDekstopProps) {
  const navigate = useNavigate();

  return (
    <>
      <aside
        class={`hidden lg:block px-3 z-50 bg-cyan-600 h-screen transition-transform duration-200 ease-in-out transform shadow ${
          props.sidebarOpen ? "w-44 " : "w-14 mt-12 fixed "
        } `}
      >
        <div
          class={`bg-cyan-500  mt-3 lg:h-28 rounded-md ${
            props.sidebarOpen ? "" : "hidden"
          } `}
        ></div>

        {features.map((item) => {
          return (
            <div class="mt-4">
              <button
                onClick={() => navigate(item.url)}
                class={`flex  py-1 items-center justify-center gap-2 hover:bg-cyan-500 hover:rounded-md w-full ${
                  props.sidebarOpen ? "" : ""
                }`}
              >
                {item.iconName}
                <span
                  class={`text-white ${props.sidebarOpen ? "" : "hidden"}  `}
                >
                  {item.featureName}
                </span>
              </button>
            </div>
          );
        })}
      </aside>
    </>
  );
}

export default SidebarDekstop;
