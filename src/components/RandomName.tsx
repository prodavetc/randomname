import {useContext, useMemo, useState, useEffect} from 'react'
import ListNames from './ListNames'
import Winner from './Winner'
import Footer from './Footer'
import {StateContext} from '../hook/useContext/stateContext'
import {confetties, updateList} from '../utils'
import StatCounter from '../utils/Statcounter'

const RandomName = () => {
  const userList = useContext(StateContext)

  const [list, setList] = useState<string[] | string | undefined>(
    userList?.list,
  )
  const contextValue = useMemo(
    () => ({length: userList?.length || 0, list, setList}),
    [list, userList?.length],
  )

  const [win, setWin] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedList = localStorage.getItem('list')
    if (storedList) {
      try {
        const parsedList = JSON.parse(storedList)
        setList(parsedList)
      } catch (e) {
        console.error('Failed to parse list from localStorage', e)
      }
    }
  }, [])

  const winner = () => {
    setLoading(true)
    if (list && Array.isArray(list)) {
      setTimeout(() => {
        const win = list[Math.floor(Math.random() * list.length)]
        const indexWin = contextValue.list?.indexOf(win) ?? -1
        confetties()

        const newList = [...(contextValue.list as string[])]
        newList.splice(indexWin, 1)
        setList(newList)
        localStorage.setItem('list', JSON.stringify(newList))
        setWin(win)
        setLoading(false)
      }, 3000)
    }
  }

  const disabled = contextValue.list?.length ? false : true

  const onPressHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    const value = (event.target as HTMLFormElement).list.value
    if (value) {
      const updatedList = updateList(value)
      localStorage.setItem('list', JSON.stringify(updatedList))
      setList(updatedList)
    }
  }

  return (
    <>
      <StateContext.Provider value={contextValue}>
        <h1 className="text-3xl font-bold underline text-center fade-in py-4">
          Random Winner
        </h1>
        <ListNames />
        <div className="float-none"></div>
        {!loading && win && <Winner winName={win} />}
        {loading && (
          <div className="flex justify-center items-center h-12 pb-2">
            <div className="rounded-full h-1/2 w-20 bg-violet-800 animate-ping"></div>
          </div>
        )}
        <div className="text-center">
          <form onSubmit={onPressHandler}>
            <input
              name="list"
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </form>
          <br />
          <button
            onClick={winner}
            disabled={disabled}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Winner
          </button>
        </div>
        <Footer />
      </StateContext.Provider>
      <StatCounter sc_project={12988526} sc_security="a618bf39" />
    </>
  )
}
export default RandomName
