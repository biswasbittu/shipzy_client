import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { registerUser, updateUserProfile } = useAuth()

    const handleRegister = (data) => {
        const profileImage = data.photo[0]
        const { email, password } = (data);
        // console.log(email,password)
        registerUser(email, password)
            .then(result => {
                console.log(result.user)
                const formData = new FormData();
                formData.append('image', profileImage)
                const ImageApi_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_api_key}`
                axios.post(ImageApi_Url, formData)
                    .then(res => {
                        console.log('after image upload', res.data.data.url)

                        const userProfilr = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }
                        updateUserProfile(userProfilr)
                            .then(() => {
                                console.log('update profile done')
                            })
                            .catch((error) => {
                                console.log(error.message)
                            })
                    })


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


            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <h3 className="text-3xl text-center">WelCome Back</h3>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <fieldset className="fieldset">
                            {/* name Field */}
                            <label className='lable' > Name</label>
                            <input type="text" {...register('name', { required: true, minLength: 4, maxLength: 20, pattern: /^[A-Za-z]+(?: [A-Za-z]+)* ?$/ })} className="input" placeholder="Full Name" />
                            {errors.name?.type === 'required' && <p className='text-red-600'> Name is rwquired </p>}
                            {errors.name?.type === 'minLength' && <p className='text-red-600'> Minimum length of form is 4 characters </p>}
                            {errors.name?.type === 'pattern' && <p className='text-red-600'> Name must Contain only letters</p>}

                            {/* Img field */}
                            <label className="label">Photo </label>
                            <input type="file" {...register('photo', {
                                required: true, validate: {
                                    fileType: (files) =>
                                        files[0] &&
                                        ["image/jpeg", "image/png"].includes(files[0].type),

                                    minSize: (files) =>
                                        files[0] && files[0].size >= 5 * 1024,

                                    maxSize: (files) =>
                                        files[0] && files[0].size <= 50 * 1024,
                                },
                            })} className="file-input" placeholder="Photo" />
                            {errors.photo?.type === "required" && (
                                <p className="text-red-600">Photo is required</p>
                            )}

                            {errors.photo?.type === "fileType" && (
                                <p className="text-red-600">Only JPG or PNG allowed</p>
                            )}

                            {errors.photo?.type === "minSize" && (
                                <p className="text-red-600">Minimum size is 5 KB</p>
                            )}

                            {errors.photo?.type === "maxSize" && (
                                <p className="text-red-600">Maximum size is 50 KB</p>
                            )}


                            {/* Email field */}

                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-600'> Email is required </p>}



                            <label className="label">Password</label>
                            <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/ })} className="input" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be least 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must contain at least one Upper letter, one lower letter and one special character </p>}


                            <div><p >Already have an account ? please <Link to='/login' className="link link-hover text-blue-600 hover:text-fuchsia-600"> login</Link></p></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <SocialLogin />
                </div>
            </div>

        </div>
    );
};

export default Register;