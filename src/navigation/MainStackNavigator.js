import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen from '../screens/ListScreen'
import ModalScreen from '../screens/ModalScreen'

const Stack = createNativeStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='modal'
        headerMode='none'
        screenOptions={{
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp'
              })
            }
          })
        }}>
        <Stack.Screen name='List' component={ListScreen} options={{title:"To Do List", headerTitleAlign:'center', backgroundColor:'#34a4eb'}}/>
        <Stack.Screen name='Modal' component={ModalScreen} options={{title:"Edit To Do List", headerTitleAlign:'center', backgroundColor:'#34a4eb'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator