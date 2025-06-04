import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

function BookItem({book}) {
    return(
        <View style={styles.item}>
            <Image source={{uri: book.image}} style={styles.image} />

            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
        </View>
    );
}

const styles =StyleSheet.create({
    item :{
        flexDirection:'row',
        padding:12,
        marginVertical:6,
        backgroundColor:'#f9f9f9',
        borderRadius:10,
        alignItems:'center'
    },
    image:{
        width:60,
        height:90,
        borderRadius:4,
        marginRight:12
    },
    info:{
        flex:1
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
       
    },
    author:{
        fontSize:14,
        color:'#666',
        marginTop:4,
        flexDirection:'row',
        paddingLeft:5
    }
})

export default BookItem;