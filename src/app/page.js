import AddTask from "./components/AddItem"
import Tasks from "./components/Items"

export default function Home() {
  return (
    <main className="">
    <div className="flex justify-between">
      <div className="p-4">
        <nav>
          <p class="bg-clip-text text-transparent bg-gradient-to-r to-white from-yellow-400 text-5xl font-black">
            Procrastinator
          </p>
        </nav>
      </div>
      <div className="px-5 min-h-screen flex flex-col gap-10 justify-center  basis-1/3 overflow-y-scroll  bg-white text-yellow-400">
        <AddTask />
      </div>
    </div>
    <Tasks />
    </main>
  );
}
