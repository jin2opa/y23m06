let physical = document.querySelector('#physical');
let mental= document.querySelector('#mental');
let spiritual = document.querySelector('#spiritual');
let social = document.querySelector('#social');

let sect = document.querySelector('#sect');

let physicalVisible = false;
let mentalVisible  = false;
let spiritualVisible  = false;
let socialVisible = false;

let physicalSentence = `
<h3>* Physical *</h3>
<article>
  <h4>1. Introduction</h4>
  <h4>2. Body</h4>
  <h4>3. Conclusion</h4>
</article>
`
physical.addEventListener('click', () => {
  if(!physicalVisible){
    sect.innerHTML = physicalSentence;
    physicalVisible = true;
  } else {
    sect.innerHTML = physicalSentence;
    physicalVisible = false;
  }
})

mental.addEventListener('click', () => {
  if(!mentalVisible){
    sect.innerHTML = "mental";
    mentalVisible = true;
  } else{
    sect.innerHTML = "mental";
    mentalVisible = false;
  }
})



spiritual.addEventListener('click', () => {
  if(!spiritualVisible){
    sect.innerHTML = "spiritual";
    spiritualVisible = true;
  } else{
    sect.innerHTML = "spiritual";
    spiritualVisible = false;
  }

})

social.addEventListener('click', () => {
  if(!socialVisible){
    sect.innerHTML = "social";
    socialVisible = true;
  } else{
    sect.innerHTML = "social";
    socialVisible = false;
  }

})

/* function myEvent(evtvalue, evn, sen, isVisible){
  evtvalue.addEventListener('click', () => {
    if(!isVisible){
      evn.innerHTML = sen;
      isVisible = true;
  }})
} */

/* myEvent(physical, sect, "physical", physicalVisible);
myEvent(mental, sect, "mental", mentalVisible);
myEvent(spiritual, sect, "spiritual", spiritualVisible);
myEvent(social, sect, "social", socialVisible); */




