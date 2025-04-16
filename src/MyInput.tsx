import { useField } from "formik";

type propsType = {
    label: string,
    name: string,
    type: string,
    id: string,
}

const MyInput = ({label, ...props}: propsType) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <input {...field} {...props}/>
            {meta.touched && meta.error ? (<div>{meta.error}</div>) : null}
        </div>
    )
}

export default MyInput