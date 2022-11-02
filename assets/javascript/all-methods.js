export const idArray = [];
export const classArray = [];

function AllMethods() {
  this.id = (...data) => {
    for (const props of data) {
      const element = document.getElementById(props);
      idArray.push(element);
    }
  };

  this.class = (...data) => {
    for (const key of data) {
      const element = document.querySelectorAll(key);

      classArray.push(...element);
    }
  };

  this.toggle = (element, data) => element.classList.toggle(data);
  this.remove = (element, data) => element.classList.remove(data);
  this.add = (element, data) => element.classList.add(data);

  this.validate = (id, attr) => {
    const value = id.value;

    const min = id.getAttribute(attr);

    const check = () => {
      return value > min - 1;
    };
    return check();
  };

  this.validateInput = (id, min, err) => {
    if (!this.validate(id, min)) {
      this.add(id, "error");
      this.add(err, "display");
      return false;
    }

    this.remove(id, "error");
    this.remove(err, "display");
  };

  this.continueButton = (real, mainid, id, second, d, third) => {
    if (this.validate(id, d)) {
      second.innerHTML -= 1;
      third.innerHTML -= 1;

      const elme = second.innerHTML < 0 && second.innerHTML < 0;
      if (elme) {
        id.disabled = true;
        this.add(mainid, "disabled");
        this.add(real, "disabled");
        third.innerHTML = 0;
        second.innerHTML = 0;
      }
      return elme;
    }
  };
}

export const allMethod = new AllMethods();

allMethod.id(
  "pledge-modal",
  "close",
  "bamboo-price-input",
  "black-price-input",
  "err1",
  "err2",
  "bamboo-stand",
  "black-edition",
  "mahogany",
  "p1",
  "p2",
  "p3",
  "bamboo-price",
  "black-price",
  "bamboo-left",
  "black-left",
  "disabledbs",
  "disabledbe",
  "bambooLeft",
  "blackLeft",
  "first-card",
  "second-card",
  "main-money",
  "backers",
  "succes-modal",
  "got",
  "bookmark-btn"
);

allMethod.class(".progress", ".select-reward");

/*
const str = value;
const regex = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
*/

// const w = document.getElementById("bookmark-btn");