import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/Appointment/login.png';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast'


const SignUp = () => {
    const { createUser, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(<p className='text-orange-500'>User Created Successful!</p>)
            })
            .catch(error => console.log(error));
        console.log(errors);
        navigate('/')
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='min-h-screen flex lg:flex-row sm:flex-col'>
            <div className='lg:w-1/2 sm:w-full'>
                <img src={loginImage} className='w-full h-full' alt="" />
            </div>
            <div className='lg:w-1/3 sm:w-full h-full border-2 lg:mt-16 sm:mt-0 lg:ms-10 sm:ms-0'>
                <div className='lg:px-16 sm:px-0 py-5'>
                    <h2 className='text-3xl font-bold py-8 text-center'>Sign Up to <span className='text-red-500'>Doctor</span> Village</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Name</span></label>
                            <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </label>
                        <label className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">UserName</span></label>
                            <input type="text" {...register("username", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Email Address</span></label>
                            <input type="text" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </label>
                        <label className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Password</span></label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: { value: 6, message: "Password must be 6 Character" },
                                    pattern: { value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}/, message: 'Password must have uppercase,number & special Character' }
                                })} placeholder="Type here" className="input input-bordered w-full" />
                            <label className="label"><span className="label-text text-red-500">Forget Password ?</span></label>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </label>
                        <input className="btn btn-primary w-full hover:text-white text-2xl" value="Sign Up" type="submit" />
                        <label className="label"><span className="label-text">Already registered ? please <Link to='/login' className='text-red-500 underline' >SIGN IN</Link></span></label>
                        <input onClick={handleGoogleLogIn} className="btn btn-primary w-full hover:text-white text-2xl" value="Continue with Google" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;