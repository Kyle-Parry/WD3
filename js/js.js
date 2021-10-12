window.onload = function () {
  let myTimepicker = document.getElementById("reservation-time");
  myTimepicker.addEventListener("change", function () {
    console.log(`User changed the value to ${myTimepicker.value}`);

    let [hours, minutes] = myTimepicker.value.split(":");

    minutes = Math.ceil(minutes / 15) * 15;
    if (minutes == 0) minutes = "00";
    if (minutes == 60) {
      minutes = "00";
      ++hours % 24;
    }

    let newValue = hours + ":" + minutes;

    console.log(`Rounding value to ${newValue}`);

    myTimepicker.value = newValue;
  });
};
