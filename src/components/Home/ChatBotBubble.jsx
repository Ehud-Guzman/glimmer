// components/Home/ChatBotBubble.jsx
import { motion } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiChevronRight } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

/* =======================
   ENHANCED BOT BRAIN
======================= */

// Enhanced intent detection
const detectIntent = (text) => {
  const lower = text.toLowerCase();
  
  const SERVICES = {
    web: ["website", "site", "landing", "portfolio", "web app", "frontend", "ui", "responsive"],
    ecommerce: ["shop", "store", "ecommerce", "payments", "mpesa", "stripe", "sell", "products"],
    branding: ["logo", "branding", "identity", "design", "visual", "graphic"],
    maintenance: ["fix", "update", "speed", "seo", "bug", "broken", "hosting", "optimize"],
    pricing: ["price", "cost", "quote", "budget", "how much", "estimate"],
    greeting: ["hi", "hello", "hey", "good morning", "good afternoon"],
    thanks: ["thanks", "thank you", "appreciate"],
    contact: ["contact", "email", "phone", "call", "reach", "number"]
  };

  for (const [intent, words] of Object.entries(SERVICES)) {
    if (words.some((w) => lower.includes(w))) return intent;
  }
  return "general";
};

const extractDetails = (text, intent) => {
  const lower = text.toLowerCase();
  const details = {};
  
  if (lower.includes("business") || lower.includes("company") || lower.includes("corporate")) {
    details.type = "business";
  } else if (lower.includes("personal") || lower.includes("portfolio") || lower.includes("blog")) {
    details.type = "personal";
  }
  
  if (lower.includes("physical") || lower.includes("product") || lower.includes("item")) {
    details.productType = "physical";
  } else if (lower.includes("digital") || lower.includes("download") || lower.includes("ebook")) {
    details.productType = "digital";
  } else if (lower.includes("service") || lower.includes("consulting") || lower.includes("booking")) {
    details.productType = "service";
  }
  
  if (lower.includes("asap") || lower.includes("urgent") || lower.includes("now")) {
    details.timeline = "ASAP";
  } else if (lower.includes("week")) {
    details.timeline = "Within weeks";
  } else if (lower.includes("month")) {
    details.timeline = "Within months";
  }
  
  const emailMatch = lower.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) details.email = emailMatch[0];
  
  return details;
};

const getSmartResponse = (intent, conversation, userInput = "") => {
  const { stage, collected } = conversation;
  
  if (intent === "greeting") {
    return "👋 Need a website, ecommerce store, or fixes?";
  }
  
  if (intent === "thanks") {
    return "You're welcome! 😊";
  }
  
  switch(stage) {
    case 0:
      switch(intent) {
        case "web": return "Websites are our core lane. Is this for a business or a personal brand?";
        case "ecommerce": return "Nice. Are you selling physical products, digital goods, or services?";
        case "branding": return "Branding sets the tone. Starting from scratch or redesigning?";
        case "maintenance": return "Got it. Is the site already live or currently broken/slow?";
        case "pricing": return "Fair question. Want a rough range or a proper quote?";
        case "contact": return "Sure! What's your email or phone?";
        default: return "What do you need help with: website, ecommerce, branding, or fixes?";
      }
    
    case 1:
      if (!collected.type && intent === "web") {
        return "Is this for a business or personal use?";
      }
      if (!collected.productType && intent === "ecommerce") {
        return "What type of products: physical, digital, or services?";
      }
      if (!collected.timeline) {
        return "What's your timeline for this project?";
      }
      return "Almost there! How should we contact you?";
    
    case 2:
      if (collected.email) {
        return "🎉 Perfect! We'll email you within 24 hours. Thank you! 🚀";
      }
      return "What's your email or phone number?";
    
    default:
      return "How else can I help you?";
  }
};

const getNextStage = (currentStage, intent, details) => {
  if (currentStage === 0 && intent !== "greeting" && intent !== "general") {
    return 1;
  }
  if (currentStage === 1 && (details.type || details.productType)) {
    return 2;
  }
  if (currentStage === 2 && details.timeline) {
    return 3;
  }
  if (currentStage === 3 && details.email) {
    return 4;
  }
  return currentStage;
};

/* =======================
   QUICK REPLY COMPONENT
======================= */
const QuickReplies = ({ stage, intent, onSelect }) => {
  const getReplies = () => {
    if (stage === 0) {
      return ["Website", "E-commerce", "Branding", "Maintenance", "Pricing"];
    }
    if (stage === 1) {
      switch(intent) {
        case "web": return ["Business", "Personal"];
        case "ecommerce": return ["Physical", "Digital", "Services"];
        case "branding": return ["From scratch", "Redesign"];
        default: return [];
      }
    }
    if (stage === 2) {
      return ["ASAP", "2 weeks", "1 month", "Flexible"];
    }
    if (stage === 3) {
      return ["Email me", "Call me"];
    }
    return [];
  };
  
  const replies = getReplies();
  
  if (replies.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {replies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSelect(reply)}
          className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-full transition flex items-center gap-1"
        >
          {reply} <FiChevronRight size={10} />
        </button>
      ))}
    </div>
  );
};

/* =======================
   MAIN COMPONENT - RESPONSIVE
======================= */
const ChatBotBubble = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversation, setConversation] = useState({
    stage: 0,
    collected: {},
    intent: null,
    messageCount: 0
  });
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
      
      if (messages.length === 0) {
        setTimeout(() => {
          const welcomeMsg = {
            text: "👋 Need a website, ecommerce store, or fixes?",
            sender: "ai",
            time: getTime()
          };
          setMessages([welcomeMsg]);
        }, 500);
      }
    }
  }, [open]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
    setTimeout(() => sendMessage(), 100);
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = {
      text,
      sender: "user",
      time: getTime()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const intent = detectIntent(text);
      const details = extractDetails(text, intent);
      
      setConversation(prev => {
        const newStage = getNextStage(prev.stage, intent, details);
        const newIntent = prev.intent || (intent !== "greeting" && intent !== "general" ? intent : null);
        
        return {
          stage: newStage,
          collected: { ...prev.collected, ...details },
          intent: newIntent,
          messageCount: prev.messageCount + 1
        };
      });

      const response = getSmartResponse(intent, {
        stage: conversation.stage,
        collected: { ...conversation.collected, ...details }
      }, text);

      const aiMsg = {
        text: response,
        sender: "ai",
        time: getTime()
      };

      setIsTyping(false);
      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setConversation({
      stage: 0,
      collected: {},
      intent: null,
      messageCount: 0
    });
    
    setTimeout(() => {
      const welcomeMsg = {
        text: "👋 Need a website, ecommerce store, or fixes?",
        sender: "ai",
        time: getTime()
      };
      setMessages([welcomeMsg]);
    }, 300);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-2 z-50">
      {open ? (
        <motion.div
          className="glass bg-[var(--current-bg)] w-[calc(100vw-2rem)] sm:w-80 max-w-sm rounded-2xl shadow-xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {/* Header */}
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <h3 className="font-medium text-sm sm:text-base">Web Services Assistant</h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={resetChat}
                className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition"
                title="New chat"
              >
                New
              </button>
              <button onClick={() => setOpen(false)}>
                <FiX />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-sm opacity-70 text-center mt-20">
                👋 Need a website, ecommerce store, or fixes?
              </p>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`mb-3 ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${
                        msg.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-white/10 text-orange"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className="text-xs opacity-50 mt-1">{msg.time}</div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-center space-x-1 mb-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300" />
                  </div>
                )}
              </>
            )}
            
            {!isTyping && messages.length > 0 && conversation.stage < 4 && (
              <QuickReplies 
                stage={conversation.stage}
                intent={conversation.intent}
                onSelect={handleQuickReply}
              />
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            <div className="flex">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 px-3 py-2 rounded-l bg-white/10 text-sm text-orange outline-none"
                placeholder="Type your request..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="px-4 py-2 bg-primary text-black rounded-r hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FiSend size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          className="bg-primary w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition relative"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiMessageSquare size={20} className="sm:w-6 sm:h-6" />
          {conversation.messageCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {conversation.messageCount}
            </span>
          )}
        </motion.button>
      )}
    </div>
  );
};

export default ChatBotBubble;