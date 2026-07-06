import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-900 text-white px-6 py-3 flex items-center gap-6">
        <span className="font-bold text-lg">Admin Panel</span>
        <Link href="/admin/controlPannel" className="text-sm hover:underline">Control Panel</Link>
        <Link href="/admin/scrapers" className="text-sm hover:underline">Scrapers</Link>
        <Link href="/admin/accounts" className="text-sm hover:underline">Accounts</Link>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
