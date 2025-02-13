import { Link, useNavigate, useLocation } from 'react-router-dom';
import moduleName from '../../assets/Appointment/login.png';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(<p className='text-orange-500'>Log In Successful!</p>);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
        console.log(errors);
    }



    return (
        <div className='min-h-screen flex'>
            <div className='w-1/2'>
                <img src={moduleName} className='w-full h-full' alt="" />
            </div>
            <div className='w-1/3 h-[520px] border-2 mt-28 ms-10'>
                <div className='px-16 py-5'>
                    <h2 className='text-3xl font-bold py-8 text-center'>Sign in to <span className='text-red-500'>Doctor</span> Village</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">User Name or Email Address</span></label>
                            <input type="text" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </label>
                        <label className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Password</span></label>
                            <input type="password" {...register("password", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                            <label className="label"><span className="label-text text-red-500">Forget Password ?</span></label>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </label>
                        <input className="btn btn-primary w-full hover:text-white text-2xl" value="Log In" type="submit" />
                        <label className="label"><span className="label-text">First time here ? please <Link to='/signup' className='text-red-500 underline' >SIGN UP</Link></span></label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;