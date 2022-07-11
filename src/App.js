import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="MyApp" aboutText="Abut My App"/>
    <div className="MyApp">
    <TextForm heading="Enter The text to analyze"/>
    </div>
    </>
    
    );
}

export default App;
