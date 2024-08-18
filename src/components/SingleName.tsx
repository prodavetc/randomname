import React from 'react'
import {useContext, useCallback} from 'react'
import {
  StateContext,
  StateContextProps,
} from '../hook/useContext/stateContext'

type SingleNameProps = {
  item: string
  index: number
}

const eliminarElemento = (
  list: string[],
  setList: (list: string[]) => void,
  index: number,
) => {
  const newList = [...list]
  newList.splice(index, 1)
  localStorage.setItem('list', JSON.stringify(newList))
  setList(newList)
}

const SingleName = ({item, index}: SingleNameProps) => {
  const {list, setList} = useContext(
    StateContext,
  ) as StateContextProps

  const handleEliminarElemento = useCallback(() => {
    eliminarElemento(list as string[], setList, index)
  }, [list, setList, index])

  return (
    <span className="inline-flex items-center px-2 py-1 mt-2 me-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300">
      {item.replace(',', '')}
      <button
        onClick={handleEliminarElemento}
        type="button"
        className="inline-flex items-center p-1 ms-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
        aria-label="Remove">
        <svg
          className="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Remove name</span>
      </button>
    </span>
  )
}

export default React.memo(SingleName)
