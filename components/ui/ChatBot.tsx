"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    role: "bot",
    text: "Hello! I'm the NTK Virtual Assistant. How can I help you today? You can ask about our SAP services, industries we serve, or schedule a consultation.",
  },
];

const quickReplies = [
  "Tell me about your services",
  "Industries you serve",
  "How to contact an expert",
  "Schedule a consultation",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    let botResponse = "Thanks for your message! Our team will follow up shortly. To speak with an SAP specialist immediately, please visit our Contact page.";

    const lower = text.toLowerCase();
    if (lower.includes("service") || lower.includes("solution")) {
      botResponse = "Noshtek offers three core solution areas: Financial Transformation (SAP S/4HANA Finance), SAP Implementation Services, and Integration & Automation. Which area would you like to explore?";
    } else if (lower.includes("industr")) {
      botResponse = "We specialize in three industries: Utilities (SAP IS-U), Telecom (SAP BRIM), and Insurance (SAP FPSL / IFRS 17). Which industry matches your needs?";
    } else if (lower.includes("contact") || lower.includes("expert") || lower.includes("specialist")) {
      botResponse = "You can reach our team at info@noshtek.com or click 'Talk to a Specialist' in the header. We typically respond within 2 business hours.";
    } else if (lower.includes("consultation") || lower.includes("schedule")) {
      botResponse = "To schedule a consultation, please visit our Contact page and fill out the form — or email sales@noshtek.com. We'll match you with the right SAP specialist for your needs.";
    }

    setMessages((prev) => [...prev, userMsg, { role: "bot", text: botResponse }]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#00B8B8] text-white shadow-lg hover:bg-[#009999] transition-all duration-200 flex items-center justify-center animate-pulse-teal"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-100 mega-menu-enter">
          {/* Header */}
          <div className="bg-[#0A1929] px-4 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#00B8B8] flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">NTK Virtual Assistant</p>
              <p className="text-[#00B8B8] text-xs">Typically replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#00B8B8] text-white rounded-br-sm"
                      : "bg-white text-gray-700 shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5 bg-gray-50">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  className="px-2.5 py-1 bg-white border border-[#00B8B8]/30 text-[#007A7A] text-xs rounded-full hover:bg-[#00B8B8]/5 transition-colors"
                  onClick={() => handleSend(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-100 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#00B8B8] focus:border-[#00B8B8]"
            />
            <button
              className="w-9 h-9 bg-[#00B8B8] rounded-lg flex items-center justify-center text-white hover:bg-[#009999] transition-colors flex-shrink-0"
              onClick={() => handleSend(input)}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
