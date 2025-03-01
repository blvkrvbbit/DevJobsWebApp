import { useStore } from "~/store/useStore";
import type { Route } from "./+types/home";
import Container from "~/components/Container/Container";
import JobList from "~/components/JobList/JobList";
import SearchBar from "~/components/SearchBar/SearchBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const {
    state: {
      data: { jobs },
    },
  } = useStore();
  return (
    <>
      <SearchBar />
      <Container className="mt-[9.7rem] lg:mt-[1.5rem] pb-[6.2rem] md:max-w-[68.9rem] mx-auto relative">
        <JobList jobs={jobs} />
      </Container>
    </>
  );
}
