import React from 'react';
import styles from './logIn.module.css';
import { useForm } from 'react-hook-form';

export default function LogIn() {

    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onSubmit'});
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section className={styles.logIn}>
            <h2 hidden>Войдите в свой личный аккаунт здесь!</h2>
            <img src="assets/images/signup-page.png" alt="Sign Up" className={styles.logInImage} />
            <div className={styles.logInFormContainer}>
                <h3 className={styles.logInFormTitle}>Log in to Exclusive</h3>
                <p className={styles.logInFormDescription}>Enter your details below</p>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.logInForm}>
                    <div className={styles.logInFormGroup}>
                        <label hidden htmlFor="email" className={styles.logInFormLabel}>Email</label>
                        <input type="email" placeholder="Email" {...register("email",
                                                                   {required: 'Поле обязательно!',
                                                                    pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Неверный email'}
                                                                   })} id="email" className={styles.logInFormInput} />
                        {errors.email && <p>{errors.email.message}</p>}
                        <label hidden htmlFor="password" className={styles.logInFormLabel}>Password</label>
                        <input type="password" placeholder="Password" {...register("password", 
                            {required: 'Поле обязательно!'})} id="password" className={styles.logInFormInput} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className={styles.logInButtonsWrapper}>
                        <button type="submit" className={styles.logInFormButton}>Log In</button>
                        <button type="button" className={styles.logInForgotPassword}>Forget Password?</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


