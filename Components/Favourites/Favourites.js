import React, { useContext } from "react";

import {TouchableOpacity, StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {FavouriteContext} from './../../context/Favouritecontext'

export const Favourite = () => {

    const favs = useContext(FavouriteContext)

    return(
        <TouchableOpacity style={styles.favs}>
            <AntDesign name="hearto" size={24} color="red" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    favs: {
        position: 'absolute',
        left: 15,
        top: 20,
        zIndex: 100,
    }
})