const fs = require("fs");

let appHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");

// Replace the fixed composer container with generous spacing above, below, and inside
const oldComposer = `<div id="fixed-chat-composer" class="fixed bottom-16 max-w-[440px] w-full z-40 px-4 py-2 bg-surface/90 backdrop-blur-md border-t border-surface-container/60 shadow-[0_-2px_12px_rgba(0,0,0,0.04)]" style="display: none;">
    <div class="bg-surface-container-lowest border border-outline-variant/40 rounded-full p-1.5 pl-4 flex items-center shadow-md gap-2">
      <span class="material-symbols-outlined text-outline text-[20px] shrink-0">add_circle</span>
      <input id="fixed-chat-input" class="flex-1 bg-transparent border-none outline-none font-body-md text-[14px] text-on-surface placeholder:text-outline w-full min-w-0" placeholder="Ask Tovelu Intelligence..." type="text" autocomplete="off" onkeydown="if(event.key==='Enter'){sendAppChatMessage(); event.preventDefault();}" />
      <button onclick="sendAppChatMessage()" class="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-colors shadow-sm cursor-pointer">
        <span class="material-symbols-outlined text-on-primary text-[18px]">arrow_upward</span>
      </button>
    </div>
  </div>`;

const newComposer = `<div id="fixed-chat-composer" class="fixed bottom-16 max-w-[440px] w-full z-40 px-4 pt-3 pb-3.5 bg-surface/95 backdrop-blur-lg border-t border-surface-container/70 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]" style="display: none;">
    <div class="bg-surface-container-lowest border border-outline-variant/40 rounded-full p-2 pl-4 flex items-center shadow-sm gap-2.5">
      <span class="material-symbols-outlined text-outline text-[22px] shrink-0">add_circle</span>
      <input id="fixed-chat-input" class="flex-1 bg-transparent border-none outline-none font-body-md text-[14px] text-on-surface placeholder:text-outline w-full min-w-0 py-1" placeholder="Ask Tovelu Intelligence..." type="text" autocomplete="off" onkeydown="if(event.key==='Enter'){sendAppChatMessage(); event.preventDefault();}" />
      <button onclick="sendAppChatMessage()" class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary/90 transition-colors shadow-sm cursor-pointer">
        <span class="material-symbols-outlined text-on-primary text-[20px]">arrow_upward</span>
      </button>
    </div>
  </div>`;

appHtml = appHtml.replace(oldComposer, newComposer);

// Increase bottom padding in the chat container so messages scroll comfortably above the larger spacing
appHtml = appHtml.replace(
  '<div id="pane-chat" class="tab-view pb-16">',
  '<div id="pane-chat" class="tab-view pb-24">'
);

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", appHtml, "utf8");
console.log("Updated typing bar with generous above and below spacing!");
