'use strict';
// hide personal infor
const personalinfor = document.querySelector('.personalinfor');
const emailinputform = document.querySelector('.emailinputform');
const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
const btnemailsubmit = document.querySelector('.btnemailsubmit');
personalinfor.classList.add('hidden');
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const showpersonalinfor = function () {
  x = exampleInputEmail1.value;
  console.log(x);
  if (regex.test(x)) {
    personalinfor.classList.remove('hidden');
    emailinputform.classList.add('hidden');
  } else {
    alert('please input email');
  }
};
let x;
console.log(exampleInputEmail1.value);

btnemailsubmit.addEventListener('click', showpersonalinfor); // click submit email

// view more and view lest job infor

let viewmorebtn = document.querySelectorAll('.viewmorebtn');
const jobinfocontent = document.querySelectorAll('.job-info-content');

for (let i = 0; i < viewmorebtn.length; i++) {
  viewmorebtn[i].addEventListener('click', function () {
    if (viewmorebtn[i].innerHTML === 'View more') {
      viewmorebtn[i].innerHTML = 'View less';
      jobinfocontent[i].style.display = 'block';
    } else {
      viewmorebtn[i].innerHTML = 'View more';
      jobinfocontent[i].style.display = 'none';
    }
  });
}
