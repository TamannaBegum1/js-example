
// Example-01
document
  .getElementById("btn-change-text")
  .addEventListener("click", function () {
    document.getElementById("change-text").innerText = "it's works";
  });
  // Example-02
function showDate() {
  document.getElementById("date").innerHTML = Date();
}
// Example-03
function smile() {
  document.getElementById("emoji").src = "./imgaes/smile.gif";
}
function sad() {
  document.getElementById("emoji").src = "./imgaes/sad.gif";
}

//ex-4
function bulbOn(){
  document.getElementById("img").src="imgaes/bulbon.gif";
}
function bulbOff(){
document.getElementById("img").src="imgaes/bulboff.gif";
}
//ex-5
function showBorder() {
  document.getElementById("border").style.border="2px solid red";
}
//ex-6
function showText() {
  document.getElementById("showHideText").style.display="block";
}
function hideText() {
  document.getElementById("showHideText").style.display="none";
}
//ex-7
var number1 = 6;
var number2 = 6;

var result = number1 + number2;

function showResult(){
  document.getElementById("showR").innerHTML=result;
}
//ex-8
number1,number2,result;
num1 = 20;
num2 = 10;
sum = num1 - num2;
function showE(){
  document.getElementById("showE").innerHTML=sum;
}
//ex-9
var number3,number4,result;
number3 = 20;
number4 = 10;
number3 += number4;
function showA(){
  document.getElementById("showA").innerHTML=number3;
}
//ex-10 classname
function cName(){
  document.getElementsByClassName('p')[0].innerHTML="world";
}
//ex-11 show length
function sLength(){
  var data = document.getElementsByTagName('h1');
  alert(data.length);
}
//ex-12 font size
function fontSize() {
  document.getElementById("f_size").style.fontSize='35px';
}
//ex-13 mode change
function modeChange(){
  const element = document.body;
  element.classList.toggle("dark-mode");
}
//ex-14 Decimal format
function twoDecimal() {
  const number = parseFloat(document.getElementById('e-14').innerText).toFixed(2);
  document.getElementById('e-14').innerText = number;
}
//ex-15 redirect
function redirect(){
  location.href = "https://onlittlewonderland.com/"
}
//ex-16 toggle text
function textAlign(){
  document.getElementById("text-align").style.textAlign="center";
}
//ex-17 font style
function fontStyle(){
  document.getElementById("font-style").style.fontStyle="italic";
}
//ex-18 random number
document.getElementById("b-18").addEventListener("click",function(){
  document.getElementById("r-18").innerText = Math.floor(
    Math.random() * 6
    );
});
// Example-19
function changeBgColor() {
  document.getElementById("text-bg-color").style.backgroundColor = "red";
}
// Example-20
function changeColor() {
  document.getElementById("text-color").style.color = "red";
}
// Example-21
function showText() {
  document.getElementById("show").style.display = "block";
}
// Example-22
function fullName() {
  const fName = document.getElementById("f-name").innerText;
  const lName = document.getElementById("l-name").innerText;

  document.getElementById("full-name").innerText = fName + " " + lName;
}
// Example-23
document
  .getElementById("btn-new-comment")
  .addEventListener("click", function () {
    const post = document.getElementById("new-comment");
    const newPost = post.value;

    const commentContainer = document.getElementById("comment-container");
    const pTag = document.createElement("p");
    // pTag.innerText = newPost;
    pTag.innerHTML = `
        <p class="fs-4 mb-0">${newPost}</p>
    `;
    commentContainer.appendChild(pTag);
    post.value = "";
  });
// Example-24
document.getElementById("chk-24").addEventListener("click", function () {
  const number = parseInt(document.getElementById("num-24").innerText);
  const result = typeof number;
  const publishResult = document.getElementById("type-24");
  publishResult.innerText = result;
});
// Example-25
document.getElementById("chk-25").addEventListener("click", function () {
  const text = document.getElementById("text-25").innerText;
  const result = typeof text;
  const publishResult = document.getElementById("type-25");
  publishResult.innerText = result;
});
// Example-26
function wordReverse() {
  document.getElementById("word-reverse").innerText = document
    .getElementById("word-reverse")
    .innerText.split("")
    .reverse()
    .join("");
}
// Example-27
function showAlert() {
  alert("Warning.............!!!!!!!!");
}
// Example-28
function hideImage() {
  document.getElementById("hide-img").style.display = "none";
}
// Example-29
function textUnderline() {
  document.getElementById("text-underline").style.textDecoration = "underline";
}
// Example-30
function showImage() {
  document.getElementById("show-img").style.display = "block";
}
// Example-31
function imageBorder() {
  document.getElementById("img-border").style.borderRadius = "20px";
}
// Example-32
document.getElementById("in-to-ft").addEventListener("click", function () {
  const inch = document.getElementById("num-32").value;
  const result = (parseFloat(inch) / 12).toFixed(2);
  if (isNaN(result)) {
    return alert("Please in a valid number.");
  }
  document.getElementById("r-32").innerText = result;
});
