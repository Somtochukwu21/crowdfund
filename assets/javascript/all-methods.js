export const idContainer = {};
export const classContainer = {};

function AllMethods() {
  this.initializeElements = (...data) => {
    for (const props of data) {
      const element = document.getElementById(props);
      idContainer[props.replace("-", "_")] = element;
    }
  };

  this.class = (...classNames) => {
    for (const className of classNames) {
      const element = document.querySelectorAll(className);

      classContainer[className.replace("-", "_").replace(".", "")] = element;
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

allMethod.initializeElements(
  "pledge-modal",
  "main-money",
  "close",
  "bamboo-continue",
  "black-continue",
  "bamboo-price",
  "black-price",
  "got",
  "bookmark-btn",
  "bamboo-stand",
  "black-edition",
  "first-card",
  "succes-modal",
  "p1",
  "p2",
  "disabledbs",
  "disabledbe",
  "bamboo-left",
  "bambooLeft",
  "second-card",
  "black-left",
  "blackLeft",
  "mahogany",
  "backers",
  "p3",
  "err1",
  "err2",
  "menu-bar"
);

allMethod.class(".progress", ".select-reward");

/*
const str = value;
const regex = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
*/
