import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { View, Text, Icon } from '../components/Common';
import IconMap from '../components/Common/Icon/IconMap';
import * as COLORS from '../constants';
import { WorkoutPlan, Calendar, Friends, MyProfile } from '../screens';

const BottomTab = createBottomTabNavigator();

type TabBarItemType = {
  name: string;
  icon: keyof typeof IconMap;
  focusedIcon: keyof typeof IconMap;
};

const TabBarItems: { [key in string]: TabBarItemType } = {
  WorkoutPlan: {
    name: 'WorkoutPlan',
    icon: 'WorkoutPlan',
    focusedIcon: 'WorkoutPlanActive',
  },
  Calendar: {
    name: 'Calendar',
    icon: 'Calendar',
    focusedIcon: 'CalendarActive',
  },
  Friends: {
    name: 'Friends',
    icon: 'Friends',
    focusedIcon: 'FriendsActive',
  },
  MyProfile: {
    name: 'MyProfile',
    icon: 'MyProfile',
    focusedIcon: 'MyProfileActive',
  },
};

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const focusedOptions = descriptors[state.routes[state.index].key].options as {
    tabBarVisible: boolean;
  };

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <View
      style={{
        height: 64,
        backgroundColor: COLORS.WHITE,
        justifyContent: 'space-between',
        shadowOpacity: 0.05,
        shadowRadius: 1,
        shadowColor: COLORS.BLACK,
        elevation: 10,
        borderTopColor: 'rgba(60, 60, 67, 0.2)',
        borderTopWidth: 0.5,
      }}
      row
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const itemColor = isFocused ? COLORS.INDIGO[500] : COLORS.GRAY[500];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={label.toString()}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            style={{ flex: 1 }}
            testID={options.tabBarTestID}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <View
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 2,
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                fill
              >
                {TabBarItems[route.name].icon && (
                  <Icon
                    name={
                      isFocused
                        ? TabBarItems[route.name].focusedIcon
                        : TabBarItems[route.name].icon
                    }
                  />
                )}
              </View>
              <Text
                color={itemColor}
                style={{
                  height: 14,
                  textAlignVertical: 'center',
                }}
                caption2
              >
                {label.toString()}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function () {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }} tabBar={TabBar}>
      <BottomTab.Screen
        component={WorkoutPlan}
        name="WorkoutPlan"
        options={{ tabBarLabel: '운동계획' }}
      />
      <BottomTab.Screen
        component={Calendar}
        name="Calendar"
        options={{ tabBarLabel: '캘린더' }}
      />
      <BottomTab.Screen
        component={Friends}
        name="Friends"
        options={{ tabBarLabel: '친구' }}
      />
      <BottomTab.Screen
        component={MyProfile}
        name="MyProfile"
        options={{ tabBarLabel: '마이' }}
      />
    </BottomTab.Navigator>
  );
}
