import { useEffect, useMemo, useState } from "react"
import Hero from "./Hero"
import Main from "./Main"
import Footer from "./Footer";
import { useLocation, useSearchParams } from "react-router-dom";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
const Page1 = () => {
  const loc = useLocation();
  
  const [searchParam] = useSearchParams();
  
   //for safe search
  const [safeSearch, setSafeSearch] = useState(localStorage.getItem('safeSearch') ? localStorage.getItem('safeSearch') === 'true' ? true : false : "");

  //setting safeSearch in localStorage
  useEffect(() => {
    if (safeSearch !== "") localStorage.setItem("safeSearch", safeSearch);
  }, [safeSearch]);

  const queryParams = useMemo(() => {
    return {
      pathname: loc.pathname,
      order: (searchParam.get("order") !== "latest" && searchParam.get("order") !== "popular") ? "editors_choice=true" : searchParam.get("order") === "popular" ? "order=popular" : "editors_choice=false&order=latest",
      safeSearchquery : safeSearch === "" ? true : safeSearch,
    }
  }, [loc.pathname, searchParam , safeSearch]);

  const [fetchedData , setFetchedData] = useState(undefined);

  //fetch data
  const fetchData = async ({ queryKey }) => {
    let [_key, {pathname , order , safeSearchquery}] = queryKey;

    const url = `${["/videos/" , "/videos"].includes(pathname) ? `https://pixabay.com/api/videos/?key=${import.meta.env.VITE_API_KEY}&per_page=200&${order}&safesearch=${safeSearchquery}` : pathname === "/" ? `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&image_type=all&per_page=200&${order}&safesearch=${safeSearchquery}` : `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&image_type=${pathname.split("/")[1].substring(0, pathname.split("/")[1].length - 1)}&per_page=200&${order}&safesearch=${safeSearchquery}`}`
    
    const res = await axios.get(url);
    return res.data.hits;
  }

  const { data, error } = useQuery({
    queryKey: ["Home", queryParams],
    queryFn: fetchData,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 30,
  })

  useEffect(()=>{
    if(data && data.length > 0){
      setFetchedData(data);
    }
  },[data])

  useEffect(()=>{
    document.title = `Home-${loc.pathname === "/" ? "Images" : loc.pathname.slice(1 , 2).toUpperCase()+loc.pathname.slice(2,-1)}`;
  },[loc.pathname])

  useEffect(() => {
    if (error) {
      console.log("Error: ", error);
    }
  }, [error])

  if (!fetchedData) return <></>

  return <>
    <Hero setSafeSearch={setSafeSearch} safeSearch={safeSearch} />
    <Main data={fetchedData} />
    <Footer />
  </>
}

export default Page1