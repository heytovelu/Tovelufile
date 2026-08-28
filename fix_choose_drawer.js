const fs = require("fs");

let appHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");

// Remove the wrongly placed code inside the tailwind script tag
appHtml = appHtml.replace(
  /<script src="https:\/\/cdn\.tailwindcss\.com">[\s\S]*?<\/script>\s*<script id="tailwind-config">/,
  '<script src="https://cdn.tailwindcss.com"></script>\n  <script id="tailwind-config">'
);

// Ensure the drawer functions are placed inside the main script tag before closing </script>
const cleanDrawerScript = `
  // Choose Week Side Drawer Logic
  const timelineWeeksData = {
    'aug_2026': [
      { id: 'w1', name: 'Week 1 (01 Aug - 07 Aug)', status: 'Optimal Reversal', score: '94% Adherence' },
      { id: 'w2', name: 'Week 2 (08 Aug - 14 Aug)', status: 'Metabolic Adaptation', score: '89% Adherence' },
      { id: 'w3', name: 'Week 3 (15 Aug - 21 Aug)', status: 'Active Calibration', score: '91% Adherence' },
      { id: 'w4', name: 'Week 4 (22 Aug - 28 Aug)', status: 'Upcoming Cycle', score: 'Projected' }
    ],
    'jul_2026': [
      { id: 'j1', name: 'Week 1 (01 Jul - 07 Jul)', status: 'Insulin Detox', score: '96% Adherence' },
      { id: 'j2', name: 'Week 2 (08 Jul - 14 Jul)', status: 'Fat Adaptation', score: '92% Adherence' },
      { id: 'j3', name: 'Week 3 (15 Jul - 21 Jul)', status: 'Autophagy Reset', score: '88% Adherence' },
      { id: 'j4', name: 'Week 4 (22 Jul - 28 Jul)', status: 'Cellular Restoration', score: '95% Adherence' }
    ],
    'jun_2026': [
      { id: 'm1', name: 'Week 1 (Baseline Onboarding)', status: 'Biomarkers Intake', score: '100% Calibrated' },
      { id: 'm2', name: 'Week 2 (Phase 1 Induction)', status: 'Circadian Sync', score: '90% Adherence' }
    ]
  };

  let activeChosenMonth = 'aug_2026';
  let activeChosenWeekId = 'w3';

  window.openChooseWeekDrawer = function() {
    const overlay = document.getElementById('choose-week-drawer-overlay');
    const drawer = document.getElementById('choose-week-drawer');
    if (!overlay || !drawer) return;

    renderDrawerWeeks(activeChosenMonth);
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
  };

  window.closeChooseWeekDrawer = function() {
    const overlay = document.getElementById('choose-week-drawer-overlay');
    const drawer = document.getElementById('choose-week-drawer');
    if (!overlay || !drawer) return;

    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
  };

  window.renderDrawerWeeks = function(monthKey) {
    activeChosenMonth = monthKey;
    const container = document.getElementById('drawer-weeks-list');
    if (!container) return;

    const weeks = timelineWeeksData[monthKey] || [];
    container.innerHTML = weeks.map(w => {
      const isSelected = (w.id === activeChosenWeekId);
      return \`
        <div onclick="selectTimelineWeek('\${monthKey}', '\${w.id}', '\${w.name}')" class="p-3 rounded-xl border transition-all cursor-pointer \${isSelected ? 'bg-primary/10 border-primary shadow-sm' : 'bg-surface-container-lowest border-surface-container hover:bg-surface-container-low'} flex items-center justify-between">
          <div class="flex flex-col">
            <span class="font-body-md text-[13.5px] font-semibold \${isSelected ? 'text-primary' : 'text-on-surface'}">\${w.name}</span>
            <span class="font-label-sm text-[11px] text-on-surface-variant mt-0.5">\${w.status} • <strong class="\${isSelected ? 'text-primary font-bold' : 'text-optimal-green'}">\${w.score}</strong></span>
          </div>
          <div class="w-6 h-6 rounded-full border \${isSelected ? 'border-primary bg-primary text-white' : 'border-outline-variant/60 bg-surface-container-lowest'} flex items-center justify-center shrink-0">
            \${isSelected ? '<span class="material-symbols-outlined text-[14px]">check</span>' : ''}
          </div>
        </div>
      \`;
    }).join('');
  };

  window.selectTimelineWeek = function(monthKey, weekId, weekName) {
    activeChosenWeekId = weekId;
    renderDrawerWeeks(monthKey);

    const label = document.getElementById('current-active-week-label');
    if (label) {
      const monthNames = { 'aug_2026': 'August 2026', 'jul_2026': 'July 2026', 'jun_2026': 'June 2026' };
      label.innerText = (monthNames[monthKey] || 'August 2026') + ' • ' + weekName.split(' ')[0] + ' ' + weekName.split(' ')[1];
    }
  };
`;

// Remove previous duplicates of drawer script if any, and append cleanly before </script>
if (!appHtml.includes("window.openChooseWeekDrawer")) {
  appHtml = appHtml.replace('</script>\n\n</body>', cleanDrawerScript + '\n</script>\n\n</body>');
}

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", appHtml, "utf8");
console.log("Fixed script position and verified choose drawer logic!");
