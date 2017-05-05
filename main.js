var fs = require('fs');
var delim = '\n';
var countries = [
    {
        name: 'USA',
        population: '350 million',
        states: ['New York', 'Virginia', 'California', 'Florida', 'Hawaii'],
        best_city: {
            name: 'Los Angeles',
            population: '4 million'
        }
    },
    {
        name: 'Mexico',
        population: '1.4 billion',
        states: ['Durango', 'Puebla', 'Guerrero', 'Quintana Roo'],
        best_city: {
            name: 'Cancun',
            population: '700,000'
        }
    }
];

data = delim;

countries.forEach(function(country) {
    data += "Name: " + country['name'] + delim;
    data += "Population: " + country['population'] + delim;
    data += "Best States: " + country['states'].join(', ') + delim;
    data += "Top State Count: " + country['states'].length + delim;
    data += "Best City: " + country['best_city']['name'] + delim;
    data += country['best_city']['name'] + " Population: " + country['best_city']['population'];
    data += delim + delim
});

fs.writeFile("log.txt", data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Done.");
});
