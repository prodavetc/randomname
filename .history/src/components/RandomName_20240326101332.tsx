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

      <h1>Random Name</h1>
      <div className="card">
       {list}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <form onSubmit={onPressHandler}>
          <input name='list' />
          <button
            value='press'
            title='eee'
          >dddd</button>
        </form>
      </div>
    </>
  )
}
export default RandomName

