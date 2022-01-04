import * as React from "react";
import { View, Text, Switch } from "react-native";

import {EventRegister} from "react-native-event-listeners";

export default function SettingsScreen({ navigation }) {
    const [mode, setMode] = React.useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Settings Screen
      </Text>
        <Switch value={mode} onValueChange={() => {
            setMode((value) => !value)
            EventRegister.emit("changeTheme", mode)
        }} />
    </View>
  );
}
