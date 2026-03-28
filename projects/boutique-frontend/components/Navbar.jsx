import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
                Boutique Match
            </Link>

            <div className="flex gap-6 text-sm font-medium">
                <Link href="/builder" className="hover:text-gray-500">Builder</Link>
                <Link href="/admin" className="hover:text-gray-500">Admin</Link>
            </div>
        </nav>
    );
}