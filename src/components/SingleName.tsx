type SingleNameProps = {
  item: string;
};

const SingleName = ({item}: SingleNameProps) => {
  return (
    <>
       {/* <div 
              className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm m-2">
        <svg className="cursor-pointer h-4 w-4 text-green-900"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div className="select-none">
            {item}
        </div>
    </div> */}
    <span id="badge-dismiss-purple" className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300">
{item}
<button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300" data-dismiss-target="#badge-dismiss-purple" aria-label="Remove">
<svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
</svg>
<span className="sr-only">Remove badge</span>
</button>
</span>
    </>
  )
}
export default SingleName