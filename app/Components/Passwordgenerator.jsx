"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Passwordgenerator = () => {
  const [input, setinput] = useState("");
  const [range, setrange] = useState(10);
  const [character, setcharacter] = useState(true);
  const [number, setNumber] = useState(true);
  
  const myref = useRef(null)

  const savingFunction = useCallback(()=>{
        let pass = "";
        let length = range ;
  
        let mystring = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (character === true) {
          mystring += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        }
        if (number=== true) {
          mystring += "0123456789";
        }
  
        for (let i = 0; i < length; i++) {
          let random = Math.floor(Math.random() * mystring.length);
          pass += mystring.charAt(random);
          }
          setinput(pass);
          myref.current.style.color = "black"
    },     
  [range, number, character]
)

const copyForClipboard =  ()=>{
   window.navigator.clipboard.writeText(myref.current.value);
   myref.current.style.color = "red"
   setTimeout(() => {
       alert("✅ Copied Successfully!")
   }, 1000);
}

useEffect(() => {
    savingFunction();
  }, [range, character, number]);

  return (
    <div className="mt-4 w-[70%] p-4 bg-gray-500/20 mx-auto rounded-lg">
      {/* input + Copy Btn     */}

      <div className="flex items-center justify-center gap-3 inputAndCopy">
        <input
          type="text"
          ref={myref}
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
          placeholder="Password"
          className="p-2 rounded-lg text-[2rem] w-3/4"
        />
        <button onClick={copyForClipboard} className="px-4 py-2 text-[2rem] text-white bg-black hover:bg-gray-800 rounded-lg ">
          Copy
        </button>
      </div>

      {/* Dependencies */}
      <div className="w-[85%] text-[2rem] p-4 bg-yellow-100 rounded-lg Dependencies mx-auto mt-4 flex justify-between items-center">
        <div className="firstDependency">
          <input
            type="range"
            id="range"
            min={6}
            max={50}
            onChange={(e) => setrange(e.target.value)}
          />
          <label htmlFor="range" className="m-2">
            Range: {range}
          </label>
        </div>

        <div className="secondDependency">
          <input
            type="checkbox"
            id="checkbox"
            className="scale-[2]"
            checked={character}
            onChange={() => {
              setcharacter((prev) => !prev);
            }}
          />
          <label htmlFor="checkbox" className="m-2">
            Characters
          </label>
        </div>

        <div className="thirdDependency">
          <input
            type="checkbox"
            id="checkbox2"
            className="scale-[2]"
            checked={number}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="checkbox2" className="m-2">
            Number
          </label>
        </div>
      </div>
    </div>
  );
};

export default Passwordgenerator;
