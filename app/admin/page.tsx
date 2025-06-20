"use client";

import { useState } from "react";
import HeaderAdmin from "./headerAdmin";
import axios from "axios";

export default function AdminPage() {
  // Estados para formularios
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Alternar entre registro y login

  // Manejar cambios en los formularios
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  // Validación simple para email
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Manejar registro
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones frontend
    if (
      !registerForm.username ||
      !registerForm.email ||
      !registerForm.password
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!validateEmail(registerForm.email)) {
      setError("Por favor, ingresa un email válido");
      return;
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/users/register`;
      const response = await axios.post(url, registerForm);

      if (response.status !== 201) {
        const data = await response.data;
        throw new Error(data.message || "Error al registrar");
      }

      setSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
      setRegisterForm({ username: "", email: "", password: "" });
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Manejar login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!loginForm.username || !loginForm.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/users/login`;
      const response = await axios.post(url, loginForm);

      if (response.status !== 200) {
        const data = await response.data;
        throw new Error(data.message || "Error al ingresar");
      }

      const data = await response.data;
      setSuccess("Login exitoso");
      
      localStorage.setItem("token", data.token);
      
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <HeaderAdmin />

      {/* Contenedor principal */}
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {isRegistering ? "Registro de Admin" : "Login de Admin"}
          </h1>

          {/* Mensajes de error y éxito */}
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          {success && (
            <p className="text-green-500 mb-4 text-center">{success}</p>
          )}

          {/* Formulario */}
          {isRegistering ? (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={registerForm.username}
                  onChange={handleRegisterChange}
                  className="mt-1 w-full p-2 border rounded-md focus:ring-[#CE987E] focus:border-[#CE987E]"
                  placeholder="admin123"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  className="mt-1 w-full p-2 border rounded-md focus:ring-[#CE987E] focus:border-[#CE987E]"
                  placeholder="admin@tronconemotors.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  className="mt-1 w-full p-2 border rounded-md focus:ring-[#CE987E] focus:border-[#CE987E]"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#CE987E] text-white py-2 rounded-md hover:bg-[#b07b62] transition-colors"
              >
                Registrar
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="login-username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  name="username"
                  id="login-username"
                  value={loginForm.username}
                  onChange={handleLoginChange}
                  className="mt-1 w-full p-2 border rounded-md focus:ring-[#CE987E] focus:border-[#CE987E]"
                  placeholder="admin123"
                />
              </div>
              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className="mt-1 w-full p-2 border rounded-md focus:ring-[#CE987E] focus:border-[#CE987E]"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#CE987E] text-white py-2 rounded-md hover:bg-[#b07b62] transition-colors"
              >
                Iniciar Sesión
              </button>
            </form>
          )}

          {/* Toggle entre registro y login */}
          <p className="mt-4 text-center text-sm text-gray-600">
            {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
            <button
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError("");
                setSuccess("");
              }}
              className="ml-1 text-[#CE987E] hover:underline"
            >
              {isRegistering ? "Inicia sesión" : "Regístrate"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
