import React, {useEffect, useRef, useState} from 'react';
import {Link , useNavigate , useLocation } from 'react-router-dom';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Styles from './login.page.module.css';


import * as Yup from 'yup';
import {BASE_URL} from '../../configs/variable.config';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import http from '../../services/http.service';
import Footer from '../../layouts/user/footer/Footer';
import Header from '../../layouts/user/header/Header';

toast.configure();
const LoginPage = () => {


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
    const {register,handleSubmit, errors } = useForm({
        resolver : yupResolver(validate)
    });

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
    




    <div>
            <Header/>
   
    <div className={Styles.LoginPage}>
       
            
            
        <form   className={Styles.form1}>
            <h1>ورود</h1>

           
         
            <input  onChange={(e) => setUser(e.target.value)}  
             className={Styles.inputs} 
             name='username' id='username'
              type="text" placeholder='تام کاربری'></input>
            <input  onChange={(e) => setPassword(e.target.value)}
               className={Styles.inputs} 
               name = 'passowrd' id='password'
                type="password" placeholder='رمز عبور'></input>
                
 

            <button onClick={login}  type='submit' >ورود</button>
        </form>
            
        
    </div>
    <footer>
        <Footer/>
    </footer>

    </div>



































    );
    

}

export default LoginPage;
