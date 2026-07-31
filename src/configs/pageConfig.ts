interface PageConfigProps {
  name: string;
  route: string;
}

export const pageConfig = (): readonly PageConfigProps[] => {
  return [
    { name: "home", route: "/" },
    { name: "e-commerce", route: "e-commerce" },
  ];
};
