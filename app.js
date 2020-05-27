let num;

function MultiplyButton() {
  let outputList = document.querySelector(".output");
  num = parseFloat(document.getElementById("myNumber").value);
  console.log(num);

  document.getElementById("output").innerText = "";

  for (let i = 1; i <= 20; i++) {
    let tax = num * i * 0.06;
    let outputData = document.createElement("li");

    outputData.innerText = `Price: $${num} x Quantity: ${i} + Tax = ${parseFloat(
      num * i + tax
    ).toFixed(2)}`;
    console.log(outputData);
    outputList.appendChild(outputData);
  }
}
