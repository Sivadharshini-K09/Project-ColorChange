const btn=document.querySelector('button')
const body=document.querySelector('body')
body.style.backgroundColor="red";
const color=['sky blue','black','lavender','grey','purple','pink'];
document.addEventListener('click',function(){
  const colorIndex = parseInt(Math.random()*color.length ); 
  body.style.backgroundColor=color[colorIndex];
});
