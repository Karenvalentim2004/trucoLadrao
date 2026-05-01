import { StyleSheet } from "react-native";
import button from "./index";

//folha de estilo para usar em components 
export const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'purple',
        padding: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
    },
    text: {
            fontSize: 24,
            fontWeight: 600,
            color: '#f2f2f2', 
            justifyContent: 'center',
            alignItems: 'center',    
    }
})