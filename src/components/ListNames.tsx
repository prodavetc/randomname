import SingleName from './SingleName';

interface ListNamesProps {
  lista: string[] | string;
}

const ListNames = (lista: ListNamesProps) => {

  const listado = lista.lista;
 

  return (
    <div className="flex space-x-2 items-center justify-center w-full ">
    <div className="card text-center justify-center pb-4">
       {
            Array.isArray(listado) && listado.map((value, key) => {
            return (
             <SingleName key={key} item={value} />
            )
          })
        }
      </div>
    </div>
  )
}
export default ListNames