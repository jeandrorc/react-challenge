import './App.css';
import Home from './pages/home/Home';
import BaseLayout from './layout/BaseLayout';

function App() {
  return (
    <div className="App flex flex-1 flex-column bg-black">
      <BaseLayout>
        <Home />
      </BaseLayout>
    </div>
  );
}

export default App;
