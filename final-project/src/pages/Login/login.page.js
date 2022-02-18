import React, {useEffect, useRef, useState} from 'react';
import {Link , useNavigate , useLocation} from 'react-router-dom';
import Styles from './login.page.module.css';
import {Formik} from 'formik';
import {Form}  from 'formik';

import Inputs from '../../Components/Inputs/Input.component';
import * as Yup from 'yup';


const LoginPage = () => {
    
    // const [FormData, setFormData] = useState({username: '' , password: ''});
    // const formRef = useRef();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = new FormData(e.target);
    //     const data = Object.fromEntries(form);
    //     setFormData(data);
    //     try {
    //         console.log('submit', e)
    //         console.log("username is ",e , data)
    //     } catch (e) {
            
    //     }

    // };

    // const handleBlur = (e) =>{
    //     if (!formRef.current) return;
    //     console.log("handleBlur: 0 " , formRef)


    
    //     const form = new FormData(formRef.current);
    //     const data = Object.fromEntries(form);
    //     console.log("handleBlur " , data)
        
    // }
    
    const validate = Yup.object({
        userName: Yup
            .string()
            .max(15, "کلمات وارد شده باید 15 یا کمتر باشند")
            .required('لطفا این قسمت را خالی نگذارید'),
        passWord: Yup
            .string()
            .max(6, "رمز عبور باید حداقل 6 کاراکتر باشد ")
            .required('رمز عبور الزامی است ')
    })

    useEffect(() => {
        //localStorage.setItem('loggedin', 'true')
    });

    return (
        <div>
            <Link to='/'>
                <button className={Styles.HomeBtn}></button>
            </Link>
            <Formik
                initialValues={{
                    userName: '',
                    passWord: ''
                }}
                validationSchema={validate}>
                {
                    formik => (
                        <div className={Styles.loginpage}>

                            <div className={Styles.form}>
 
                                <form  className={Styles.form1}>
                                    <h1>ورود مدیریت</h1>
                                    {console.log(formik.values)}
                                     <Form>
                                        <Inputs   label="نام کاربری" name="userName" type="text"  />
                                        <Inputs   label="رمز عبور" name="passWord" type="password" />

                                     </Form> 
                                    {/* <Link to='/Quantity'> */}
                                        <button type='submit' >ورود</button>
                                    {/* </Link> */}

                                </form>
                            </div>
                        </div>
                    )
                }
            </Formik>
        </div>
    );
}

export default LoginPage;
