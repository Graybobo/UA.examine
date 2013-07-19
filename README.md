UA.examine
==========

Examine browser's userAgent.

### Methods:

  - `UA.examine.isIE()` ---- 检测 IE ( 返回 Boolean 类型值 )
  - `UA.examine.isIE( v )` ---- 检测 IE 版本[ v: 版本号 ] ( 返回 Boolean 类型值 )
  - `UA.examine.isFirefox()` ---- 检测 Firefox ( 返回 Boolean 类型值 )
  - `UA.examine.isChrome()` ---- 检测 Chrome ( 返回 Boolean 类型值 )
  - `UA.examine.isSafari()` ---- 检测 Safari ( 返回 Boolean 类型值 )
  - `UA.examine.isOpera()` ---- 检测 Opera ( 返回 Boolean 类型值 )
  - `UA.userAgent()` ---- 返回浏览器 User Agent 信息

### 用法( Usage ):

  - 在您的页面中装载 UA.examine.js:
  
  ```javascript
  <script type="text/javascript" src="UA.examine.js"></script>
  ```
  
  - 在您需要检测浏览器的代码中，调用相应的方法:

  ```javascript
  ......
  if( UA.examine.isIE() ){
      console.log( 'IE browser' );
  }
  
  if( UA.examine.isChrome() ){
      console.log( 'Chrome browser' );
  }
  ......
  ```
  
### Usage example:

  ```html
  <!DOCTYPE HTML>
  <html>
  <head>
  <meta charset="utf-8">
  <script type="text/javascript" src="UA.examine.js"></script>
  <title> UA.examine.js -- Usage example </title>
  <!-- KILLHAPPY. 2013-07-20 -->
  </head>
  
  <body>
  <script type="text/javascript">
  <!--
  var console = console || {
          log: function( s ){
              alert( s );
          }
      };
  
  (function(){
  
      // Examine browser is IE
      if( UA.examine.isIE() ){
    
          console.log( 'IE browser' );
        
          // Examine browser is IE6.0
          if( UA.examine.isIE( 6 ) ){
              console.log( 'IE 6.0' );	
          }
        
          // Examine browser is IE7.0
          if( UA.examine.isIE( 7 ) ){
              console.log( 'IE 7.0' );	
          }
        
          // Examine browser is IE8.0
          if( UA.examine.isIE( 8 ) ){
              console.log( 'IE 8.0' );	
          }
        
          // Examine browser is IE9.0
          if( UA.examine.isIE( 9 ) ){
              console.log( 'IE 9.0' );	
          }
    
      }
    
      // Examine browser is Firefox
      if( UA.examine.isFirefox() ){		
          console.log( 'Firefox browser' );	
      }
    
      // Examine browser is Chrome
      if( UA.examine.isChrome() ){		
          console.log( 'Chrome browser' );	
      }
    
      // Examine browser is Safari
      if( UA.examine.isSafari() ){		
          console.log( 'Safari browser' );	
      }
    
      // Examine browser is Opera
      if( UA.examine.isOpera() ){		
          console.log( 'Opera browser' );	
      }

  })();
  //-->
  </script>
  
  </body>
  </html>
  ```
