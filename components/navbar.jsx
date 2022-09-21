import Link from "next/link";

export default function navbar(second) {
    return (
    <>
        
    <nav className="grid bg-white shadow-md p-2 bg-gray-600 text-lg grid-cols-3">
        <div className=" ml-3 font-bold font-serif text-white">Aplikasi Penjualan</div>
        <div className="pl-2 col-span-2"><Link href={'/'}>Dasboard</Link></div>
        <div></div>
        
    </nav>
    </>
    )
}