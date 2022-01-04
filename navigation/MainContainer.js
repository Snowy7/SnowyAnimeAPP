import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import themeContext from "../Config/themeContext";
import {useContext} from "react";

//Screen names
const homeName = "Latest Episodes";
const searchName = "Search";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

/*function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              height: 60,
              paddingTop: 10,
              display: "flex",
            },
            null,
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === searchName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/
function MainContainer() {
    const theme = useContext(themeContext);
    const globalScreenOptions = {
        headerStyle: { backgroundColor: theme.background, height: 60 },
        headerTitleStyle: { color: theme.color },
        headerTintColor: theme.color,
    };
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName={homeName}
                style={{backgroundColor: theme.background}}
                screenOptions={globalScreenOptions}
            >
                <Drawer.Screen name={homeName} component={HomeScreen}/>
                <Drawer.Screen name={searchName} component={SearchScreen}/>
                <Drawer.Screen name={settingsName} component={SettingsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
