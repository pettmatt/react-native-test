import { StyleSheet, Text, View, Image, ScrollView } from "react-native"
import { useEffect, useState } from "react"

import FeedHeader from "../components/FeedHeader"

const placeholder = require("../assets/adaptive-icon.png")

export default function MainFeed({ image }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
      setPosts(["1", "2", "3", "4", "5"])
    }, [])

    return (
        <>
            <FeedHeader />

            <ScrollView vertical style={ styles.container }>
                { posts.map((post, index) =>

                <View key={ index } style={ styles.postContainer }>
                    <Image source={ image || placeholder } style={ styles.image } />
                    <View style={ styles.textContainer }>
                        <Text style={ styles.link } >https://www.google.com</Text>
                        <Text style={ styles.title } >Title</Text>
                        <Text style={ styles.description } >Description</Text>
                    </View>
                </View>

                ) }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postContainer: {
        margin: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#010101",
    },
    textContainer: {
        padding: 10,
    },
    image: {
        width: 350,
        height: 150,
    },
    description: {
        textAlign: "left",
        fontSize: 15,
        width: 350
    },
    link: {
        fontSize: 12,
        color: "blue",
    },
    title: {
        textAlign: "left",
        fontSize: 20,
        fontWeight: "700",
        width: 350,
    }
})