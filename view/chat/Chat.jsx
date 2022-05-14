import {Icon, IconButton, Text, View} from "native-base";
import AppBar from "../AppBar";
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../Colors";


const Chat = ({navigation, route}) => {
    const {chat} = route.params ? route.params : {};

    return <View>
        {/*<AppBar>*/}
        {/*    <IconButton icon={*/}
        {/*        <Icon onPress={() => navigation.goBack()} size={"lg"} as={MaterialIcons} name={"arrow-back"} color={Colors().light}/>*/}
        {/*    }/>*/}
        {/*</AppBar>*/}
        <Text>{"asd"}</Text>
    </View>
}

export default Chat
