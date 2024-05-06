import Nav from "./Nav";

export default function Heading() {
  return (
    <div className="space-y-2">
      <h1 className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-4xl font-bold text-primary text-transparent sm:text-5xl">
        Darick McBride
      </h1>
      <h2 className="mt-3 text-xl font-medium text-white md:text-2xl">
        Software Engineer
      </h2>
      <p className="mt-4 max-w-xs">I code things.</p>
      <Nav />
    </div>
  );
}
