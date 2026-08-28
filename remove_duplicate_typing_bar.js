const fs = require("fs");

let appHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");

// The duplicate sticky bar in #pane-chat:
const oldStickyInput = `<!-- Sticky Input Area -->
<div class="sticky bottom-0 left-0 right-0 pt-4 pb-2 bg-surface">
<div class="bg-surface-container-lowest border border-surface-variant rounded-full p-2 pl-4 flex items-center shadow-lg shadow-surface-variant/20 gap-2">
<span class="material-symbols-outlined text-outline shrink-0">add_circle</span>
<input class="flex-1 bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-outline w-full min-w-0" placeholder="Ask Tovelu Intelligence..." type="text"/>
<button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-colors shadow-sm">
<span class="material-symbols-outlined text-on-primary text-[20px]">arrow_upward</span>
</button>
</div>
</div>`;

appHtml = appHtml.replace(oldStickyInput, "");

// Also update build_stitch_app.js so future builds won't re-introduce it
let buildScript = fs.readFileSync("/media/nikita/New Volume/Tovelufile/build_stitch_app.js", "utf8");
buildScript = buildScript.replace(
  /<!-- Sticky Input Area -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
  "</div>"
);
fs.writeFileSync("/media/nikita/New Volume/Tovelufile/build_stitch_app.js", buildScript, "utf8");

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", appHtml, "utf8");
console.log("Successfully removed duplicate sticky typing bar! Only one fixed bar remains.");
