import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css';

// React 17
//ReactDOM.render(<App/>, document.getElementById("root"));

// React 18
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
