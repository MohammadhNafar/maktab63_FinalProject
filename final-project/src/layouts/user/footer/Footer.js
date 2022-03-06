import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">فروشگاه چوکوفور</h1>
        
    <h2>ارتباط با ما </h2>
    
    <address>
      ایران اصفهان <br/>
          
      <a className="footer__btn" href="mohammadhnafar@gmail.com">ایمیل</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">پشتیبانی 24 ساعته</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">پشتیبانی آنلاین</a>
        </li>

        <li>
          <a href="#">تلگرام</a>
        </li>
            
        <li>
          <a href="#">واتساپ</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">تحویل فوری</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#">تحویل درب منزل</a>
        </li>
        
        <li>
          <a href="#">اصل بودن محصولات</a>
        </li>
        
        <li>
          <a href="#">ضمانت بازگشت کالا</a>
        </li>
        
        <li>
          
        </li>
        
        <li>
       
        </li>
        
        <li>
        
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">قوانین</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">سیاست حفظ حریم خصوصی</a>
        </li>
        
        <li>
          <a href="#">شرایط استفاده</a>
        </li>
        
     
      </ul>
    </li>
  </ul>
  <div class="legal">
    <p>&copy; 2022  تمامی حقوق محفوظ است</p>
  
  </div>
 
</footer>
        </div>
    );
}

export default Footer;
