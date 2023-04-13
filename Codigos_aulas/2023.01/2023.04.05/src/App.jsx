import Painel from './Painel'

export default function App() {

    function showPaineis(total) {
        let vet = [];
        for (let i=0; i<total; i++) vet.push(<Painel/>)
        return vet;
    }

    return (
        <div>
            {showPaineis(10)}
        </div>
    )
}