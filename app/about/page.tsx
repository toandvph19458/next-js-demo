"use client";
export default function About() {
  const handleClick = () => {
    console.log("haha");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About Page</h1>
      <button onClick={handleClick}>click me</button>
    </main>
  );
}
