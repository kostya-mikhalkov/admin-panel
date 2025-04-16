import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Input from "../../../../components/Input/Input";
import Checkbox from '../../../../components/Checkbox/Checkbox';
import ButtonForm from '../../../../components/ButtonForm/ButtonForm';

import './LoginForm.scss';

const LoginForm = () => {
    const initialValues = {
        email: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string()
                  .required("You didn't fill in the field."),
    })

    return (
            <Formik 
                   initialValues={initialValues}
                   validationSchema={validationSchema}
                   onSubmit={values => {
                    console.log(values)
                   }}>
                <Form className="form">
                    <div>
                        <h2 className="form__title">Login to Account</h2>
                        <h5 className="form__descr">Please enter your email and password to continue</h5>
                    </div>
                    <Input label="Email address:" id="email" name="email" type="email" placeholder="miki185@mail.com"/>
                    <div className="form__password">
                        <Input label="Password:" id="password" name="password" type="password"/>
                        <Checkbox id="checkbox" label="Remember Password"/>
                    </div>
                    <ButtonForm descrBtn="Sign Up" textCreateOrLogin="Login" textUnderBtn="Already have an account?"/>
                </Form>
            </Formik>
    )
}

export default LoginForm;