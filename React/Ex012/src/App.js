import Contador1 from './components/Contador1';
import Contador2 from './components/Contador2';
import Contador3 from './components/Contador3';
import Produto1 from './components/Produto1';
import Produto2 from './components/Produto2';

const App = () => {
    return (
        <>
            <Contador1 nome="Sem hooks"/>        
            <Contador2 nome="Com hooks + chamada de função"/>        
            <Contador3 nome="Com hooks + arrow function interna"/>
            <Produto1/>
            <Produto2/>
        </>
    );
}

export default App;