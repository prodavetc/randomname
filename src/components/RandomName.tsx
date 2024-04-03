import { useContext, useMemo, useState } from 'react';
import ListNames from './ListNames';
import Winner from './Winner';
import Footer from './Footer';
import { StateContext } from '../hook/useContext/stateContext';
    
    
    const RandomName = () => {
      const userList = useContext(StateContext);

      const [list, setList] = useState<string[] | string | undefined>(userList?.list);
      const contextValue = useMemo(() => ({ lenght: userList?.length || 0, list, setList }), [list]);

      const [win, setWin] = useState('')
      const [loading, setLoading] = useState(false)

      const winner = () => {
        setLoading(true);
        if (list && Array.isArray(list)) {
          setTimeout(() => {            
            const win = list[Math.floor(Math.random() * list.length)];
            let indexWin = contextValue.list?.indexOf(win) ?? -1;

            const newList = [...(contextValue.list as string[])];
            newList.splice(indexWin, 1);
            setList(newList);
            setWin(win);
            setLoading(false);
          }, 3000);
        }
      };
    
      const onPressHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value = (event.target as HTMLFormElement).list.value;
        setList(value.split(", "));
      }
    
    
      return (
        <>
            <StateContext.Provider value={contextValue}>
          <h1 className="text-3xl font-bold underline text-center fade-in py-4">Random Name</h1>
          <ListNames />
          <div className="float-none"></div>
          { !loading && win && <Winner winName={win} />}
          { loading && 
            <div className="flex justify-center items-center h-12 pb-2">
              <div className="rounded-full h-1/2 w-20 bg-violet-800 animate-ping"></div>
            </div>
          }
          <div className="text-center">
            <form onSubmit={onPressHandler}>
              <input 
                name='list' 
                className="
                  mr-4 
                  w-1/3 
                  border 
                  rounded-xl 
                  text-gray-800 
                  focus:outline-none 
                  focus:border-indigo-300 
                  pl-4 
                  h-10" 
                placeholder="Enter names separated by commas and space"
                />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >Send</button>
            </form>
            <br />
              <button onClick={winner} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >Get Winner</button>
          </div>
         
          <Footer />
          </StateContext.Provider>
        </>
      )
    }
    export default RandomName
    
    