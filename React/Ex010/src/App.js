import Teste from './components/Teste';

const App = () => {
    return (
        <>
            <Teste>
                {/* A mensagem abaixo não irá aparecer se não for usado no componente {props.children}*/}
                <p>Sou um filho do componente</p>
                <p>Eu também!</p>
            </Teste>
        </>
    );
}

export default App;