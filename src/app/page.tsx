import Hero from "./(sections)/hero";

export default function Home() {
  return (
    <main className="px-40">
      <Hero />
      <section className="grid grid-cols-2 gap-12 py-12">
        {
          /**
           * column 1 , has a flex , two items first grow 1 the second auto
           * first is a header 3,
           * second is a div with a shape and image of z index 50 , justify bottom , items stretch
           */
        }
        <div className="flex align-bottom">
          <h3 className="text-6xl font-medium">
            #01
          </h3>
          <div className="flex-grow flex flex-col items-center justify-end">
            <div className="bg-first-color-light h-44 w-[400px] rounded-[200px]">

            </div>
            <img  src="/list-yoga.png" alt="list-yoga" className="w-[350px] h-[217px] mt-[-229px]" />
            </div>
          

        </div>
        </section>
    </main>
  );
}
