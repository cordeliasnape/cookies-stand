// my guess:

// const seattle = {
//   customersPerHour: function () {
//     return Math.floor(Math.random() * (65 - 23 + 1)) + 23;
//   },
//   averagePerCust: 6.3,

// };

// const randomCustomerCount = seattle.customersPerHour();

//code-along:
const hours = [
  // array of hours
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//complex maths that everyone needs to use

//5 shops:

//our first shop, Seattle
function calculateSeattleSales() {
  const seattle = {
    location: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCookiesPerCust: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        const randNum = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(randNum);
        const cookiesSold = randNum * this.avgCookiesPerCust;
        this.cookiesPerHour.push(cookiesSold);
        this.totalCookiesSold += cookiesSold;
      }
    },
  };

  seattle.calculateSales();
  return seattle;
}

//our second shop, Tokyo
function calculateTokyoSales() {
  const tokyo = {
    location: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookiesPerCust: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        const randNum = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(randNum);
        const cookiesSold = randNum * this.avgCookiesPerCust;
        this.cookiesPerHour.push(cookiesSold);
        this.totalCookiesSold += cookiesSold;
      }
    },
  };

  tokyo.calculateSales();
  return tokyo;
}

//our third shop, Dubai
function calculateDubaiSales() {
  const dubai = {
    location: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCookiesPerCust: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        const randNum = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(randNum);
        const cookiesSold = randNum * this.avgCookiesPerCust;
        this.cookiesPerHour.push(cookiesSold);
        this.totalCookiesSold += cookiesSold;
      }
    },
  };

  dubai.calculateSales();
  return dubai;
}

//our fourth shop, Paris
function calculateParisSales() {
  const paris = {
    location: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCookiesPerCust: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        const randNum = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(randNum);
        const cookiesSold = randNum * this.avgCookiesPerCust;
        this.cookiesPerHour.push(cookiesSold);
        this.totalCookiesSold += cookiesSold;
      }
    },
  };

  paris.calculateSales();
  return paris;
}

//our fifth shop, Lima
function calculateLimaSales() {
  const lima = {
    location: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCookiesPerCust: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesSold: 0,
    calculateSales: function () {
      for (let i = 0; i < hours.length; i++) {
        const randNum = randomNumber(this.minCust, this.maxCust);
        this.customersPerHour.push(randNum);
        const cookiesSold = randNum * this.avgCookiesPerCust;
        this.cookiesPerHour.push(cookiesSold);
        this.totalCookiesSold += cookiesSold;
      }
    },
  };

  lima.calculateSales();
  return lima;
}

//function to create and append the name, list, and total list to the DOM

function displaySales(cityLocation) {
  const locationSales = document.getElementById("locationSales"); //targets the div

  const article = document.createElement("article"); //create article tag

  //Name
  const h2 = document.createElement("h2"); //wrote h2
  h2.textContent = cityLocation.location; // wrote the location
  article.appendChild(h2); //added to article

  //list
  const ul = document.createElement("ul"); // created ul
  for (let i = 0; i < hours.length; i++) {
    //can cycle through the hours
    const li = document.createElement("li"); //creates the li tag under ul
    li.textContent = `${hours[i]}: ${cityLocation.cookiesPerHour[i]} cookies`; // displays the sentence needed in li tag
    ul.appendChild(li); //inserts to ul
  }
  // total list
  const totalList = document.createElement("li"); //creates extra li tag
  totalList.textContent = `Total: ${cityLocation.totalCookiesSold} cookies`; //displays the sentence
  ul.appendChild(totalList); //adds to ul

  article.appendChild(ul); //adds ul to article

  locationSales.appendChild(article); //appending article in div
}

// displaying the lists
const seattle = calculateSeattleSales();
const tokyo = calculateTokyoSales();
const dubai = calculateDubaiSales();
const paris = calculateParisSales();
const lima = calculateLimaSales();
displaySales(seattle);
displaySales(tokyo);
displaySales(dubai);
displaySales(paris);
displaySales(lima);
