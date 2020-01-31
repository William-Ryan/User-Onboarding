import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignForm = ({ values, errors, touched, status }) => {
    
    const [signUp, setSignUp] = useState([]);

    useEffect(() => {
        status && setSignUp(signUp => [...signUp, status]);
    }, [status]);

}

export default SignForm;