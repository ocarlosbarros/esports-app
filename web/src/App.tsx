import * as Dialog from '@radix-ui/react-dialog';

import Carousel from './components/Carousel'
import CreateAdModal from './components/Form/CreateAdModal';
import DialogButton from './components/Form/DialogButton';
import Heading from "./components/Heading"
import Logo from "./components/Logo"

function App() {
  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Logo />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text" >duo</span> está aqui</h1>
      <Carousel />
      <Heading title="Não encontrou o seu duo?" subTitle="Publique um anúncio para encontrar novos players">
        <Dialog.Root>
          <CreateAdModal />
          <DialogButton />
        </Dialog.Root>
      </ Heading>
    </main>
  )
}

export default App
