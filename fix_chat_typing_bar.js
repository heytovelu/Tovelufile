const fs = require("fs");

let appHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");

// Remove the input area from the scrollable chat pane
appHtml = appHtml.replace(
  /<!-- Sticky Input Area -->\s*<div class="sticky bottom-0[\s\S]*?<\/div>\s*<\/div>\s*<\/div><\/div><\/div>/,
  '</div></div></div>'
);

// Add a fixed floating composer directly above the bottom navigation (fixed bottom-16, inset-x-0)
const fixedComposerHtml = `
  <!-- ==================== FIXED FLOATING CHAT COMPOSER (NEVER SCROLLS) ==================== -->
  <div id="fixed-chat-composer" class="fixed bottom-16 max-w-[440px] w-full z-40 px-4 py-2 bg-surface/90 backdrop-blur-md border-t border-surface-container/60 shadow-[0_-2px_12px_rgba(0,0,0,0.04)]" style="display: none;">
    <div class="bg-surface-container-lowest border border-outline-variant/40 rounded-full p-1.5 pl-4 flex items-center shadow-md gap-2">
      <span class="material-symbols-outlined text-outline text-[20px] shrink-0">add_circle</span>
      <input id="fixed-chat-input" class="flex-1 bg-transparent border-none outline-none font-body-md text-[14px] text-on-surface placeholder:text-outline w-full min-w-0" placeholder="Ask Tovelu Intelligence..." type="text" autocomplete="off" onkeydown="if(event.key==='Enter'){sendAppChatMessage(); event.preventDefault();}" />
      <button onclick="sendAppChatMessage()" class="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-colors shadow-sm cursor-pointer">
        <span class="material-symbols-outlined text-on-primary text-[18px]">arrow_upward</span>
      </button>
    </div>
  </div>
`;

// Insert the fixed composer right above </nav>
appHtml = appHtml.replace('</nav>', '</nav>\n' + fixedComposerHtml);

// Update switchMainTab logic to show/hide fixed-chat-composer when CHAT tab is active
appHtml = appHtml.replace(
  "if (targetPane) targetPane.classList.add('active');",
  `if (targetPane) targetPane.classList.add('active');
      const fixedComposer = document.getElementById('fixed-chat-composer');
      if (fixedComposer) {
        fixedComposer.style.display = (tabId === 'chat') ? 'block' : 'none';
      }`
);

// In the chat pane, add bottom padding so the last message is never hidden behind the fixed composer
appHtml = appHtml.replace(
  '<div id="pane-chat" class="tab-view">',
  '<div id="pane-chat" class="tab-view pb-16">'
);

// Update sendAppChatMessage to read from #fixed-chat-input
appHtml = appHtml.replace(
  "const input = document.querySelector('#pane-chat input');",
  "const input = document.getElementById('fixed-chat-input') || document.querySelector('#pane-chat input');"
);

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", appHtml, "utf8");
console.log("Fixed typing bar: now permanently fixed at bottom above the nav bar!");
