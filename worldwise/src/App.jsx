import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from './pages/AppLayout';
import '/index.css'
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { CitiesProvider } from './contexts/CitiesContext';


export default function App() {
  

  return (
    <CitiesProvider>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='app' element={<AppLayout />} >
        {/* <Route index element ={<CityList cities={cities} isLoading = {isLoading}/>} /> */}
        <Route index element ={<Navigate replace to='cities' />} />
          {/* <Route path='cities' element={<CityList cities={cities} isLoading = {isLoading}/>}></Route> */}
          <Route path='cities' element={<CityList />}></Route>
          <Route path = 'cities/:id' element={<City/>}/>
          {/* <Route path='countries' element={<CountryList cities={cities} isLoading = {isLoading}/>}></Route> */}
          <Route path='countries' element={<CountryList />}></Route>
          <Route path='form' element={<Form/>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </CitiesProvider>
  );
}
