import { useField } from "formik";

import './Input.scss';

type inputProps = {
    label: string,
    id: string,
    name: string,
    type: string,
    placeholder?: string
}

const Input = ({label, ...props} : inputProps) => {
    const [field, meta] = useField(props);
    
    return (
        <div className="wrapper">
            <label htmlFor={props.id} className="wrapper__label">{label}</label>
            <input {...field} {...props} className="wrapper__input"/>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    )
}

export default Input;