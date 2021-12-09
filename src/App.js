import './App.css';
import Navbar from './components/Navbar';
import { Switch ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';

import Text_Experiment from './pages/Internert Art/Text_Experiment';
import ThreeD_Experiment from './pages/Internert Art/ThreeD_Experiment';
import Pet_Experiment from './pages/Internert Art/Pet_Experiment';

import Blog_CR_Ji_Yong_Park from './pages/Blog/Close Readings/Blog_CR_Ji_Yong_Park';
import Blog_CR_McNamara from './pages/Blog/Close Readings/Blog_CR_McNamara';
import Blog_AR_Endless_Horse from './pages/Blog/Internet Art Reflection/Blog_AR_Endless_Horse';
import Blog_AR_Indirect_Flights from './pages/Blog/Internet Art Reflection/Blog_AR_Indirect_Flights' 
import Blog_AR_1 from './pages/Blog/Reflection-Artistic/Blog_AR_1';
import Blog_AR_2 from './pages/Blog/Reflection-Artistic/Blog_AR_2';
import Blog_TR_1 from './pages/Blog/Reflection-Technical/Blog_TR_1';
import Blog_TR_2 from './pages/Blog/Reflection-Technical/Blog_TR_2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/WSOA4175A_1847332' component={Home}/>
        <Route exact path='/menu' component={Menu}/>
        <Route exact path='/about' component={About}/>
    
        <Route exact path='/Internet_Art/Text_Experiment' component={Text_Experiment}/>
        <Route exact path='/Internet_Art/3D_Experiment' component={ThreeD_Experiment}/>
        <Route exact path='/Internet_Art/Pet_Experiment' component={Pet_Experiment}/>

        <Route exact path='/Blog/Close-Reading/Ji_Yong_Park' component={Blog_CR_Ji_Yong_Park}/>
        <Route exact path='/Blog/Close-Reading/McNamara' component={Blog_CR_McNamara}/>
        <Route exact path='/Blog/Art-Reflection/Enless_Horse' component={Blog_AR_Endless_Horse}/>
        <Route exact path='/Blog/Art-Reflection/Indirect_Flights' component={Blog_AR_Indirect_Flights}/>
        <Route exact path='/Blog/Reflection-Artistic/01-10-2021' component={Blog_AR_1}/>
        <Route exact path='/Blog/Reflection-Artistic/08-11-2021' component={Blog_AR_2}/>
        <Route exact path='/Blog/Reflection-Technical/01-10-2021' component={Blog_TR_1}/>
        <Route exact path='/Blog/Reflection-Technical/08-11-2021' component={Blog_TR_2}/>
      </Switch>
      <Footer/>

    </div>
  );
}

export default App;
