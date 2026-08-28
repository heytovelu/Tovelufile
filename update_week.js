const fs = require("fs");
let html = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");

// 1. Create Weekly Grocery State and Functions in JavaScript
const groceryJs = `
    // WEEKLY SMART CLINICAL GROCERY LIST STATE
    const weeklyGroceryItems = [
      { id: 1, name: "Pasture-Raised Organic Eggs", qty: "12 pcs", cat: "Protein", note: "35g Breakfast Target", bought: true },
      { id: 2, name: "Fresh Grass-Fed Paneer", qty: "400g", cat: "Protein", note: "Zero-Carb Clean Protein", bought: true },
      { id: 3, name: "Wild Salmon / Sardines", qty: "250g", cat: "Protein", note: "Omega-3 EPA / DHA", bought: false },
      { id: 4, name: "Pure A2 Desi Gir Cow Ghee", qty: "500g", cat: "Fats", note: "Butyrate Gut Healing Fuel", bought: true },
      { id: 5, name: "Extra Virgin Olive Oil (Cold-Pressed)", qty: "500ml", cat: "Fats", note: "High Polyphenol (>300mg/kg)", bought: false },
      { id: 6, name: "Organic Baby Spinach", qty: "500g", cat: "Greens", note: "Nitric Oxide Vasodilation", bought: true },
      { id: 7, name: "Fresh Broccoli / Broccolini", qty: "1 head", cat: "Greens", note: "Sulforaphane Detox", bought: false },
      { id: 8, name: "Fresh Hass Avocados", qty: "4 pcs", cat: "Greens", note: "Monounsaturated Oleic Acid", bought: true },
      { id: 9, name: "Raw Unfiltered Apple Cider Vinegar", qty: "500ml", cat: "Spices", note: "With Mother (Glycemic Blunter)", bought: true },
      { id: 10, name: "Pink Himalayan Rock Salt", qty: "200g", cat: "Spices", note: "Unrefined Cellular Hydration", bought: true },
      { id: 11, name: "Ceylon True Cinnamon Powder", qty: "100g", cat: "Spices", note: "Insulin Sensitivity Activator", bought: false },
      { id: 12, name: "Raw California Walnuts", qty: "250g", cat: "Fats", note: "Alpha-Linolenic Acid (ALA)", bought: true }
    ];

    function toggleGroceryItem(id) {
      const item = weeklyGroceryItems.find(g => g.id === id);
      if (item) {
        item.bought = !item.bought;
        renderGroceryList();
      }
    }

    function renderGroceryList() {
      const container = document.getElementById("weekly-grocery-checklist");
      const counter = document.getElementById("grocery-bought-counter");
      const progress = document.getElementById("grocery-progress-bar");
      if (!container) return;

      const total = weeklyGroceryItems.length;
      const boughtCount = weeklyGroceryItems.filter(g => g.bought).length;
      const pct = Math.round((boughtCount / total) * 100);

      if (counter) counter.innerText = `${boughtCount} / ${total} Items Bought (${pct}%)`;
      if (progress) progress.style.width = `${pct}%`;

      container.innerHTML = weeklyGroceryItems.map(item => `
        <div class="grocery-item-row ${item.bought ? "bought" : ""}" onclick="toggleGroceryItem(${item.id})" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; background: ${item.bought ? "var(--gemini-surface-container)" : "var(--gemini-surface)"}; border: 1.5px solid ${item.bought ? "rgba(0, 208, 108, 0.3)" : "var(--gemini-border-subtle)"}; padding: 12px 14px; border-radius: 16px; cursor: pointer; transition: all 0.2s; user-select: none;">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1;">
            <div style="width: 24px; height: 24px; border-radius: 8px; border: 2px solid ${item.bought ? "var(--gemini-vitality-emerald)" : "var(--gemini-border)"}; background: ${item.bought ? "var(--gemini-vitality-emerald)" : "transparent"}; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px; font-weight: 900; flex-shrink: 0;">
              ${item.bought ? "✓" : ""}
            </div>
            <div style="min-width: 0;">
              <div style="font-family: 'Google Sans', sans-serif; font-size: 14px; font-weight: 700; color: ${item.bought ? "var(--gemini-text-muted)" : "var(--gemini-text-main)"}; text-decoration: ${item.bought ? "line-through" : "none"};">
                ${item.name}
              </div>
              <div style="font-size: 11px; color: var(--gemini-text-muted); margin-top: 2px;">
                ${item.note}
              </div>
            </div>
          </div>
          <span style="font-size: 12px; font-weight: 800; color: ${item.bought ? "var(--gemini-vitality-emerald)" : "var(--gemini-sparkle-blue)"}; background: var(--gemini-surface-container); padding: 4px 10px; border-radius: 8px; border: 1px solid var(--gemini-border-subtle); white-space: nowrap;">
            ${item.qty}
          </span>
        </div>
      `).join("");
    }

    function addCustomGroceryPrompt() {
      const name = prompt("Enter grocery item name (e.g. Organic Chia Seeds):");
      if (!name || !name.trim()) return;
      const qty = prompt("Enter quantity (e.g. 200g or 1 pack):", "1 pack") || "1 pack";
      const newId = weeklyGroceryItems.length ? Math.max(...weeklyGroceryItems.map(g => g.id)) + 1 : 1;
      weeklyGroceryItems.push({
        id: newId,
        name: name.trim(),
        qty: qty.trim(),
        cat: "Custom",
        note: "Member Custom Addition",
        bought: false
      });
      renderGroceryList();
    }

    function copyGroceryListToClipboard() {
      const lines = weeklyGroceryItems.map(g => `${g.bought ? " [x] " : " [ ] "} ${g.name} (${g.qty}) - ${g.note}`);
      const text = "🛒 TOVELU WEEK 3 CLINICAL GROCERY LIST:\n\n" + lines.join("\n") + "\n\nPlan: app.tovelu.store";
      navigator.clipboard.writeText(text).then(() => {
        alert("✓ Grocery list copied to clipboard! You can paste it into WhatsApp or Apple Notes.");
      }).catch(() => {
        alert(text);
      });
    }
`;

if (!html.includes("function toggleGroceryItem")) {
  html = html.replace("renderPantryDisplay();\n    }", "renderPantryDisplay();\n      renderGroceryList();\n    }\n" + groceryJs);
}

// 2. Build the Complete, Beautiful, Spacious SUBVIEW-FLOW-WEEK markup
const weekMarkup = `
        <!-- ---------------- SUB-VIEW 2: WEEK (SCORECARD, RULES, CHALLENGES & GROCERY) ---------------- -->
        <div id="subview-flow-week" class="flow-sub-view">
          
          <!-- 1. WEEKLY PROGRESS & SCORECARD (TOP HERO) -->
          <div class="gemini-card" style="background: linear-gradient(135deg, rgba(0, 192, 255, 0.1), rgba(0, 245, 160, 0.1)); border-radius: 22px; padding: 22px; margin-bottom: 26px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 12px; font-weight: 800; color: var(--gemini-sparkle-blue); background: var(--gemini-surface); padding: 4px 10px; border-radius: 9999px; border: 1px solid var(--gemini-border-subtle);">
                WEEKLY SCORECARD • WEEK 3
              </span>
              <span style="font-size: 13px; font-weight: 800; color: var(--gemini-vitality-emerald);">91% Compliance</span>
            </div>
            <div style="font-family: 'Google Sans Display', sans-serif; font-size: 22px; font-weight: 800; margin-top: 8px; line-height: 1.25;">
              Insulin Resensitization & Fat Adaptation
            </div>
            
            <!-- Professional Dashboard 7-Day Telemetry Chart -->
            <div style="background: var(--gemini-surface); border: 1.5px solid var(--gemini-border-subtle); border-radius: 20px; padding: 20px 16px; margin: 18px 0 14px 0; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              
              <!-- Dashboard KPI Top Row -->
              <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 12px; border-bottom: 1px solid var(--gemini-border-subtle);">
                <div>
                  <div style="font-size: 11px; font-weight: 800; color: var(--gemini-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">
                    📊 Protocol Execution Index
                  </div>
                  <div style="display: flex; align-items: baseline; gap: 10px; margin-top: 4px;">
                    <span style="font-family: 'Google Sans Display', sans-serif; font-size: 32px; font-weight: 800; color: var(--gemini-text-main); line-height: 1;">87.5%</span>
                    <span style="font-size: 12px; font-weight: 800; color: var(--gemini-vitality-emerald); background: rgba(0, 208, 108, 0.12); padding: 3px 10px; border-radius: 9999px;">+6.4% vs Wk 2 ↗</span>
                  </div>
                </div>
                <div style="text-align: right;">
                  <span style="font-size: 12px; font-weight: 800; color: var(--gemini-sparkle-blue); background: var(--gemini-surface-container); padding: 4px 10px; border-radius: 9999px; border: 1px solid var(--gemini-border-subtle);">
                    🔥 3 Days Flawless
                  </span>
                </div>
              </div>

              <!-- High-Precision Bar Chart Area -->
              <div style="position: relative; height: 160px; display: flex; flex-direction: column; justify-content: flex-end; padding-top: 10px;">
                
                <!-- Background Grid Reference Lines -->
                <div style="position: absolute; top: 10px; left: 0; right: 0; bottom: 28px; display: flex; flex-direction: column; justify-content: space-between; pointer-events: none; opacity: 0.35;">
                  <div style="border-top: 1px dashed var(--gemini-border);"></div>
                  <div style="border-top: 1px dashed var(--gemini-border);"></div>
                  <div style="border-top: 1px dashed var(--gemini-border);"></div>
                </div>

                <!-- 7 Daily Telemetry Columns -->
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; align-items: flex-end; height: 100%; position: relative; z-index: 2;">
                  
                  <div class="week-chart-col" id="col-mon" style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 4px; cursor: pointer;" onclick="selectWeekDayReport('Monday', 95, '100% (1,500 kcal)', '4 / 4 Done (100%)', 'Optimal (Flat Curve)', 'mon')">
                    <span style="font-size: 11px; font-weight: 800; color: var(--gemini-vitality-emerald);">95%</span>
                    <div style="width: 100%; max-width: 32px; height: 90px; background: var(--gemini-surface-container); border-radius: 10px; display: flex; align-items: flex-end; padding: 2px;">
                      <div style="width: 100%; height: 95%; background: linear-gradient(180deg, #00F5A0, #00D06C); border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 208, 108, 0.35);"></div>
                    </div>
                    <span style="font-size: 11px; font-weight: 800; color: var(--gemini-text-muted);">MON</span>
                  </div>

                  <div class="week-chart-col" id="col-tue" style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 4px; cursor: pointer;" onclick="selectWeekDayReport('Tuesday', 92, '95% (1,425 kcal)', '4 / 4 Done (100%)', 'Optimal (Flat Curve)', 'tue')">
                    <span style="font-size: 11px; font-weight: 800; color: var(--gemini-vitality-emerald);">92%</span>
                    <div style="width: 100%; max-width: 32px; height: 90px; background: var(--gemini-surface-container); border-radius: 10px; display: flex; align-items: flex-end; padding: 2px;">
                      <div style="width: 100%; height: 92%; background: linear-gradient(180deg, #00F5A0, #00D06C); border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 208, 108, 0.35);"></div>
                    </div>
                    <span style="font-size: 11px; font-weight: 800; color: var(--gemini-text-muted);">TUE</span>
                  </div>

                  <div class="week-chart-col" id="col-wed" style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 4px; cursor: pointer;" onclick="selectWeekDayReport('Wednesday', 88, '88% (1,320 kcal)', '3 / 4 Done (75%)', 'Optimal (Flat Curve)', 'wed')">
                    <span style="font-size: 11px; font-weight: 800; color: var(--gemini-vitality-emerald);">88%</span>
                    <div style="width: 100%; max-width: 32px; height: 90px; background: var(--gemini-surface-container); border-radius: 10px; display: flex; align-items: flex-end; padding: 2px;">
                      <div style="width: 100%; height: 88%; background: linear-gradient(180deg, #00F5A0, #00D06C); border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 208, 108, 0.35);"></div>
                    </div>
                    <span style="font-size: 11px; font-weight: 800; color: var(--gemini-text-muted);">WED</span>
                  </div>

                  <div class="week-chart-col active-col" id="col-thu" style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 4px; cursor: pointer;" onclick="selectWeekDayReport('Thursday (Today)', 75, '88% (1,323 kcal)', '3 / 4 Done (75%)', 'Optimal (Flat Curve)', 'thu')">
                    <span style="font-size: 11px; font-weight: 800; color: var(--gemini-sparkle-blue);">75%</span>
                    <div style="width: 100%; max-width: 32px; height: 90px; background: rgba(0, 98, 255, 0.12); border: 2px solid var(--gemini-sparkle-blue); border-radius: 10px; display: flex; align-items: flex-end; padding: 2px; box-shadow: 0 0 12px rgba(0, 98, 255, 0.25);">
                      <div style="width: 100%; height: 75%; background: linear-gradient(180deg, #00C0FF, #0062FF); border-radius: 7px; box-shadow: 0 4px 12px rgba(0, 98, 255, 0.45);"></div>
                    </div>
                    <span style="font-size: 11px; font-weight: 800; color: #FFFFFF; background: var(--gemini-sparkle-blue); padding: 2px 6px; border-radius: 6px;">THU</span>
                  </div>

                  <div class="week-chart-col" id="col-fri" style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 4px; opacity: 0.5; cursor: pointer;" onclick="selectWeekDayReport('Friday (Upcoming)', 0, 'Target 1,500 kcal', '4 Tasks Scheduled', 'Scheduled', 'fri')">
                    <span style="font-size: 11px; font-weight: 700; color: var(--gemini-text-muted);">--</span>
                    <div style="width: 100%; max-width: 32px; height: 90px; background: var(--gemini-surface-container); border: 1.5px dashed var(--gemini-border); border-radius: 10px; display: flex; align-items: flex-end; padding: 2px;">
                    </div>
                    <span style="font-size: 11px; font-weight: 700; color: var(--gemini-text-muted);">FRI</span>
                  </div>

                  <div class="week-chart-col" id="col-sat" style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 4px; opacity: 0.5; cursor: pointer;" onclick="selectWeekDayReport('Saturday (Upcoming)', 0, 'Target 1,500 kcal', '4 Tasks Scheduled', 'Scheduled', 'sat')">
                    <span style="font-size: 11px; font-weight: 700; color: var(--gemini-text-muted);">--</span>
                    <div style="width: 100%; max-width: 32px; height: 90px; background: var(--gemini-surface-container); border: 1.5px dashed var(--gemini-border); border-radius: 10px; display: flex; align-items: flex-end; padding: 2px;">
                    </div>
                    <span style="font-size: 11px; font-weight: 700; color: var(--gemini-text-muted);">SAT</span>
                  </div>

                  <div class="week-chart-col" id="col-sun" style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 4px; opacity: 0.5; cursor: pointer;" onclick="selectWeekDayReport('Sunday (Upcoming)', 0, 'Target 1,500 kcal', '4 Tasks Scheduled', 'Scheduled', 'sun')">
                    <span style="font-size: 11px; font-weight: 700; color: var(--gemini-text-muted);">--</span>
                    <div style="width: 100%; max-width: 32px; height: 90px; background: var(--gemini-surface-container); border: 1.5px dashed var(--gemini-border); border-radius: 10px; display: flex; align-items: flex-end; padding: 2px;">
                    </div>
                    <span style="font-size: 11px; font-weight: 700; color: var(--gemini-text-muted);">SUN</span>
                  </div>

                </div>

              </div>

              <!-- Live Telemetry Inspector Card -->
              <div style="background: var(--gemini-surface-container); border: 1px solid var(--gemini-border-subtle); border-radius: 16px; padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="font-size: 13.5px; font-weight: 800; color: var(--gemini-text-main);" id="inspector-day-title">
                    📅 Thursday Performance Breakdown (Today)
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: var(--gemini-sparkle-blue);" id="inspector-day-score">
                    75% Execution
                  </span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                  <div style="background: var(--gemini-surface); padding: 10px 8px; border-radius: 12px; border: 1px solid var(--gemini-border-subtle); text-align: center;">
                    <div style="font-size: 10.5px; font-weight: 800; color: var(--gemini-text-muted); text-transform: uppercase;">🥗 Nutrition</div>
                    <div style="font-size: 13.5px; font-weight: 800; color: var(--gemini-text-main); margin-top: 3px;" id="inspector-food-val">88% Target</div>
                  </div>

                  <div style="background: var(--gemini-surface); padding: 10px 8px; border-radius: 12px; border: 1px solid var(--gemini-border-subtle); text-align: center;">
                    <div style="font-size: 10.5px; font-weight: 800; color: var(--gemini-text-muted); text-transform: uppercase;">✅ Tasks</div>
                    <div style="font-size: 13.5px; font-weight: 800; color: var(--gemini-vitality-emerald); margin-top: 3px;" id="inspector-tasks-val">3 / 4 Done</div>
                  </div>

                  <div style="background: var(--gemini-surface); padding: 10px 8px; border-radius: 12px; border: 1px solid var(--gemini-border-subtle); text-align: center;">
                    <div style="font-size: 10.5px; font-weight: 800; color: var(--gemini-text-muted); text-transform: uppercase;">🧬 Curve</div>
                    <div style="font-size: 13.5px; font-weight: 800; color: var(--gemini-sparkle-blue); margin-top: 3px;" id="inspector-curve-val">Optimal Flat</div>
                  </div>
                </div>
              </div>

            </div>
            <div style="font-size: 12.5px; color: var(--gemini-vitality-emerald); font-weight: 700; line-height: 1.5;">
              ⚡ Projected Epigenetic Gain: -0.3 Biological Years Saved This Week.
            </div>
          </div>

          <!-- 2. NON-NEGOTIABLE WEEKLY RULES: 2 DEDICATED SUBSECTIONS (GREEN & RED) -->
          <div class="gemini-card" style="padding: 20px; border-radius: 22px; display: flex; flex-direction: column; gap: 16px; margin-bottom: 26px;">
            <div style="font-size: 16px; font-weight: 800; color: var(--gemini-text-main); display: flex; align-items: center; gap: 8px;">
              <span class="material-symbols-outlined" style="font-size: 22px; color: var(--gemini-sparkle-blue);">gavel</span>
              <span>Non-Negotiable Rules of Week 3</span>
            </div>

            <!-- SUBSECTION 1: WHAT TO DO (IN GREEN) -->
            <div style="background: rgba(0, 208, 108, 0.07); border: 1.5px solid rgba(0, 208, 108, 0.35); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 8px;">
              <div style="font-size: 12px; font-weight: 800; color: #008744; display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.04em;">
                <span>✅ WHAT TO DO (ESSENTIAL PROTOCOLS):</span>
              </div>
              <ul style="font-size: 13.5px; color: var(--gemini-text-main); line-height: 1.6; padding-left: 18px; margin: 0; display: flex; flex-direction: column; gap: 6px;">
                <li><strong style="color: #008744;">35g Protein Threshold:</strong> Eat 35g+ clean protein at breakfast within 90 minutes of waking.</li>
                <li><strong style="color: #008744;">Post-Meal Zone 2 Walk:</strong> Walk briskly for 12 minutes immediately following your largest meal.</li>
                <li><strong style="color: #008744;">10-Hour Caffeine Cutoff:</strong> Finish all tea, coffee, or caffeine before 12:00 PM.</li>
              </ul>
            </div>

            <!-- SUBSECTION 2: WHAT TO AVOID (IN RED) -->
            <div style="background: rgba(239, 68, 68, 0.07); border: 1.5px solid rgba(239, 68, 68, 0.35); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 8px;">
              <div style="font-size: 12px; font-weight: 800; color: #DC2626; display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.04em;">
                <span>❌ WHAT TO AVOID (STRICT ZERO TOLERANCE):</span>
              </div>
              <ul style="font-size: 13.5px; color: var(--gemini-text-main); line-height: 1.6; padding-left: 18px; margin: 0; display: flex; flex-direction: column; gap: 6px;">
                <li><strong style="color: #DC2626;">Zero Liquid Sugar:</strong> No sweetened chai, soda, energy drinks, or packaged juices.</li>
                <li><strong style="color: #DC2626;">Zero Yellow Seed Oils:</strong> Eliminate sunflower, soybean, palm, and canola cooking oils.</li>
                <li><strong style="color: #DC2626;">Zero Screens in Bed:</strong> Turn off mobile screens 60 minutes before bedtime.</li>
              </ul>
            </div>

          </div>

          <!-- 3. WEEKLY GUIDES & CHALLENGES WITH SOLUTIONS -->
          <div class="gemini-card" style="padding: 20px; border-radius: 22px; display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
            <div style="font-size: 16px; font-weight: 800; color: #D97706; display: flex; align-items: center; gap: 8px;">
              <span class="material-symbols-outlined" style="font-size: 22px;">psychology_alt</span>
              <span>Weekly Challenges & Clinical Solutions</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 12px; font-size: 13.5px;">
              <div style="background: var(--gemini-surface-container); padding: 14px 16px; border-radius: 16px; line-height: 1.55;">
                <strong style="color: var(--gemini-text-main); font-size: 14px;">⚠️ Challenge: 4:00 PM Sugar & Chai Craving</strong>
                <div style="color: var(--gemini-text-muted); margin-top: 4px;">
                  <strong style="color: var(--gemini-text-main);">👉 Solution:</strong> Drink 300ml sparkling water with 1 tbsp raw apple cider vinegar and eat 6 raw walnuts.
                </div>
              </div>

              <div style="background: var(--gemini-surface-container); padding: 14px 16px; border-radius: 16px; line-height: 1.55;">
                <strong style="color: var(--gemini-text-main); font-size: 14px;">⚠️ Challenge: Social Dining with Friends</strong>
                <div style="color: var(--gemini-text-muted); margin-top: 4px;">
                  <strong style="color: var(--gemini-text-main);">👉 Solution:</strong> Order tandoori or grilled protein cooked without seed oil; request double greens instead of fries or naan.
                </div>
              </div>
            </div>
          </div>

          <!-- 4. 🛒 NEW: WEEKLY CLINICAL GROCERY & SMART SHOPPING LIST (SPACIOUS DEDICATED SECTION) -->
          <div class="gemini-card" style="border: 1.5px solid rgba(0, 208, 108, 0.35); background: linear-gradient(135deg, rgba(0, 208, 108, 0.05), rgba(0, 192, 255, 0.04), var(--gemini-surface)); padding: 22px; border-radius: 24px; display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; box-shadow: 0 4px 20px rgba(0, 208, 108, 0.06);">
            
            <!-- Section Header Row -->
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <div style="font-family: 'Google Sans', sans-serif; font-size: 17px; font-weight: 800; color: var(--gemini-text-main); display: flex; align-items: center; gap: 8px;">
                  <span class="material-symbols-outlined" style="color: var(--gemini-vitality-emerald); font-size: 24px;">shopping_cart</span>
                  <span>Weekly Clinical Grocery List</span>
                </div>
                <div style="font-size: 12px; color: var(--gemini-text-muted); margin-top: 2px;">
                  Pre-calibrated 100% whole foods required for Week 3 protocol compliance.
                </div>
              </div>

              <!-- Quick Header Action Buttons -->
              <div style="display: flex; align-items: center; gap: 8px;">
                <button class="gemini-btn gemini-btn-tonal" style="height: 36px; padding: 0 12px; font-size: 12px; font-weight: 800; border-radius: 10px; display: flex; align-items: center; gap: 4px;" onclick="copyGroceryListToClipboard()">
                  <span class="material-symbols-outlined" style="font-size: 16px;">content_copy</span>
                  <span>Share / Copy</span>
                </button>
                <button class="gemini-btn gemini-btn-primary" style="height: 36px; padding: 0 14px; font-size: 12px; font-weight: 800; border-radius: 10px; display: flex; align-items: center; gap: 4px;" onclick="addCustomGroceryPrompt()">
                  <span>＋ Add Item</span>
                </button>
              </div>
            </div>

            <!-- Progress Meter -->
            <div style="background: var(--gemini-surface-container); border: 1px solid var(--gemini-border-subtle); border-radius: 14px; padding: 12px 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 800; color: var(--gemini-text-muted); margin-bottom: 8px;">
                <span>SHOPPING PROGRESS</span>
                <span id="grocery-bought-counter" style="color: var(--gemini-vitality-emerald);">8 / 12 Items Bought (67%)</span>
              </div>
              <div style="height: 8px; background: rgba(0,0,0,0.06); border-radius: 9999px; overflow: hidden;">
                <div id="grocery-progress-bar" style="width: 67%; height: 100%; background: linear-gradient(90deg, #00C0FF, #00D06C); border-radius: 9999px; transition: width 0.3s ease;"></div>
              </div>
            </div>

            <!-- Interactive Grocery Checklist Grid -->
            <div id="weekly-grocery-checklist" style="display: flex; flex-direction: column; gap: 10px;">
              <!-- Dynamically populated by renderGroceryList() -->
            </div>

          </div>

          <!-- 5. MY KITCHEN & PANTRY INVENTORY -->
          <div class="gemini-card" style="border: 1.5px dashed var(--gemini-sparkle-blue); background: var(--gemini-surface-container); padding: 22px; border-radius: 22px; margin-bottom: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: 'Google Sans', sans-serif; font-size: 17px; font-weight: 800; color: var(--gemini-text-main); display: flex; align-items: center; gap: 8px;">
                  <span class="material-symbols-outlined" style="color: var(--gemini-sparkle-blue); font-size: 24px;">kitchen</span>
                  <span>My Kitchen & Pantry Inventory</span>
                </div>
                <div style="font-size: 12.5px; color: var(--gemini-text-muted); margin-top: 2px; line-height: 1.5;">
                  Manage stocked ingredients & quantities for zero grocery-run AI recipes.
                </div>
              </div>
              <button class="gemini-btn gemini-btn-primary" style="height: 38px; padding: 0 16px; font-size: 12.5px; font-weight: 800; border-radius: 12px;" onclick="openPantryModal()">
                + Manage Stock
              </button>
            </div>

            <!-- Pantry Chips Display with Quantities -->
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px;" id="pantry-chips-display">
              <!-- Dynamically populated by renderPantryDisplay() -->
            </div>
          </div>

        </div>
`;

// Replace subview-flow-week
const startIdx = html.indexOf("<!-- ---------------- SUB-VIEW 2: WEEK");
const endIdx = html.indexOf("<!-- ==================== 2. TAB: CHAT");

if (startIdx !== -1 && endIdx !== -1) {
  html = html.substring(0, startIdx) + weekMarkup.trim() + "\n\n      </section>\n\n      " + html.substring(endIdx);
  fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", html, "utf8");
  console.log("Successfully updated app.html with bug fixes and Weekly Clinical Grocery List!");
} else {
  console.log("Indices not found: start=", startIdx, "end=", endIdx);
}
