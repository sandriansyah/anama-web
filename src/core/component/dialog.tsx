import { Component, JSX } from "solid-js";

interface ModalDialogMobileProps {
  children: Element;
  isOpen: boolean;
}

type ParentProps<P = {}> = P & {
  children?: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
};
type ParentComponent<P = {}> = Component<ParentProps<P>>;

const ModalDialogMobile: ParentComponent = (props) => {
  return (
    <>
      {props.isOpen ? (
        <div class="overflow-hidden h-screen w-screen top-0 left-0 right-0  z-50 fixed ">
          <div class="bg-cyan-700 mx-5 rounded-lg mt-10">
            <div class="px-5 pt-4 flex justify-end w-full ">
              <button
                onClick={props.onClose}
                class="text-red-400 font-bold rounded-2xl bg-white w-7 h-7 shadow"
              >
                X
              </button>
            </div>
            {props.children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalDialogMobile;
