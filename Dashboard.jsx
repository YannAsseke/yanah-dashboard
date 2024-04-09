import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      <div class="p-8 bg-slate-100 text-black grid grid-cols-8 grid-rows-12 gap-3 h-[550px] mt-8 rounded-xl">
        <div
          class="bg-white rounded-3xl p-5 row-span-4 col-span-2 text-[10px] "
          style={{ backgroundImage: `url('/bg.png')` }}
        >
          <div className="flex flex-row justify-between items-center">
            <div>Compte principal</div>
            <div>Franc cfa</div>
            <div>Lock</div>
          </div>
          <div className="mb-4">PA4839CI</div>
          <div className="flex flex-col">
            <div>Solde</div>
            <div className="font-bold text-[16px]">7 873 456 XOF</div>
          </div>
          <div className="flex flex-col">
            <div>Solde disponible</div>
            <div className="font-bold text-[16px]">7 873 456 XOF</div>
          </div>
        </div>
        <div class="row-span-3 bg-white p-3 rounded-2xl text-[10px]">
          <div>
            <div className="flex justify-between">
              <div className="bg-slate-200 p-2 rounded-md">
                <FaWallet size={16} />
              </div>
              <div>
                <CiMenuKebab size={16} />
              </div>
            </div>
            <div className="mb-6">Salaire Corporate</div>
            <div className="text-[8px]">Salaire disponible</div>
            <div className="font-bold text-[12px]">2.875.456 XOF</div>
          </div>
        </div>
        <div class="row-span-3 bg-white p-3 rounded-2xl text-[10px]">
          <div>
            <div className="flex justify-between">
              <div className="bg-slate-200 p-2 rounded-md">
                <FaWallet size={16} />
              </div>
              <div>
                <CiMenuKebab size={16} />
              </div>
            </div>
            <div className="mb-6">Salaire Corporate</div>
            <div className="text-[8px]">Salaire disponible</div>
            <div className="font-bold text-[12px]">2.875.456 XOF</div>
          </div>
        </div>
        <div class="row-span-3 bg-white p-3 rounded-2xl text-[10px]">
          <div>
            <div className="flex justify-between">
              <div className="bg-slate-200 p-2 rounded-md">
                <FaWallet size={16} />
              </div>
              <div>
                <CiMenuKebab size={16} />
              </div>
            </div>
            <div className="mb-6">Salaire Corporate</div>
            <div className="text-[8px]">Salaire disponible</div>
            <div className="font-bold text-[12px]">2.875.456 XOF</div>
          </div>
        </div>
        <div class="row-span-3 bg-white rounded-2xl p-5">card 5</div>
        <div class="row-span-7 col-span-2 bg-white rounded-2xl p-5">
          <div className="flex flex-row justify-between">
            <div>Point de vente</div>
            <div className="text-[12px]">voir tout</div>
          </div>
          <div></div>
        </div>
        <div class="row-span-9 col-span-4 bg-white rounded p-5">
          <div className="flex flex-row justify-between">
            <div>Transactions récentes</div>
            <div className="text-[12px]">voir tout</div>
          </div>
          <div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-8">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Surname
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Work Count
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4">Hakan</td>
                  <td class="px-6 py-4">Akgul</td>
                  <td class="px-6 py-4">22</td>
                </tr>

                <tr class="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4">John</td>
                  <td class="px-6 py-4">Smith</td>
                  <td class="px-6 py-4">4</td>
                </tr>

                <tr class="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4">Hakan</td>
                  <td class="px-6 py-4">Akgül</td>
                  <td class="px-6 py-4">22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class=" row-span-8 col-span-2 bg-white rounded-2xl p-5">
          <div>Opérations rapides</div>
          <div className="flex flex-row justify-between text-[10px] mt-4 bg-slate-200 rounded-md p-2">
            <div>Envoi dargent</div>
            <div>Lien de paiement</div>
            <div>Rechargement</div>
          </div>
          <div className="py-2">Bénéficiaires favoris</div>
          <div className="flex flex-row">
            <div className="p-1 mx-1 bg-orange-400 rounded-full">AD</div>
            <div className="p-1 mx-1 bg-blue-400 rounded-full">DB</div>
            <div className="p-1 mx-1 bg-purple-400 rounded-full">JK</div>
            <div className="p-1 mx-1 bg-green-400 rounded-full">RA</div>
            <div className="p-1 mx-1 bg-pink-400 rounded-full">YA</div>
          </div>
          <div></div>
        </div>
        <div class=" row-span-5 col-span-2 bg-white rounded-2xl p-5">
          <div className="flex flex-row justify-between">
            <div>Approbation en attente</div>
            <div className="text-[12px]">voir tout</div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* <div class="bg-blue-100 rounded p-5">card 6</div> */}
      </div>
    </>
  );
}
