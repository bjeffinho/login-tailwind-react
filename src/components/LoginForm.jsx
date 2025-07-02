import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, senha });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-950 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg max-w-md w-full p-10 space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-lime-400 text-center tracking-wide">
          Bem-vindo
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Faça login para continuar
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-lime-400 text-gray-900 font-semibold hover:bg-lime-500 transition"
        >
          Entrar
        </button>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Esqueceu a senha?{' '}
          <a href="#" className="text-lime-400 hover:underline">
            Clique aqui
          </a>
        </p>
      </form>
    </div>
  );
}
