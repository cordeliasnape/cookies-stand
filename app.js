// Store the min/max hourly customers, and the average cookies per customer, in object properties.
// Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:

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

//our first shop
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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

seattle.calculateSales();
console.log(seattle);

const locationSales = document.getElementById("locationSales");
const article = document.createElement("article"); //created article tag

//Name
const h2 = document.createElement("h2"); //wrote h2
h2.textContent = seattle.location; // wrote the location
article.appendChild(h2); //added to article

locationSales.appendChild(article); //appending article in div?

//List featuring `${hours[i]}: ${cookiesPerHour[i]} cookies` then `Total: ${totalCookiesSold} cookies`
