import { useField } from 'formik';

import './Checkbox.scss';

type CheckboxType = {
    id: string,
    label: string,

}

const Checkbox = ({label, id}: CheckboxType) => {
    const [field] = useField("checkbox");
    return (
        <div className="checkbox">
            <input type="checkbox"
                   id={id}
                   {...field} />
            <label htmlFor={id}
               className='checkbox__label'>
                {label}
            </label>
        </div>
    )
};

export default Checkbox;