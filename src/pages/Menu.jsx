import Title from "../components/Title";
import P1 from "../assets/product/menu-item-3.png"
import Plat from "../components/Plat";
import { useState } from "react";


const data = [
  {
    nom: "Couscous au poulet",
    prix: "12",
    pic: P1,
    categorie: "Plats",
    id: 1,
  },
  {
    nom: "Couscous au poisson",
    prix: "14",
    pic: P1,
    categorie: "Plats",
    id: 2,
  },
  {
    nom: "Lablabi",
    prix: "6",
    pic: P1,
    categorie: "Plats",
    id: 3,
  },
  {
    nom: "Ojja merguez",
    prix: "8",
    pic: P1,
    categorie: "Plats",
    id: 4,
  },
  {
    nom: "Ojja crevettes",
    prix: "10",
    pic: P1,
    categorie: "Plats",
    id: 5,
  },
  {
    nom: "Brick à l'œuf",
    prix: "4",
    pic: P1,
    categorie: "Entrées",
    id: 6,
  },
  {
    nom: "Brick thon et pommes de terre",
    prix: "5",
    pic: P1,
    categorie: "Entrées",
    id: 7,
  },
  {
    nom: "Sandwich fricassé",
    prix: "3",
    pic: P1,
    categorie: "Sandwichs",
    id: 8,
  },
  {
    nom: "Sandwich escalope",
    prix: "7",
    pic: P1,
    categorie: "Sandwichs",
    id: 9,
  },
  {
    nom: "Sandwich thon harissa",
    prix: "5",
    pic: P1,
    categorie: "Sandwichs",
    id: 10,
  },
  {
    nom: "Sandwich chawarma",
    prix: "6",
    pic: P1,
    categorie: "Sandwichs",
    id: 11,
  },
  {
    nom: "Thé aux pignons",
    prix: "3",
    pic: P1,
    categorie: "Boissons",
    id: 12,
  },
  {
    nom: "Thé à la menthe",
    prix: "2",
    pic: P1,
    categorie: "Boissons",
    id: 13,
  },
  {
    nom: "Café turc",
    prix: "2",
    pic: P1,
    categorie: "Boissons",
    id: 14,
  },
  {
    nom: "Café crème",
    prix: "3",
    pic: P1,
    categorie: "Boissons",
    id: 15,
  },
  {
    nom: "Jus d'orange frais",
    prix: "5",
    pic: P1,
    categorie: "Boissons",
    id: 16,
  },
  {
    nom: "Jus de fraise",
    prix: "6",
    pic: P1,
    categorie: "Boissons",
    id: 17,
  },
  {
    nom: "Citronnade",
    prix: "4",
    pic: P1,
    categorie: "Boissons",
    id: 18,
  },
  {
    nom: "Makloub escalope",
    prix: "8",
    pic: P1,
    categorie: "Sandwichs",
    id: 19,
  },
  {
    nom: "Chapati thon",
    prix: "5",
    pic: P1,
    categorie: "Sandwichs",
    id: 20,
  },
  {
    nom: "Mlawi merguez",
    prix: "7",
    pic: P1,
    categorie: "Sandwichs",
    id: 21,
  },
  {
    nom: "Mlawi escalope",
    prix: "8",
    pic: P1,
    categorie: "Sandwichs",
    id: 22,
  },
  {
    nom: "Tajine tunisien",
    prix: "10",
    pic: P1,
    categorie: "Plats",
    id: 23,
  },
  {
    nom: "Salade méchouia",
    prix: "5",
    pic: P1,
    categorie: "Entrées",
    id: 24,
  },
  {
    nom: "Salade tunisienne",
    prix: "4",
    pic: P1,
    categorie: "Entrées",
    id: 27,
  },
  {
    nom: "Mahboul",
    prix: "4",
    pic: P1,
    categorie: "Sandwitch",
    id: 26,
  },
  {
    nom: "Mahboul",
    prix: "10",
    pic: P1,
    categorie: "sp",
    id: 25,
  },
];
const btnValue = [
  {
    value:"Sandwitch",
    cat:"Sandwichs",
    id:1
  },
  {
    value:"Specialité Terrasse",
    cat:"sp",
    id:2
  },{
    value:"Plat",
    cat:"Plats",
    id:3
  },
  {
    value:"Boissons",
    cat:"Boissons",
    id:4
  },
 
]


function Menu() {
  const [Cat, setCat] = useState("Tous")
 
  const PlatsFiltre = Cat === "Tous" ? data : data.filter(plat=>plat.categorie === Cat)
    return (
      <section className="bg-black h-auto  ">
        <Title title="- MENU -" />
        
       
        <div className="flex flex-col justify-center items-center text-white">
           <div className=" w-auto sm:w-full flex justify-center flex-wrap mt-6 mb-6  ">
           <button 
                
               onClick={()=>{setCat("Tous")}}
               className="font-semibold ml-2 text-white p-2 w-auto text-xl rounded-lg"
               >Tous</button>
           {btnValue
              .map((item) => (
               <button 
               key={item.id} 
               onClick={()=>{setCat(item.cat)}}
               className="font-semibold ml-2 text-white p-2 w-auto text-xl rounded-lg"
               >{item.value}</button>
              ))}
           
        
            
            </div> 
          <table className="w-3/4 sm:w-full sm:m-2 sm:mb-20 mb-20">
            <tbody className=" w-3/4">
              {PlatsFiltre
              // .filter(cat=>cat.categorie===Cat)
              .map((item) => (
               <Plat key={item.id} item={item}/>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  
  export default Menu;