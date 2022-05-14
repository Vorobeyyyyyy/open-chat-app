import React from "react";
import {NativeBaseProvider, Box, StatusBar, Icon, CheckIcon, ArrowBackIcon, theme} from "native-base";
import Chats from "./view/chats/Chats";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Chat from "./view/chat/Chat";
import Colors from "./view/Colors";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={theme}>
                <Drawer.Navigator
                    screenOptions={{
                        defaultStatus: "closed",
                        headerStyle: {
                            backgroundColor: Colors().primary,
                            height: "50px",
                        },
                        headerTintColor: Colors().light,
                        headerTitleStyle: {
                            fontSize: "20px",
                            fontWeight: "700"
                        }
                    }}
                    // initialRouteName={"Chats"}
                >
                    <Drawer.Screen
                        name="Chats"
                        component={Chats}
                        options={{
                            title: "OpenChat"
                        }}
                    />
                    <Drawer.Screen name={"Chat"} component={Chat}/>
                </Drawer.Navigator>
                {/*<Login></Login>*/}
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
