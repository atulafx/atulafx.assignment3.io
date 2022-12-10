let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');
content.style.display = 'none';
myBtn.addEventListener('click', function () {
  if (myBtn.innerHTML == 'View more') {
    myBtn.innerHTML = 'View less';
    content.style.display = 'block';
  } else {
    myBtn.innerHTML = 'View more';
    content.style.display = 'none';
  }
});
