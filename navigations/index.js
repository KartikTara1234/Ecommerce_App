import React from 'react'

import { NavigationAction, NavigationContainer } from '@react-navigation/native'

import { TabNav } from './TabNav'

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <TabNav/>
        </NavigationContainer>
    )
}
