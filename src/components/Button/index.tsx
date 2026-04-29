import { TouchableOpacity, Text, Alert, TouchableOpacityProps } from "react-native"
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    titulo: string,
}

export default function Button({titulo, ...rest}: Props) {
    return (
        <TouchableOpacity
        onPress={() => Alert.alert("Aviso", "Você clicou!")}
            {...rest}
            style={styles.button}
        >
            <Text style={styles.text}>{titulo}</Text>
        </TouchableOpacity>
    )
}