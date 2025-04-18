import { useField } from 'formik';

import './Checkbox.scss';
import '../Input/Input.scss';

type CheckboxType = {
    id: string,
    label: string,

}

const Checkbox = ({label, id}: CheckboxType) => {
    const [field, meta] = useField("checkbox");
    return (
        <div className="checkbox">
            <input type="checkbox"
                   id={id}
                   {...field}
                   checked={field.value}
                   />
            <label htmlFor={id}
               className='checkbox__label'>
                {label}
            </label>
            {meta.error ? (<div className='error'>{meta.error}</div>) : null}
        </div>
    )
};

export default Checkbox;