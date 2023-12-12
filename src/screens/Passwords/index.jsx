import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/useStorage";
import { styles } from "./styles";
import { PasswordItem } from "../../componentes/PasswordItem/passwordItem";

export function Passwords() {
    const [listPasswords, setlistPasswords] = useState();
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass");
            setlistPasswords(passwords);
        }

        loadPasswords();
    }, [focused]);

    async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item);
        setlistPasswords(passwords);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senha</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => (
                        <PasswordItem
                            handleData={item}
                            removePassword={() => handleDeletePassword(item)}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
