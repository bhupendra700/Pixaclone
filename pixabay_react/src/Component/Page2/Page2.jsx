import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from '../Page1/Footer'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { GlobalContext } from '../../App'
import axios from 'axios'
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

const Page2 = () => {

    const [safeSearch, setSafeSearch] = useState(localStorage.getItem('safeSearch') ? localStorage.getItem('safeSearch') === 'true' ? true : false : "");

    useEffect(() => {
        if (safeSearch !== "") localStorage.setItem("safeSearch", safeSearch);
    }, [safeSearch]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const [url, setUrl] = useState("");

    const { cat } = useParams();

    const [searchParam, setSearchParam] = useSearchParams();

    const loc = useLocation();

    useEffect(() => {
        let safeSearchQuery = safeSearch === "" ? true : safeSearch;

        let query = "";
        searchParam.has("orientation") ? query += "&orientation=" + searchParam.get("orientation") : null;

        searchParam.has("min_width") ? query += "&min_width=" + searchParam.get("min_width") : null;
        searchParam.has("min_height") ? query += "&min_height=" + searchParam.get("min_height") : null;

        if (searchParam.has("colors")) {
            const validColor = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"];

            const colorArray = searchParam.getAll("colors");

            let allValidColor = colorArray.filter((colorele) => {
                return validColor.includes(colorele);
            })

            for (let i = 0; i < allValidColor.length; i++) {
                query += `&colors=${allValidColor[i]}`;
            }
        }

        let order = (searchParam.get("order") !== "latest" && searchParam.get("order") !== "popular") ? "editors_choice=true" : searchParam.get("order") === "popular" ? "order=popular" : "editors_choice=false&order=latest";

        setUrl(cat === "videos" ? `https://pixabay.com/api/videos/?key=${import.meta.env.VITE_API_KEY}&per_page=100&${order}&safesearch=${safeSearchQuery}${query}` : cat === "images" ? `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&image_type=all&per_page=100&${order}&safesearch=${safeSearchQuery}${query}` : `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&image_type=${cat.substring(0, cat.length - 1)}&per_page=100&${order}&safesearch=${safeSearchQuery}${query}`);

    }, [searchParam, loc.pathname, safeSearch])

    const { ref, inView } = useInView()

    const fetchAPI = async ({ pageParam = 1 }) => {
        try {
            const res = await axios.get(url + `&page=${pageParam}`);
            return res.data;
        } catch (error) {
            throw error
        }

    }

    let { data, error, isFetching, fetchNextPage } = useInfiniteQuery({
        queryKey: ["search", url],
        queryFn: fetchAPI,
        getNextPageParam: (lastPages, allPages) => {
            return lastPages.totalHits / 100 > allPages.length ? allPages.length + 1 : undefined;
        },
        staleTime: 1000 * 60 * 20,
        placeholderData: keepPreviousData,
        enabled: !!url
    })

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView])

    if (!data) return <></>

    return <>
        <Header safeSearch={safeSearch} setSafeSearch={setSafeSearch} />
        <Main data={data} error={error} ref={ref} isFetching={isFetching} />
        <Footer />
    </>
}

export default Page2