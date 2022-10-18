import logo from './logo.svg';
import './App.css';
import Component1 from './Tugas-basic-component/component1';
import Component2 from './Tugas-basic-component/Component2';
import ClassComponent from './Tugas-basic-component/ClassComponent';

function App() {
  return (
      <div>
        <Component1/>
        <Component2 nama = "user"/>
        <ClassComponent nama = "dani"/>
      </div>
  );
}

export default App;
