import React from 'react';
import Styles from './input.module.css';
import { ErrorMessage ,  useField } from 'formik';

const InputComponent = ({label, ...props}) => {
    const [field, meta] = useField(props)
   
    return (
        <div>
        <div>
            <label className={Styles.inputLabel} htmlFor={field.name} >{label}</label>
        <input 
        className={Styles.inputs}
        {...field} {...props}
        autoComplete="off" 
        
        />
        </div>
        <ErrorMessage component="div" className={Styles.error} name = {field.name} />

        </div>
    );
}

export default InputComponent;
