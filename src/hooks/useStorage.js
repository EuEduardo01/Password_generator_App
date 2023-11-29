import AsyncStorage from '@react-native-async-storage/async-storage'
 
const useStorage = () => {
    // Buscar os itens salvos
    const getItem = async (key) => {
        try{
            const password = await AsyncStorage.getItem(key)
            return JSON.parse(password) || []

        }catch(error){
            console.log("Erro ao buscar", error)
            return [];
        }
    }

    // Salvar um item no storage
    const saveItem = async ( key, value ) => {
        try {
            let passwords = await getItem(key)
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        }catch (error) {
            console.log("Erro ao Salvar", error)
        }
    }

    // Remover algo do storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key)

            let myPasswods = passwords.filter((password) => {
                return(password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswods))
            
            return myPasswods;

        } catch (error) {
            console.log("Error ao deletar", error)
        }
    }

    return{
        getItem, 
        saveItem, 
        removeItem
    }
    
}

export default useStorage;