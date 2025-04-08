import { Link } from "react-router-dom";

const Register = () => {
    return (

        <div className="min-h-screen flex justify-center items-center ">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 py-10 ">
                <h2 className="text-2xl font-semibold text-center py-4">Register you account</h2>
                <div className="card-body">
                <fieldset className="fieldset">
                        {/* Name */}
                        <label className="fieldset-label">Your Name</label>
                        <input type="email" className="input" placeholder="Enter your name" />
                        {/* Photo url */}
                        <label className="fieldset-label">Photo URL</label>
                        <input type="email" className="input" placeholder="Photo URL" />
                        {/* Email */}
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />


                        <button className="btn btn-neutral w-full mt-4">Login</button>
                        <p className="text-center text-gray-500 font-semibold pt-5">
                            Already Have An Account? <Link className="text-red-500" to='/auth/login'>Login</Link>
                        </p>

                    </fieldset>
                </div>
            </div>

        </div>

    );
};

export default Register;