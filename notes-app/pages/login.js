import styles from "../styles/login.module.scss";
import Head from "next/head"
import Link from "next/link"
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";

const Schema = Yup.object().shape({
    email: Yup.string()        
       .email('Invalid email address.')
       .required("The field is mandatory.").nullable(),
	password: Yup.string()
        .min(6, "Password must be greater than 6 characters.")
     	.required("The field is mandatory."),
})

const login = () => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Login</title>
        </Head>
            <div className={styles.login_container}>
                <h1>Login</h1>
                <p>Welcome Back! Have a productive day.</p>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={Schema}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ values, errors, touched, handleChange, handleBlur }) => (
                        <Form className={styles.form_container}>
                                <div className={styles.input_field_container}>
                                    <Field 
                                        name="email"
                                        className={styles.input_field + " " + (errors.email && touched.email && errors.email ? styles.validationErrorInput : "")}
                                        placeholder="Email" 
                                        type="email"
                                        onBlur={handleBlur} 
                                        onChange={handleChange} 
                                        value={values.email}
                                    />
                                    <span className={styles.validationError}>{errors.email && touched.email && errors.email}</span>
                                </div>
                                <div className={styles.input_field_container + " " + styles.password_container}>
                                    <Field 
                                        name="password"
                                        className={styles.input_field + " " + (errors.password && touched.password && errors.password ? styles.validationErrorInput : "")}
                                        placeholder="Password" 
                                        type="password"
                                        onBlur={handleBlur} 
                                        onChange={handleChange} 
                                        value={values.password}
                                    />
                                    <span className={styles.validationError}>{errors.password && touched.password && errors.password}</span>
                                    <Link href="/forgot-password"><p className={styles.forget_password}>Forgot password?</p></Link>
                                </div>
                                <button type="submit" className={styles.login_btn}>Login</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default login
