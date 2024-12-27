
function Footer() {
  return (
   <div 
   className="bg-black w-full 
   h-auto border-t border-gray-300 font-normal text-sm
    text-gray-300
    
    ">
    
    <div className="w-full flex flex-row  sm:flex-col sm:-space-y-7 text-base">
      <div className="w-1/3 border-gray-300">
        <div className="m-5">
        <p>Adresse :</p>
        <p className="text-nowrap">Avenue Habib Bourguiba Kasserine 1200</p>
        </div>
      </div>
      <div className="w-1/3 border-white">
      <div className="m-5">
      <p>Contact :</p>
      <p className="text-nowrap">Tel : 96 873 277</p>
      <p className="text-nowrap">Email : laterrase@gmail.com</p>
      </div>
      </div>
      <div className="w-1/3 border-gray-300">
      <div className="m-5">
      <p>Follow :</p>
      <div className="flex">
      <p className="text-nowrap">Face</p>
      <p className="text-nowrap">Inst</p>
      </div>
      </div>
      </div>
    </div>

     <div className="  flex flex-col items-center  justify-center ">   
       <div className="flex justify-center items-center sm:flex-col m-4">
       <p>© Copyright <span className="text-green-500"> La terrase restaurant </span> All Rights Reserved </p>
       <p> Developed by Moez Aloui</p>
       </div>
    </div>
   </div>
  )
}

export default Footer