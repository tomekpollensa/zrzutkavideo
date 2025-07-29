import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Zalogowano!");
    } catch (err) {
      setError("Błąd logowania: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Zaloguj się</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
          className="w-full p-2 mb-3 border rounded" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Hasło"
          className="w-full p-2 mb-3 border rounded" required />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Zaloguj się</button>
      </form>
    </div>
  );
}
