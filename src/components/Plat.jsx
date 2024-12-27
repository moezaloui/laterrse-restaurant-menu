
function Plat(item) {
   // console.log("aaaaaaa",item.item.nom)
  return (
    <tr key={item.item.id} className="text-white">
                  <td className="w-40 sm:w-20  ">
                    <img src={item.item.pic} alt={item.item.nom} className="w-full" />
                  </td>
                  <td className="w-16 text-center ">
                    <p className="font-semibold sm:text-xl text-white text-2xl text text-left">{item.item.nom}</p>
                  </td>
                  <td className="w-auto">
                    <hr className="dotted mt-3" />
                  </td>
                  <td className="w-20 text-center">
                    <p className="w-20 font-bold text-2xl sm:text-xl text-yellow-500">{item.item.prix}DT</p>
                  </td>
                </tr>
  )
}

export default Plat