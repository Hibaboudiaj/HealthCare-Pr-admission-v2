let myarray = [];

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
const form = document.querySelector("form");

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
    Afficher();
  }
  form.reset();
});

function Afficher() {
  tablebody.innerHTML = "";
  if (myarray.length == 0) {
    tablebody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; font-weight: 600">
          Aucun Rendez-Vous Ajouté Pour L'instant
        </td>
      </tr>
    `;
  } else {
    myarray.forEach((elm, index) => {
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
}

function deleteItem(index) {
  myarray.splice(index, 1);
  Afficher();
}

Afficher();


// function FilterByMotif() {
//   const filterValue = document.querySelector('#filterMotif').value;
//   const rows = document.querySelectorAll('tbody tr');

//   rows.forEach(row =>{
//     const motif = row.cells[4];
//     if (motif === filterValue){
//       row.style.display ='';
//     }
//     else{
//       row.style.display = 'none';
//     }
//   });
// }










// function searchPatient() {
//   const search = document.querySelector("#searchInput").value.toLowercase();
//   const rows = document.querySelectorAll("tbody tr");
// }
// rows.forEach((row) => {
//   const nom = row.cells[0].textContent.toLowercase();
//   const prenom = row.cells[1].textContent.toLowercase();
//   const telephone = row.cells[2].textContent.toLowercase();
//   const email = row.cells[3].textContent.toLowercase();
//   if (
//     nom.includes(searchValue) ||
//     prenom.includes(searchValue) ||
//     telephone.includes(searchValue) ||
//     email.includes(searchValue)
//   ) {
//     row.style.display = "";
//   } else {
//     row.style.display = "none";
//   }
// });
// updateCounter();
