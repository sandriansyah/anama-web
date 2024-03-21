import { BiRegularMenuAltLeft } from "solid-icons/bi";

interface AppBarProps {
  onClickMenu: () => void;
  sidebarOpen: boolean;
}

function AppBar(props: AppBarProps) {
  return (
    <header class={`shadow h-12 z-40 lg:z-50 top-0 w-screen bg-white`}>
      <div class="flex items-center justify-between p-2">
        <div class="flex items-center gap-4 ">
          <button
            class="p-1 rounded-md hover:outline-none hover:bg-cyan-500 hidden lg:block "
            onClick={props.onClickMenu}
          >
            <BiRegularMenuAltLeft class="h-6 w-6" color="#FDFEFE" />
          </button>
          <h3>Anama Electrinic</h3>
        </div>

        <div>
          <button
            class="p-2 rounded-md hover:outline-none hover:bg-cyan-500 lg:hidden "
            onClick={props.onClickMenu}
          >
            <BiRegularMenuAltLeft class="h-6 w-6" color="#FDFEFE" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default AppBar;
