import {
  NavigationContainer,
  NavigationContainerRef,
  Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as RootScreens from '../screens';
import * as ModalScreens from '../screens/modal';
import { RootStack, RootStackParamList } from '../types/System';
import { COLORS } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const theme: Theme = {
  dark: false,
  colors: COLORS.LIGHT_NAVIGATION_THEME,
};

export default function (): React.ReactElement | null {
  const navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList>>(null);
  const routeNameRef = React.useRef<string>();

  const [initialRoute, setInitialRoute] = React.useState<RootStack>(
    RootStack.SignIn,
  );

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
      }}
    >
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationDuration: 10,
        }}
      >
        <Stack.Screen key="Root" name="Root" component={BottomTabNavigator} />
        {Object.entries(RootScreens).map(([name, component]) => (
          <Stack.Screen
            key={name}
            getComponent={() => component}
            name={name as RootStack}
          />
        ))}
        <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
          }}
        >
          {Object.entries(ModalScreens).map(([name, component]) => (
            <Stack.Screen
              key={name}
              getComponent={() => component}
              name={name as RootStack}
            />
          ))}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
