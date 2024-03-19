import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/farms/")({
  component: () => <div className="p-3">Hello /farms/!</div>,
});
