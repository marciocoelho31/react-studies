import { useState } from 'react';
import Cronometer from '../components/cronometer';
import Form from '../components/forms';
import List from '../components/lists';
import style from './App.module.scss';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometer />
    </div>
  );
}

export default App;
