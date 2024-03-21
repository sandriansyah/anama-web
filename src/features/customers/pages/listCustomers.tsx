import FormCustomer from "../component/formCustomer";
import TableUser from "../component/tableUser";
import CustomerItemMobile from "../component/customerItemMobile";
import { RiSystemAddCircleFill } from "solid-icons/ri";
import { createSignal } from "solid-js";
import ModalDialogMobile from "../../../core/component/dialog";
import TextInput from "../../../core/component/textInput";
import TextInputArea from "../../../core/component/textArea";
import Button from "../../../core/component/button";

function ListCustomer() {
  const [isOpenDialog, setIsOpenDialog] = createSignal(false);

  const onCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <>
      <ModalDialogMobile isOpen={isOpenDialog()} onClose={onCloseDialog}>
        <form class=" px-5 pb-5">
          <TextInput label="First Name" />
          <TextInput label="Last Name" />
          <TextInputArea label="Address" />
          <Button contain="Submit" />
        </form>
      </ModalDialogMobile>

      <div class=" lg:flex lg:w-full lg:gap-2 hidden  ">
        <div class="md:w-2/3 ">
          <TableUser />
        </div>
        <div class=" w-1/3">
          <FormCustomer />
        </div>
      </div>

      <div class="lg:hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return <CustomerItemMobile />;
        })}
        <button
          class="fixed right-4 bottom-10 rounded-2xl "
          onclick={() => setIsOpenDialog(true)}
        >
          <RiSystemAddCircleFill size={70} color="#2980B9" />
        </button>
      </div>
    </>
  );
}

export default ListCustomer;
