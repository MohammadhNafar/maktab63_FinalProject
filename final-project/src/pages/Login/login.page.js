import React, {useEffect, useRef, useState} from 'react';
import {Link , useNavigate , useLocation } from 'react-router-dom';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Styles from './login.page.module.css';
import {Formik} from 'formik';
import {Form}  from 'formik';
import {History} from 'react-router-dom'
import Inputs from '../../Components/Inputs/Input.component';
import * as Yup from 'yup';
import {BASE_URL} from '../../configs/variable.config';
import axios, { Axios } from 'axios';
import http from '../../services/http.service';
import Footer from '../../layouts/user/footer/Footer';
import Header from '../../layouts/user/header/Header';

toast.configure();
const LoginPage = () => {
    

    
   //const [FormData, setFormData] = useState({username: '' , password: ''});
    // const formRef = useRef();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = new FormData(e.target);
    //     const data = Object.fromEntries(form);
    //     //setFormData(data);
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
        username: Yup
            .string()
            .max(15, "کلمات وارد شده باید 15 یا کمتر باشند")
            .required('لطفا این قسمت را خالی نگذارید'),
        password: Yup
            .string()
            .max(6, "رمز عبور باید حداقل 6 کاراکتر باشد ")
            .required('رمز عبور الزامی است ')
    })

    const Nav = useNavigate();

    const [username,setUser] = useState("");
    const [password,setPassword] = useState("");

     function login(e)
    {
        e.preventDefault();
        console.log(username , password)
        
        http.post(`http://localhost:3002/auth/login` ,{
            username,
            password
       })
       .then(function (response) {
        console.log(response);
        localStorage.setItem('ACCESS_TOKEN', response.data.token);
        localStorage.setItem('IS_LOGGEDIN', true);
        Nav('/Products')
        
         
    }) .catch(function (error) {
        console.log(error);
        toast.error('نام کاربری یا رمز عبور صحیح نمیباشند')
      });

    }

    

    return (
    //     <div>
    //         <Link to='/'>
    //             <button className={Styles.HomeBtn}></button>
    //         </Link>
            //  <Formik
            //     initialValues={{
            //         userName: '',
            //         passWord: ''
            //     }} 
            //     validationSchema={validate}>
            //     {
            //         formik => (
            //             <div className={Styles.loginpage}>

            //                 <div className={Styles.form}>
 
            //                     <form  className={Styles.form1}>
            //                         <h1>ورود مدیریت</h1>
            //                         {console.log(formik.values)}
            //                          <Form>
            //                             <Inputs   label="نام کاربری" name="userName" type="text"  />
            //                             <Inputs   label="رمز عبور" name="passWord" type="password" />

            //                          </Form> 
            //                         {/* <Link to='/Quantity'> */}
            //                             <button type='submit' >ورود</button>
            //                         {/* </Link> */}

            //                     </form>
            //                 </div>
            //             </div>
            //         )
            //     }
            // </Formik>
    //     </div>
    




    <div>
         {/* <Link to='/'>
                 <button className={Styles.HomeBtn}></button>
            </Link> */}
            <Header/>
   
    <div className={Styles.LoginPage}>
        <Formik
        initialValues={{
            username: '',
            password: ''
        }} 
        validationSchema={validate}
        
        >
            {
            formik => (
        <form  className={Styles.form1}>
            <h1>ورود</h1>

           
            <Form>
            <input onChange={(e) => setUser(e.target.value)}  
             className={Styles.inputs} 
             name='username' id='username'
              type="text" placeholder='تام کاربری'></input>
            <input onChange={(e) => setPassword(e.target.value)}
               className={Styles.inputs} 
               name = 'passowrd' id='password'
                type="password" placeholder='رمز عبور'></input>
 </Form> 

            <button onClick={login} type='submit' >ورود</button>
        </form>
            )}
        </Formik>
    </div>
    <footer>
        <Footer/>
    </footer>

    </div>



































    );
    

}

export default LoginPage;
