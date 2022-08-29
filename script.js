function setup() {
	chatbot.loadFiles(['bot.rive']);
}

window.onload = setup;
window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));