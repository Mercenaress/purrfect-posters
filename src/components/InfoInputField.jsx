import style from './InfoInputField.module.scss'

function InfoInputField({label, newValue, value}) {
    return ( 
        <section className={style.inputWrapper}>
            <label htmlFor="">{label}</label>
            <textarea name="" id="" cols="30" rows="10" onChange={newValue} defaultValue={value}></textarea>
        </section>
     );
}

export default InfoInputField;