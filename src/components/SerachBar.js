import React from "react";
import { View, StyleSheet, Text, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar= ({term,ontermchange,onsubmit})=>{

    
    return(
        <View style={ styles.background }>
        <Feather name="search" style={styles.iconstyle}/>
        <TextInput 
        
        autoCapitalize="none"
        autoCorrect={false}

        style={styles.inputstyle}
        placeholder="search"
        
        value={term}
        onChangeText={newterm => ontermchange(newterm)}
        onEndEditing={onsubmit}
        
        />
        </View>
    );
};

const styles=StyleSheet.create({

    background:{
        backgroundColor:'#F0EEFF',
        height: 40,
        marginHorizontal: 15,
        marginVertical:10,
        borderRadius:15,
        flexDirection:"row"
        
    },
    inputstyle:{
        flex: 1 ,
        
    
    },
    iconstyle:{

        fontSize:30,
        alignSelf: "center",
        marginHorizontal:15,
    }
});

export default SearchBar;
