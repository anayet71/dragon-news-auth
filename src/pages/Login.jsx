import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center ">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 py-10 ">
                <h2 className="text-2xl font-semibold text-center py-4">Login you account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral w-full mt-4">Login</button>
                        <p className="text-center text-gray-500 font-semibold pt-5">
  Don’t Have An Account? <Link className="text-red-500" to='/auth/register'>Register</Link>
</p>

                    </fieldset>
                </div>
            </div>

        </div>
    );
};

export default Login;