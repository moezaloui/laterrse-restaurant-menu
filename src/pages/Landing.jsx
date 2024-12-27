import Header from "../components/Header"
import NavBar from "../components/NavBar"
function Landing() {
  return (  
    <>
      <Header />
      <div className="pt-12">
        <NavBar />
        <section className="bg-black space-y-[230px] flex flex-col justify-center items-center sm:space-y-44 h-screen sm:h-[60vh]">
          <div className="flex flex-col justify-center items-center">
            <div className="text-white h-auto w-3/4 flex sm:w-[90%] justify-center items-center">
              <div className="text-center tracking-widest">
                <p className="text-xl uppercase font-thin">Votre adresse gourmande</p>
                <h1 className="text-5xl uppercase font-bold">
                  Bienvenue chez <span className="text-green-500 text-nowrap font-extrabold">La terrasse</span>
                </h1>
                <p className="text-xl uppercase font-thin">Food And Drinks</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


export default Landing;
