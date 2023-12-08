import { useRef } from "react";
import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";
// eslint-disable-next-line no-unused-vars

function App() {
  const ref = useRef(null);
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-700">
        <Background />
        <div ref={ref}  className="fixed top-0 w-full h-screen z-[2] p-1 flex gap-4 flex-wrap overflow-auto items-center justify-center">
           {/* making the cards here */}
           <Card size={'0.6 Mb'} color="bg-green-400" reference={ref}/>
           <Card size={'0.7 Mb'} color="bg-purple-400" reference={ref}/>
           <Card size="0.5 Mb" reference={ref}/>
           <Card size="0.8 Mb" color="bg-yellow-400" reference={ref}/>
           <Card size="0.4 Mb" reference={ref}/>
           <Card size="0.1 Mb" reference={ref}/>
           <Card reference={ref}/>
        </div>
      </div>
    </>
  );
}

export default App;
