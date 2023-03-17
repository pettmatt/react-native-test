import { StyleSheet, Text, View } from "react-native"

export default function FeedHeader() {
    return (
        <View style={ styles.headerContainer }>
            <Text>Welcome to YOUR feed!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: "center"
    },
})