import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar/>
        <main className="flex flex-col items-center justify-center flex-1 gap-4">
            <form className ="w-full max-w-sm bg-white border
             border-gray-500 rounded-lg shadow-sm p-8 flex flex-col gap-4">
            <h2 className = "text-2xl font-bold flex justify-center">Login</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <button className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-400">Login</button>
                <p className="text-sm text-center text-gray-500">
                    Dont have an account?{" "} <Link to ='/signup'>Sign up</Link>
                    </p>
            </form>
    </main>
    <Footer/>
    </div>
  )
}

export default Login