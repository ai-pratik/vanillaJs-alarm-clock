// Get current time and update the clock
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    document.getElementById('time').textContent = `${hours % 12}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
}

// Helper function to pad zero for single-digit numbers
function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// Handle setting an alarm
document.getElementById('setAlarm').addEventListener('click', function () {
    const alarmHours = document.getElementById('alarmHours').value;
    const alarmMinutes = document.getElementById('alarmMinutes').value;
    const alarmSeconds = document.getElementById('alarmSeconds').value;
    const ampm = document.getElementById('ampm').value;

    const alarmTime = `${alarmHours}:${padZero(alarmMinutes)}:${padZero(alarmSeconds)} ${ampm}`;
    
    // Add the alarm to the list
    const alarmList = document.getElementById('alarmList');
    const listItem = document.createElement('li');
    listItem.textContent = alarmTime;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    
    listItem.appendChild(deleteButton);
    alarmList.appendChild(listItem);
    
    // Set the alarm to trigger
    setAlarmTrigger(alarmTime);
});

// Handle deleting an alarm
document.getElementById('alarmList').addEventListener('click', function (e) {
    if (e.target && e.target.className === 'delete') {
        e.target.parentElement.remove();
    }
});

// Set the alarm trigger
function setAlarmTrigger(alarmTime) {
    const now = new Date();
    const currentTime = `${now.getHours()}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
    
    if (alarmTime === currentTime) {
        alert('Alarm is triggered!');
    }
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initial update
updateTime();
