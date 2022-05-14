import {HStack, Icon, IconButton, ScrollView, Text} from "native-base";
import ChatItem from "./ChatItem";
import chatService from "../../service/ChatService";
import {TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function Chats({navigation}) {
    const chats = chatService.getChats();
    navigation.setOptions({
        headerLeft: () => (<IconButton icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white"/>}/>),
        headerRight: () => (
            <IconButton ml={'auto'} icon={<Icon as={MaterialIcons} name="search" size="lg" color="white"/>}/>)
    })
    return <>
        <ScrollView>
            {chats.map(chat =>
                <TouchableOpacity key={chat.uuid} onPress={() => navigation.navigate("Chat", {chat: chat})}>
                    <ChatItem chat={chat}></ChatItem>
                </TouchableOpacity>)}
        </ScrollView>
    </>
}
