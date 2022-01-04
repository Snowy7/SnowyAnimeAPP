import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    card: {
        width: 125,
        marginRight: 9,
        height: 220,
    },
    cardCover: {
        borderRadius: 5,
        width: 125,
        height: 180,
    },
    episodeNumber: {
        position: "absolute",
        top: 155,
        right: 2,
        color: "white",
        backgroundColor: "black",
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    cardTitle: {
        width: 125,
        textAlign: "center",
        color: "white",
        height: 30,
        padding: 5
    },
});

const Card = ({title, image, episode, theme, getDataUsingSimpleGetCall}) => {
    return (
        <View style={styles.card}>
            <Image
                style={styles.cardCover}
                source={{
                    uri: image,
                }}
            />
            <Text style={styles.episodeNumber}>{episode}</Text>
            <Text numberOfLines={1} style={[styles.cardTitle, {color: theme.color}]}>
                {title}
            </Text>
        </View>
    );
};
export default Card;
