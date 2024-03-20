import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => {
    const data = fetch("/api/hello").then((res) => res.json());
    return data;
  },
  component: Index,
});

function Index() {
  const data = Route.useLoaderData();
  return (
    <div className="p-3">
      <h3>Welcome Home!</h3>
      <div>{data.data.attributes.message}</div>
    </div>
  );
}
