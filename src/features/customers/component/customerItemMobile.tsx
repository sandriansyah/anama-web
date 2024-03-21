import { FaSolidCircleUser } from "solid-icons/fa";

const CustomerItemMobile = () => {
  return (
    <>
      <div class="border-2 mb-3 border-cyan-500 bg-cyan-50 hover:text-white hover:bg-cyan-800 rounded-lg h-16 flex items-center px-2 justify-between">
        <div class="flex">
          <div class="mr-4">
            <FaSolidCircleUser size={40} color="#D7DBDD" />
          </div>
          <div>
            <h6 class="font-bold ">Wonder women</h6>
            <p class="text-sm">Pamengpeuk</p>
          </div>
        </div>
        <div>
          <h3>Rp, 5000.000.000</h3>
        </div>
      </div>
    </>
  );
};

export default CustomerItemMobile;
