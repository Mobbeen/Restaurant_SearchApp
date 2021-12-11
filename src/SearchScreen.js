import React ,{useEffect, useState} from "react";
import { View, StyleSheet, Text , ScrollView } from "react-native";
import SearchBar from "./components/SerachBar";
import useResults from "./Hooks/useResults";
import ResultList from "./components/ResultList";


const SearchScreen= ()=>{
    const [term,useterm]=useState('');
    const [searchApi,errorMsg,results]=useResults();
    
    const priceFilter= (price)=>{
        return results.filter( results =>{

            return results.price === price;
        }

        )
    }

    return(
        <>
        <SearchBar  
        term={term}  
        ontermchange={(newterm)=> useterm( newterm )}
        onsubmit={()=>searchApi(term)} 
         />    
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        
        
        <ScrollView>
            <ResultList title="Cost Effective" rs={priceFilter('$')} />
            <ResultList title="Bit Pricer" rs={priceFilter('$$')} />
            <ResultList title="Big Spender" rs={priceFilter('$$$')} />
        </ScrollView>
        </>
        
    );
};

const styles=StyleSheet.create({

    container:{
        marginLeft:15,
    }
});

export default SearchScreen;
