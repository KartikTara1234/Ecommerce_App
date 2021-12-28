import React, { useState } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { Favourite } from '../Favourites/Favourites'

export const AppCard = ({title, price, image, items, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={style.card}>
            <Favourite product={items}/>
            <View style={style.imageContainer}>
                <Image source={require('../../assets/images/ima.png')} style={{height: "100%", width: "100%"}} />
            </View>

            <View style={style.cardBody}>
                <View style={style.cardContent}>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.price}>{price}</Text>
                </View>

                <View style={style.star}>
                    <AntDesign name="star" size={18} color="orange" />
                    <AntDesign name="star" size={18} color="orange" />
                    <AntDesign name="star" size={18} color="orange" />
                    <AntDesign name="star" size={18} color="orange" />
                    <AntDesign name="star" size={18} color="orange" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        width: 300,
        backgroundColor: "#418185",
        paddingBottom: 10,
        marginHorizontal: 5,
        borderRadius: 20
    },
    imageContainer: {
        height: 130,
        width:290,
    },
    cardBody: {
        padding: 5,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginRight:90,
        color: "white"
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white"
    },
    star: {
        flexDirection: 'row',
        marginLeft: 5
    }
})

