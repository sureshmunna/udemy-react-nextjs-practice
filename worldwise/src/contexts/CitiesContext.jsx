import { createContext,useState,useEffect, useContext } from "react";

const BASE_URL = 'http://localhost:9000'

const CitiesContext=createContext();
function CitiesProvider({children}) {
  const [cities,setCities] = useState([]);
  const [isLoading , setLoading] = useState(false);
  const [currentCity,setCurrentCity]= useState({});

  useEffect(function(){
      setLoading(true);
        async function fetchCities(){
            try{
            const res = await fetch(`${BASE_URL}/cities`);
            const data = await res.json();
            setCities(data);
          }
          catch{
          alert ('There is an error while fetching the data...')
        }
        finally{
          setLoading(false);
        }
      }
      fetchCities();
    },[] 
  );
  async function getCity(id){
            try{
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
          }
          catch{
          alert ('There is an error while fetching the data...')
        }
        finally{
          setLoading(false);
        }
  }
  return <CitiesContext.Provider value={{
    cities,isLoading,currentCity,getCity
  }}>
    {children}
  </CitiesContext.Provider>
}
function useCities (){
  const context = useContext(CitiesContext);
  if(!context){
    throw new Error(" Cities Context were used out side of the Cities Provider");
  }
  return context;
}
export {CitiesProvider ,useCities };