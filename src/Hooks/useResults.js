import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default ()=>{

    const [results,setresults] = useState([]);
    const [errorMsg,setErrorMsg] =useState('');

    const searchApi= async (searchTerm)=>{

        console.log("Hi there!!!!")
        try{
       const response=await yelp.get('/search', {
           params: {
                limit: 50,
                term:searchTerm,
                location: 'san jose'

       }});

       setresults(response.data.businesses);
    } catch (err){
        setErrorMsg('Something went wrong');

    }
    };
        useEffect(()=>{

            searchApi('pasta');
        },[])

        return [searchApi ,errorMsg,results];
};