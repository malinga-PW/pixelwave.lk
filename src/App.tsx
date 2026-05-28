import React, { useState, useEffect, useRef } from 'react';
import './App.css';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Greetings! I am Elena.AI, the digital architect and decision engine for PixelWave. How can I engineer a solution for you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Session ID Management for PostgreSQL Chat Memory
  const getSessionId = () => {
    let sessionId = localStorage.getItem('elena_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('elena_session_id', sessionId);
    }
    return sessionId;
  };

  const sendMessage = async () => {
    const text = inputText.trim();
    if (!text) return;

    // Add user message to UI
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputText('');
    setIsTyping(true);

    try {
      // Connect to your VPS Coolify/Dokploy n8n Webhook
      const response = await fetch('https://n8n.pixelwave.lk/webhook/elena-core', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: getSessionId(),
          command: text
        })
      });

      const data = await response.json();
      setIsTyping(false);
      
      if (data.response) {
        setMessages(prev => [...prev, { sender: 'bot', text: data.response }]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: "System error. Let's try again." }]);
      }
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: "Connection to Master Server lost. Please try again." }]);
      console.error("Webhook Error:", error);
    }
  };

  return (
    <div className="App">
      {/* 
        Me header eka temporary. Aivora theme eke main components (Navbar, Hero Section) 
        add karaddi meka replace karanna. 
      */}
      <header className="App-header">
        <h1>PixelWave AI Solutions</h1>
        <p>Enterprise Automation & Digital Infrastructure</p>
        <button className="consult-btn" onClick={() => setIsOpen(true)}>
          Consult Elena.AI
        </button>
      </header>

      {/* Elena.AI Chat Widget UI */}
      {isOpen && (
        <div className="elena-chat-widget">
          <div className="elena-chat-header">
            <div>🤖 Elena.AI (The Brain)</div>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          
          <div className="elena-chat-body" ref={chatBoxRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.sender}-msg`}>
                {msg.text}
              </div>
            ))}
            {isTyping && <div className="chat-msg bot-msg typing-indicator">Elena is processing...</div>}
          </div>
          
          <div className="elena-chat-footer">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Initiate command..." 
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
