import Menu from "./components/Menu"
import Services from "./components/Services"
import StoryService from "./components/StoryService"

function App() {
  return (
    <div className="py-5 px-3">
      <Menu />
      <StoryService />
      <Services />
    </div>
  )
}

export default App
