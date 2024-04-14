var aqi = [];

// Define the number of iterations for the for loop
var numIterations = 5; // For example, add 5 more data points

// Use a for loop to iterate and add data to the aqi list
for (var i = 1; i <= numIterations; i++) {
    // Create a new AQI data object
    var newData = {
        address: "Address " + i,
        AQI: Math.floor(Math.random() * 100) // Generate a random AQI value (0-100)
    };

    // Add the new data object to the aqi list
    aqi.push(newData);
}