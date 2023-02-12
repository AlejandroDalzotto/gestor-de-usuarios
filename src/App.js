import './App.css';
import Card from './components/Card';
import Container from './components/Container';
import { useState } from 'react';
import UserForm from './components/UserForm';

const App = () => {

  const [users, setUsers] = useState([])

  const submit = user => {
    setUsers([
      ...users,
      user
    ])
  }
  return (
    <div className='bg-slate-200 flex items-center justify-center min-h-screen'>
      <Container>
        <Card>
          <h2 className='text-2xl font-bold underline'>Gestor de Usuarios</h2>
          <UserForm submit={submit} />
        </Card>
        <Card>
          <ul>
            {users.map(x =>
              <li className='flex gap-3 p-1 border-2 border-slate-900 my-4' key={x.name}>
                <span className='font-bold'>{x.name}</span>
                <span className='font-bold'>{x.lastname}</span>
                <span>{x.email}</span>
              </li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
