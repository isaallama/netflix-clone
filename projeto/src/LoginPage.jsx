import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userEmail = 'user123@maisprati.com';
  const userPassword = 'senhaDoUser123';

  const handleLogin = event => {
    event.preventDefault();

    if (email === userEmail && password === userPassword) {
      navigate('/App');
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div id='backimg'>
      <div className='background'>
        <div className='navbar'>
          <div className='logo'>
          </div>
        </div>
        <div className='content'>
          <div className='login'>
            <div className='login-container'>
              <h2>Entrar</h2>
              <form onSubmit={handleLogin}>
                <div className='input-info'>
                  <input
                    required
                    type='email'
                    placeholder='Email ou número de telefone'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className='input-info'>
                  <input
                    required
                    type='password'
                    placeholder='Senha'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <button type='submit' className='submit'>
                    Entrar
                  </button>
                </div>
              </form>

              <div className='support'>
                <div className='remember'>
                  <span>
                    <input
                      type='checkbox'
                      style={{ margin: 0, padding: 0, height: '13px' }}
                    />
                  </span>
                  <span>Lembre-se de mim</span>
                </div>
                <div className='help'>
                  <a href='/help'> 
                    Precisa de ajuda?
                  </a>
                </div>
              </div>

              <div className='signin'>
                <p>
                  Novo por aqui?{' '}
                  <a href='/signup'> 
                    Assine agora.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
