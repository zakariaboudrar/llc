// Chat bot responses
const responses = {
    greeting: [
        "Hello! How can I help you today?",
        "Hi there! Welcome to Clauths LLC. What can I do for you?",
        "Welcome! How may I assist you?"
    ],
    services: [
        "We offer various services including business consulting, financial services, and risk management. Would you like to know more about any specific service?",
        "Our main services are business consulting, financial planning, and risk assessment. Which one interests you?"
    ],
    contact: [
        "You can reach us through our contact form above, or call us at (555) 123-4567.",
        "Feel free to fill out our contact form, and we'll get back to you within 24 hours."
    ],
    default: [
        "I'm not sure I understand. Could you please rephrase that?",
        "Let me connect you with a human representative. Please fill out our contact form above."
    ]
};

// Get random response from array
const getRandomResponse = (type) => {
    const responseArray = responses[type] || responses.default;
    return responseArray[Math.floor(Math.random() * responseArray.length)];
};

// Chat bot elements
const chatBot = document.getElementById('chat-bot');
const chatBotTrigger = document.getElementById('chat-bot-trigger');
const chatToggle = document.getElementById('chat-toggle');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input-field');
const chatSend = document.getElementById('chat-send');

// Toggle chat bot
chatBotTrigger.addEventListener('click', () => {
    chatBot.classList.add('active');
    // Add initial greeting
    if (chatMessages.children.length === 0) {
        addMessage(getRandomResponse('greeting'), 'bot');
    }
});

chatToggle.addEventListener('click', () => {
    chatBot.classList.remove('active');
});

// Send message
const sendMessage = () => {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Process message and get response
        setTimeout(() => {
            let responseType = 'default';
            
            // Simple keyword matching
            if (message.toLowerCase().includes('hello') || 
                message.toLowerCase().includes('hi')) {
                responseType = 'greeting';
            } else if (message.toLowerCase().includes('service')) {
                responseType = 'services';
            } else if (message.toLowerCase().includes('contact') || 
                      message.toLowerCase().includes('reach') ||
                      message.toLowerCase().includes('call')) {
                responseType = 'contact';
            }
            
            addMessage(getRandomResponse(responseType), 'bot');
        }, 1000);
    }
};

// Add message to chat
const addMessage = (text, sender) => {
    const message = document.createElement('div');
    message.classList.add('message', `${sender}-message`);
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
};

// Event listeners
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});