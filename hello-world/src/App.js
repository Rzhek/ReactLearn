import logo from './logo.svg';
import './App.css';

import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import { Hello } from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';


function App() {
    return (
        <div className="App">
        
        <NameList />

        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <Counter addValue='1'/> */}
        {/* <FunctionClick /> */}
        {/* <Message /> */}
        {/* <Greet name='Vlad' heroName='Batman'/> */}
        {/* <p>This is children props</p> */}
        {/* <Greet name='World' heroName='SuperMan'/> */}
        {/* <Greet name='React' heroName='SpiderMan'/> */}
        {/* <Welcome name='Vlad' heroName='Batman'/> */}
        {/* <Welcome name='World' heroName='SuperMan'/> */}
        {/* <Welcome name='React' heroName='SpiderMan'/> */}
        {/* <Hello/> */}
    </div>
    );
}

export default App;
