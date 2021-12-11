import React from "react";
import { Text ,View ,StyleSheet , FlatList, TouchableOpacity } from "react-native";
import ResultDetails from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList= ({title, rs, navigation}) =>{

        if(!rs.length){
            return null;
        }
    return(
        <View>
            <Text style={style.TextStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}

                data={rs}

                keyExtractor={rs=>rs.id}

                renderItem={({item})=>{

                    return(
                        <TouchableOpacity  onPress={()=> navigation.navigate('ResultScreen',{id: item.id})}>
                        <ResultDetails result={item} />
                        </TouchableOpacity>
                        
                        );
                }}
            />
        </View>
    );
};

const style=StyleSheet.create({
    TextStyle:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:10
    
    }
});

export default withNavigation(ResultList);