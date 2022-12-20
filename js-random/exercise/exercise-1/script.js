function getRandomMonth() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const random = Math.floor(Math.random() * months.length);

    document.getElementById("demo").innerHTML = months[random];
}