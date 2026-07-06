// app/settings/page.tsx
import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/settings/ThemeToggle";

export default function SettingsPage() {
  const router = useRouter();
  return (
    <>
      <BackButton />

      <div className="max-w-2xl mx-auto p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Settings</h1>

        <section>
          <h2 className="text-lg font-semibold mb-3">Appearance</h2>
          <ThemeToggle />
        </section>
      </div>
    </>
  );
}
