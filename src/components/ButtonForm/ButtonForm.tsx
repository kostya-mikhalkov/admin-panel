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
                <a href="#" className='form__btn__textUnderBtn__link'>{props.textCreateOrLogin}</a>
            </div>
        </div>
    )
}

export default ButtonForm;