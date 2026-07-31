import { loadUserSettings } from "@/app/actions/userSettings";
import { UserSettingsProvider } from "./UserSettingsProvider";

export async function UserSettingsShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await loadUserSettings();

  return (
    <UserSettingsProvider initialSettings={settings}>
      {children}
    </UserSettingsProvider>
  );
}
