import React, { useMemo, useState } from 'react';
import { findPrime } from '../utils/helper';

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);

  //Havy Operation
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        'm-4 p-2 w-96 border border-black h-96 ' +
        (isDark && 'bg-gray-900 text-white')
      }
    >
      <div>
        <button
          className="m-5 p-2 bg-orange-400"
          onClick={() => setIsDark(!isDark)}
        >
          Toogle
        </button>
      </div>
      <div>
        <input
          type="number"
          value={text}
          className="border border-black w-72 px-2 text-black"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="m-4">
        <h1>n'th Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
