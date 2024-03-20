export function GET(request: Request) {
  const mockJson = {
    data: {
      id: "hello",
      type: "hello",
      attributes: {
        message: "Hello from Serverless Functions",
      },
    },
  };
  return new Response(JSON.stringify(mockJson));
}
