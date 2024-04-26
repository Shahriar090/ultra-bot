import { Blogs, Features, Footer, Header, Possibility } from "./containers";

import { Cta, Navbar, Brand } from "./components";
import WhatUltraBot from "./containers/whatUltraBot/WhatUltraBot";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatUltraBot />
      <Features />
      <Possibility />
      <Cta />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
