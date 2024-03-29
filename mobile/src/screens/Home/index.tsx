import { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home(){
    const [game, setGame] = useState<Array<GameCardProps>>([]);

    const navigation = useNavigation();

    function handleOpenGame({ id, title, bannerUrl } : GameCardProps ){
        navigation.navigate('game', { id, title, bannerUrl });
    }

    useEffect(() => {
        fetch('http://192.168.0.62:3333/games')
        .then((response) => response.json())
        .then((responseGame) => setGame(responseGame))
    }, [])

    return (
        <Background>
            <SafeAreaView style={ styles.container }>
                <Image 
                    source={ logoImg }
                    style = { styles.logo }
                />

                <Heading 
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList 
                    data={ game }
                    keyExtractor= { game => game.id }
                    renderItem={ ({ item }) => (
                        <GameCard 
                        data={ item }
                        onPress={ () => handleOpenGame(item) }
                        />
                    )}
                    showsHorizontalScrollIndicator={ false }
                    horizontal
                    contentContainerStyle={ styles.contentList }
                />
            </SafeAreaView>
        </Background>
    )
}
