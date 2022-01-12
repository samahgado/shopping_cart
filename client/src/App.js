

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { words } from './words';



function App() {
  return (
    <div className="layout">
     <Header/>
      <main>
        {words.content}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
