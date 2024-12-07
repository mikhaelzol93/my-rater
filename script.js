function getValuesFromSelect() {
  const values = [];

  Array.from(content.children).forEach((label) => {
    const selectValue = label.children[1].value;

    if (selectValue !== 'Не Применимо') {
      values.push(Number(selectValue));
    }
  });

  return values;
}

function calculateRating(values) {
  if (values.length === 0) {
    return 0;
  }

  const sum = values.reduce((x, y) => x + y);
  return Math.ceil(sum / values.length);
}

function calculateHandler(event) {
  event.preventDefault();

  const values = getValuesFromSelect();
  const ratingValue = calculateRating(values);

  rating.textContent = `${ratingValue}`;
}

const calculate = document.getElementById('calculate');
calculate.onclick = calculateHandler;
const content = document.getElementById('content');
const rating = document.getElementById('rating');
