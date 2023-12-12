import { Text, StyleSheet, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function PasswordItem({ handleData, removePassword }) {
    const [toggleEye, setToggleEye] = useState(true);

    function ViewPassord() {
        setToggleEye(!toggleEye);
    }

    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={toggleEye ? styles.text : styles.textOff}>
                {handleData}
            </Text>
            <Pressable onPress={ViewPassord}>
                {toggleEye ? (
                    <Ionicons name="eye-outline" color={"#ffff"} size={20} />
                ) : (
                    <Ionicons
                        name="eye-off-outline"
                        color={"#ffff"}
                        size={20}
                    />
                )}
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "#fff",
        fontSize: 15,
    },
    textOff: {
        backgroundColor: "#D9D9D9",
        color: "#D9D9D9",
        borderRadius: 8,
        fontSize: 15,
    },
});
