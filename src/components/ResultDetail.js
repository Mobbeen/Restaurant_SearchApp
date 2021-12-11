import React from "react";

import { View , Text , StyleSheet, Image} from "react-native";



const ResultDetails= ({result}) =>{

    return <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri: result.image_url}} />
        <Text style={styles.textStyle} >{result.name}</Text>
        <Text>{result.rating} Ratings , {result.review_count} Reviews</Text>
    </View>
};

const styles= StyleSheet.create({

    imageStyle:{

        width:250,
        height:150,
        borderRadius:4,
        marginBottom:6
    },
    textStyle:{
        fontSize:16,
        fontWeight:'bold'
    },
    container:{
        marginLeft: 15,
        marginBottom:10,
    }
});


export default ResultDetails;

