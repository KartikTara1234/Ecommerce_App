import React, {createContext, useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {ProductContext} from '../context/Productcontext'
import { ActivityIndicator } from 'react-native-paper'
import { AppCard } from '../Components/AppCard/AppCard'
import { AppScreen } from './AppScreen'

const HomeScreen = () => {

    const prods = createContext(ProductContext)
    const {_currentValue} = prods._currentValue
    
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000);
    

    if(loading){
        return(
            <View style={styles.prodLoading}>
                <ActivityIndicator animating={true} size="large" />
                <Text style={styles.textLoading}> Loading Products</Text>
            </View>
        )
    }

    return (
        <AppScreen>
            <View>
                <Text>Shoes</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={_currentValue.products} 
                    keyExtractor={(item) => item.id} 
                    renderItem={({item}) => 
                        (<AppCard 
                            title={item.title} price={item.price} 
                            image={item.image} items={item} />
                        )} />
            </View>
        </AppScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    prodLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLoading: {
        marginTop: '4%',
    }
})