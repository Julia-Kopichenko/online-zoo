function limitKeypress(event, value, maxLength) {
  if (value != undefined && value.length >= maxLength) {
    event.preventDefault();
  }
}
