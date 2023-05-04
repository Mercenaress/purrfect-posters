function InputField({label, newValue, value}) {
    return ( 
    <section>
        <label htmlFor="">{label}</label>
        <input type="text" name="" id="" onChange={newValue} defaultValue={value}/>
    </section>
     );
}

export default InputField;