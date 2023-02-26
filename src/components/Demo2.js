import React, { useRef, useState } from 'react';

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  console.log('Rendering');
  return (
    <div className="m-4 p-2 border border-black w-96 h-96">
      <div>
        <button
          className=" bg-orange-400 m-2 p-2 "
          onClick={() => {
            x = x + 1;
            console.log('x=', x);
          }}
        >
          Increase - x
        </button>
        <span className="font-bold text-xl">x= {x}</span>
      </div>
      <div>
        <button
          className=" bg-orange-400 m-2 p-2 "
          onClick={() => {
            setY(y + 1);
            console.log(y);
          }}
        >
          Increase - y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className=" bg-orange-400 m-2 p-2 "
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increase - Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
