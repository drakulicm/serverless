import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/farms/$contractAddress")({
  component: () => <div className="p-3">Hello /farms/$contractAddress!</div>,
});
