import { allMethod, idArray, classArray } from "./all-methods.js";

const [pledgeModal, closeModal, bambooPledge, blackPledge, err1, err2] =
  idArray;

classArray.forEach(
  (v) => (v.onclick = () => allMethod.toggle(pledgeModal, "display"))
);

closeModal.onclick = () => allMethod.remove(pledgeModal, "display");

function name(id, min, err) {
  if (!allMethod.validate(id, min)) {
    allMethod.add(id, "error");
    allMethod.add(err, "display");
  }

  if (allMethod.validate(id, min)) {
    allMethod.remove(id, "error");
    allMethod.remove(err, "display");
  }
}

bambooPledge.oninput = () => {
  name(bambooPledge, "min", err1);
};

blackPledge.oninput = () => {
  name(blackPledge, "min", err2);
};
