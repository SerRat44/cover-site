export const pageConfig = [
  { name: "home", route: "/" },
  { name: "e-commerce", route: "e-commerce" },
] as const;

export type PageConfigProps = (typeof pageConfig)[number];
