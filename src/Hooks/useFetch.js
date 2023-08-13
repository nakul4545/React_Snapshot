import React , {useState , useEffect} from 'react'
import axios from 'axios'
//Here we are fetching data from API but using axios using fetch method is boaring because of convert it into json format
//for using axios u just need to install it npm install axios snapshot
// custom hooks are only for functional components
export default function useFetch(url="") {
    const [data , setData] = useState([]);
    const [error , setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true)
                const response = await axios(url)
                setData(response.data);
            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])//re-render for every change in url
  return {data , error , loading}
}
