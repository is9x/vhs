let text = "ANALOG HORROR AT 476MHz — WE BEGIN OUR BROADCAST DAY"
const elements = document.getElementsByClassName("VHSText")

function updateAllText(txt) {
  for (let el of elements) el.innerHTML = txt
}
updateAllText(text)

function textMove() {
  const randomY = (Math.random() * 1.5) + 49.25
  for (let el of elements) el.style.top = `${randomY}%`
}
setInterval(textMove, 50)

function changeText() {
  const newText = document.getElementById("input").value
  updateAllText(newText)
}
