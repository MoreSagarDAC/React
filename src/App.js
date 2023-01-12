import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import EmployeeList from './component/EmployeeList';
function App() {
  let emparr=[{empid:10,ename:"sagar",sal:45612},
  {empid:11,ename:"akash",sal:456612},
  {empid:12,ename:"more",sal:45951}]
  return (
    <div>
      <Header/>
      <EmployeeList employees={emparr}></EmployeeList>
    </div>
  );
}

export default App;
