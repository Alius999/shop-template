import React from 'react';
import styles from './SignUp.module.css';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

export default function SignUp() {


    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onSubmit'});
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section className={styles.signUp}>
            <h2 hidden>Просто зарегистрируйтесь здесь!</h2>
            <img src="/assets/images/signup-page.png" alt="Sign Up" className={styles.signUpImage} />
            <div className={styles.signUpFormContainer}>
                <h3 className={styles.signUpFormTitle}>Create an account</h3>
                <p className={styles.signUpFormDescription}>Enter your details below</p>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.signUpForm}>
                    <div className={styles.signUpFormGroup}>
                        <label hidden htmlFor="name" className={styles.signUpFormLabel}>Your Name</label>
                        <input type="text" placeholder="Name" {...register("firstName", {required: 'Поле обязательно!',
                            minLength: {value: 3, message: 'Минимальная длина 3 символа'},
                            maxLength: {value: 20, message: 'Максимальная длина 20 символов'}
                        })} id="name" className={styles.signUpFormInput} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                        <label hidden htmlFor="email" className={styles.signUpFormLabel}>Email</label>
                        <input type="email" placeholder="Email" {...register("email",
                                                                   {required: 'Поле обязательно!',
                                                                    pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Неверный email'}
                                                                   })} id="email" className={styles.signUpFormInput} />
                        {errors.email && <p>{errors.email.message}</p>}
                        <label hidden htmlFor="phone" className={styles.signUpFormLabel}>Phone</label>
                        <input type="number" placeholder="Phone number" {...register("phone")} id="phone" className={styles.signUpFormInput} />
                        <label hidden htmlFor="password" className={styles.signUpFormLabel}>Password</label>
                        <input type="password" placeholder="Password" {...register("password")} id="password" className={styles.signUpFormInput} />
                    </div>
                    <button type="submit" className={styles.signUpFormButton}>Create Account</button>
                    <button type="button" className={styles.signUpFormButtonGoogle}>Sign up with Google</button>
                </form>
                <p className={styles.refToLogin}>Already have an account?<NavLink to="/login" className={styles.refToLoginLink}>Log In</NavLink></p>
            </div>
        </section>
    )
}


