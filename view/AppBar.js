import {useTheme, HStack, Icon, IconButton, StatusBar, Text} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

export default function AppBar(props) {
    const {
        fontWeights,
        fontSizes,
        colors
    } = useTheme();
    return <>
        <StatusBar backgroundColor={colors.primary["800"]}/>
        <HStack bg={colors.primary["800"]} px="1" h={"50px"} py="1" alignItems="center">
            {props.children}
        </HStack>
    </>;
}
