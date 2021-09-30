import styles from "../styles/login.module.scss";
import Head from "next/head"
import Link from "next/link"
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name must be greater than 3 characters.")
        .required("The field is mandatory."),
    email: Yup.string()        
       .email('Invalid email address.')
       .required("The field is mandatory.").nullable(),
	password: Yup.string()
        .min(6, "Password must be greater than 6 characters.")
     	.required("The field is mandatory."),
})

const signup = () => {
    return (
        <div className={styles.container + " " + styles.signup_container}>
        <Head>
            <title>Signup</title>
        </Head>
            <div className={styles.login_container}>
                <h1>Signup</h1>
                <p>Welcome to the team! Have a productive day.</p>
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
                                <div className={styles.input_field_container + " " + styles.input_field_container_signup}>
                                    <Field 
                                        name="name"
                                        className={styles.input_field + " " + (errors.name && touched.name && errors.name ? styles.validationErrorInput : "")}
                                        placeholder="Name" 
                                        type="text"
                                        onBlur={handleBlur} 
                                        onChange={handleChange} 
                                        value={values.name}
                                    />
                                    <span className={styles.validationError}>{errors.name && touched.name && errors.name}</span>
                                </div>
                                <div className={styles.input_field_container + " " + styles.input_field_container_signup}>
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
                                <div className={styles.input_field_container + " " + styles.input_field_container_signup}>
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
                                </div>
                                <button type="submit" className={styles.login_btn}>Signup</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default signup
