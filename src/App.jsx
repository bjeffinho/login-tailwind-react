import { FiMail, FiLock } from 'react-icons/fi';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-950 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl rounded-tr-none shadow-xl p-8 space-y-6 border border-white/20">

        <h2 className="text-center text-3xl font-bold text-lime-400">Bem-vindo</h2>
        <p className="text-center text-gray-300">Faça login para continuar</p>

        <form className="space-y-4">

          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-400" />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900 text-white placeholder-lime-400
             focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900
             transition"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-400" />
            <input
              type="password"
              placeholder="Sua senha"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900 text-white placeholder-lime-400
             focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900
             transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-lime-400 text-black font-semibold hover:bg-lime-500 transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Esqueceu a senha?{' '}
          <a href="#" className="text-lime-400 hover:underline">
            Clique aqui
          </a>
        </p>
      </div>
    </div>
  );
}
