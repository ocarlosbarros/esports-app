import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface BoxMessageProps extends ViewProps {
    title: string;
    subtitle: string;
}

export function BoxMessage({ title, subtitle, ...rest }: BoxMessageProps){
    return (
        <View style={ styles.container } { ...rest }>
            
            <Text style={ styles.title }>
                { title }
            </Text>

            <Text style={ styles.subtitle }>
                { subtitle }
            </Text>
        </View>
    )
}
