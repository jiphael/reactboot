import React from 'react';
import FindBar from './search';
import TopNav from './topnav';

class Header extends React.Component{
    render(){
      return (
        <header class="site-navbar" role="banner">
        <div class="site-navbar-top">
          <div class="container">
            <div class="row align-items-center">
  
              <FindBar/>
  
              <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div class="site-logo">
                  <a href="index.html" class="js-logo-clone">고양이책장</a>
                </div>
              </div>
  
              <div class="col-6 col-md-4 order-3 order-md-3 text-right">
                <div class="site-top-icons">
                  <ul>
                    <li><a href="#"><span class="icon icon-person">로그인</span></a></li>
                    <li><a href="#"><span class="icon icon-heart-o">?</span></a></li>
                    <li>
                      <a href="cart.html" class="site-cart">
                        <span class="icon icon-shopping_cart">장바구니</span>
                        <span class="count">2</span>
                      </a>
                    </li> 
                    <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li>
                  </ul>
                </div> 
              </div>
  
            </div>
          </div>
        </div> 
         <TopNav/> 
      </header>
      )
    }
  }
      
  export default Header;