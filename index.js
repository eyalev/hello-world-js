
function helloWorld() {
  return "Hello World"
}

function HelloWorldNPM() {
  return "Hello World!"
}

module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;
