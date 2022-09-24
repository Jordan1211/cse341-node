async function apiFetch(url) {
  const response = await fetch(url);

  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('http://localhost:3000/contacts');
  displayAllData(data);
};

function displayAllData(data) {
  displayfirstName(data.firstName);
  displaylastName(data.lastName);
  displayemail(data.email);
  displayfavoriteColor(data.favoriteColor);
  displaybirthday(data.birthday);

}

function displayfirstName(n) {
  let professionalName = document.getElementById('firstName');
  professionalName.innerHTML = n;
}

function displaylastName(n) {
  let professionalName = document.getElementById('lastName');
  professionalName.innerHTML = n;
}

function displayemail(n) {
  let professionalName = document.getElementById('email');
  professionalName.innerHTML = n;
}

function displayfavoriteColor(n) {
  let professionalName = document.getElementById('favoriteColor');
  professionalName.innerHTML = n;
}

function displaybirthday(n) {
  let professionalName = document.getElementById('birthday');
  professionalName.innerHTML = n;
}

getData();