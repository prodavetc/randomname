import { useState } from 'react';
import ListNames from './ListNames';
import Winner from './Winner';
import Footer from './Footer';
    
    
    const RandomName = () => {
      const [list, setList] = useState('')
      const [win, setWin] = useState('')
      const [loading, setLoading] = useState(false)

      const winner = (list: string) => {
        setLoading(true)
        if(list){
          setTimeout(() => {   
            let myArray = list
            const win =  myArray[Math.floor(Math.random() * myArray.length)];
            setWin(win)
            setLoading(false)
          }, 3000);

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
          { !loading && win && <Winner winName={win} />}
          { loading && 
            <div className="flex justify-center items-center h-12 pb-2">
              <div className="rounded-full h-1/2 w-20 bg-violet-800 animate-ping"></div>
            </div>
          }
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
         

          <Footer />
        </>
      )
    }
    export default RandomName
    
    