import {
  AboutUltraBot,
  Blogs,
  Features,
  Footer,
  Header,
  Possibility,
} from "./containers";

import { Cta, Navbar, Brand } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <AboutUltraBot />
      <Features />
      <Possibility />
      <Cta />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
