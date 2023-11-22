import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.65)',
        flex: 1,
        alignItems: 'center', 
        justifyContent: "center",
    },
    contentContainer:{
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 230,
        width: 350,
        alignItems:'center',
        justifyContent: 'center',

    },
    innerPassword:{
        backgroundColor: '#000',
        width: 250,
        padding: 10,
        borderRadius: 8,
        alignItems:"center",
        margin: 20
    },
    text:{
        color: '#fff',
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonsContiner:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        margin: 6,
    },
    backButton:{
        padding: 12,
        alignItems: "center",
        width: 130,
    },
    save:{
        backgroundColor: '#392DE9',
        padding: 12,
        width: 130,
        alignItems: "center",
        borderRadius: 8
    }

})
