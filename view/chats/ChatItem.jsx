import {Box, Center, HStack, Text, View, VStack} from "native-base";
import Colors from "../Colors";

const ChatItem = ({chat}) => {
    return <View>
        <HStack>
            <Box
                w={'40px'}
                h={'40px'}
                backgroundColor={'#52a119'}
                borderRadius={'100%'}
                margin={'3px'}
                overflow={'hidden'}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    fontSize={'15px'}
                    fontWeight={'600'}
                    color={Colors().light}
                >{getPreviewLetters(chat.title)}</Text>

            </Box>
            <VStack flex={1}>
                <HStack flex={1}>
                    <VStack flex={1} paddingTop={1} paddingLeft={2} justifyContent={'space-between'}>
                        <HStack flex={1} justifyContent={'space-between'}>
                            <Text fontWeight={600}>
                                {chat.title}
                            </Text>
                            <Text marginRight={1} color={Colors().gray}>
                                {formatLastMessageTimestamp(chat.lastMessage?.timestamp)}
                            </Text>
                        </HStack>
                        <HStack flex={1} justifyContent={'space-between'} alignItems={'start'}>
                            <Text
                                fontSize={'12px'}
                                color={Colors().gray}
                            >
                                {chat.lastMessage?.text}
                            </Text>
                            {chat.unreadCount > 0 &&
                                <Box marginRight={1} minWidth={'20px'} borderRadius={'10px'}
                                     backgroundColor={'#205ba6'}>
                                    <Text textAlign={'center'} fontWeight={'800'} fontSize={'12px'} marginLeft={1} marginRight={1}
                                          color={Colors().light}>{chat.unreadCount}</Text>
                                </Box>}
                        </HStack>
                    </VStack>
                </HStack>
                <Box
                    h={'1px'}
                    backgroundColor={Colors().primary}
                    marginTop={'auto'}
                ></Box>
            </VStack>
        </HStack>

    </View>
}

const getPreviewLetters = (title) => {
    let split = title.split(' ');
    return split.length > 1 ? split[0][0] + split[1][0] : split[0][0];
}

const formatLastMessageTimestamp = (timestamp) => {
    return '22:14'//TODO
}

export default ChatItem
