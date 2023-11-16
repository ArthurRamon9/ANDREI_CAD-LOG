async function getChatbotResponse(userMessage) {
    try {
        const apiKey = "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";
        const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
        
        const response = await axios.post(
            endpoint,
            {
                prompt: userMessage,
                max_tokens: 100
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );

        const chatbotResponse = response.data.choices[0].text.trim();
        addMessageToLog(chatbotResponse, 'chatbot');
        sendButton.disabled = false;
        sendButton.classList.remove('loading');
    } catch (error) {
        console.error("Erro na solicitação: " + error);
        sendButton.disabled = false;
        sendButton.classList.remove('loading');
    }
}

function handleUserInput() {
    var userInput = document.getElementById('user-input');
    var userMessage = userInput.value;
    addMessageToLog(userMessage, 'user');
    userInput.value = '';
    sendButton.disabled = true;
    sendButton.classList.add('loading');
    getChatbotResponse(userMessage);
}

var sendButton = document.getElementById('send-btn');
sendButton.addEventListener('click', handleUserInput);

var userInput = document.getElementById('user-input');
userInput.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        handleUserInput();
    }
});
