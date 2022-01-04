import axios from "axios";
import * as React from "react";
import {useContext} from "react";
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import Card from "../components/Card";
import themeContext from "../../Config/themeContext";
import {Circle} from 'react-native-progress';

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingLeft: 4,
        paddingTop: 4,
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

const getDataUsingSimpleGetCall = () => {
};

export default function HomeScreen({navigation}) {
    const [animes, setAnimes] = React.useState(null);
    const theme = useContext(themeContext);

    React.useEffect(() => {
        axios
            .get("http://192.168.100.5:8000/api/anime/latest")
            .then(function (response) {
                // handle success
                setAnimes(response.data);
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
    }, []);
    return (
        <ScrollView
            style={[styles.scrollView, {backgroundColor: theme.background}]}
            contentContainerStyle={styles.scrollView}
        >
            {animes && animes.length >= 1 ?
                animes.map((anime) => {
                    return (
                        <Card
                            key={anime.title + anime.number}
                            title={anime.title}
                            image={anime.image}
                            episode={anime.number}
                            theme={theme}
                        />
                    );
                }) : (
                    <View style={{
                        flex: 1,
                        height: Dimensions.get("window").height - 70,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Circle size={100} borderWidth={70} endAngle={0.7} color={theme.color}
                                indeterminate={true}/>
                    </View>
                )}
        </ScrollView>
    );
}
