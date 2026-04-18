import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Login = () => {
    const { register,
            handleSubmit,
            formState: { errors }
        } = useForm()
        const handleRegister = (data) => {
            console.log(data)
        }
    return (
        <div>
            <h1 className='text-center'>Please log in</h1>
             <div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            



                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-600'> Email is required </p>}



                            <label className="label">Password</label>
                            <input type="password" {...register('password',{required:true, minLength: 6})} className="input" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be least 6 characters</p>}


                            <div><p >Don't have an account ? please <Link to='/register' className="link link-hover text-blue-600 hover:text-fuchsia-600"> Register</Link></p></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;