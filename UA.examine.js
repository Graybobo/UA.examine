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
				isIE: function( v ){
				
					if( v ){
					
						// User agent to uppercase
						var __UA = __uAgent.toUpperCase(),
						
						    // Construct versions feature string
						    v_str = 'MSIE ' + v + '.0';													
						
						// Find versions feature string
						// If exists: true, Else: false
						if( __UA.indexOf( v_str ) != -1 ){
							return true;
						}
						else{
							return false;
						}
					
					}
					else{
						return ( navigator.appName === 'Microsoft Internet Explorer' );
					}
				
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
				},
				
				// Examine browser whether support canvas
				isSupportCanvas: function(){
					var canvas = document.createElement("canvas");
					return !( canvas.getContext && canvas.getContext('2d') ) ? false : true;
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
