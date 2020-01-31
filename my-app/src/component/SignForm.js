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
                        <p className="errors"> {errors.name}</p>
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
                    <Field id="password" type="password" name="size" placeholder="password" />
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
        </div>
    )
}

export default SignForm;