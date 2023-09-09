function updateDateTime() {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();

    const currentDayOfWeek = daysOfWeek[now.getUTCDay()];
    const currentUTCTime = now.getTime();

    currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} ms`;
}

// Update time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

