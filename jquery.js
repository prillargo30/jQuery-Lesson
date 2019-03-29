// // Select all divs with a purple background
// $('div').css('background', 'purple');

// select the divs with a class highlight and give a width of 200px
// $('.highlight').css('width', '200px');
// $('div.highlight').css('width', '200px');

// Select the id "third" and give a border of orance
// $('#third').css('border', '5px solid orange');

// // select the first div and give a font color of pink
// // $('div:first').css('color', 'pink'); slower
// $('div:first-of-type').css('color', 'pink') faster loading


// Text and HTML
// //Getting the value of the text
// $('h1').text();
// $('ul').text();
// // This gives you the value of "Hello Jquery" and "sample sample sample"

// // Adding new text
// $('h1').text('Hello another JQuery');
// $('li').text('Another sample');
// //The h1 content was changed to "Hello another JQuery" and "Another Sample"

// //HTML
// $('ul').html('<li>I changed the inside text of your HTML under your ul.</li><li>I changed the inside text of your HTML under your ul.</li>');
// //changing your html content under ul from the the example above shown. *Please note that ul is different from li content. Be specific, when you have to change using HTML use the container or the specific class or id.


// // ATTR and VALUE
// $('img').css('width');
// // it shows the width size of the image.

// $('img').css ('width', 200);
// // You changed the image size from the original to 500.

// $('img').attr('src', "april.jpg");
// // it changes your image from the original image.

// // $('input').attr('type', 'color');
// // $('input').attr('type', 'checkbox');
// //It changes the color input.
// //It changes to a textbox input.

// $('img:first').attr('src', 'landing1.jpg');
// //The first image was changed using the word "first".

// $('img').last().attr('src', 'landing1.jpg');
// //The last image was changed using the word "last".

// $('img').attr('src', 'landing1.jpg');
// //It changes all the images.

// $('input').val('April Largo');
// //It changes the content of the input.

// $('input').val("");
// // It deletes the content of the input.

// $('select').val('largo');
// //It selects the value of what you want to select.

// //addClass
// $('h1').addClass('correct');
// // *choose from here: correct, wrong, done(see html under style in the head section//
// //It changes the color using the addClass which you add in your css.
// $('h1').removeClass('correct');
// //It goes back to it's normal color.

// $('h1').toggleClass('correct');
// //It toggles all. Thenn try rewrite the code then it goes back to normal again.

// $('li').first().toggleClass('done');
// //It toggles the first item in the li item.Just like toggleCompleted in js. When run again it goes back to normal.

// // Click
// $('h1').click(function (){
//     alert('h1 clicked!');
// });
// //When h1 is being clicked it shows "h1 clciked".
// $('button').click(function (){
//     alert('button clicked!');
// });
// // When the buttons are being clicked it shows "button clciked".
// $('button').click(function (){
//     $(this).css('background', 'blue');
// });
// //When the buttons are being clicked it changes the color of each button.
// $('button').click(function(){
// var text = $(this).text();
// console.log(text);
// });
// //Try it in the console. When you clicked the button it shows the text content in the console log.(Text is referring to your button text content).

// Keypress
// $('input').keypress(function (){
// console.log('You pressed a key');
// });
// //Whenever you press a key it gives you a number of the letters you type in the console log.
// $('input').keypress(function (event) {
//     if(event.which === 13) {
//         alert('You hit the enter');
//     }
// });
//Whenever you clicked the "enter"(13 refers to the word enter which you can have the access searching for the JS charcode/keycode) key it shows up the alert text.
// $('input').on('keypress', function(){
//     console.log('Keypressed!');
// });

// $('input[type="text"]') ?????

// // ON
// // $('h1').on('click', function () {
// //     $('h1').css("color", "purple");
// // });
// //All of the h1's changed the text color to purple.
// $('h1').on('click', function () {
//     $(this).css("color", "purple");
// });
// //Only one item changed to its color once it is being clicked.keyword "this".
// $('button').on('mouseenter', function() {
//     $(this).css("color", 'red');
// });
// // When the button is being hover it changes the color to red. keyword "mouseenter"
// $('button').on('mouseleave', function() {
//     $(this).css('color', 'black');
// });
// //After you hover and leave the button it goes back to its normal color/black. key words "mouseleave" and "normal".

// jQuery Effects
// (FADE) IT SHOULD HAVE A DISPLAY TO THE CSS
// $('button').on('click', function(){
//     $('p').fadeOut(1000);
// });
// When you click the 'click me' button it fades out to "1000ms".
// $('button').on('click', function(){
//     $('p').fadeOut(1000, function (){
//         $(this).remove();
//     });
// });
//The last line represents that there are no text alert in the console happened when being clicked.keyword "fadeOut"
// $('button').on('click', function(){
//     $('p').fadeIn(1000, function (){
//         // $(this).remove();
//     });
// });
// It fades in remember to put "display:none in the css section" keyword "fadeIn"
// $('button').on('click', function(){
//     $('p').fadeToggle(500, function (){
//     });
// }); 
//When you click the click me button it fades in and out.keyword "fadeToggle"

// // (SLIDES)
// $('button').on('click', function () {
//     $('p').slideDown();
// }); 
// //It slides down. THERE SHOULD BE A DISPLAY:NONE TO THE CSS SECTION.keyword "slideDown"
// $('button').on('click', function () {
//     $('p').slideUp();
// });
// //It slides up. NO DISPLAY:NONE TO THE CSS SECTION.keyword "slideUp"
// $('button').on('click', function () {
//     $('p').slideToggle();
// });
//It slides up and down. keyword "slideToggle"
// $('button').on('click', function () {
//     $('p').slideToggle(500, function () {
//         console.log('Slide is done');
            // $(this).remove();
//     });
// });
//Console.log if you wanted to print out something in the console once toggle, but you can also get rid of that too using "$(this).remove()"