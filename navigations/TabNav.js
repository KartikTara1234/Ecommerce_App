import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AntDesign} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

import HomeScreen from '../Screens/HomeScreen'
import CartScreen from '../Screens/CartScreen'
import UserScreen from '../Screens/UserScreen'


const Tab = createBottomTabNavigator()

const TabIcons ={
    Home: "home",
    Cart: "shoppingcart",
    User: "user"
}

export const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                title: "",
                tabBarIcon :() => (
                    <AntDesign name="home" size={24} color="black" />
                )    
            }} name='Home' component={HomeScreen} />
            <Tab.Screen options={{
                title: "",
                tabBarIcon :() => (
                    <AntDesign name="shoppingcart" size={24} color="black" />
                )    
            }} name='Cart' component={CartScreen} />
            <Tab.Screen options={{
                title: "",
                tabBarIcon :() => (
                    <Feather name="user" size={24} color="black" />
                )    
            }} name='User' component={UserScreen} />
        </Tab.Navigator>
    )
}

