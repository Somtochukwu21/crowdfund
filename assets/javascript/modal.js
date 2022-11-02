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
  bambooContinue,
  blackContinue,
  bamLeft,
  blackLeft,
  dbs,
  dbe,
  bamNum,
  blackNum,
  first,
  second,
  mainM,
  backers,
  succes,
  gotten,
  bookmark,
] = idArray;
console.log(bookmark);
const [progress, ...buttons] = classArray;

let value = "89914";

mainM.innerHTML = value;

buttons.forEach(
  (v) => (v.onclick = () => allMethod.toggle(pledgeModal, "display"))
);

closeModal.onclick = () => allMethod.remove(pledgeModal, "display");

bambooPledge.oninput = () => {
  allMethod.validateInput(bambooPledge, "min", err1);
};

blackPledge.oninput = () => {
  allMethod.validateInput(blackPledge, "min", err2);
};

gotten.onclick = () => {
  allMethod.remove(succes, "display");
};

bookmark.onclick = ( ) => {
  allMethod.add(bookmark, "work");
  bookmark.childNodes[3].innerHTML = "Bookmarked";
};

// console.log(bookmark.innerHTML.c/hildNodes[0]);

bambooContinue.onclick = () => {
  allMethod.continueButton(first, dbs, bambooPledge, bamLeft, "min", bamNum);
  if (bambooPledge.value >= 25) {
    const e = Number(mainM.innerHTML) + Number(bambooPledge.value);

    mainM.innerHTML = e;
    backers.innerHTML++;
    progress.style.width = mainM.innerHTML / 1000 + "%";

    allMethod.remove(pledgeModal, "display");
    allMethod.add(succes, "display");
  }
};

blackContinue.onclick = () => {
  allMethod.continueButton(
    second,
    dbe,
    blackPledge,
    blackLeft,
    "min",
    blackNum
  );
  if (blackPledge.value >= 25) {
    const e = Number(mainM.innerHTML) + Number(blackPledge.value);

    mainM.innerHTML = e;
    backers.innerHTML++;

    progress.style.width = mainM.innerHTML / 1000 + "%";
    allMethod.remove(pledgeModal, "display");
    allMethod.add(succes, "display");
  }
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

// window.location.href
// window.location.title
