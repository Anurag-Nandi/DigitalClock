setInterval(() => {
    let dateElement = document.getElementById("date");
    let dayElement = document.getElementById("day");
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    let currentTime = new Date();

    // Format the date as "Month Day, Year"
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentTime.toLocaleDateString('en-US', options);

    dayElement.textContent = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
    hrs.textContent = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.textContent = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.textContent = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
