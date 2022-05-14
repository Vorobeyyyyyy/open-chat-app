import {
    Box,
    Center,
    HStack,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftAddon,
    StatusBar,
    Text,
    useTheme
} from "native-base";
import {StyleSheet} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function Login() {
    const {
        fontSizes,
        colors
    } = useTheme();
    return <>
        <StatusBar backgroundColor={colors.primary["800"]}/>
        <Center bg={colors.primary["800"]} w='100%' h='100%'>
            <Text color={colors.primary["50"]} fontSize={fontSizes["3xl"]} marginBottom='4'>
                OpenChat
            </Text>
            <HStack>
                <InputGroup>
                    <InputLeftAddon color children={"+"}/>
                    <Input w={'200'} fontSize={fontSizes.xl} color={colors.primary["50"]}/>
                </InputGroup>
                <IconButton w='20%'
                            maxWidth='10'
                            marginRight='3'
                            icon={<Icon size='lg' color={colors.primary["50"]} as={MaterialIcons} name='navigate-next'/>}/>
            </HStack>
        </Center>
    </>
}

const styles = StyleSheet.create({
    'center': {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
