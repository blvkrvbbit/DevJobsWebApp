import type { Route } from "./+types/job";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Job() {
  return <>Job Page</>;
}
