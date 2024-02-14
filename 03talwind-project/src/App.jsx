//import { useState } from "react";
import Card from "./components/card";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // const usersname = {
  //   username: "Pushpa",
  //   age: 21,
  // };

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-4 ">
        Talwind test
      </h1>
      <Card name="Pushpa" />
      <Card name="Sarmili" btntxt="click me" />
      {/* ++++++++++++++ tailwindcss +++++++++++ */}
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:rounded-non rounded-full mx-auto"
          src="https://images.pexels.com/photos/19501170/pexels-photo-19501170/free-photo-of-young-woman-sitting-on-stairs-drinking-coffees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}
    </>
  );
}

export default App;
