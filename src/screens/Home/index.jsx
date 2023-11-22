import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { ModalContent } from "../../componentes/ModalContent";
import Slider from "@react-native-community/slider"
import { styles } from "./style";
import { useState } from "react";


export function Home() {
    const [ sliderValue, setSliderValue ] = useState(6)
    const [ modalVisble, setModalVisible ] = useState(false)
    const [ passwordValue, setPasswordValue ] = useState('')

    function generatePassword() {
        let password = ""
        let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"

        for(let i = 0, n = charSet.length ; i < sliderValue; i++ ){
            password += charSet.charAt(Math.floor(Math.random() * n))
        }

        setModalVisible(true)
        setPasswordValue(password)
    }

    return(
    <View style={styles.container}>
        <Image
            source={require("../../assets/logo.png")}
            style={styles.image}
        />

        <Text style={styles.sliderValue}>{parseInt(sliderValue)} caracteres</Text>

        <View style={styles.sliderContainer}>
            <Slider
                minimumValue={6}
                maximumValue={20}
                maximumTrackTintColor='#000'
                minimumTrackTintColor='#FF2626'
                thumbTintColor="#008577"
                value={sliderValue}
                onValueChange={(value)=> setSliderValue(value)}
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={generatePassword}>
            <Text style={{color: '#FFF', fontSize: 20}}> Gerar Senha </Text>  
        </TouchableOpacity> 
        
        <Modal animationType="fade" visible={modalVisble} transparent={true}>
            <ModalContent handlePassoword={passwordValue} handleModalVisible={() => setModalVisible(false) } />
        </Modal>
    </View>
    )
} 