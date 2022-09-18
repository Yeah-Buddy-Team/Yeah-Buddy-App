import {
  NavigationContainer,
  NavigationContainerRef,
  Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as RootScreens from '../screens';
import { RootStack, RootStackParamList } from '../types/System';
import { LIGHT_NAVIGATION_THEME } from '../constants';

const Stack = createNativeStackNavigator();

const theme: Theme = {
  dark: false,
  colors: LIGHT_NAVIGATION_THEME,
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
        screenOptions={{ headerShown: false }}
      >
        {Object.entries(RootScreens).map(([name, component]) => (
          <Stack.Screen
            key={name}
            getComponent={() => component}
            name={name as RootStack}
          />
        ))}
      </Stack.Navigator>
      {/* <Stack.Group
          screenOptions={{
            // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            cardStyleInterpolator:
              Platform.OS === 'ios'
                ? CardStyleInterpolators.forVerticalIOS
                : CardStyleInterpolators.forBottomSheetAndroid,
          }}
        >
          {Object.entries(ModalScreens).map(([name, component]) => (
            <Stack.Screen
              key={name}
              getComponent={() => component}
              name={name as RootStack}
            />
          ))}
        </Stack.Group> */}
    </NavigationContainer>
  );
}
