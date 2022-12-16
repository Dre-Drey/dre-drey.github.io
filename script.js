function hideNoRecherche() {
  document.querySelectorAll(".recherche").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".code").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".musees").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}

function hideNoCode() {
  document.querySelectorAll(".code").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".recherche").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".musees").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}

function hideNoMusees() {
  document.querySelectorAll(".musees").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".recherche").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".code").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}

function hideNoProjetSolo() {
  document.querySelectorAll(".projetsolo").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".projetcollectif").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".evenement").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".editorial").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".expo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".etude").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}

function hideNoProjetcollectif() {
  document.querySelectorAll(".projetcollectif").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".projetsolo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".evenement").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".editorial").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".expo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".etude").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}

function hideNoEditorial() {
  document.querySelectorAll(".editorial").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".projetsolo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".evenement").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".projetcollectif").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".expo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".etude").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}

function hideNoEvenement() {
  document.querySelectorAll(".evenement").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".projetsolo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".editorial").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".projetcollectif").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".expo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".etude").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}

function hideNoExposition() {
  document.querySelectorAll(".expo").forEach((nodeElem) => {
    nodeElem.style.display = "flex";
  });
  document.querySelectorAll(".projetsolo").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".editorial").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".projetcollectif").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".evenement").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
  document.querySelectorAll(".etude").forEach((nodeElem) => {
    nodeElem.style.display = "none";
  });
}
