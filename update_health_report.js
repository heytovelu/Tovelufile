const fs = require("fs");

let appHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");

// Check if renal already exists
if (!appHtml.includes("Renal &amp; Cellular Filtration")) {
  const fullBiomarkersToAdd = `
      <!-- 5. Renal & Cellular Health -->
      <div class="bg-surface-container-lowest rounded-xl p-container-padding shadow-sm flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">water_ph</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-body-lg text-body-lg text-on-surface font-semibold">Renal &amp; Cellular Filtration</h3>
            <span class="font-label-sm text-label-sm text-optimal-green uppercase font-semibold">Optimal</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-1">
          <div class="flex flex-col bg-surface-container-low p-3 rounded-lg">
            <span class="font-label-sm text-label-sm text-on-surface-variant">eGFR (Filtration)</span>
            <span class="font-data-metric text-data-metric text-on-surface">> 90 <span class="text-[12px] font-normal text-on-surface-variant">mL/min</span></span>
          </div>
          <div class="flex flex-col bg-surface-container-low p-3 rounded-lg">
            <span class="font-label-sm text-label-sm text-on-surface-variant">Serum Creatinine</span>
            <span class="font-data-metric text-data-metric text-on-surface">0.85 <span class="text-[12px] font-normal text-on-surface-variant">mg/dL</span></span>
          </div>
        </div>
        <div class="bg-primary/5 p-4 rounded-lg">
          <h4 class="font-label-sm text-label-sm text-primary uppercase mb-1 font-bold">Doctor's Rationale</h4>
          <p class="font-body-md text-[13px] text-on-surface-variant">Glomerular filtration rate is preserved. Blood pressure optimization and mineralized hydration prevent renal microvascular shear stress.</p>
        </div>
      </div>

      <!-- 6. Micronutrient & Cellular Hormones -->
      <div class="bg-surface-container-lowest rounded-xl p-container-padding shadow-sm flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">vital_signs</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-body-lg text-body-lg text-on-surface font-semibold">Micronutrient &amp; Hormones</h3>
            <span class="font-label-sm text-label-sm text-optimal-green uppercase font-semibold">Optimal</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-1">
          <div class="flex flex-col bg-surface-container-low p-3 rounded-lg">
            <span class="font-label-sm text-label-sm text-on-surface-variant">Vitamin D3</span>
            <span class="font-data-metric text-data-metric text-on-surface">62 <span class="text-[12px] font-normal text-on-surface-variant">ng/mL</span></span>
          </div>
          <div class="flex flex-col bg-surface-container-low p-3 rounded-lg">
            <span class="font-label-sm text-label-sm text-on-surface-variant">Vitamin B12</span>
            <span class="font-data-metric text-data-metric text-on-surface">780 <span class="text-[12px] font-normal text-on-surface-variant">pg/mL</span></span>
          </div>
        </div>
        <div class="bg-primary/5 p-4 rounded-lg">
          <h4 class="font-label-sm text-label-sm text-primary uppercase mb-1 font-bold">Doctor's Rationale</h4>
          <p class="font-body-md text-[13px] text-on-surface-variant">Vitamin D3 at 62 ng/mL drives optimal genetic transcription, immune modulation, and bone remineralization with healthy morning sunlight.</p>
        </div>
      </div>

      <!-- 7. Wearable Autonomic Index -->
      <div class="bg-surface-container-lowest rounded-xl p-container-padding shadow-sm flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">monitor_heart</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-body-lg text-body-lg text-on-surface font-semibold">Wearable Autonomic Index</h3>
            <span class="font-label-sm text-label-sm text-optimal-green uppercase font-semibold">Synchronized</span>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2 mt-1">
          <div class="flex flex-col bg-surface-container-low p-2.5 rounded-lg text-center">
            <span class="font-label-sm text-[10px] text-on-surface-variant uppercase">Resting HR</span>
            <span class="font-data-metric text-[18px] text-on-surface">54 <span class="text-[10px] font-normal text-on-surface-variant">bpm</span></span>
          </div>
          <div class="flex flex-col bg-surface-container-low p-2.5 rounded-lg text-center">
            <span class="font-label-sm text-[10px] text-on-surface-variant uppercase">HRV (SDNN)</span>
            <span class="font-data-metric text-[18px] text-on-surface">78 <span class="text-[10px] font-normal text-on-surface-variant">ms</span></span>
          </div>
          <div class="flex flex-col bg-surface-container-low p-2.5 rounded-lg text-center">
            <span class="font-label-sm text-[10px] text-on-surface-variant uppercase">Deep Sleep</span>
            <span class="font-data-metric text-[18px] text-on-surface">1h 48m</span>
          </div>
        </div>
        <div class="bg-primary/5 p-4 rounded-lg">
          <h4 class="font-label-sm text-label-sm text-primary uppercase mb-1 font-bold">Doctor's Rationale</h4>
          <p class="font-body-md text-[13px] text-on-surface-variant">High heart rate variability (78 ms) indicates strong parasympathetic nervous tone, rapid autonomic recovery, and low systemic stress.</p>
        </div>
      </div>
  `;

  // Insert right before Diagnostic Triage Section
  appHtml = appHtml.replace(
    '<!-- Diagnostic Triage Section -->',
    fullBiomarkersToAdd + '\n<!-- Diagnostic Triage Section -->'
  );

  fs.writeFileSync("/media/nikita/New Volume/Tovelufile/app.html", appHtml, "utf8");
  console.log("Successfully expanded HEALTH section to 100% full health report!");
} else {
  console.log("Already updated!");
}
