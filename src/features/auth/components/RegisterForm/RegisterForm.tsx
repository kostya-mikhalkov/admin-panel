import { Form, Formik } from "formik";
import Input from "../../../../components/Input/Input";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import ButtonForm from "../../../../components/ButtonForm/ButtonForm";
import * as Yup from 'yup';

import '../LoginForm/LoginForm.scss';
import './RegisterForm.scss';

const RegisterForm = () => {
    const initialValues = {
        email: '',
        userName: '',
        password: '',
        checkbox: false
    }

    const validationSchema = Yup.object({
        email: Yup.string()
                  .required("You didn't fill in the field."),
        userName: Yup.string()
                      .min(2, "Minimum 2 symbol.")
                      .required("You didn't fill in the field."),
        password: Yup.string()
                     .min(6, "Minimum 6 symbol.")
                     .required("You didn't fill in the field."),
        checkbox: Yup.boolean()
                     .oneOf([true], "You must accept the terms and conditions")
                     .required("You must accept the terms and conditions")
    })
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={value => console.log(value)}>
            <Form className="form">
                <div>
                    <h2 className="form__title">Create an Account</h2>
                    <h5 className="form__descr">Create a account to continue</h5>
                </div>
                <Input label="Email address:" id="email" name="email" type="email" placeholder="miki185@mail.com"/>
                <Input label="User name:" id="userName" name="userName" type="text" placeholder="Billy Dawson"/>
                <div className="form__password">
                    <Input label="Password:" id="password" name="password" type="password"/>
                    <Checkbox id="checkbox" label="I accept terms and conditions"/>
                </div>
                <ButtonForm descrBtn="Sign Up" textUnderBtn="Already have an account?" textCreateOrLogin="Login"/>
            </Form>
        </Formik>
    )
}

export default RegisterForm;