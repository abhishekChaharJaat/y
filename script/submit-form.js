const firebaseConfig = {
  apiKey: "AIzaSyCEpydfFGeNg_PDoLfMph_ig0id-LODr2k",
  authDomain: "abhishekchaharjaat04.firebaseapp.com",
  databaseURL: "https://abhishekchaharjaat04-default-rtdb.firebaseio.com",
  projectId: "abhishekchaharjaat04",
  storageBucket: "abhishekchaharjaat04.appspot.com",
  messagingSenderId: "675957175494",
  appId: "1:675957175494:web:26fca498f07c7f798753c7",
  measurementId: "G-N6ZDWKC78W",
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// refrence your database
var contactFormDB = firebase.database().ref("Contact Form");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = getElementVal("name");
  let email = getElementVal("email");
  let msgContent = getElementVal("msgContent");

  saveMessage(name, email, msgContent);

  // enable alert
  let alert = document.querySelector(".alert");
  alert.style.display = "block";
}

const saveMessage = (name, email, msgContent) => {
  let newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    email: email,
    msg: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// hide alert..
let okBtn = document.getElementById("alertOkBtn");
okBtn.addEventListener("click", () => {
  document.querySelector(".alert").style.display = "none";
  document.getElementById("contact-form").reset();
});
