import { TextInput, TextInputProps, Text } from "react-native"
import { styles } from './styles';

export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={styles.input}
            {...rest}
       />
    )
}