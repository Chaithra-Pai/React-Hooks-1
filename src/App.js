import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <h2>useMemo Hook</h2>
      <Counter/>
      <h2>useRef Hook - 1</h2>
      <FocusInput/>
      <h2>useRef Hook - 2</h2>
      <ClassTimer/>
      <HookTimer />
      <h2>Custom Hooks - 1</h2>
      <DocTitleOne/>
      <DocTitleTwo/>
      <h2>Custom Hooks - 2</h2>
      <CounterOne/>
      <CounterTwo/>
    </div>
  );
}

export default App;
