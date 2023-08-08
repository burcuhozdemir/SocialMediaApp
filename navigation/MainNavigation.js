import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './Routes';
import {View, Text} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabPost from '../components/ProfileTabPost/ProfileTabPost';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>This is a Tab1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is a Tab2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is a Tab3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        component={ProfileTabPost}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Photos'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        component={ProfileTabPost}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Videos'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={ProfileTabPost}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Saved'} isFocused={focused} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainManuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainManuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
