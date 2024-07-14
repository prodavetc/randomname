import {useContext} from 'react'
import SingleName from './SingleName'
import {StateContext} from '../hook/useContext/stateContext'
import {StateContextProps} from '../hook/useContext/stateContext'

const ListNames = () => {
  const {list} = useContext(StateContext) as StateContextProps

  return (
    <div className="flex space-x-2 items-center justify-center w-full ">
      <div className="card text-center justify-center pb-4 w-4/6">
        {Array.isArray(list) &&
          list.map((value, key) => (
            <SingleName key={key} item={value} index={key} />
          ))}
      </div>
    </div>
  )
}
export default ListNames
