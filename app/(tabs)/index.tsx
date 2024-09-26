import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { ParallaxScrollView } from 'react-native-parallax-scroll-view'; // Importando o componente de paralaxe
// import { ThemedView, ThemedText } from './path/to/your/themed/components'; // Componentes personalizados
// import HelloWave from './HelloWave'; // Importando um componente HelloWave




export default function HomeScreen() {

  return(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>




    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Ola Mundo</ThemedText>
    </ThemedView>






    </ParallaxScrollView>
  )
}













const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 40,
    width: 290,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});
