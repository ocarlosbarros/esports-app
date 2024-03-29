import { CheckCircle } from 'phosphor-react-native';
import { MaterialIcons} from '@expo/vector-icons';
import { Text, View, Modal, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useState } from "react";

import { Heading } from "../Heading";
import * as Clipboard from 'expo-clipboard';

import { styles } from "./styles";
import { THEME } from "../../theme";

interface DuoMatchProps extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps){
    const [isCopping, setIsCopping ] = useState(false);

    async function handleCopyDiscordToClipBoard(){
        setIsCopping(true);

        await Clipboard.setStringAsync(discord);

        Alert.alert("Discord ID copiado!", 'Usuário Discord copiado. Cole no Discord e bora jogar!');
        setIsCopping(false);
    }

    return (
        <Modal 
        animationType= "fade"
        transparent
        statusBarTranslucent
        { ...rest }
        >
            <View style={ styles.container }>
                <View style={ styles.content }>
                    <TouchableOpacity
                    onPress={ onClose }
                    style={ styles.closeIcon }
                    >
                        <MaterialIcons
                            name="close"
                            size={ 20 }
                            color={ THEME.COLORS.CAPTION_500 }
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={ 64 }
                        color={ THEME.COLORS.SUCCESS }
                        weight="bold"
                    />

                    <Heading 
                        title="Let's play!"
                        subtitle="Agora é só começar a jogar!"
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />
                    
                    <Text style={ styles.label }>
                        Adicione no Discord
                    </Text>

                    <TouchableOpacity
                      style={ styles.discordButton }
                      onPress={ handleCopyDiscordToClipBoard }
                      disabled={ isCopping }
                    >
                        <Text style={ styles.discord }>
                            { isCopping ? <ActivityIndicator  color={ THEME.COLORS.PRIMARY }/> : discord }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}