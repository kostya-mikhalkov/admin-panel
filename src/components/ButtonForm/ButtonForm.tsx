import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import './ButtonForm.scss';

type ButtonFormType = {
    descrBtn: string,
    textUnderBtn: string,
    textCreateOrLogin: string 
}

const ButtonForm = (props: ButtonFormType) => {
    return (
        <div className='form__btn'>
            <button className='form__btn__button' type='submit'>{props.descrBtn}</button>
            <div className='form__btn__textUnderBtn'>
                <p className='form__btn__textUnderBtn__text'>{props.textUnderBtn}</p>
                <Link className='form__btn__textUnderBtn__link' to={props.textCreateOrLogin === 'Create Account' ? ROUTES.REGISTER : ROUTES.LOGIN}>{props.textCreateOrLogin}</Link>
            </div>
        </div>
    )
}

export default ButtonForm;