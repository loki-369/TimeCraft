const timetable = document.getElementById("timetable");

const startHour = 9;
const endHour = 17;

function createGrid() {
  for (let hour = startHour; hour < endHour; hour++) {
    const timeLabel = document.createElement("div");
    timeLabel.className = "header";
    timeLabel.textContent = `${hour}:00`;
    timetable.appendChild(timeLabel);

    for (let day = 0; day < 5; day++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.day = day;
      cell.dataset.hour = hour;
      timetable.appendChild(cell);
    }
  }
}

function addEntry() {
  const subject = document.getElementById("subject").value.trim();
  const day = parseInt(document.getElementById("day").value);
  const startTime = parseInt(document.getElementById("startTime").value.split(":")[0]);
  const endTime = parseInt(document.getElementById("endTime").value.split(":")[0]);

  if (!subject || isNaN(startTime) || isNaN(endTime) || startTime >= endTime) {
    alert("Please enter valid data.");
    return;
  }

  for (let h = startTime; h < endTime; h++) {
    const cell = document.querySelector(`.cell[data-day='${day}'][data-hour='${h}']`);
    if (cell) {
      cell.textContent = subject;
      cell.style.background = "#cce5ff";
    }
  }
}

function downloadPDF() {
  html2pdf().from(document.getElementById("timetable")).save("timetable.pdf");
}

createGrid();
