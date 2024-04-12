"use client";
export default function About() {
  const handleClick = () => {
    console.log("haha");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About Page</h1>
      <button
        type="button"
        className="inline-block rounded-full border-2 border-gray-500 text-gray-500 hover:border-gray-600 hover:bg-gray-400 hover:bg-opacity-10 hover:text-gray-600 focus:border-gray-700 focus:text-gray-700 active:border-gray-800 active:text-gray-800 dark:border-gray-300 dark:text-gray-300 dark:hover:hover:bg-gray-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
      >
        <div
          className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        Click me
      </button>
    </main>
  );
}
