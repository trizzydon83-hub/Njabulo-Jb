<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Njabulo AI Chat | Infinite Chat</title>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'JetBrains Mono', monospace;
      margin: 0;
      background-color: #f0f0f0;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 1rem;
    }
    .status-bar {
      position: fixed;
      top: 0;
      right: 0;
      padding: 0.5rem;
      font-size: 14px;
      display: flex;
      gap: 0.5rem;
    }
    .battery {
      display: flex;
      align-items: center;
    }
    .wifi {
      display: flex;
      align-items: center;
    }
    h1 { 
      text-align: center; 
      margin-bottom: 1rem; 
      color: #007aff; 
      margin-top: 2rem;
    }
    #chatBox {
      width: 100%;
      max-width: 500px;
      background: #e5ddd5;
      border-radius: 20px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-height: 70vh;
      overflow-y: auto;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .msg {
      padding: 10px 16px;
      border-radius: 20px;
      max-width: 75%;
      word-wrap: break-word;
      line-height: 1.4;
      position: relative;
      font-size: 14px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      animation: fadeIn 0.2s ease-out;
    }
    .user {
      background-color: #007aff;
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .bot {
      background-color: #e0e0e0;
      color: black;
      align-self: flex-start;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .sender {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 2px;
      color: #555;
    }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(5px);} to { opacity: 1; transform: translateY(0);} }
    form {
      width: 100%;
      max-width: 500px;
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    input[type="text"] {
      flex: 1;
      padding: 12px 16px;
      border-radius: 20px;
      border: 1px solid #ccc;
      font-size: 14px;
    }
    button {
      background-color: #007aff;
      color: white;
      border: none;
      padding: 12px 16px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      transition: 0.2s;
    }
    button:hover { background-color: #005ecb; }
    @media (max-width: 600px) { form, #chatBox { max-width: 100%; } }
  </style>
</head>
<body>
  <div class="status-bar">
    <div class="wifi">&#128273;</div>
    <div class="battery" id="battery-level"></div>
  </div>
  <h1>Njabulo AI Chat</h1>
  <div id="chatBox"></div>
  <form onsubmit="handleNjabuloAI(event)">
    <input type="text" id="prompt" placeholder="Type a message..." required />
    <button type="submit">Send</button>
  </form>

  <script>
    const chatBox = document.getElementById("chatBox");
    const storageKey = "njabulo_ai_chat_history";
    const batteryLevel = document.getElementById("battery-level");

    // Load conversation history
    let conversationHistory = JSON.parse(localStorage.getItem(storageKey)) || [];
    window.onload = () => {
      conversationHistory.forEach(msg => addMessage(msg.text, msg.sender));
      updateBatteryLevel();
    };

    async function handleNjabuloAI(event) {
      event.preventDefault();
      const input = document.getElementById("prompt");
      const prompt = input.value.trim();
      if (!prompt) return;

      addMessage(prompt, "user");
      saveMessage(prompt, "user");
      conversationHistory.push({ text: prompt, sender: "user" });

      const tempDiv = addMessage("Thinking...", "bot", true);

      try {
        const res = await fetch(`https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(prompt)}`);
        const data = await res.json();
        tempDiv.remove();
        const botMessage = data.response || "No response.";
        addMessage(botMessage, "bot");
        saveMessage(botMessage, "bot");
        conversationHistory.push({ text: botMessage, sender: "bot" });
      } catch {
        tempDiv.remove();
        const errorMsg = "Something went wrong. Try again later.";
        addMessage(errorMsg, "bot");
        saveMessage(errorMsg, "bot");
        conversationHistory.push({ text: errorMsg, sender: "bot" });
      }

      input.value = "";
    }

    function addMessage(text, sender, isTemp=false) {
      const container = document.createElement("div");
      if(sender==="bot"){
        const senderLabel = document.createElement("div");
        senderLabel.className="sender";
        senderLabel.textContent="Njabulo AI";
        container.appendChild(senderLabel);
      }
      const div=document.createElement("div");
      div.className=`msg ${sender}`;
      div.textContent=text;
      if(isTemp) div.style.opacity=0.6;
      container.appendChild(div);
      chatBox.appendChild(container);
      chatBox.scrollTop = chatBox.scrollHeight;
      return container;
    }

    function saveMessage(text,sender){
      const existing = JSON.parse(localStorage.getItem(storageKey)) || [];
      existing.push({ text, sender });
      localStorage.setItem(storageKey, JSON.stringify(existing));
    }

    function updateBatteryLevel() {
      navigator.getBattery().then(battery => {
        batteryLevel.textContent = `${Math.round(battery.level * 100)}%`;
      });
    }
  </script>
</body>
</html>
  
