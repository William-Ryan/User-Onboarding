import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignForm = ({ values, errors, touched, status }) => {
    
    const [signUp, setSignUp] = useState([]);

    useEffect(() => {
        status && setSignUp(signUp => [...signUp, status]);
    }, [status]);

    return (
        <div className="signup-form">
            <Form>
                <label htmlFor="name">
                    Name
                    <Field 
                      id="name"
                      type="text"
                      name="name"
                      placeholder="name"
                    />
                    {touched.name && errors.name && (
                        <p className="errors">{errors.name}</p>
                    )}
                </label>
                <label htmlFor="email">
                    Email
                    <Field id="email" type="email" name="email" placeholder="email" />
                    {touched.email && errors.email && (
                        <p className="errors">{errors.email}</p>
                    )}
                </label>
                <label htmlFor="password">
                    Password
                    <Field id="password" type="password" name="password" placeholder="password" />
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}
                </label>
                <label className="checkbox-container">
                    Terms Of Service
                    <Field 
                    type="checkbox"
                    name="terms"
                    checked={values.terms}
                    />
                    <span className="checkmark" />
                </label>
                <button type="submit">Submit!</button>
            </Form>
            {signUp.map(sign => {
                return (
                    <ul key={sign.id}>
                        <li>Name: {sign.name}</li>
                        <li>Email: {sign.email}</li>
                        <li>Password: {sign.password}</li>
                    </ul>
                );
            })}
        </div>
    );
};

const FormikSignForm = withFormik({
    
    mapPropsToValues(props) {
        return{
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            terms: props.terms || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("NAME IS REQUIRED"),
        email: Yup.string().email("EMAIL NOT VALID"),
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        axios.post("https://reqres.in/api/users/", values)
        .then(res => {
            setStatus(res.data);
            resetForm();
        })
        .catch(err => {
            console.log("unsuccessful", err);
        })
    }

})(SignForm);

export default FormikSignForm;