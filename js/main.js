// Chatbot Functionality
document.querySelector('#chatbot-button').addEventListener('click', () => {
    const chatbot = document.querySelector('#chatbot');
    chatbot.classList.toggle('hidden'); // Show or hide the chatbot
});

document.querySelector('#send-button').addEventListener('click', () => {
    const userInput = document.querySelector('#user-input');
    const chatLog = document.querySelector('#chatlog');

    if (userInput.value.trim() === '') return;

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput.value}`;
    chatLog.appendChild(userMessage);

    // Generate bot response
    const botMessage = document.createElement('div');
    botMessage.textContent = 'AI Bot: Thanks for your message! AI features coming soon.';
    chatLog.appendChild(botMessage);

    // Clear input field
    userInput.value = '';
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
});
