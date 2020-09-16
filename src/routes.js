import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
const AppStack = createStackNavigator()
import Screen from './pages/Screen'



export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={ { headerShown: false } }>
                <AppStack.Screen name="Cadastro" component={Screen} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}