import Logo from "./components/Logo"
import Carousel from './components/Carousel'
import BoxMessage from "./components/BoxMessage"
import Button from "./components/Button"
import { MagnifyingGlassPlus } from 'phosphor-react';
function App() {
  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Logo />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text" >duo</span> está aqui</h1>
      <Carousel />
      <BoxMessage title="Não encontrou o seu duo?" subTitle="Publique um anúncio para encontrar novos players">
        <Button text="Publicar anúncio" value="ads">
          < MagnifyingGlassPlus size={ 24 }/>
        </Button>
      </ BoxMessage>
    </main>
  )
}

export default App
