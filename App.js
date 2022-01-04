import 'react-native-gesture-handler';
import MainContainer from "./navigation/MainContainer";

import {EventRegister} from "react-native-event-listeners";
import themeContext from "./Config/themeContext";
import theme from "./Config/theme";
import {useEffect, useState} from "react";
import {StatusBar} from "react-native";
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function App() {
    const [mode, setMode] = useState(true);

    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
    useEffect(() => {

        let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
            setMode(data)
        });
        return () => {
            EventRegister.removeEventListener(eventListener)
        }

    })

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle(STYLES[0]);
        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };
    return (
        <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
            <StatusBar
                animated={true}
                backgroundColor={mode === true ? theme.dark.background : theme.light.background}
                barStyle={mode === true ? 'light-content' : 'dark-content'}
                showHideTransition={statusBarTransition}
                hidden={hidden} />
            <MainContainer/>
        </themeContext.Provider>)
}
