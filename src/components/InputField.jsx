function InputField({label, newValue}) {
    return ( 
    <section>
        <label htmlFor="">{label}</label>
        <input type="text" name="" id="" onChange={newValue} />
    </section>
     );
}

export default InputField;