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
const form = document.querySelector(".top form");

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
  updateCompteur();
}

function deleteItem(index) {
  myarray.splice(index, 1);
  Afficher();
}

Afficher();

function FilterByMotif() {
  const filterValue = document.querySelector("#filterMotif").value;
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const motif = row.cells[4];
    if (motif === filterValue) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
//---Function rechercher---//
function searchPatient() {
  const search = document.querySelector("#searchInput").value;
  myarray.forEach((el) => {
    const nome = el.nome;
    const prenom = el.prenom;
    const email = el.email;
    const tele = el.tele;
    if (
      nome.includes(search) ||
      prenom.includes(search) ||
      tele.includes(search) ||
      email.includes(search)
    ) {
      myarray = myarray.filter(
        (item) => item.nome === nome && item.prenom === prenom,
      );
      Afficher(myarray);
    }
  });
}

function updateCompteur() {
  const total = myarray.length;
  document.querySelector("#compteur").textContent = `${total} demande au total`;
}
updateCompteur();
