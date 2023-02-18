import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { makeid } from '../utils/helper';
import store from '../utils/store';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMesage = useSelector((store) => store.chat.messages);
  const [liveMesage, setLiveMessage] = useState();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: 'API',
          message: makeid(20) + 'Test',
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[500px]  rounded-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMesage.map((msg, index) => (
            <ChatMessage name={msg.name} message={msg.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className="w-full m-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Submir', liveMesage);
          dispatch(
            addMessage({
              name: 'Amar',
              message: liveMesage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          className="w-97 border border-black px-2"
          type="text"
          value={liveMesage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-lime-600 ">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
