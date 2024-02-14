import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [characterAllowed, setCharacter] = useState(false);
  const [Password, setpassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += ",./*-+%$#@!^&()[]{}~<>?:;_=|!";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      //console.log(pass);
    }
    setpassword(pass);
    //console.log(pass);
  }, [length, numberAllowed, characterAllowed, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, setpassword]);
  //ref hook
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className=" text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  focus:bg-blue-200"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-2  mb-4 ">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer active:default:bg-blue-500"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-2 mb-4 ml-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-2 mb-4 ml-2">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
