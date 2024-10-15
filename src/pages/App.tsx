import Cronometer from '../components/cronometer';
import Form from '../components/forms';
import List from '../components/lists';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometer />
    </div>
  );
}

export default App;
