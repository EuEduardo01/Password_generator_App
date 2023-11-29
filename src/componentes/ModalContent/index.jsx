import { Text, View, TouchableOpacity, Pressable  } from "react-native";
import { styles } from "./styles";
import * as ClipBoard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'
import { Passwords } from "../../screens/Passwords";

export function ModalContent({ handlePassoword, handleModalVisible }) {
    
    const { saveItem } = useStorage()

    async function handleCopyPassword() {
        await ClipBoard.setStringAsync(handlePassoword)
        alert("Senha salva com sucesso")

        await saveItem('@pass', handlePassoword)
        handleModalVisible()
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={{fontSize: 25, fontWeight: "bold", marginTop: 20}}> Senha Gerada </Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}> {handlePassoword} </Text>
                </Pressable>

                <View style={styles.buttonsContiner}>
                    <TouchableOpacity style={styles.backButton} onPress={handleModalVisible}>
                        <Text style={{color: '#000', fontWeight: "bold", fontSize: 16}}> Voltar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.save} onPress={handleCopyPassword}>
                        <Text style={{color: '#fff', fontWeight: "bold", fontSize: 16}}> Salvar senha </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}