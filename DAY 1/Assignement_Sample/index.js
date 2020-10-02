document.getElementById("make_form").addEventListener("submit", make); //will only execute if all the required fields are filled
function make(e) {
  e.preventDefault(); // to prevent form submission or reload of webpage
  var name = document.getElementById("name").value;
  var exp = document.getElementById("exp").value;
  var pos = document.getElementById("pos").value;
  var qual = document.getElementById("qual").value;
  var skill = document.getElementById("skill").value;
  var level = document.getElementById("level").value;
  var str;
  str = `
    <div class="Container">
    <h3>RESUME </h3><br>
        <b>NAME : </b>${name}<br>
        <b>I have a experience of ${exp} years in the field of ${pos}.</b><br>
        <b>Qualification : ${qual}</b><br>
        <b>Skills : ${skill}</b><br>
        <b>Skill level : ${level}</b><br><div class="progress-bar" style="width:70%">
        </div>
        `;
  document.getElementById("write").innerHTML = str;
}
