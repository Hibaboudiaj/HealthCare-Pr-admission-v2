// let myarray = [];

let myarray = [
  {
    nome: "Mohamed",
    prenom: "Ali",
    tele: "0551234567",
    email: "mohamed.ali@test.com",
    motif: "Consultation générale",
    date: "2026-02-01",
  },
  {
    nome: "Lina",
    prenom: "Bensaid",
    tele: "0669876543",
    email: "lina.bensaid@test.com",
    motif: "Contrôle annuel",
    date: "2026-02-03",
  },
  {
    nome: "Yacine",
    prenom: "Cherif",
    tele: "0774455667",
    email: "yacine.cherif@test.com",
    motif: "Urgence",
    date: "2026-02-05",
  },
];

const nameEl = document.querySelector("#name");
const prenomEl = document.querySelector("#Prenom");
const teleEl = document.querySelector("#tele");
const emailEl = document.querySelector("#Email");
const motifEl = document.querySelector("#Motif");
const dateEl = document.querySelector("#Date");
const button = document.querySelector("#btn");
const tablebody = document.querySelector("#tableauBody");
const Ajouter = document.querySelector(".btn");
let p = document.querySelector("#message");
const form = document.querySelector(".top form");

//---Function Ajouter start---//
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let chek = {
    nome: nameEl.value,
    prenom: prenomEl.value,
    tele: teleEl.value,
    email: emailEl.value,
    motif: motifEl.value,
    date: dateEl.value,
  };

  if (
    nameEl.value == "" ||
    prenomEl.value == "" ||
    teleEl.value == "" ||
    emailEl.value == "" ||
    motifEl.value == "" ||
    dateEl.value == ""
  ) {
    p.textContent = "Remplir tous les champ.";
  } else {
    myarray.push(chek);
    p.textContent = "Dommande Ajouter Avec Seccès";
    Afficher(myarray);
  }
  form.reset();
});
//---Function Ajouter ends---//

//---Function Afficher start---//
function Afficher(list) {
  tablebody.innerHTML = "";
  if (!list || list.length == 0) {
    tablebody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; font-weight: 600">
          Aucun Rendez-Vous Ajouté Pour L'instant
        </td>
      </tr>
    `;
  } else {
    list.forEach((elm, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${elm.nome}</td>
      <td>${elm.prenom}</td>
      <td>${elm.tele}</td>
      <td>${elm.email}</td>
      <td>${elm.motif}</td>
      <td>${elm.date}</td>   
      <td><span class="material-symbols-outlined deleteBtn"
      onclick = "deleteItem(${index})">
    delete
    </span></td>
      `;
      tablebody.appendChild(tr);
    });
  }
  updateCompteur();
}
//---Function Afficher ends---//

//---Function delete start---//
function deleteItem(index) {
  myarray.splice(index, 1);
  Afficher(myarray);
}
Afficher(myarray);
//---Function delete ends---//

//---Function rechercher start---//
const searchEl = document.querySelector("#searchInput");
function searchPatient() {
  const searchvalue = searchEl.value.toLowerCase();
  const result = myarray.filter((element) => {
    return (
      element.nome.toLocaleLowerCase().includes(searchvalue) ||
      element.prenom.toLocaleLowerCase().includes(searchvalue) ||
      element.tele.toLocaleLowerCase().includes(searchvalue) ||
      element.email.toLocaleLowerCase().includes(searchvalue)
    );
  });
  console.log(result);
  Afficher(result);
}
searchEl.addEventListener("input", searchPatient);
searchPatient();
//---Function rechercher ends---//

//---Function Compteur start---//
function updateCompteur() {
  const total = myarray.length;
  document.querySelector("#compteur").textContent = `${total} demande`;
}
updateCompteur();
//---Function Compteur ends---//
