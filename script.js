// Tasas de conversión (ejemplo)
const exchangeRates = {
  USD: { RUB: 98.687, CNY: 7.245 },
  RUB: { USD: 0.0101, CNY: 0.073 },
  CNY: { USD: 0.138, RUB: 13.622 },
};

function convertCurrency() {
  // Obtener el valor y la moneda seleccionada
  const amount = parseFloat(document.getElementById("amount").value);
  const currency = document.getElementById("currency").value;

  // Ocultar/mostrar los resultados según la moneda seleccionada
  const usdResultElement = document.getElementById("usd-result");
  const rubResultElement = document.getElementById("rub-result");
  const cnyResultElement = document.getElementById("cny-result");

  // Ocultar todos los resultados primero
  usdResultElement.parentElement.style.display = "flex";
  rubResultElement.parentElement.style.display = "flex";
  cnyResultElement.parentElement.style.display = "flex";

  // Ocultar el resultado de la moneda seleccionada
  if (currency === "USD") {
    usdResultElement.parentElement.style.display = "none";
  } else if (currency === "RUB") {
    rubResultElement.parentElement.style.display = "none";
  } else if (currency === "CNY") {
    cnyResultElement.parentElement.style.display = "none";
  }

  // Calcular las conversiones
  let usdResult, rubResult, cnyResult;

  if (currency === "USD") {
    usdResult = amount;
    rubResult = amount * exchangeRates.USD.RUB;
    cnyResult = amount * exchangeRates.USD.CNY;
  } else if (currency === "RUB") {
    usdResult = amount * exchangeRates.RUB.USD;
    rubResult = amount;
    cnyResult = amount * exchangeRates.RUB.CNY;
  } else if (currency === "CNY") {
    usdResult = amount * exchangeRates.CNY.USD;
    rubResult = amount * exchangeRates.CNY.RUB;
    cnyResult = amount;
  }

  // Formatear los números con separadores de miles
  const formattedUsd = usdResult.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
  const formattedRub = rubResult.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
  const formattedCny = cnyResult.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });

  // Mostrar los resultados formateados
  usdResultElement.textContent = `${formattedUsd} USD`;
  rubResultElement.textContent = `${formattedRub} RUB`;
  cnyResultElement.textContent = `${formattedCny} CNY`;
}
