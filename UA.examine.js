/*!
 * UserAgent examine component
 * Https://github.com/Graybobo/UA.examine
 * KILLHAPPY. 2013-07-10
 */

(function( w ){

	'use strict';
	
	var __uAgent = ( window.navigator && navigator.userAgent ) || '';

	var UA = {
	
		examine: (function(){
		
			return {
			
				// Examine browser is IE
				isIE: function(){
					return ( navigator.appName === 'Microsoft Internet Explorer' );
				},
				
				// Examine browser is Firefox
				isFirefox: function(){
					return (/mozilla(.*)\Wfirefox\W/i).test( __uAgent );
				},
				
				// Examine browser is Chrome
				isChrome: function(){
					return (/webkit\W(.*)(chrome|chromium)\W/i).test( __uAgent );
				},
				
				// Examine browser is Safari
				isSafari: function(){
					return (/webkit\W(?!(.*)chrome)(.*)safari\W/i).test( __uAgent );
				},
				
				// Examine browser is Opera			
				isOpera: function(){
					return (/opera(.*)\Wpresto\W/i).test( __uAgent );
				}
			
			};
		
		})(),
	
		// Return browser userAgent info
		userAgent: function(){
			return __uAgent;
		}
	
	};

	// Expose to global scope
	w.UA = UA;

})( window );
