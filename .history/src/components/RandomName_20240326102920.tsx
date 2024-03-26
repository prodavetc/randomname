import { useState } from 'react';


const RandomName = () => {
  const [list, setList] = useState('')

  
  const onPressHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = (event.target as HTMLFormElement).list.value;
    console.log('value: ', value);

    setList(value);
    console.log('lists: ', list);

    if(list){

      
      let myArray = list.split(", ");
      const randomIndex = myArray[Math.floor(Math.random() * myArray.length)];

      console.log('randomIndex', randomIndex);

    }
  }
  return (
    <>

      <h1 className="text-3xl font-bold underline text-center fade-in">Random Name</h1>
      <div className="card text-center">
       {list}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="text-center">
        <form onSubmit={onPressHandler}>
          <input name='list' className="ml-4 w-200 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Send</button>
        </form>
      </div>
    </>
  )
}
export default RandomName

