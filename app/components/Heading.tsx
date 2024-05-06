import Nav from "./Nav";

export default function Heading() {
  return (
    <div className="space-y-2">
      <h1 className="text-primary text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-400 inline-block text-transparent bg-clip-text">
        Darick McBride
      </h1>
      <h2 className="mt-3 font-medium text-white text-xl md:text-2xl">
        Software Engineer
      </h2>
      <p className="mt-4 max-w-xs">I code things.</p>
      <Nav />
    </div>
  );
}
