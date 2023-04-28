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
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';

function App() {
    return (
        <div className="App">
        
        <Counter2>
        {(counter, incrementCount) => 
            <ClickCounter2 count={counter} incrementCount={incrementCount}/>
        }
        </Counter2>
        
        <Counter2> 
            {(counter, incrementCount) => 
            <HoverCounter2 count={counter} incrementCount={incrementCount}/>
        }
        </Counter2>
        
        {/* <User render={(isLoggedIn) => isLoggedIn ? 'Vlad' : 'Guest'}/> */}
        {/* <ClickCounter2 /> */}
        {/* <HoverCounter2 /> */}
        {/* <ClickCounter name='Vlad'/> */}
        {/* <HoverCounter name='Vlad'/> */}
        {/* <ErrorBoundary>
        <Hero heroName='BatMan'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName='SuperMan'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName='Joker'/>
    </ErrorBoundary> */}
    {/* <PortalDemo /> */}
    {/* <FRParentInput /> */}
    {/* <FocusInput /> */}
    {/* <RefsDemo /> */}
    {/* <ParentComp /> */}
    {/* <Table /> */}
    {/* <FragmentDemo /> */}
    {/* <LifecycleA /> */}
    {/* <Form /> */}
    {/* <h1 className='error'>Error</h1> */}
    {/* <h1 className={styles.success}>Success</h1> */}
    {/* <Inline /> */}
    {/* <Stylesheets primary={true}/> */}
    {/* <NameList /> */}
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
