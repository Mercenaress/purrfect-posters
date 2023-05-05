import style from './InputField.module.scss'

function InputField({label, newValue, value}) {
    return ( 
    <section className={style.inputWrapper}>
        <label htmlFor="">{label}</label>
        <input type="text" name="" id="" onChange={newValue} defaultValue={value}/>
    </section>
     );
}

export default InputField;