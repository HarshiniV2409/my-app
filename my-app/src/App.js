import logo from './logo.svg';
import './App.css';
import Doggy from './Doggy.jpg';

function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
return (
  <div style={{ textAlign: "center" }}>
    <h1>Welcome to My Page</h1>
    <img 
       src={Doggy}
      alt="Cute Dog" 
      width="250"
    />
    <h2>Harshini</h2>
    <p>3rd Year</p>
    <p>Kongu Engineering College</p>
    <p>Electronics and Instrumentation Engineering Department</p>
  </div>
);

}

export default App;
