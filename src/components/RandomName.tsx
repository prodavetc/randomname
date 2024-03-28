import { useState } from 'react';
import ListNames from './ListNames';
import Winner from './Winner';
    
    
    const RandomName = () => {
      const [list, setList] = useState('')
      const [win, setWin] = useState('')


      const winner = (list: string) => {
        if(list){
          let myArray = list
          const win =  myArray[Math.floor(Math.random() * myArray.length)];
          setWin(win)

        }
      }
    
      
      const onPressHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value = (event.target as HTMLFormElement).list.value;

        setList(value.split(", "));

      }
    
    
      return (
        <>
    
          <h1 className="text-3xl font-bold underline text-center fade-in py-4">Random Name</h1>
          <ListNames
            lista={list}
            />
          <div className="float-none"></div>
          { win && <Winner winName={win} />}
          <div className="text-center">
            <form onSubmit={onPressHandler}>
              <input name='list' className="mr-4 w-200 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10" />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >Send</button>
            </form>
            <br />
              <button onClick={() => winner(list)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >Get Winner</button>
          </div>
        </>
      )
    }
    export default RandomName
    
    