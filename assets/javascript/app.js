// TO DO
//  googleMapsAPI = "AIzaSyDaNawaFmIi-kGyIDoa4HZ7j5WfR11w0DM";
//AIzaSyDLVyv4rD6_xg-U-QbpklwTh1XSJxWJhFc
// Display time for next question
//

// -----------------------------
//   VARIABLES
// -----------------------------


var googleMapString = "https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDLVyv4rD6_xg-U-QbpklwTh1XSJxWJhFc&center=12.378154406531843,-14.109061328808595&zoom=6&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.country%7Celement:geometry.fill%7Cweight:1&style=feature:administrative.country%7Celement:geometry.stroke%7Cvisibility:on%7Cweight:3.5&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.arterial%7Cvisibility:off&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway%7Celement:labels%7Cvisibility:off&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x92998d&size=480x360";


// GLOBAL VARIABLES
// -----------------------------

var gameStarted = false;

// Country (Question) Objects Array -> In the future I would use a database
var countries = [{
        "Country": "Afghanistan",
        "Capital": "Kabul",
        "Lat": "34.51666667",
        "Long": "69.183333",
        "Continent": "Asia"
    },
    {
        "Country": "Aland Islands",
        "Capital": "Mariehamn",
        "Lat": "60.116667",
        "Long": "19.9",
        "Continent": "Europe"
    },
    {
        "Country": "Albania",
        "Capital": "Tirana",
        "Lat": "41.31666667",
        "Long": "19.816667",
        "Continent": "Europe"
    },
    {
        "Country": "Algeria",
        "Capital": "Algiers",
        "Lat": "36.75",
        "Long": "3.05",
        "Continent": "Africa"
    },
    {
        "Country": "American Samoa",
        "Capital": "Pago Pago",
        "Lat": "-14.26666667",
        "Long": "-170.7",
        "Continent": "Australia"
    },
    {
        "Country": "Andorra",
        "Capital": "Andorra la Vella",
        "Lat": "42.5",
        "Long": "1.516667",
        "Continent": "Europe"
    },
    {
        "Country": "Angola",
        "Capital": "Luanda",
        "Lat": "-8.833333333",
        "Long": "13.216667",
        "Continent": "Africa"
    },
    {
        "Country": "Anguilla",
        "Capital": "The Valley",
        "Lat": "18.21666667",
        "Long": "-63.05",
        "Continent": "North America"
    },
    {
        "Country": "Antarctica",
        "Capital": "N/A",
        "Lat": "0",
        "Long": "0",
        "Continent": "Antarctica"
    },
    {
        "Country": "Antigua and Barbuda",
        "Capital": "Saint John’s",
        "Lat": "17.11666667",
        "Long": "-61.85",
        "Continent": "North America"
    },
    {
        "Country": "Argentina",
        "Capital": "Buenos Aires",
        "Lat": "-34.58333333",
        "Long": "-58.666667",
        "Continent": "South America"
    },
    {
        "Country": "Armenia",
        "Capital": "Yerevan",
        "Lat": "40.16666667",
        "Long": "44.5",
        "Continent": "Europe"
    },
    {
        "Country": "Aruba",
        "Capital": "Oranjestad",
        "Lat": "12.51666667",
        "Long": "-70.033333",
        "Continent": "North America"
    },
    {
        "Country": "Australia",
        "Capital": "Canberra",
        "Lat": "-35.26666667",
        "Long": "149.133333",
        "Continent": "Australia"
    },
    {
        "Country": "Austria",
        "Capital": "Vienna",
        "Lat": "48.2",
        "Long": "16.366667",
        "Continent": "Europe"
    },
    {
        "Country": "Azerbaijan",
        "Capital": "Baku",
        "Lat": "40.38333333",
        "Long": "49.866667",
        "Continent": "Europe"
    },
    {
        "Country": "Bahamas",
        "Capital": "Nassau",
        "Lat": "25.08333333",
        "Long": "-77.35",
        "Continent": "North America"
    },
    {
        "Country": "Bahrain",
        "Capital": "Manama",
        "Lat": "26.23333333",
        "Long": "50.566667",
        "Continent": "Asia"
    },
    {
        "Country": "Bangladesh",
        "Capital": "Dhaka",
        "Lat": "23.71666667",
        "Long": "90.4",
        "Continent": "Asia"
    },
    {
        "Country": "Barbados",
        "Capital": "Bridgetown",
        "Lat": "13.1",
        "Long": "-59.616667",
        "Continent": "North America"
    },
    {
        "Country": "Belarus",
        "Capital": "Minsk",
        "Lat": "53.9",
        "Long": "27.566667",
        "Continent": "Europe"
    },
    {
        "Country": "Belgium",
        "Capital": "Brussels",
        "Lat": "50.83333333",
        "Long": "4.333333",
        "Continent": "Europe"
    },
    {
        "Country": "Belize",
        "Capital": "Belmopan",
        "Lat": "17.25",
        "Long": "-88.766667",
        "Continent": "Central America"
    },
    {
        "Country": "Benin",
        "Capital": "Porto-Novo",
        "Lat": "6.483333333",
        "Long": "2.616667",
        "Continent": "Africa"
    },
    {
        "Country": "Bermuda",
        "Capital": "Hamilton",
        "Lat": "32.28333333",
        "Long": "-64.783333",
        "Continent": "North America"
    },
    {
        "Country": "Bhutan",
        "Capital": "Thimphu",
        "Lat": "27.46666667",
        "Long": "89.633333",
        "Continent": "Asia"
    },
    {
        "Country": "Bolivia",
        "Capital": "La Paz",
        "Lat": "-16.5",
        "Long": "-68.15",
        "Continent": "South America"
    },
    {
        "Country": "Bosnia and Herzegovina",
        "Capital": "Sarajevo",
        "Lat": "43.86666667",
        "Long": "18.416667",
        "Continent": "Europe"
    },
    {
        "Country": "Botswana",
        "Capital": "Gaborone",
        "Lat": "-24.63333333",
        "Long": "25.9",
        "Continent": "Africa"
    },
    {
        "Country": "Brazil",
        "Capital": "Brasilia",
        "Lat": "-15.78333333",
        "Long": "-47.916667",
        "Continent": "South America"
    },
    {
        "Country": "British Indian Ocean Territory",
        "Capital": "Diego Garcia",
        "Lat": "-7.3",
        "Long": "72.4",
        "Continent": "Africa"
    },
    {
        "Country": "British Virgin Islands",
        "Capital": "Road Town",
        "Lat": "18.41666667",
        "Long": "-64.616667",
        "Continent": "North America"
    },
    {
        "Country": "Brunei Darussalam",
        "Capital": "Bandar Seri Begawan",
        "Lat": "4.883333333",
        "Long": "114.933333",
        "Continent": "Asia"
    },
    {
        "Country": "Bulgaria",
        "Capital": "Sofia",
        "Lat": "42.68333333",
        "Long": "23.316667",
        "Continent": "Europe"
    },
    {
        "Country": "Burkina Faso",
        "Capital": "Ouagadougou",
        "Lat": "12.36666667",
        "Long": "-1.516667",
        "Continent": "Africa"
    },
    {
        "Country": "Burundi",
        "Capital": "Bujumbura",
        "Lat": "-3.366666667",
        "Long": "29.35",
        "Continent": "Africa"
    },
    {
        "Country": "Cambodia",
        "Capital": "Phnom Penh",
        "Lat": "11.55",
        "Long": "104.916667",
        "Continent": "Asia"
    },
    {
        "Country": "Cameroon",
        "Capital": "Yaounde",
        "Lat": "3.866666667",
        "Long": "11.516667",
        "Continent": "Africa"
    },
    {
        "Country": "Canada",
        "Capital": "Ottawa",
        "Lat": "45.41666667",
        "Long": "-75.7",
        "Continent": "Central America"
    },
    {
        "Country": "Cape Verde",
        "Capital": "Praia",
        "Lat": "14.91666667",
        "Long": "-23.516667",
        "Continent": "Africa"
    },
    {
        "Country": "Cayman Islands",
        "Capital": "George Town",
        "Lat": "19.3",
        "Long": "-81.383333",
        "Continent": "North America"
    },
    {
        "Country": "Central African Republic",
        "Capital": "Bangui",
        "Lat": "4.366666667",
        "Long": "18.583333",
        "Continent": "Africa"
    },
    {
        "Country": "Chad",
        "Capital": "N’Djamena",
        "Lat": "12.1",
        "Long": "15.033333",
        "Continent": "Africa"
    },
    {
        "Country": "Chile",
        "Capital": "Santiago",
        "Lat": "-33.45",
        "Long": "-70.666667",
        "Continent": "South America"
    },
    {
        "Country": "China",
        "Capital": "Beijing",
        "Lat": "39.91666667",
        "Long": "116.383333",
        "Continent": "Asia"
    },
    {
        "Country": "Christmas Island",
        "Capital": "The Settlement",
        "Lat": "-10.41666667",
        "Long": "105.716667",
        "Continent": "Australia"
    },
    {
        "Country": "Cocos Islands",
        "Capital": "West Island",
        "Lat": "-12.16666667",
        "Long": "96.833333",
        "Continent": "Australia"
    },
    {
        "Country": "Colombia",
        "Capital": "Bogota",
        "Lat": "4.6",
        "Long": "-74.083333",
        "Continent": "South America"
    },
    {
        "Country": "Comoros",
        "Capital": "Moroni",
        "Lat": "-11.7",
        "Long": "43.233333",
        "Continent": "Africa"
    },
    {
        "Country": "Cook Islands",
        "Capital": "Avarua",
        "Lat": "-21.2",
        "Long": "-159.766667",
        "Continent": "Australia"
    },
    {
        "Country": "Costa Rica",
        "Capital": "San Jose",
        "Lat": "9.933333333",
        "Long": "-84.083333",
        "Continent": "Central America"
    },
    {
        "Country": "Cote d’Ivoire",
        "Capital": "Yamoussoukro",
        "Lat": "6.816666667",
        "Long": "-5.266667",
        "Continent": "Africa"
    },
    {
        "Country": "Croatia",
        "Capital": "Zagreb",
        "Lat": "45.8",
        "Long": "16",
        "Continent": "Europe"
    },
    {
        "Country": "Cuba",
        "Capital": "Havana",
        "Lat": "23.11666667",
        "Long": "-82.35",
        "Continent": "North America"
    },
    {
        "Country": "CuraÃ§ao",
        "Capital": "Willemstad",
        "Lat": "12.1",
        "Long": "-68.916667",
        "Continent": "North America"
    },
    {
        "Country": "Cyprus",
        "Capital": "Nicosia",
        "Lat": "35.16666667",
        "Long": "33.366667",
        "Continent": "Europe"
    },
    {
        "Country": "Czech Republic",
        "Capital": "Prague",
        "Lat": "50.08333333",
        "Long": "14.466667",
        "Continent": "Europe"
    },
    {
        "Country": "Democratic Republic of the Congo",
        "Capital": "Kinshasa",
        "Lat": "-4.316666667",
        "Long": "15.3",
        "Continent": "Africa"
    },
    {
        "Country": "Denmark",
        "Capital": "Copenhagen",
        "Lat": "55.66666667",
        "Long": "12.583333",
        "Continent": "Europe"
    },
    {
        "Country": "Djibouti",
        "Capital": "Djibouti",
        "Lat": "11.58333333",
        "Long": "43.15",
        "Continent": "Africa"
    },
    {
        "Country": "Dominica",
        "Capital": "Roseau",
        "Lat": "15.3",
        "Long": "-61.4",
        "Continent": "North America"
    },
    {
        "Country": "Dominican Republic",
        "Capital": "Santo Domingo",
        "Lat": "18.46666667",
        "Long": "-69.9",
        "Continent": "North America"
    },
    {
        "Country": "Ecuador",
        "Capital": "Quito",
        "Lat": "-0.216666667",
        "Long": "-78.5",
        "Continent": "South America"
    },
    {
        "Country": "Egypt",
        "Capital": "Cairo",
        "Lat": "30.05",
        "Long": "31.25",
        "Continent": "Africa"
    },
    {
        "Country": "El Salvador",
        "Capital": "San Salvador",
        "Lat": "13.7",
        "Long": "-89.2",
        "Continent": "Central America"
    },
    {
        "Country": "Equatorial Guinea",
        "Capital": "Malabo",
        "Lat": "3.75",
        "Long": "8.783333",
        "Continent": "Africa"
    },
    {
        "Country": "Eritrea",
        "Capital": "Asmara",
        "Lat": "15.33333333",
        "Long": "38.933333",
        "Continent": "Africa"
    },
    {
        "Country": "Estonia",
        "Capital": "Tallinn",
        "Lat": "59.43333333",
        "Long": "24.716667",
        "Continent": "Europe"
    },
    {
        "Country": "Ethiopia",
        "Capital": "Addis Ababa",
        "Lat": "9.033333333",
        "Long": "38.7",
        "Continent": "Africa"
    },
    {
        "Country": "Falkland Islands",
        "Capital": "Stanley",
        "Lat": "-51.7",
        "Long": "-57.85",
        "Continent": "South America"
    },
    {
        "Country": "Faroe Islands",
        "Capital": "Torshavn",
        "Lat": "62",
        "Long": "-6.766667",
        "Continent": "Europe"
    },
    {
        "Country": "Federated States of Micronesia",
        "Capital": "Palikir",
        "Lat": "6.916666667",
        "Long": "158.15",
        "Continent": "Australia"
    },
    {
        "Country": "Fiji",
        "Capital": "Suva",
        "Lat": "-18.13333333",
        "Long": "178.416667",
        "Continent": "Australia"
    },
    {
        "Country": "Finland",
        "Capital": "Helsinki",
        "Lat": "60.16666667",
        "Long": "24.933333",
        "Continent": "Europe"
    },
    {
        "Country": "France",
        "Capital": "Paris",
        "Lat": "48.86666667",
        "Long": "2.333333",
        "Continent": "Europe"
    },
    {
        "Country": "French Polynesia",
        "Capital": "Papeete",
        "Lat": "-17.53333333",
        "Long": "-149.566667",
        "Continent": "Australia"
    },
    {
        "Country": "French Southern and Antarctic Lands",
        "Capital": "Port-aux-FranÃ§ais",
        "Lat": "-49.35",
        "Long": "70.216667",
        "Continent": "Antarctica"
    },
    {
        "Country": "Gabon",
        "Capital": "Libreville",
        "Lat": "0.383333333",
        "Long": "9.45",
        "Continent": "Africa"
    },
    {
        "Country": "Georgia",
        "Capital": "Tbilisi",
        "Lat": "41.68333333",
        "Long": "44.833333",
        "Continent": "Europe"
    },
    {
        "Country": "Germany",
        "Capital": "Berlin",
        "Lat": "52.51666667",
        "Long": "13.4",
        "Continent": "Europe"
    },
    {
        "Country": "Ghana",
        "Capital": "Accra",
        "Lat": "5.55",
        "Long": "-0.216667",
        "Continent": "Africa"
    },
    {
        "Country": "Gibraltar",
        "Capital": "Gibraltar",
        "Lat": "36.13333333",
        "Long": "-5.35",
        "Continent": "Europe"
    },
    {
        "Country": "Greece",
        "Capital": "Athens",
        "Lat": "37.98333333",
        "Long": "23.733333",
        "Continent": "Europe"
    },
    {
        "Country": "Greenland",
        "Capital": "Nuuk",
        "Lat": "64.18333333",
        "Long": "-51.75",
        "Continent": "Central America"
    },
    {
        "Country": "Grenada",
        "Capital": "Saint George’s",
        "Lat": "12.05",
        "Long": "-61.75",
        "Continent": "North America"
    },
    {
        "Country": "Guam",
        "Capital": "Hagatna",
        "Lat": "13.46666667",
        "Long": "144.733333",
        "Continent": "Australia"
    },
    {
        "Country": "Guatemala",
        "Capital": "Guatemala City",
        "Lat": "14.61666667",
        "Long": "-90.516667",
        "Continent": "Central America"
    },
    {
        "Country": "Guernsey",
        "Capital": "Saint Peter Port",
        "Lat": "49.45",
        "Long": "-2.533333",
        "Continent": "Europe"
    },
    {
        "Country": "Guinea",
        "Capital": "Conakry",
        "Lat": "9.5",
        "Long": "-13.7",
        "Continent": "Africa"
    },
    {
        "Country": "Guinea-Bissau",
        "Capital": "Bissau",
        "Lat": "11.85",
        "Long": "-15.583333",
        "Continent": "Africa"
    },
    {
        "Country": "Guyana",
        "Capital": "Georgetown",
        "Lat": "6.8",
        "Long": "-58.15",
        "Continent": "South America"
    },
    {
        "Country": "Haiti",
        "Capital": "Port-au-Prince",
        "Lat": "18.53333333",
        "Long": "-72.333333",
        "Continent": "North America"
    },
    {
        "Country": "Heard Island and McDonald Islands",
        "Capital": "N/A",
        "Lat": "0",
        "Long": "0",
        "Continent": "Antarctica"
    },
    {
        "Country": "Honduras",
        "Capital": "Tegucigalpa",
        "Lat": "14.1",
        "Long": "-87.216667",
        "Continent": "Central America"
    },
    {
        "Country": "Hong Kong",
        "Capital": "N/A",
        "Lat": "0",
        "Long": "0",
        "Continent": "Asia"
    },
    {
        "Country": "Hungary",
        "Capital": "Budapest",
        "Lat": "47.5",
        "Long": "19.083333",
        "Continent": "Europe"
    },
    {
        "Country": "Iceland",
        "Capital": "Reykjavik",
        "Lat": "64.15",
        "Long": "-21.95",
        "Continent": "Europe"
    },
    {
        "Country": "India",
        "Capital": "New Delhi",
        "Lat": "28.6",
        "Long": "77.2",
        "Continent": "Asia"
    },
    {
        "Country": "Indonesia",
        "Capital": "Jakarta",
        "Lat": "-6.166666667",
        "Long": "106.816667",
        "Continent": "Asia"
    },
    {
        "Country": "Iran",
        "Capital": "Tehran",
        "Lat": "35.7",
        "Long": "51.416667",
        "Continent": "Asia"
    },
    {
        "Country": "Iraq",
        "Capital": "Baghdad",
        "Lat": "33.33333333",
        "Long": "44.4",
        "Continent": "Asia"
    },
    {
        "Country": "Ireland",
        "Capital": "Dublin",
        "Lat": "53.31666667",
        "Long": "-6.233333",
        "Continent": "Europe"
    },
    {
        "Country": "Isle of Man",
        "Capital": "Douglas",
        "Lat": "54.15",
        "Long": "-4.483333",
        "Continent": "Europe"
    },
    {
        "Country": "Israel",
        "Capital": "Jerusalem",
        "Lat": "31.76666667",
        "Long": "35.233333",
        "Continent": "Asia"
    },
    {
        "Country": "Italy",
        "Capital": "Rome",
        "Lat": "41.9",
        "Long": "12.483333",
        "Continent": "Europe"
    },
    {
        "Country": "Jamaica",
        "Capital": "Kingston",
        "Lat": "18",
        "Long": "-76.8",
        "Continent": "North America"
    },
    {
        "Country": "Japan",
        "Capital": "Tokyo",
        "Lat": "35.68333333",
        "Long": "139.75",
        "Continent": "Asia"
    },
    {
        "Country": "Jersey",
        "Capital": "Saint Helier",
        "Lat": "49.18333333",
        "Long": "-2.1",
        "Continent": "Europe"
    },
    {
        "Country": "Jordan",
        "Capital": "Amman",
        "Lat": "31.95",
        "Long": "35.933333",
        "Continent": "Asia"
    },
    {
        "Country": "Kazakhstan",
        "Capital": "Astana",
        "Lat": "51.16666667",
        "Long": "71.416667",
        "Continent": "Asia"
    },
    {
        "Country": "Kenya",
        "Capital": "Nairobi",
        "Lat": "-1.283333333",
        "Long": "36.816667",
        "Continent": "Africa"
    },
    {
        "Country": "Kiribati",
        "Capital": "Tarawa",
        "Lat": "-0.883333333",
        "Long": "169.533333",
        "Continent": "Australia"
    },
    {
        "Country": "Kosovo",
        "Capital": "Pristina",
        "Lat": "42.66666667",
        "Long": "21.166667",
        "Continent": "Europe"
    },
    {
        "Country": "Kuwait",
        "Capital": "Kuwait City",
        "Lat": "29.36666667",
        "Long": "47.966667",
        "Continent": "Asia"
    },
    {
        "Country": "Kyrgyzstan",
        "Capital": "Bishkek",
        "Lat": "42.86666667",
        "Long": "74.6",
        "Continent": "Asia"
    },
    {
        "Country": "Laos",
        "Capital": "Vientiane",
        "Lat": "17.96666667",
        "Long": "102.6",
        "Continent": "Asia"
    },
    {
        "Country": "Latvia",
        "Capital": "Riga",
        "Lat": "56.95",
        "Long": "24.1",
        "Continent": "Europe"
    },
    {
        "Country": "Lebanon",
        "Capital": "Beirut",
        "Lat": "33.86666667",
        "Long": "35.5",
        "Continent": "Asia"
    },
    {
        "Country": "Lesotho",
        "Capital": "Maseru",
        "Lat": "-29.31666667",
        "Long": "27.483333",
        "Continent": "Africa"
    },
    {
        "Country": "Liberia",
        "Capital": "Monrovia",
        "Lat": "6.3",
        "Long": "-10.8",
        "Continent": "Africa"
    },
    {
        "Country": "Libya",
        "Capital": "Tripoli",
        "Lat": "32.88333333",
        "Long": "13.166667",
        "Continent": "Africa"
    },
    {
        "Country": "Liechtenstein",
        "Capital": "Vaduz",
        "Lat": "47.13333333",
        "Long": "9.516667",
        "Continent": "Europe"
    },
    {
        "Country": "Lithuania",
        "Capital": "Vilnius",
        "Lat": "54.68333333",
        "Long": "25.316667",
        "Continent": "Europe"
    },
    {
        "Country": "Luxembourg",
        "Capital": "Luxembourg",
        "Lat": "49.6",
        "Long": "6.116667",
        "Continent": "Europe"
    },
    {
        "Country": "Macau",
        "Capital": "N/A",
        "Lat": "0",
        "Long": "0",
        "Continent": "Asia"
    },
    {
        "Country": "Macedonia",
        "Capital": "Skopje",
        "Lat": "42",
        "Long": "21.433333",
        "Continent": "Europe"
    },
    {
        "Country": "Madagascar",
        "Capital": "Antananarivo",
        "Lat": "-18.91666667",
        "Long": "47.516667",
        "Continent": "Africa"
    },
    {
        "Country": "Malawi",
        "Capital": "Lilongwe",
        "Lat": "-13.96666667",
        "Long": "33.783333",
        "Continent": "Africa"
    },
    {
        "Country": "Malaysia",
        "Capital": "Kuala Lumpur",
        "Lat": "3.166666667",
        "Long": "101.7",
        "Continent": "Asia"
    },
    {
        "Country": "Maldives",
        "Capital": "Male",
        "Lat": "4.166666667",
        "Long": "73.5",
        "Continent": "Asia"
    },
    {
        "Country": "Mali",
        "Capital": "Bamako",
        "Lat": "12.65",
        "Long": "-8",
        "Continent": "Africa"
    },
    {
        "Country": "Malta",
        "Capital": "Valletta",
        "Lat": "35.88333333",
        "Long": "14.5",
        "Continent": "Europe"
    },
    {
        "Country": "Marshall Islands",
        "Capital": "Majuro",
        "Lat": "7.1",
        "Long": "171.383333",
        "Continent": "Australia"
    },
    {
        "Country": "Mauritania",
        "Capital": "Nouakchott",
        "Lat": "18.06666667",
        "Long": "-15.966667",
        "Continent": "Africa"
    },
    {
        "Country": "Mauritius",
        "Capital": "Port Louis",
        "Lat": "-20.15",
        "Long": "57.483333",
        "Continent": "Africa"
    },
    {
        "Country": "Mexico",
        "Capital": "Mexico City",
        "Lat": "19.43333333",
        "Long": "-99.133333",
        "Continent": "Central America"
    },
    {
        "Country": "Moldova",
        "Capital": "Chisinau",
        "Lat": "47",
        "Long": "28.85",
        "Continent": "Europe"
    },
    {
        "Country": "Monaco",
        "Capital": "Monaco",
        "Lat": "43.73333333",
        "Long": "7.416667",
        "Continent": "Europe"
    },
    {
        "Country": "Mongolia",
        "Capital": "Ulaanbaatar",
        "Lat": "47.91666667",
        "Long": "106.916667",
        "Continent": "Asia"
    },
    {
        "Country": "Montenegro",
        "Capital": "Podgorica",
        "Lat": "42.43333333",
        "Long": "19.266667",
        "Continent": "Europe"
    },
    {
        "Country": "Montserrat",
        "Capital": "Plymouth",
        "Lat": "16.7",
        "Long": "-62.216667",
        "Continent": "North America"
    },
    {
        "Country": "Morocco",
        "Capital": "Rabat",
        "Lat": "34.01666667",
        "Long": "-6.816667",
        "Continent": "Africa"
    },
    {
        "Country": "Mozambique",
        "Capital": "Maputo",
        "Lat": "-25.95",
        "Long": "32.583333",
        "Continent": "Africa"
    },
    {
        "Country": "Myanmar",
        "Capital": "Rangoon",
        "Lat": "16.8",
        "Long": "96.15",
        "Continent": "Asia"
    },
    {
        "Country": "Namibia",
        "Capital": "Windhoek",
        "Lat": "-22.56666667",
        "Long": "17.083333",
        "Continent": "Africa"
    },
    {
        "Country": "Nauru",
        "Capital": "Yaren",
        "Lat": "-0.5477",
        "Long": "166.920867",
        "Continent": "Australia"
    },
    {
        "Country": "Nepal",
        "Capital": "Kathmandu",
        "Lat": "27.71666667",
        "Long": "85.316667",
        "Continent": "Asia"
    },
    {
        "Country": "Netherlands",
        "Capital": "Amsterdam",
        "Lat": "52.35",
        "Long": "4.916667",
        "Continent": "Europe"
    },
    {
        "Country": "New Caledonia",
        "Capital": "Noumea",
        "Lat": "-22.26666667",
        "Long": "166.45",
        "Continent": "Australia"
    },
    {
        "Country": "New Zealand",
        "Capital": "Wellington",
        "Lat": "-41.3",
        "Long": "174.783333",
        "Continent": "Australia"
    },
    {
        "Country": "Nicaragua",
        "Capital": "Managua",
        "Lat": "12.13333333",
        "Long": "-86.25",
        "Continent": "Central America"
    },
    {
        "Country": "Niger",
        "Capital": "Niamey",
        "Lat": "13.51666667",
        "Long": "2.116667",
        "Continent": "Africa"
    },
    {
        "Country": "Nigeria",
        "Capital": "Abuja",
        "Lat": "9.083333333",
        "Long": "7.533333",
        "Continent": "Africa"
    },
    {
        "Country": "Niue",
        "Capital": "Alofi",
        "Lat": "-19.01666667",
        "Long": "-169.916667",
        "Continent": "Australia"
    },
    {
        "Country": "Norfolk Island",
        "Capital": "Kingston",
        "Lat": "-29.05",
        "Long": "167.966667",
        "Continent": "Australia"
    },
    {
        "Country": "North Korea",
        "Capital": "Pyongyang",
        "Lat": "39.01666667",
        "Long": "125.75",
        "Continent": "Asia"
    },
    {
        "Country": "Northern Cyprus",
        "Capital": "North Nicosia",
        "Lat": "35.183333",
        "Long": "33.366667",
        "Continent": "Europe"
    },
    {
        "Country": "Northern Mariana Islands",
        "Capital": "Saipan",
        "Lat": "15.2",
        "Long": "145.75",
        "Continent": "Australia"
    },
    {
        "Country": "Norway",
        "Capital": "Oslo",
        "Lat": "59.91666667",
        "Long": "10.75",
        "Continent": "Europe"
    },
    {
        "Country": "Oman",
        "Capital": "Muscat",
        "Lat": "23.61666667",
        "Long": "58.583333",
        "Continent": "Asia"
    },
    {
        "Country": "Pakistan",
        "Capital": "Islamabad",
        "Lat": "33.68333333",
        "Long": "73.05",
        "Continent": "Asia"
    },
    {
        "Country": "Palau",
        "Capital": "Melekeok",
        "Lat": "7.483333333",
        "Long": "134.633333",
        "Continent": "Australia"
    },
    {
        "Country": "Palestine",
        "Capital": "Jerusalem",
        "Lat": "31.76666667",
        "Long": "35.233333",
        "Continent": "Asia"
    },
    {
        "Country": "Panama",
        "Capital": "Panama City",
        "Lat": "8.966666667",
        "Long": "-79.533333",
        "Continent": "Central America"
    },
    {
        "Country": "Papua New Guinea",
        "Capital": "Port Moresby",
        "Lat": "-9.45",
        "Long": "147.183333",
        "Continent": "Australia"
    },
    {
        "Country": "Paraguay",
        "Capital": "Asuncion",
        "Lat": "-25.26666667",
        "Long": "-57.666667",
        "Continent": "South America"
    },
    {
        "Country": "Peru",
        "Capital": "Lima",
        "Lat": "-12.05",
        "Long": "-77.05",
        "Continent": "South America"
    },
    {
        "Country": "Philippines",
        "Capital": "Manila",
        "Lat": "14.6",
        "Long": "120.966667",
        "Continent": "Asia"
    },
    {
        "Country": "Pitcairn Islands",
        "Capital": "Adamstown",
        "Lat": "-25.06666667",
        "Long": "-130.083333",
        "Continent": "Australia"
    },
    {
        "Country": "Poland",
        "Capital": "Warsaw",
        "Lat": "52.25",
        "Long": "21",
        "Continent": "Europe"
    },
    {
        "Country": "Portugal",
        "Capital": "Lisbon",
        "Lat": "38.71666667",
        "Long": "-9.133333",
        "Continent": "Europe"
    },
    {
        "Country": "Puerto Rico",
        "Capital": "San Juan",
        "Lat": "18.46666667",
        "Long": "-66.116667",
        "Continent": "North America"
    },
    {
        "Country": "Qatar",
        "Capital": "Doha",
        "Lat": "25.28333333",
        "Long": "51.533333",
        "Continent": "Asia"
    },
    {
        "Country": "Republic of Congo",
        "Capital": "Brazzaville",
        "Lat": "-4.25",
        "Long": "15.283333",
        "Continent": "Africa"
    },
    {
        "Country": "Romania",
        "Capital": "Bucharest",
        "Lat": "44.43333333",
        "Long": "26.1",
        "Continent": "Europe"
    },
    {
        "Country": "Russia",
        "Capital": "Moscow",
        "Lat": "55.75",
        "Long": "37.6",
        "Continent": "Europe"
    },
    {
        "Country": "Rwanda",
        "Capital": "Kigali",
        "Lat": "-1.95",
        "Long": "30.05",
        "Continent": "Africa"
    },
    {
        "Country": "Saint Barthelemy",
        "Capital": "Gustavia",
        "Lat": "17.88333333",
        "Long": "-62.85",
        "Continent": "North America"
    },
    {
        "Country": "Saint Helena",
        "Capital": "Jamestown",
        "Lat": "-15.93333333",
        "Long": "-5.716667",
        "Continent": "Africa"
    },
    {
        "Country": "Saint Kitts and Nevis",
        "Capital": "Basseterre",
        "Lat": "17.3",
        "Long": "-62.716667",
        "Continent": "North America"
    },
    {
        "Country": "Saint Lucia",
        "Capital": "Castries",
        "Lat": "14",
        "Long": "-61",
        "Continent": "North America"
    },
    {
        "Country": "Saint Martin",
        "Capital": "Marigot",
        "Lat": "18.0731",
        "Long": "-63.0822",
        "Continent": "North America"
    },
    {
        "Country": "Saint Pierre and Miquelon",
        "Capital": "Saint-Pierre",
        "Lat": "46.76666667",
        "Long": "-56.183333",
        "Continent": "Central America"
    },
    {
        "Country": "Saint Vincent and the Grenadines",
        "Capital": "Kingstown",
        "Lat": "13.13333333",
        "Long": "-61.216667",
        "Continent": "Central America"
    },
    {
        "Country": "Samoa",
        "Capital": "Apia",
        "Lat": "-13.81666667",
        "Long": "-171.766667",
        "Continent": "Australia"
    },
    {
        "Country": "San Marino",
        "Capital": "San Marino",
        "Lat": "43.93333333",
        "Long": "12.416667",
        "Continent": "Europe"
    },
    {
        "Country": "Sao Tome and Principe",
        "Capital": "Sao Tome",
        "Lat": "0.333333333",
        "Long": "6.733333",
        "Continent": "Africa"
    },
    {
        "Country": "Saudi Arabia",
        "Capital": "Riyadh",
        "Lat": "24.65",
        "Long": "46.7",
        "Continent": "Asia"
    },
    {
        "Country": "Senegal",
        "Capital": "Dakar",
        "Lat": "14.73333333",
        "Long": "-17.633333",
        "Continent": "Africa"
    },
    {
        "Country": "Serbia",
        "Capital": "Belgrade",
        "Lat": "44.83333333",
        "Long": "20.5",
        "Continent": "Europe"
    },
    {
        "Country": "Seychelles",
        "Capital": "Victoria",
        "Lat": "-4.616666667",
        "Long": "55.45",
        "Continent": "Africa"
    },
    {
        "Country": "Sierra Leone",
        "Capital": "Freetown",
        "Lat": "8.483333333",
        "Long": "-13.233333",
        "Continent": "Africa"
    },
    {
        "Country": "Singapore",
        "Capital": "Singapore",
        "Lat": "1.283333333",
        "Long": "103.85",
        "Continent": "Asia"
    },
    {
        "Country": "Sint Maarten",
        "Capital": "Philipsburg",
        "Lat": "18.01666667",
        "Long": "-63.033333",
        "Continent": "North America"
    },
    {
        "Country": "Slovakia",
        "Capital": "Bratislava",
        "Lat": "48.15",
        "Long": "17.116667",
        "Continent": "Europe"
    },
    {
        "Country": "Slovenia",
        "Capital": "Ljubljana",
        "Lat": "46.05",
        "Long": "14.516667",
        "Continent": "Europe"
    },
    {
        "Country": "Solomon Islands",
        "Capital": "Honiara",
        "Lat": "-9.433333333",
        "Long": "159.95",
        "Continent": "Australia"
    },
    {
        "Country": "Somalia",
        "Capital": "Mogadishu",
        "Lat": "2.066666667",
        "Long": "45.333333",
        "Continent": "Africa"
    },
    {
        "Country": "Somaliland",
        "Capital": "Hargeisa",
        "Lat": "9.55",
        "Long": "44.05",
        "Continent": "Africa"
    },
    {
        "Country": "South Africa",
        "Capital": "Pretoria",
        "Lat": "-25.7",
        "Long": "28.216667",
        "Continent": "Africa"
    },
    {
        "Country": "South Georgia and South Sandwich Islands",
        "Capital": "King Edward Point",
        "Lat": "-54.283333",
        "Long": "-36.5",
        "Continent": "Antarctica"
    },
    {
        "Country": "South Korea",
        "Capital": "Seoul",
        "Lat": "37.55",
        "Long": "126.983333",
        "Continent": "Asia"
    },
    {
        "Country": "South Sudan",
        "Capital": "Juba",
        "Lat": "4.85",
        "Long": "31.616667",
        "Continent": "Africa"
    },
    {
        "Country": "Spain",
        "Capital": "Madrid",
        "Lat": "40.4",
        "Long": "-3.683333",
        "Continent": "Europe"
    },
    {
        "Country": "Sri Lanka",
        "Capital": "Colombo",
        "Lat": "6.916666667",
        "Long": "79.833333",
        "Continent": "Asia"
    },
    {
        "Country": "Sudan",
        "Capital": "Khartoum",
        "Lat": "15.6",
        "Long": "32.533333",
        "Continent": "Africa"
    },
    {
        "Country": "Suriname",
        "Capital": "Paramaribo",
        "Lat": "5.833333333",
        "Long": "-55.166667",
        "Continent": "South America"
    },
    {
        "Country": "Svalbard",
        "Capital": "Longyearbyen",
        "Lat": "78.21666667",
        "Long": "15.633333",
        "Continent": "Europe"
    },
    {
        "Country": "Swaziland",
        "Capital": "Mbabane",
        "Lat": "-26.31666667",
        "Long": "31.133333",
        "Continent": "Africa"
    },
    {
        "Country": "Sweden",
        "Capital": "Stockholm",
        "Lat": "59.33333333",
        "Long": "18.05",
        "Continent": "Europe"
    },
    {
        "Country": "Switzerland",
        "Capital": "Bern",
        "Lat": "46.91666667",
        "Long": "7.466667",
        "Continent": "Europe"
    },
    {
        "Country": "Syria",
        "Capital": "Damascus",
        "Lat": "33.5",
        "Long": "36.3",
        "Continent": "Asia"
    },
    {
        "Country": "Taiwan",
        "Capital": "Taipei",
        "Lat": "25.03333333",
        "Long": "121.516667",
        "Continent": "Asia"
    },
    {
        "Country": "Tajikistan",
        "Capital": "Dushanbe",
        "Lat": "38.55",
        "Long": "68.766667",
        "Continent": "Asia"
    },
    {
        "Country": "Tanzania",
        "Capital": "Dar es Salaam",
        "Lat": "-6.8",
        "Long": "39.283333",
        "Continent": "Africa"
    },
    {
        "Country": "Thailand",
        "Capital": "Bangkok",
        "Lat": "13.75",
        "Long": "100.516667",
        "Continent": "Asia"
    },
    {
        "Country": "The Gambia",
        "Capital": "Banjul",
        "Lat": "13.45",
        "Long": "-16.566667",
        "Continent": "Africa"
    },
    {
        "Country": "Timor-Leste",
        "Capital": "Dili",
        "Lat": "-8.583333333",
        "Long": "125.6",
        "Continent": "Asia"
    },
    {
        "Country": "Togo",
        "Capital": "Lome",
        "Lat": "6.116666667",
        "Long": "1.216667",
        "Continent": "Africa"
    },
    {
        "Country": "Tokelau",
        "Capital": "Atafu",
        "Lat": "-9.166667",
        "Long": "-171.833333",
        "Continent": "Australia"
    },
    {
        "Country": "Tonga",
        "Capital": "Nuku’alofa",
        "Lat": "-21.13333333",
        "Long": "-175.2",
        "Continent": "Australia"
    },
    {
        "Country": "Trinidad and Tobago",
        "Capital": "Port of Spain",
        "Lat": "10.65",
        "Long": "-61.516667",
        "Continent": "North America"
    },
    {
        "Country": "Tunisia",
        "Capital": "Tunis",
        "Lat": "36.8",
        "Long": "10.183333",
        "Continent": "Africa"
    },
    {
        "Country": "Turkey",
        "Capital": "Ankara",
        "Lat": "39.93333333",
        "Long": "32.866667",
        "Continent": "Europe"
    },
    {
        "Country": "Turkmenistan",
        "Capital": "Ashgabat",
        "Lat": "37.95",
        "Long": "58.383333",
        "Continent": "Asia"
    },
    {
        "Country": "Turks and Caicos Islands",
        "Capital": "Grand Turk",
        "Lat": "21.46666667",
        "Long": "-71.133333",
        "Continent": "North America"
    },
    {
        "Country": "Tuvalu",
        "Capital": "Funafuti",
        "Lat": "-8.516666667",
        "Long": "179.216667",
        "Continent": "Australia"
    },
    {
        "Country": "Uganda",
        "Capital": "Kampala",
        "Lat": "0.316666667",
        "Long": "32.55",
        "Continent": "Africa"
    },
    {
        "Country": "Ukraine",
        "Capital": "Kyiv",
        "Lat": "50.43333333",
        "Long": "30.516667",
        "Continent": "Europe"
    },
    {
        "Country": "United Arab Emirates",
        "Capital": "Abu Dhabi",
        "Lat": "24.46666667",
        "Long": "54.366667",
        "Continent": "Asia"
    },
    {
        "Country": "United Kingdom",
        "Capital": "London",
        "Lat": "51.5",
        "Long": "-0.083333",
        "Continent": "Europe"
    },
    {
        "Country": "United States",
        "Capital": "Washington, D.C.",
        "Lat": "38.883333",
        "Long": "-77",
        "Continent": "Central America"
    },
    {
        "Country": "Uruguay",
        "Capital": "Montevideo",
        "Lat": "-34.85",
        "Long": "-56.166667",
        "Continent": "South America"
    },
    {
        "Country": "US Minor Outlying Islands",
        "Capital": "Washington, D.C.",
        "Lat": "38.883333",
        "Long": "-77",
        "Continent": "Australia"
    },
    {
        "Country": "US Virgin Islands",
        "Capital": "Charlotte Amalie",
        "Lat": "18.35",
        "Long": "-64.933333",
        "Continent": "North America"
    },
    {
        "Country": "Uzbekistan",
        "Capital": "Tashkent",
        "Lat": "41.31666667",
        "Long": "69.25",
        "Continent": "Asia"
    },
    {
        "Country": "Vanuatu",
        "Capital": "Port-Vila",
        "Lat": "-17.73333333",
        "Long": "168.316667",
        "Continent": "Australia"
    },
    {
        "Country": "Vatican City",
        "Capital": "Vatican City",
        "Lat": "41.9",
        "Long": "12.45",
        "Continent": "Europe"
    },
    {
        "Country": "Venezuela",
        "Capital": "Caracas",
        "Lat": "10.48333333",
        "Long": "-66.866667",
        "Continent": "South America"
    },
    {
        "Country": "Vietnam",
        "Capital": "Hanoi",
        "Lat": "21.03333333",
        "Long": "105.85",
        "Continent": "Asia"
    },
    {
        "Country": "Wallis and Futuna",
        "Capital": "Mata-Utu",
        "Lat": "-13.95",
        "Long": "-171.933333",
        "Continent": "Australia"
    },
    {
        "Country": "Western Sahara",
        "Capital": "El-AaiÃºn",
        "Lat": "27.153611",
        "Long": "-13.203333",
        "Continent": "Africa"
    },
    {
        "Country": "Yemen",
        "Capital": "Sanaa",
        "Lat": "15.35",
        "Long": "44.2",
        "Continent": "Asia"
    },
    {
        "Country": "Zambia",
        "Capital": "Lusaka",
        "Lat": "-15.41666667",
        "Long": "28.283333",
        "Continent": "Africa"
    },
    {
        "Country": "Zimbabwe",
        "Capital": "Harare",
        "Lat": "-17.81666667",
        "Long": "31.033333",
        "Continent": "Africa"
    }

];


var pickedCountries = []; //indexes of the countries previously selected in this game
var selectedCountry; //object holding the selected country object

// text for the question
var questionStart = "What is the capital of ";
var questionEnd = "?"; 

var correct = 0; //number of correct answers
var wrong = 0; //number of wrong answers
var pickedAnswers = []; //array of string answers (including correct answer) (length = numpickedAnswers)

var answerChosen; //flag to check if user has picked an answer

var tickIcon = "<i class='fa fa-check' aria-hidden='true'></i>"; //icons for correct answer
var crossIcon = "<i class='fa fa-times' aria-hidden='true'></i>"; //icons for wrong answer


//Game Settings
//---------------
var numQuestions = 10; //the total number of questions asked
var numPossibleAnswers = 4; // the number of questions the user has to choose from
var timeBetweenQuestions = 5; //number of seconds before next question displayed
var maxTime = 10; //number of seconds per question


//Question Timer Variables
//---------------
var intervalId; //for the timer
var timeRemaining = true; //flag to check if timer is up


//  timer object.
var timer = {

    time: maxTime, //set the start time of the timer

    reset: function() {
        console.log("-->Timer reset()");
        timer.time = maxTime; //reset to the max time

        //update the time displayed
        $("#timer-seconds").text(maxTime);

    },
    //start the timer
    start: function() {
        console.log("-->Timer start()");
        //start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000); //display updated counter every second
        }

    },

    stop: function() {
        console.log("-->Timer stop() timer.time: " + timer.time);
        //stop the count here and set the clock to not be running.
        clearInterval(intervalId);

    },

    count: function() {
        //check if time expired
        if (timer.time == 0) {
            timeRemaining = false;
            increaseWrongCount(false); //increase wrong count with false parameter to indicate running out of time
            showCorrectAnswer(false); //show the correct number, user was incorrect
            console.log("-->timer finished");
        } else {


            //decrease the time by 1
            timer.time--;
            //display the updated time
            $("#timer-seconds").text(timer.time);
        }

    }
}





// -----------------------------
//   Functions
// -----------------------------

//2PACX-1vTRH-ZC4heeLbrAKfHbKWG8QVFAgYtGXdq90tm7zIidgbxAB9hw-ZeTpWh05W5ciCKyId-uyduFFhnj

//listener for document ready
$(document).ready(function() {
    //doc loaded


    //load the background google map at set lat and long
    showGoogleMaps(27.1959739, 78.02423269999997);

    //hide any game boxes until user presses start
    $(".box").hide();
    $("#restart-button").hide();
    $("#next-question-message").hide();
    $("#num-questions").text(numQuestions);

    //add listener for the start game button
    $("#start-button").on("click", function() {
        console.log("start");
        //show all the container boxes on screen
        $(".box").show();
        $("#start-button").hide();
        //generate the first question and answers
        newQuestion();
    });

    //add event listener to the answer elements
    // $("#answers *").on("click", function() {
    $(document).on("click", ".possible-answer", function() {
        if (timeRemaining) {
            console.log("user clicked on " + $(this).attr("data-value"));
            if (answerChosen) {
                $("#message-area").text("You can't change your answer");
                console.log("answer already Chosen ");
                //don't do anything with the click
                return;
            }
            //console.log("set AnswerChosen to true");
            answerChosen = true;
            var userPick = $(this).attr("data-value");
            console.log("User clicked: " + userPick);

            //check if user picked correct answer
            if (userPick == selectedCountry.Capital) {
                //user is correct
                correct++;
                $("#correct-number").text(correct);
                $("#message-area").text("You are correct");
                showCorrectAnswer(true);

            } else {
                //wrong answer picked
                showCorrectAnswer(false, userPick);
                increaseWrongCount(true); //increase the number of wrong count with true parament to indicate wrong answer picked (not time running out)
            }
        } else {
            //time up
            showCorrectAnswer(false);
        }

        showNextQuestionTimer();


    }) //end answer click listener

    $("#restart-button").on("click", function() {
        //reset all the game variables
        pickedCountries = []; //indexes of the countries previously selected in this game
        selectedCountry = ""; //object holding the selected country object
        correct = 0;
        $("#correct-number").text(correct);
        wrong = 0;
        $("#wrong-number").text(wrong);
        pickedAnswers = []; //empty the list of previously picked anwers
        $(".box").show();
        $("#restart-button").hide();
        console.log("empying country names");
        $("#countries-visited").empty();
        newQuestion();
    }) //end answer click listener 


}); //end document ready listener


function increaseWrongCount(wrongAnswer) {
    //user is wrong
    wrong++;
    $("#wrong-number").text(wrong);
    if (wrongAnswer) {
        $("#message-area").text("Nope.");
    } else {
        $("#message-area").text("Too late.");

    }


}

function resetGlobals() {
    correctAnswers = 0;
    wrongAnswers = 0;
}

function newQuestion() {

    console.log("------> NEW Question");
    // if (pickedCountries[0]) {
    //     console.log("-> last country: " + pickedCountries[pickedCountries.length-1]);
    // }
    $("#message-area").empty();
    if (pickedCountries.length == numQuestions) {
        //end game and show reset button.
        console.log("Questions finished");
        $(".question-box").hide();
        $(".answer-box").hide();
        $("#restart-button").show();

        return;
    }

    selectedCountry = "";
    pickedAnswers = [];
    //console.log("-->set AnswerChosen to false");
    answerChosen = false;

    //hide the next question message timer
    $("#next-question-message").hide(); //show the next question timer

    //this prevents an infinite loop in the unlikely event that all questions have been exhausted (not going to happen unless maxQuestions get set to greater than the number of questions available)
    if (pickedCountries.length == (countries.length)) {
        console.log("Countries all picked");
        return;
    }


    //fill countries array with country objects
    selectRandomCountry();
    selectAlternateAnswers();
    displayQuestion();
    displayPossibleAnswers();

    //reset the timer when there is a new question

    if (!timeRemaining) {
        timer.reset();
        timeRemaining = true;
    }

    console.log("Starting setInterval() timer.count: " + timer.time);
    intervalId = setInterval(timer.count, 1000);
}


//select a country object for a question
function selectRandomCountry() {
    //generate a new random number to select a country from array
    //check that it hasn't been picked previously
    // do this until we have picked one

    do {
        randomCountry = countries[Math.floor(Math.random() * countries.length)];
        var randomCapital = randomCountry.Capital;

        //console.log("country not already picked: " + !pickedCountries.includes(randomCountry.name))
        if (!pickedCountries.includes(randomCountry.Country)) {
            selectedCountry = randomCountry; //set the currently selected country object
            pickedCountries.push(randomCountry.Country); //add it to the list of selected countries (so question doesn't get repeated)
            pickedAnswers.push(randomCapital); //add the correct answer to the answer array
        }

    }
    //console.log("in while loop for question capital: " + randomCapital);
    //do until the selectedCountry has a value;
    while (!selectedCountry);
    console.log("Picked a Country: " + selectedCountry.Country);
}


////pick random country capitals from same continent up to 1 less than the max number of answers
function selectAlternateAnswers() {
    //generate a new random number to select a country from array
    //check that it hasn't already been picked and it isn't the real answer (to prevent duplication)
    // do this until we have enough possible anwers
    do {
        randomCountryIndex = Math.floor(Math.random() * countries.length);
        var randomCapital = countries[randomCountryIndex].Capital;
        if (!pickedAnswers.includes(randomCapital) && randomCapital != selectedCountry.Capital) {
            //        console.log("found new answer: " + randomCapital)
            pickedAnswers.push(randomCapital);
        }
        //console.log("in while loop for answers: " + randomCapital);
    }
    while (pickedAnswers.length < numPossibleAnswers);

}


function displayQuestion() {
    $("#question-area").html(
        $("<div/>")
        .attr("id", "question")
        .addClass("question-text")
        .text(questionStart + selectedCountry.Country + questionEnd)
    );
}

function displayPossibleAnswers() {
    //empty the old answers
    $("#answers").empty();
    //put new answers inside the answers <div>
    pickedAnswers.forEach(function(element, index) {
        $("#answers").append(
            $("<li/>")
            .attr({ "id": element, "data-value": element })
            .addClass("possible-answer")
            .text(element)
        );
    })
}

function showCorrectAnswer(userCorrect, userPick) {
    timeRemaining = false;
    timer.stop();

    // intervalDelayId = setInterval(timer.count, 1000); //delayTimer

    //empty the old answers
    $("#answers").empty();
    pickedAnswers.forEach(function(element, index) {
        //apply different styling to correct answer
        console.log("element: " + element)
        console.log("Capital: " + selectedCountry.Capital)
        if (element == selectedCountry.Capital) {
            $("#answers").append(
                $("<li/>")
                .attr({ "id": element, "data-value": element })
                .addClass("correct-answer")
                .text(element)
            );
        }
        //apply different styling to user incorrect answer
        else if (element == userPick) {
            $("#answers").append(
                $("<li/>")
                .attr({ "id": element, "data-value": element })
                .addClass("incorrect-answer")
                .text(element)
            );
        }
        //dont apply any styling to these answers
        else {
            $("#answers").append(
                $("<li/>")
                .attr({ "id": element, "data-value": element })
                .text(element)
            );
        }



    })
    //add to the visible list of "countries visited"
    if (userCorrect) {
        //display a tick after to the country
        $("#countries-visited").append(
            $("<li/>")
            .html(tickIcon + " " + selectedCountry.Capital + ", " + selectedCountry.Country).addClass("country-name"));
    } else {
        //dislay a cross after the country name
        $("#countries-visited").append(
            $("<li/>")
            .html(crossIcon + " " + selectedCountry.Capital + ", " + selectedCountry.Country).addClass("country-name"));
    }

    //move the background google map to display the correct capital city
    showGoogleMaps(selectedCountry.Lat, selectedCountry.Long);

    //start the next question after a delay
    console.log("New timeout starter");
    setTimeout(function() {
        // delayTimer.start();
        newQuestion();
    }, timeBetweenQuestions * 1000);

}


function showNextQuestionTimer() {
    $("#next-question-message").show(); //show the next question timer
    $("#next-question-message").text("Get ready for the next question");
}



/*
 * Google Maps Code with my (William Brooks) chosen styles
 */

function showGoogleMaps(lat, long) {
    // The latitude and longitude of country
    var latLng = new google.maps.LatLng(lat, long);

    var mapOptions = {
        zoom: 4, // initialize zoom level - the max value is 21
        disableDefaultUI: true,

        center: latLng,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#523735"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#c9b2a6"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#dcd2be"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ae9e90"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#93817c"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#a5b076"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#447530"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fdfcf8"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f8c967"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#e9bc62"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e98d58"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#db8555"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#806b63"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8f7d77"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b9d3c2"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#92998d"
                }]
            }
        ]
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}











//comments