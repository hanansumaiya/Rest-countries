const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (data) => {
  const countriesDiv = document.getElementById("countries");

  data.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onClick="loadDetails('${country.name}')">Details</button>
    `;
    countriesDiv.appendChild(div);
  });
};
const loadDetails = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data[0]));
};
const displayDetails = (country) => {
  console.log(country);
  const countryDetails = document.getElementById("country-details");
  countryDetails.innerHTML = `
   <img src=" ${country.flag}" alt="" />
  <h2>Country name : ${country.name}</h2>
  <h3>Capital : ${country.capital}</h3>
  <p>Population : ${country.population} , Area : ${country.area}</p>
  <p>Currencies : ${country.currencies[0].name}</p>
  <p>Region : ${country.region}</p>
  <p>Timezones : ${country.timezones[0]}</p>
  `;
  countryDetails.style.display = "block";
};
loadCountries();
