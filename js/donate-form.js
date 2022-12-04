const AMOUNT = document.querySelector("#amount");
const RADIO_INPUTS = document.querySelectorAll('input[name="progress-bar"]');
const RADIO_INPUTS_VALUES = getValues();

// add initial value to AMOUNT:
let selectedValue = document.querySelector('input[name="progress-bar"]:checked').value;
AMOUNT.value = selectedValue;

// get all radio inputs value
function getValues() {
  const array = [];

  for (const input of RADIO_INPUTS) {
    array.push(input.value);
  }

  return array;
}

function amountHandler({ target }) {
  target.value = target.value.substr(0, 4);
  let currentValue = target.value;

  if (RADIO_INPUTS_VALUES.includes(currentValue)) {
    document.querySelector(`input[value="${currentValue}"]`).checked = true;
  } else {
    let currentCheckedInput = document.querySelector('input[name="progress-bar"]:checked');
    if (currentCheckedInput) {
      currentCheckedInput.checked = false;
    }
  }
}
// ADD EVENTS
RADIO_INPUTS.forEach((element) => {
  element.addEventListener("change", ({ target }) => {
    AMOUNT.value = target.value;
  });
});
AMOUNT.addEventListener("input", amountHandler);
