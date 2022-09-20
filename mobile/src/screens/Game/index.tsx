import { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { GameParams } from '../../@types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { BoxMessage } from '../../components/BoxMessage';

import { THEME } from '../../theme';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';

export function Game(){

    const [duos, setDuos ] = useState<Array<DuoCardProps>>([])

    const route = useRoute();
    const navigation = useNavigation();

    const game = route.params as GameParams;

    function handleGoBack(){
        navigation.goBack();
    }

    useEffect(() => {
        fetch(`http://192.168.0.62:3333/games/${ game.id }/ads`)
        .then((response) => response.json())
        .then((responseGame) => setDuos(responseGame))
    }, [])

    return(
        <Background>
            <SafeAreaView style={ styles.container }>

                <View style={ styles.header }>
                    <TouchableOpacity onPress={ handleGoBack }>
                        <Entypo 
                            name="chevron-thin-left"
                            color={ THEME.COLORS.CAPTION_300 }
                            size={ 20 }
                        />
                    </TouchableOpacity>

                    <Image 
                        source={ logoImg }
                        style={ styles.logo }
                    />

                    <View style={ styles.right } />
                </View>

                <Image 
                    source={{ uri: game.bannerUrl }}
                    style={ styles.cover }
                    resizeMode="cover"
                />

                <BoxMessage 
                title={ game.title }
                subtitle="Conecte-se e comece a jogar!"
                />

                <FlatList 
                    data={ duos }
                    keyExtractor={ item => item.id }
                    renderItem={ ({ item }) => (
                        <DuoCard 
                            data={ item }
                            onConnect={ () => {} }
                        />
                    )}
                    horizontal
                    style={ styles.containerList }
                    contentContainerStyle={ [duos.length > 0 ? styles.contentList : styles.emptyListContent]}
                    showsHorizontalScrollIndicator={ false }
                    ListEmptyComponent={ () => (
                        <Text style={ styles.emptyListText }>
                            Não há anúncios pulicados ainda
                        </Text>
                    )}
                />

            </SafeAreaView>
        </Background>
    )
}