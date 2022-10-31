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
    if (!allMethod.validate(id, min)) {
      allMethod.add(id, "error");
      allMethod.add(err, "display");
      return false;
    }

    allMethod.remove(id, "error");
    allMethod.remove(err, "display");
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
  "p3",'bamboo-left','black-left'
);

allMethod.class(".select-reward");
