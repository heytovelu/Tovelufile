const fs = require("fs");
const path = require("path");

const stitchDir = "/media/nikita/New Volume/Tovelufile/stitch_app_interface_redesign";
const flowRaw = fs.readFileSync(path.join(stitchDir, "flow_dashboard", "code.html"), "utf8");
const weekRaw = fs.readFileSync(path.join(stitchDir, "weekly_scorecard", "code.html"), "utf8");
const healthRaw = fs.readFileSync(path.join(stitchDir, "health_telemetry", "code.html"), "utf8");
const chatRaw = fs.readFileSync(path.join(stitchDir, "tovelu_intelligence", "code.html"), "utf8");
const youRaw = fs.readFileSync(path.join(stitchDir, "member_profile", "code.html"), "utf8");

function getInnerMain(raw) {
  const m = raw.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return m ? m[1].trim() : "";
}

// Flow Day Inner
let flowDayInner = getInnerMain(flowRaw);
// Week Inner
let weekInner = getInnerMain(weekRaw);
// Health Inner
let healthInner = getInnerMain(healthRaw);
// Chat Inner
let chatInner = getInnerMain(chatRaw);
// You Inner
let youInner = getInnerMain(youRaw);

// Assemble the unified app HTML
const unifiedHtml = `<!DOCTYPE html>
<html lang="en" class="light">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport">
  <title>Tovelu • Clinical Precision OS</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
  
  <!-- Tailwind CSS with Official Stitch Clinical Precision Tokens -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "surface": "#f9f9fc",
            "surface-dim": "#dadadc",
            "surface-bright": "#f9f9fc",
            "surface-container-lowest": "#ffffff",
            "surface-container-low": "#f3f3f6",
            "surface-container": "#eeeef0",
            "surface-container-high": "#e8e8ea",
            "surface-container-highest": "#e2e2e5",
            "on-surface": "#1a1c1e",
            "on-surface-variant": "#424656",
            "inverse-surface": "#2f3133",
            "inverse-on-surface": "#f0f0f3",
            "outline": "#727687",
            "outline-variant": "#c2c6d8",
            "surface-tint": "#0054d6",
            "primary": "#0050cb",
            "on-primary": "#ffffff",
            "primary-container": "#0066ff",
            "on-primary-container": "#f8f7ff",
            "inverse-primary": "#b3c5ff",
            "secondary": "#00677f",
            "on-secondary": "#ffffff",
            "secondary-container": "#00ccf9",
            "on-secondary-container": "#005266",
            "tertiary": "#006732",
            "on-tertiary": "#ffffff",
            "tertiary-container": "#008342",
            "on-tertiary-container": "#e2ffe3",
            "error": "#ba1a1a",
            "on-error": "#ffffff",
            "error-container": "#ffdad6",
            "on-error-container": "#93000a",
            "primary-fixed": "#dae1ff",
            "primary-fixed-dim": "#b3c5ff",
            "on-primary-fixed": "#001849",
            "on-primary-fixed-variant": "#003fa4",
            "secondary-fixed": "#b7eaff",
            "secondary-fixed-dim": "#4cd6ff",
            "on-secondary-fixed": "#001f28",
            "on-secondary-fixed-variant": "#004e60",
            "tertiary-fixed": "#61ff97",
            "tertiary-fixed-dim": "#32e27c",
            "on-tertiary-fixed": "#00210c",
            "on-tertiary-fixed-variant": "#005227",
            "background": "#f9f9fc",
            "on-background": "#1a1c1e",
            "surface-variant": "#e2e2e5",
            "surface-alt": "#F0F4F8",
            "optimal-green": "#00D06C",
            "alert-amber": "#FFB800",
            "warning-red": "#FF4B4B"
          },
          "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "2xl": "1rem",
            "full": "9999px"
          },
          "spacing": {
            "gutter": "16px",
            "container-padding": "20px",
            "margin-lg": "48px",
            "unit": "8px",
            "margin-md": "24px",
            "margin-sm": "16px"
          },
          "fontFamily": {
            "body-lg": ["Inter", "sans-serif"],
            "data-metric": ["Geist", "sans-serif"],
            "headline-lg-mobile": ["Geist", "sans-serif"],
            "display-lg": ["Geist", "sans-serif"],
            "body-md": ["Inter", "sans-serif"],
            "headline-lg": ["Geist", "sans-serif"],
            "label-sm": ["Geist", "sans-serif"]
          }
        }
      }
    };
  </script>

  <style>
    @layer base {
      html, body {
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
      }
      body {
        overscroll-behavior: none;
        background-color: #0E121A;
        display: flex;
        justify-content: center;
        min-height: 100vh;
      }
      .pb-safe {
        padding-bottom: max(env(safe-area-inset-bottom, 0px), 8px);
      }
      .pt-safe {
        padding-top: max(env(safe-area-inset-top, 0px), 0px);
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    
    /* Device Shell Container (Mobile First, Universal on All Screens) */
    .app-viewport {
      width: 100%;
      max-width: 440px;
      min-height: 100vh;
      background: #f9f9fc;
      display: flex;
      flex-direction: column;
      position: relative;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
      border-left: 1px solid rgba(255, 255, 255, 0.08);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      overflow-x: hidden;
    }

    /* Tab Panes */
    .tab-view {
      display: none;
      animation: fadeIn 0.2s ease-out;
    }
    .tab-view.active {
      display: block;
    }

    /* Sub Views (Day vs Week) */
    .sub-view {
      display: none;
      animation: fadeIn 0.2s ease-out;
    }
    .sub-view.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Active Nav Styling */
    .nav-btn.active {
      color: #0050cb !important;
      font-weight: 700;
    }
    .nav-btn.active .material-symbols-outlined {
      font-variation-settings: 'FILL' 1;
    }

    /* Modal Sheet */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(8px);
      z-index: 100;
      display: none;
      align-items: flex-end;
      justify-content: center;
    }
    .modal-sheet {
      width: 100%;
      max-width: 440px;
      background: #ffffff;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      padding: 24px 20px 36px 20px;
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
  </style>
</head>
<body>

  <div class="app-viewport">
    
    <!-- ─── TOP STICKY APP BAR (Exact Stitch Header) ─── -->
    <header class="fixed top-0 max-w-[440px] w-full z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container">
      <div class="h-14 px-gutter flex items-center justify-between">
        <div class="flex items-center gap-margin-sm cursor-pointer" onclick="switchMainTab('flow')">
          <span class="text-primary font-headline-lg-mobile text-[22px] tracking-tighter font-bold">tovelu</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="bg-primary-container/10 px-3 py-1 rounded-full border border-primary/10">
            <span class="text-primary font-label-sm text-[11px] uppercase tracking-wider font-semibold">Day 18</span>
          </div>
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer shadow-sm" onclick="switchMainTab('you')">
            <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>

    <!-- ─── MAIN CONTENT CONTAINER ─── -->
    <main class="flex-1 w-full pt-14 pb-20 bg-surface">

      <!-- ==================== 1. TAB: FLOW (DAY & WEEK) ==================== -->
      <div id="pane-flow" class="tab-view active">
        
        <!-- Segmented Day | Week Switcher (Stitch Pill Style) -->
        <div class="flex justify-center pt-5 pb-1 px-container-padding">
          <div class="inline-flex p-1 bg-surface-container-low rounded-lg border border-outline-variant/20 shadow-sm w-full max-w-[280px]">
            <button id="btn-sub-day" class="flex-1 py-1.5 rounded-md bg-surface-container-lowest shadow-sm text-primary font-label-sm text-[12px] uppercase tracking-wider font-semibold transition-all" onclick="switchFlowSubView('day')">
              Day
            </button>
            <button id="btn-sub-week" class="flex-1 py-1.5 rounded-md text-on-surface-variant font-label-sm text-[12px] uppercase tracking-wider hover:bg-surface-container-lowest/50 transition-all" onclick="switchFlowSubView('week')">
              Week
            </button>
          </div>
        </div>

        <!-- 1A. SUB-VIEW: DAY (FLOW DASHBOARD) -->
        <div id="subview-day" class="sub-view active">
          ${flowDayInner.replace(/<div class="flex justify-center mb-1">[\s\S]*?<\/div>\s*<\/div>/, "")}
        </div>

        <!-- 1B. SUB-VIEW: WEEK (WEEKLY SCORECARD) -->
        <div id="subview-week" class="sub-view">
          ${weekInner}
        </div>

      </div>

      <!-- ==================== 2. TAB: HEALTH (HEALTH TELEMETRY) ==================== -->
      <div id="pane-health" class="tab-view">
        ${healthInner}
      </div>

      <!-- ==================== 3. TAB: CHAT (TOVELU INTELLIGENCE) ==================== -->
      <div id="pane-chat" class="tab-view">
        ${chatInner}
      </div>

      <!-- ==================== 4. TAB: YOU (MEMBER PROFILE) ==================== -->
      <div id="pane-you" class="tab-view">
        ${youInner}
      </div>

    </main>

    <!-- ─── FIXED BOTTOM NAVIGATION (Exact Stitch Bar) ─── -->
    <nav class="fixed bottom-0 max-w-[440px] w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)] border-t border-surface-container">
      <div class="flex justify-around items-center h-16 px-2">
        <button id="nav-flow" class="nav-btn active flex flex-col items-center justify-center gap-1 w-16 transition-colors text-primary font-bold" onclick="switchMainTab('flow')">
          <span class="material-symbols-outlined text-[24px]">bubble_chart</span>
          <span class="text-[10px] font-label-sm uppercase tracking-wider">FLOW</span>
        </button>
        <button id="nav-health" class="nav-btn flex flex-col items-center justify-center gap-1 w-16 text-on-surface-variant transition-colors" onclick="switchMainTab('health')">
          <span class="material-symbols-outlined text-[24px]">monitoring</span>
          <span class="text-[10px] font-label-sm uppercase tracking-wider">HEALTH</span>
        </button>
        <button id="nav-chat" class="nav-btn flex flex-col items-center justify-center gap-1 w-16 text-on-surface-variant transition-colors" onclick="switchMainTab('chat')">
          <span class="material-symbols-outlined text-[24px]">smart_toy</span>
          <span class="text-[10px] font-label-sm uppercase tracking-wider">CHAT</span>
        </button>
        <button id="nav-you" class="nav-btn flex flex-col items-center justify-center gap-1 w-16 text-on-surface-variant transition-colors" onclick="switchMainTab('you')">
          <span class="material-symbols-outlined text-[24px]">account_circle</span>
          <span class="text-[10px] font-label-sm uppercase tracking-wider">YOU</span>
        </button>
      </div>
    </nav>

    <!-- ─── INTERACTIVE FOOD INTELLIGENCE BOTTOM SHEET MODAL ─── -->
    <div id="food-modal" class="modal-overlay" onclick="if(event.target===this) closeFoodModal()">
      <div class="modal-sheet">
        <div class="flex justify-between items-center mb-4">
          <h3 id="food-modal-title" class="font-headline-lg-mobile text-[18px] font-bold text-on-surface">
            Food Intelligence Engine
          </h3>
          <button class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high" onclick="closeFoodModal()">✕</button>
        </div>

        <!-- 3 Detection Situation Selector -->
        <div class="grid grid-cols-3 gap-1 bg-surface-container-low p-1 rounded-lg mb-4">
          <button class="food-pill active py-2 text-[11px] font-semibold rounded-md bg-surface-container-lowest text-primary shadow-sm text-center" onclick="setFoodPill('cooked', this)">🍲 Cooked Dish</button>
          <button class="food-pill py-2 text-[11px] font-semibold rounded-md text-on-surface-variant text-center" onclick="setFoodPill('ingredient', this)">🥦 Raw Groceries</button>
          <button class="food-pill py-2 text-[11px] font-semibold rounded-md text-on-surface-variant text-center" onclick="setFoodPill('menu', this)">📜 Restaurant Menu</button>
        </div>

        <!-- Dynamic Modal Body -->
        <div id="food-modal-body" class="flex flex-col gap-4"></div>
      </div>
    </div>

  </div>

  <script>
    // Tab Navigation Logic (FLOW | HEALTH | CHAT | YOU)
    function switchMainTab(tabId) {
      document.querySelectorAll('.tab-view').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active', 'text-primary', 'font-bold');
        b.classList.add('text-on-surface-variant');
      });

      const targetPane = document.getElementById('pane-' + tabId);
      const targetNav = document.getElementById('nav-' + tabId);

      if (targetPane) targetPane.classList.add('active');
      if (targetNav) {
        targetNav.classList.add('active', 'text-primary', 'font-bold');
        targetNav.classList.remove('text-on-surface-variant');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Sub View Switching (DAY | WEEK in FLOW)
    function switchFlowSubView(subId) {
      document.querySelectorAll('.sub-view').forEach(s => s.classList.remove('active'));
      const dayBtn = document.getElementById('btn-sub-day');
      const weekBtn = document.getElementById('btn-sub-week');

      if (subId === 'day') {
        document.getElementById('subview-day').classList.add('active');
        dayBtn.className = 'flex-1 py-1.5 rounded-md bg-surface-container-lowest shadow-sm text-primary font-label-sm text-[12px] uppercase tracking-wider font-semibold transition-all';
        weekBtn.className = 'flex-1 py-1.5 rounded-md text-on-surface-variant font-label-sm text-[12px] uppercase tracking-wider hover:bg-surface-container-lowest/50 transition-all';
      } else {
        document.getElementById('subview-week').classList.add('active');
        weekBtn.className = 'flex-1 py-1.5 rounded-md bg-surface-container-lowest shadow-sm text-primary font-label-sm text-[12px] uppercase tracking-wider font-semibold transition-all';
        dayBtn.className = 'flex-1 py-1.5 rounded-md text-on-surface-variant font-label-sm text-[12px] uppercase tracking-wider hover:bg-surface-container-lowest/50 transition-all';
      }
    }

    // Connect Stitch Action Buttons to Interactive Modal
    window.addEventListener('DOMContentLoaded', () => {
      // Find the 3 action buttons in flow: Scan, Manually, Ask AI
      const actionBtns = document.querySelectorAll('main button');
      actionBtns.forEach(btn => {
        const text = btn.innerText || '';
        if (text.includes('Scan / Photo')) {
          btn.onclick = () => openFoodModal('scan');
        } else if (text.includes('Manually')) {
          btn.onclick = () => openFoodModal('manual');
        } else if (text.includes('Ask AI')) {
          btn.onclick = () => openFoodModal('ask_ai');
        }
      });
    });

    let activeFoodMode = 'scan';
    let activeFoodCategory = 'cooked';

    function openFoodModal(mode) {
      activeFoodMode = mode;
      const modal = document.getElementById('food-modal');
      const title = document.getElementById('food-modal-title');
      const body = document.getElementById('food-modal-body');

      if (mode === 'scan') {
        title.innerText = '📷 Scan Meal & Detect Oils';
        body.innerHTML = \`
          <div class="border-2 border-dashed border-outline-variant/40 rounded-xl p-6 text-center flex flex-col items-center gap-3">
            <span class="material-symbols-outlined text-[36px] text-primary">add_a_photo</span>
            <div class="font-body-md text-[14px] text-on-surface font-medium">Upload or snap photo of your \${activeFoodCategory === 'cooked' ? 'Cooked Plate' : activeFoodCategory === 'ingredient' ? 'Raw Groceries' : 'Restaurant Menu'}</div>
            <input type="file" accept="image/*" class="hidden" id="camera-file-input" onchange="showScanResult()" />
            <button class="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-sm text-[12px] uppercase tracking-wider font-semibold shadow-sm hover:bg-primary-container" onclick="document.getElementById('camera-file-input').click()">
              Open Camera / Choose Photo
            </button>
          </div>
          <div id="scan-output-box"></div>
        \`;
      } else if (mode === 'manual') {
        title.innerText = '✍️ Log Meal Manually';
        body.innerHTML = \`
          <div class="flex flex-col gap-3">
            <label class="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant">Describe Food or Ingredients:</label>
            <textarea id="manual-dish-input" class="w-full p-3 rounded-lg border border-outline-variant/40 text-on-surface font-body-md text-[14px] outline-none focus:border-primary" rows="3" placeholder="e.g., 3 pasture-raised eggs scrambled in 1 tsp desi ghee with sautéed spinach..."></textarea>
            <button class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-sm text-[12px] uppercase tracking-wider font-semibold shadow-sm hover:bg-primary-container" onclick="showScanResult()">
              Analyze & Calculate Glycemic Curve
            </button>
          </div>
          <div id="scan-output-box"></div>
        \`;
      } else if (mode === 'ask_ai') {
        title.innerText = '🤖 Ask AI Kitchen Intelligence';
        body.innerHTML = \`
          <div class="p-4 rounded-xl bg-surface-container-low border border-optimal-green/30 flex flex-col gap-2">
            <span class="font-label-sm text-[10px] uppercase tracking-wider text-optimal-green font-bold">Recommended From Your Pantry</span>
            <h4 class="font-headline-lg-mobile text-[16px] font-bold text-on-surface">Savory Organic Eggs & Grass-Fed Paneer Scramble</h4>
            <p class="font-body-md text-[13px] text-on-surface-variant">Cooked in pure A2 desi ghee with 1/2 avocado. Delivers <strong>35g clean protein</strong> with zero seed oils and a flat glycemic response.</p>
            <div class="flex gap-2 mt-2">
              <span class="px-2 py-0.5 rounded bg-primary/10 text-primary text-[11px] font-semibold">35g Protein</span>
              <span class="px-2 py-0.5 rounded bg-optimal-green/10 text-optimal-green text-[11px] font-semibold">0% Seed Oils</span>
              <span class="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-semibold">12m Cook</span>
            </div>
          </div>
          <button class="w-full bg-optimal-green text-white py-3 rounded-lg font-label-sm text-[12px] uppercase tracking-wider font-semibold shadow-sm hover:bg-optimal-green/90" onclick="alert('✓ Meal logged to Daily Calorie Meter!'); closeFoodModal();">
            ✓ Log to Daily Portion Meter (+35g Protein)
          </button>
        \`;
      }

      modal.style.display = 'flex';
    }

    function setFoodPill(cat, btn) {
      activeFoodCategory = cat;
      document.querySelectorAll('.food-pill').forEach(p => {
        p.className = 'food-pill py-2 text-[11px] font-semibold rounded-md text-on-surface-variant text-center';
      });
      btn.className = 'food-pill active py-2 text-[11px] font-semibold rounded-md bg-surface-container-lowest text-primary shadow-sm text-center';
      openFoodModal(activeFoodMode);
    }

    function showScanResult() {
      const out = document.getElementById('scan-output-box');
      if (!out) return;
      out.innerHTML = \`
        <div class="p-4 rounded-xl bg-optimal-green/5 border border-optimal-green/30 flex flex-col gap-2 mt-2">
          <div class="flex items-center gap-1.5 text-optimal-green font-label-sm text-[11px] uppercase tracking-wider font-bold">
            <span class="material-symbols-outlined text-[16px]">verified</span>
            Dish Analyzed: High-Protein Healthy Fats
          </div>
          <div class="text-[13px] text-on-surface space-y-1">
            <div>🟢 <strong>PROTEIN:</strong> 34g bioavailable whole protein.</div>
            <div>🟢 <strong>SEED OILS:</strong> 0% industrial seed oils detected (Desi Ghee / Olive Oil).</div>
            <div>🟢 <strong>GLYCEMIC INDEX:</strong> Flat insulin curve (Minimal glucose spike).</div>
          </div>
          <button class="w-full bg-primary text-on-primary py-2.5 rounded-lg font-label-sm text-[11px] uppercase tracking-wider font-bold mt-2" onclick="alert('✓ 34g Protein & Calorie Target Logged!'); closeFoodModal();">
            ✓ Confirm & Log to Calorie Meter
          </button>
        </div>
      \`;
    }

    function closeFoodModal() {
      document.getElementById('food-modal').style.display = 'none';
    }
  </script>

</body>
</html>`;

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", unifiedHtml, "utf8");
console.log("Successfully built unified app.html from Stitch redesign!");
