// Fig. 12.5: coverviewer.js 
// Script to demonstrate dynamic styles used for animation. 
var interval = null; // keeps track of the interval
var speed = 6; // determines the speed of the animation
var count = 0; // size of the image during the animation

// called repeatedly to animate the book cover
function run()
{
   count += speed;

   // stop the animation when the image is large enough
   if ( count >= 600 ) 
   {
      window.clearInterval( interval );
      interval = null;
   } // end if

   var bigImage = document.getElementById( "imgCover" );
   bigImage.setAttribute( "style", "width: " + ( count + "px;") +
      "height: " + (count + "px;") );
} // end function run

// inserts the proper image into the main image area and
// begins the animation
function display( imgfile )
{
   if ( interval )
      return;

   var bigImage = document.getElementById( "imgCover" );
   bigImage.setAttribute( "style", "width: 0px; height: 0px;" );
   bigImage.setAttribute( "src", "fullsize/" + imgfile );
   bigImage.setAttribute( "alt", "Large version of " + imgfile );
   count = 0; // start the image at size 0
   interval = window.setInterval( "run()", 10 ); // animate
} // end function display

// register event handlers
function start()
{
   document.getElementById( "paint1" ).addEventListener(
      "click", function() { display( "paint1.jpg" ); }, false );
   document.getElementById( "paint2" ).addEventListener(
      "click", function() { display( "paint2.jpg" ); }, false );
   document.getElementById( "paint3" ).addEventListener(
      "click", function() { display( "paint3.jpg" ); }, false );
   document.getElementById( "paint4" ).addEventListener(
      "click", function() { display( "paint4.jpg" ); }, false );
   document.getElementById( "paint5" ).addEventListener(
      "click", function() { display( "paint5.jpg" ); }, false );
   document.getElementById( "paint6" ).addEventListener(
      "click", function() { display( "paint6.jpg" ); }, false );
} // end function start

window.addEventListener( "load", start, false );

/*************************************************************************
* (C) Copyright 1992-2012 by Deitel & Associates, Inc. and               *
* Pearson Education, Inc. All Rights Reserved.                           *
*                                                                        *
* DISCLAIMER: The authors and publisher of this book have used their     *
* best efforts in preparing the book. These efforts include the          *
* development, research, and testing of the theories and programs        *
* to determine their effectiveness. The authors and publisher make       *
* no warranty of any kind, expressed or implied, with regard to these    *
* programs or to the documentation contained in these books. The authors *
* and publisher shall not be liable in any event for incidental or       *
* consequential damages in connection with, or arising out of, the       *
* furnishing, performance, or use of these programs.                     *
*************************************************************************/