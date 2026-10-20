function darkMode() {
  document.body.classList.toggle("dark");
  let btn = document.getElementById("darkBtn");

  if(document.body.classList.contains("dark")) {
    btn.innerText ="Light Mode";
  } else {
    btn.innerText ="Dark Mode";
  }
}

function searchSit(){
  let input = document.getElementById("searchBox").value.toLowerCase();
  console.log("Searching for: " + input);
}

function showMessage(){
  alert("Karibu Imhotep Digital!");
  document.getElementById("services").scrollIntoView({behavior: "smooth"});
}

function searchSit(){
  let input = document.getElementById("searchBox").value.toLowerCase();
  let cards = document.querySelectorAll("gallery-card");
  cards.forEach(card =>{
    if(card.innerText.toLowerCase().includes(input)){
      card.style.display = "block";
      
    } else {
      card.style.display = "none";
    }
  });
}
function sendMessage() { 
  let name = document.getElementById("contactName").value; 
  let email = document.getElementById("contactEmail").value;  
  let msg = document.getElementById("contactMsg").value;

  if (name == "" || email == ""|| msg == ""){
    alert("Chonde lembani minda yonse!");
    return false;
  }

  // Iwonetsa uthenga pansi pa form
  document.getElementById("success").innerText = "Zikomo" + name + "! Uthenga wanu watumizidwa! Tikuyakhani pa  " + email;
  document.getElementById("success").style.color="green";
  document.getElementById("success").style.fontWeight ="bold";

  // Chotsani zomwe mwalemba
  document.getElementById("contactForm").reset();

  return false; // ILETSA page kuti isadzitsitsimutse
    
}

const hamburger =
  document.getElementById("hamburger");

const menu =
  document.getElementById("menu");

hamburger.addEventListener("click", function() {

  hamburger.classList.toggle("active");
  menu.classList.toggle("shoow");
});