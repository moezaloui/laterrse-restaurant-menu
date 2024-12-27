
function Buttons({value}) {
  return (
    
    <button 
    type="button" 
    // onClick={()=>{console.log("val",value)}}
    className="font-semibold ml-2 text-white p-2 w-auto text-xl rounded-lg">
        {value}
    </button>
  )
}

export default Buttons