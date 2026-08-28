const fs = require("fs");

let appHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");

// 1. Replace Health Header to include the "Choose" button
const oldHealthHeader = `<div class="flex items-center justify-between px-unit">
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Clinical Telemetry</h1>
<div class="bg-primary-container px-3 py-1 rounded-full shadow-sm">
<span class="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">Week 3</span>
</div>
</div>`;

const newHealthHeader = `<div class="flex items-center justify-between px-unit">
  <div>
    <h1 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">Clinical Telemetry</h1>
    <div class="text-[12px] text-on-surface-variant font-medium mt-0.5">Active Cycle: <span id="current-active-week-label" class="text-primary font-bold">August 2026 • Week 3</span></div>
  </div>
  <button onclick="openChooseWeekDrawer()" class="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full border border-primary/20 transition-colors shadow-sm cursor-pointer">
    <span class="material-symbols-outlined text-[16px]">calendar_month</span>
    <span class="font-label-sm text-[11px] uppercase tracking-wider font-bold">Choose</span>
  </button>
</div>`;

appHtml = appHtml.replace(oldHealthHeader, newHealthHeader);

// 2. Add the Side Drawer markup before closing body/scripts
const chooseDrawerMarkup = `
<!-- ==================== SIDE DRAWER: CHOOSE WEEK UNDER MONTH ==================== -->
<div id="choose-week-drawer-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 opacity-0 pointer-events-none flex justify-end" onclick="if(event.target===this) closeChooseWeekDrawer()">
  <div id="choose-week-drawer" class="w-full max-w-[340px] h-full bg-surface shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-out border-l border-surface-container">
    
    <!-- Drawer Header -->
    <div class="p-5 border-b border-surface-container flex items-center justify-between bg-surface-container-lowest">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span class="material-symbols-outlined text-[20px]">date_range</span>
        </div>
        <div>
          <h3 class="font-headline-lg-mobile text-[16px] font-bold text-on-surface">Choose Week</h3>
          <p class="text-[11px] text-on-surface-variant">Select historical timeline</p>
        </div>
      </div>
      <button onclick="closeChooseWeekDrawer()" class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">✕</button>
    </div>

    <!-- Month Selector Dropdown -->
    <div class="p-4 border-b border-surface-container bg-surface-container-low/50">
      <label class="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant font-bold block mb-1.5">Selected Month:</label>
      <div class="relative">
        <select id="drawer-month-select" class="w-full p-2.5 bg-surface-container-lowest border border-outline-variant/30 rounded-lg text-on-surface font-body-md text-[13px] font-semibold appearance-none outline-none focus:border-primary pr-8" onchange="renderDrawerWeeks(this.value)">
          <option value="aug_2026" selected>August 2026 (Active)</option>
          <option value="jul_2026">July 2026 (Archive)</option>
          <option value="jun_2026">June 2026 (Baseline)</option>
        </select>
        <span class="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
      </div>
    </div>

    <!-- Weeks List (Under Selected Month) -->
    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5" id="drawer-weeks-list">
      <!-- Dynamically Rendered Weeks -->
    </div>

    <!-- Drawer Footer -->
    <div class="p-4 border-t border-surface-container bg-surface-container-lowest">
      <button onclick="closeChooseWeekDrawer()" class="w-full py-3 bg-primary text-on-primary font-label-sm text-[12px] uppercase tracking-wider font-bold rounded-xl shadow-md hover:bg-primary/90 transition-colors">
        Apply Selected Timeline
      </button>
    </div>

  </div>
</div>
`;

appHtml = appHtml.replace('</body>', chooseDrawerMarkup + '\n</body>');

// 3. Add the Drawer JavaScript functions
const drawerJsFunctions = `
  // Choose Week Side Drawer Logic
  const timelineWeeksData = {
    'aug_2026': [
      { id: 'w1', name: 'Week 1 (01 Aug - 07 Aug)', status: 'Optimal Reversal', score: '94% Adherence', active: false },
      { id: 'w2', name: 'Week 2 (08 Aug - 14 Aug)', status: 'Metabolic Adaptation', score: '89% Adherence', active: false },
      { id: 'w3', name: 'Week 3 (15 Aug - 21 Aug)', status: 'Active Calibration', score: '91% Adherence', active: true },
      { id: 'w4', name: 'Week 4 (22 Aug - 28 Aug)', status: 'Upcoming Cycle', score: 'Projected', active: false }
    ],
    'jul_2026': [
      { id: 'j1', name: 'Week 1 (01 Jul - 07 Jul)', status: 'Insulin Detox', score: '96% Adherence', active: false },
      { id: 'j2', name: 'Week 2 (08 Jul - 14 Jul)', status: 'Fat Adaptation', score: '92% Adherence', active: false },
      { id: 'j3', name: 'Week 3 (15 Jul - 21 Jul)', status: 'Autophagy Reset', score: '88% Adherence', active: false },
      { id: 'j4', name: 'Week 4 (22 Jul - 28 Jul)', status: 'Cellular Restoration', score: '95% Adherence', active: false }
    ],
    'jun_2026': [
      { id: 'm1', name: 'Week 1 (Baseline Onboarding)', status: 'Biomarkers Intake', score: '100% Calibrated', active: false },
      { id: 'm2', name: 'Week 2 (Phase 1 Induction)', status: 'Circadian Sync', score: '90% Adherence', active: false }
    ]
  };

  let activeChosenMonth = 'aug_2026';
  let activeChosenWeekId = 'w3';

  function openChooseWeekDrawer() {
    const overlay = document.getElementById('choose-week-drawer-overlay');
    const drawer = document.getElementById('choose-week-drawer');
    if (!overlay || !drawer) return;

    renderDrawerWeeks(activeChosenMonth);
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
  }

  function closeChooseWeekDrawer() {
    const overlay = document.getElementById('choose-week-drawer-overlay');
    const drawer = document.getElementById('choose-week-drawer');
    if (!overlay || !drawer) return;

    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
  }

  function renderDrawerWeeks(monthKey) {
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
  }

  function selectTimelineWeek(monthKey, weekId, weekName) {
    activeChosenWeekId = weekId;
    renderDrawerWeeks(monthKey);

    const label = document.getElementById('current-active-week-label');
    if (label) {
      const monthNames = { 'aug_2026': 'August 2026', 'jul_2026': 'July 2026', 'jun_2026': 'June 2026' };
      label.innerText = (monthNames[monthKey] || 'August 2026') + ' • ' + weekName.split(' ')[0] + ' ' + weekName.split(' ')[1];
    }
  }
`;

appHtml = appHtml.replace('</script>', drawerJsFunctions + '\n</script>');

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", appHtml, "utf8");
console.log("Successfully added CHOOSE button and Side Drawer under HEALTH section!");
