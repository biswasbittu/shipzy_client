import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const { signinUser } = useAuth();

    const handleLogin = (data) => {

        const { email, password } = (data);
        console.log(email, password)
        signinUser(email, password)
            .then(result => {
                // console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Login Succefully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                if (error.message) {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${error.message}`,

                    });
                }
            })
    }
    return (
        <div>
            <h1 className='text-center text-3xl'>Please log in</h1>
            <div>
                
                    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <fieldset className="fieldset">




                                    <label className="label">Email</label>
                                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                                    {errors.email?.type === 'required' && <p className='text-red-600'> Email is required </p>}



                                    <label className="label">Password</label>
                                    <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be least 6 characters</p>}


                                    <div><p >Don't have an account ? please <Link to='/register' className="link link-hover text-blue-600 hover:text-fuchsia-600"> Register</Link></p></div>
                                    <button className="btn btn-neutral mt-4 ">Login</button>
                                </fieldset>
                            </form>

<SocialLogin />
                        </div>
                    </div>
                
                
            </div>
        </div>
    );
};

export default Login;