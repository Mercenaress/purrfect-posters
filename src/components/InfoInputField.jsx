function InfoInputField({label, newValue}) {
    return ( 
        <section>
            <label htmlFor="">{label}</label>
            <textarea name="" id="" cols="30" rows="10" onChange={newValue} ></textarea>
        </section>
     );
}

export default InfoInputField;