const THEME_STORAGE_KEY = "app-theme";

const script = `
(function () {
  try {
    var saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (!saved) return;
    var theme = JSON.parse(saved);
    var root = document.documentElement.style;
    if (theme.primaryColor) {
      root.setProperty("--mantine-color-primary", theme.primaryColor);
    }
    if (theme.secondaryColor) {
      root.setProperty("--mantine-color-secondary", theme.secondaryColor);
    }
  } catch (e) {}
})();
`;

export function ThemeInitScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
