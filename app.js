//Hours:
const hours = [
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

//Random Number function:
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Constructor Function - capital letter, use of 'this', and 'new' keyword:
function Sales(location, minCust, maxCust, average) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
} //Function to calculate average cookies per hour, customers per hour, cookies per hour
Sales.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    //get the numbers of customers for the hour
    const hourCust = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCust);
    //number of cookies sold this hour
    const hourCookiesSold = Math.floor(hourCust * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);
    //increase total cookies by adding this hours sales to it
    this.totalCookiesSold = this.totalCookiesSold + hourCookiesSold;
  }
};

//function to make header

function headerRow() {
  const tableHeader = document.getElementById("salesTable");
  const headerTR = document.createElement("tr");
  const blankTD = document.createElement("td");
  headerTR.appendChild(blankTD);

  for (let i = 0; i < hours.length; i++) {
    const hoursTH = document.createElement("th");
    hoursTH.textContent = hours[i];
    headerTR.appendChild(hoursTH);
  }
  //

  tableHeader.appendChild(headerTR);
}

// Function to make the table work:

Sales.prototype.render = function () {
  //table start

  this.calculateSales();
  const salesTable = document.getElementById("salesTable");
  //start tr
  const salesTR = document.createElement("tr");

  //one th - name, close th
  const locationTH = document.createElement("th");
  locationTH.textContent = this.location;
  salesTR.appendChild(locationTH);

  //14 td's showing hour/cookie total
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const hourCookieTD = document.createElement("td");
    hourCookieTD.textContent = this.cookiesPerHour[i];
    salesTR.appendChild(hourCookieTD);
  }

  //1 td with Daily Location Sales total
  const dailySalesTD = document.createElement("td");
  dailySalesTD.textContent = this.totalCookiesSold;
  salesTR.appendChild(dailySalesTD);

  // close tr
  salesTable.append(salesTR);
};

// running the code

//header table:
headerRow();

const seattleSales = new Sales("Seattle", 23, 65, 6.3);
seattleSales.render();

const tokyoSales = new Sales("Tokyo", 3, 24, 1.2);
tokyoSales.render();

const dubaiSales = new Sales("Dubai", 11, 38, 3.7);
dubaiSales.render();

const parisSales = new Sales("Paris", 20, 38, 2.3);
parisSales.render();

const limaSales = new Sales("Lima", 2, 16, 4.6);
limaSales.render();

// form functionality
const form = document.getElementById("newSalesForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = event.target.location.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const average = event.target.average.value;

  const newSales = new Sales(location, minCust, maxCust, average);
  newSales.render();
});

// //lab 06
// //our first shop, Seattle
// function calculateSeattleSales() {
//   const seattle = {
//     location: "Seattle",
//     minCust: 23,
//     maxCust: 65,
//     avgCookiesPerCust: 6.3,
//     customersPerHour: [],
//     cookiesPerHour: [],
//     totalCookiesSold: 0,
//     calculateSales: function () {
//       for (let i = 0; i < hours.length; i++) {
//         //get the numbers of customers for the hour
//         const hourCust = randomNumber(this.minCust, this.maxCust);
//         this.customersPerHour.push(hourCust);
//         //number of cookies sold this hour
//         const hourCookiesSold = Math.floor(hourCust * this.avgCookiesPerCust);
//         this.cookiesPerHour.push(hourCookiesSold);
//         //increase total cookies by adding this hours sales to it
//         this.totalCookiesSold = this.totalCookiesSold + hourCookiesSold;
// //       }
//     },
//   };

//   seattle.calculateSales();
//   return seattle;
// }

// function displaySales(cityLocation) {
//   const locationSales = document.getElementById("locationSales"); //targets the div

//   const article = document.createElement("article"); //create article tag

//   //Name
//   const h2 = document.createElement("h2"); //wrote h2
//   h2.textContent = cityLocation.location; // wrote the location
//   article.appendChild(h2); //added to article

//   //list
//   const ul = document.createElement("ul"); // created ul
//   for (let i = 0; i < hours.length; i++) {
//     //can cycle through the hours
//     const li = document.createElement("li"); //creates the li tag under ul
//     li.textContent = `${hours[i]}: ${cityLocation.cookiesPerHour[i]} cookies`; // displays the sentence needed in li tag
//     ul.appendChild(li); //inserts to ul
//   }
//   // total list
//   const totalList = document.createElement("li"); //creates extra li tag
//   totalList.textContent = `Total: ${cityLocation.totalCookiesSold} cookies`; //displays the sentence
//   ul.appendChild(totalList); //adds to ul

//   article.appendChild(ul); //adds ul to article

//   locationSales.appendChild(article); //appending article in div
// }

// displaying the lists
// const seattle = calculateSeattleSales();
// const tokyo = calculateTokyoSales();
// const dubai = calculateDubaiSales();
// const paris = calculateParisSales();
// const lima = calculateLimaSales();
// displaySales(seattle);
// displaySales(tokyo);
// displaySales(dubai);
// displaySales(paris);
// displaySales(lima);
