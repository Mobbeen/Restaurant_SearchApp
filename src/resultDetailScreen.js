import React, { useEffect, useState } from "react";
import { View, Text , StyleSheet, FlatList,Image } from "react-native";

import yelp from "./api/yelp";

const resultsScreen=({navigation})=>{
    const[result,setresult]=useState(null);
    
    const id = navigation.getParam('id');


    console.log(result);
    const getresults =async (id)=>{
        
        const response =await yelp.get( `/${id}` );
            setresult( response.data);
        
    };

    useEffect(()=>{

        getresults(id)
    },[]);

    if(!result){

        return null;
    }
    
    return(
        <>
        <Text>{result.name}</Text>
        <FlatList
         data={result.photos}

         keyExtractor={(photos)=>photos}

         renderItem={({item})=>{ return(
            <Image style={styles.image} source={{ uri: item}}  />
        )
         }}
        />
        </>
    );

};

const styles= StyleSheet.create({
    image:{
        width:250,
        height:150,
    }
});

export default resultsScreen;