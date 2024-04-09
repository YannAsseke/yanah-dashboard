import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center ">
        <Image src="logo-paynah-pro.svg" height={100} width={100} alt="" />
        <div className="flex gap-4 justify-center">
          <div className="text-xs flex flex-col justify-center items-start">
            <div className="">
              Solde :<span className="font-bold">800 300 FCFA</span>
            </div>
            <div>
              Solde disponible : <span className="font-bold">800 300 FCFA</span>{" "}
            </div>
          </div>
          <div className="border border-slate-500 flex gap-2 p-3 items-center rounded-3xl bg-gray-100">
            <Image src="/total.png" height={50} width={50} alt="" />
            <div className="flex flex-col gap-2">
              <div className="text-xs flex flex-col justify-center items-start">
                <div className="font-bold">Total Energies CI</div>
                <div>Npa487738CI</div>
              </div>
            </div>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </nav>
      {/* <nav className="px-16 md:px-12 py-8 flex flex-row justify-beetween ">
        <Image src="logo-paynah-pro.svg" height={130} width={130} alt="" />
        <div>Hello World Yann</div>
      </nav> */}
      {/* <div>Hello World Yann</div> */}
    </>
  );
}
