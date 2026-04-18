import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Register = () => {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { registerUser } = useAuth()

    const handleRegister = (data) => {
        // console.log(data)
        const { email, password } = (data);
        // console.log(email,password)
        registerUser(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Register Succefully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                if (error.message) {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${error.message}`,

                    });
                }
                // ..
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">

                            <label className='lable' > Name</label>
                            <input type="name" {...register('name', { required: true, minLength: 4, maxLength: 20, pattern: /^[A-Za-z]+(?: [A-Za-z]+)* ?$/ })} className="input" placeholder="Full Name" />
                            {errors.name?.type === 'required' && <p className='text-red-600'> Name is rwquired </p>}
                            {errors.name?.type === 'minLength' && <p className='text-red-600'> Minimum length of form is 4 characters </p>}
                            {errors.name?.type === 'pattern' && <p className='text-red-600'> Name must Contain only letters</p>}




                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-600'> Email is required </p>}



                            <label className="label">Password</label>
                            <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/ })} className="input" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be least 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must contain at least one Upper letter, one lower letter and one special character </p>}


                            <div><p >Don't have an account ? please <Link to='/login' className="link link-hover text-blue-600 hover:text-fuchsia-600"> login</Link></p></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;