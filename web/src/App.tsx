import Logo from "./components/Logo"
import Carousel from './components/Carousel'
function App() {
  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Logo />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text" >duo</span> está aqui</h1>
      <Carousel />
    </main>
  )
}

export default App
