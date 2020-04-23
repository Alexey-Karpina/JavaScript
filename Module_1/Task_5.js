"use strict";
let country = prompt("Enter the country to which you want to make delivery");
if (country) {
  country.toLowerCase();
  country = country[0].toUpperCase() + country.substring(1);
  switch (country) {
    case "China":
      console.log(`Shipping to China will cost 100 credits`);
      break;
    case "Chile":
      console.log(`Shipping to Chile will cost 250 credits`);
      break;
    case "Australia":
      console.log(`Shipping to Australia will cost 170 credits`);
      break;
    case "India":
      console.log(`Shipping to India will cost 80 credits`);
      break;
    case "Jamaica":
      console.log(`Shipping to Jamaica will cost 120 credits`);
      break;
    default:
      alert(`Delivery is not available in your country`);
      break;
  }
}else{
    console.log(`Operation canceled by user!`);
}
