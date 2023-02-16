import HelloWorld1 from './components/HelloWorld1';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';

const App = () => {
    return (
        <>
            <HelloWorld1/>
            <HelloWorld2/>
            <HelloWorld3 text="Mensagem"/>
        </>
    );
}

export default App;