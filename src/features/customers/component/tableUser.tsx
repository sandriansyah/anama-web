import Paging from "./paging";

const TableUser = () => {
  return (
    <div>
      <div class="relative  rounded-md shadow bg-white px-2 py-4 overflow-auto ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Fullname
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                Outstanding
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Wonder women
                    </th>
                    <td class="px-6 py-4">Perempuan</td>
                    <td class="px-6 py-4">Banjaran</td>
                    <td class="px-6 py-4">Rp. 5.000.000</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div class="mt-4 mx-2">
          <Paging />
        </div>
      </div>
    </div>
  );
};

export default TableUser;
