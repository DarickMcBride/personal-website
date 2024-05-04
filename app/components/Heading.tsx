import Nav from "./Nav";

export default function Heading() {
  return (
    <div className="space-y-2">
      <h1 className="text-primary text-4xl sm:text-5xl font-bold">Darick McBride</h1>
      <h2 className="mt-3 font-medium text-white sm:text-2xl">Software Engineer</h2>
      <p className="mt-4 max-w-xs">Single sentence overview.</p>
      <Nav />
    </div>
  );
}
