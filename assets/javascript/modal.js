import { allMethod, idArray, classArray } from "./all-methods.js";

const [pledgeModal, closeModal, bambooPledge] = idArray;
const [...backPro] = classArray;

backPro.forEach(
  (v) => (v.onclick = () => allMethod.toggle(pledgeModal, "display"))
);

closeModal.onclick = () => allMethod.remove(pledgeModal, "display");

bambooPledge.oninput = () => {
  if (!allMethod.validate(bambooPledge, "min")) {
    allMethod.add(bambooPledge, "error");
  }

  if (allMethod.validate(bambooPledge, "min")) {
    allMethod.remove(bambooPledge, "error");
  }
};

if (allMethod.validate(bambooPledge, "min")) {
  console.log("hey");
}
