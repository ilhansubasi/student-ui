import './App.css';

import Students from './components/Students';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <h1>Students</h1>
      </div>
      <Upload />
      <Students />
    </div>
  );
}

export default App;
