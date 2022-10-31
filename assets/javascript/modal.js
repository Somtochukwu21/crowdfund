import { allMethod, idArray, classArray } from "./all-methods.js";

const [
  pledgeModal,
  closeModal,
  bambooPledge,
  blackPledge,
  err1,
  err2,
  bamboo,
  black,
  mahogany,
  p1,
  p2,
  p3,
  bamLeft,
  blackLeft
] = idArray;

classArray.forEach(
  (v) => (v.onclick = () => allMethod.toggle(pledgeModal, "display"))
);

closeModal.onclick = () => allMethod.remove(pledgeModal, "display");

bambooPledge.oninput = () => {
  allMethod.validateInput(bambooPledge, "min", err1);
};

blackPledge.oninput = () => {
  allMethod.valida(blackPledge, "min", err2);
};

function radioBox(id, element, klass) {
  if (!id.checked) {
    allMethod.toggle(element, klass);
    return false;
  }
  return allMethod.toggle(element, klass);
}

bamboo.onclick = () => {
  radioBox(bamboo, p1, "display");
};

black.onclick = () => {
  radioBox(black, p2, "display");
};
mahogany.onclick = () => {
  radioBox(mahogany, p3, "display");
};


console.log(bamLeft.innerHTML,blackLeft.innerHTML);