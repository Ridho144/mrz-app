import ErrorPage from "../components/ErrorPage";

export default function Error400() {
  return (
    <ErrorPage
      code="400"
      description="Bad Request: The server could not understand the request due to invalid syntax."
    />
  );
}
