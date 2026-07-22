import Link from "next/link";

export default function Accounts() {
  const payingAccounts: string[] = [];

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/controlPannel"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold">Accounts</h1>
      </div>
      <div className="border-2 border-gray-700 rounded bg-[#262826] p-4 max-w-sm">
        <h2 className="text-sm font-semibold mb-3 text-gray-600">Paying Accounts</h2>
        <div className="border border-gray-700 rounded min-h-40 p-3">
          {payingAccounts.length === 0 ? (
            <p className="text-gray-400 text-sm">No paying accounts</p>
          ) : (
            <ul className="space-y-2">
              {payingAccounts.map((account) => (
                <li key={account} className="text-sm text-gray-700">{account}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
