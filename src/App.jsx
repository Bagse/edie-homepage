import CardUser from "./components/CardUser";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Services from "./components/Services";
import StoryService from "./components/StoryService";
import Team from "./components/Team";

function App() {
  return (
    <>
      <div className="py-5 px-3 lg:px-16">
        <Menu />
        <StoryService />
        <Services />
        <Design />
        <Team />
        <CardUser />
      </div>
      <Footer />
    </>
  );
}

export default App;
