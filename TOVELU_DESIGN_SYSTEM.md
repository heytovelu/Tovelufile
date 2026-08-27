# TOVELU UNIVERSAL DESIGN SYSTEM (TDS-1.0)
### The Constitutional Design Language for 8.15 Billion Humans
**Status: RATIFIED & LOCKED**  
**Design Lead / Authority: Tovelu Executive Brand & Clinical Design Council**  
**Supreme Constitutional Law: LAW-001 (Scientific, Medical & Legal Verification)**

---

## 1. VISION & CORE PRINCIPLES

The Tovelu Design System (TDS-1.0) is the visual, interactive, and clinical design language for the world’s premier health brand. Engineered with the structural rigor of **Google Material 3 (M3)**, the aesthetic reductionism of **Apple Human Interface Guidelines (HIG)**, and the clinical clarity of the **World Health Organization (ICD-11)**.

### Core Constitutional Tenets:
1. **Clinical Authority (LAW-001):** Every visual component, color state, and metric represents peer-reviewed medical science.
2. **5th-Grade Global Accessibility:** 100% plain language, visual cards, and zero clinical jargon in primary user interactions.
3. **Zero Cognitive Friction:** Never require typing when a 1-tap visual picker exists. 0% survey drop-off.
4. **Day Porcelain Default:** Clean, airy, medical-grade porcelain white (`#F8FAFC`) with deep ink typography and bio-emerald vitality indicators.
5. **100-Year Timeless Geometry:** Humanist geometry based on the biological mitosis/cell genesis symbol and continuous G2 squircle curves.

---

## 2. ATOMIC TOKENS & FOUNDATIONS

### 2.1 Color Palette & Tonal Matrix
* **Primary (Azure Authority):** `#1D4ED8` (Hover: `#1E40AF`, Container: `#EFF6FF`, Border: `#BFDBFE`)
* **Secondary (Luminous Intelligence):** `#0284C7` (Sky Blue, Container: `#E0F2FE`)
* **Tertiary / Vitality (Bio-Emerald):** `#059669` / `#10B981` (Container: `#ECFDF5`)
* **Solar Warning / Manageable:** `#D97706` (Container: `#FFFBEB`)
* **Safety Crimson (Hospital Only):** `#DC2626` (Container: `#FEF2F2`)
* **Surfaces (Light Theme - Default):**
  * Canvas: `#F8FAFC`
  * Surface: `#FFFFFF`
  * Elevated: `#F1F5F9`
  * Border: `#E2E8F0`
  * Text Main: `#0F172A` (WCAG AAA Contrast Ratio: 16.5:1)
  * Text Muted: `#475569`
* **Surfaces (Dark Theme - Night Obsidian):**
  * Canvas: `#080B11`
  * Surface: `#0E131F`
  * Elevated: `#151D2E`
  * Border: `#1F2C42`
  * Text Main: `#F8FAFC`

### 2.2 Typography Scale (15 Levels)
* **Wordmark:** `Ubuntu 500` (Humanist modern lowercase geometry)
* **Headings & Display:** `Plus Jakarta Sans` (800 / 700 / 600)
* **Body, Data & Clinical UI:** `Inter` (400 / 500 / 600)

| Scale Step | Font Family | Weight | Size | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Large** | Plus Jakarta Sans | 800 | 44px | 52px | -0.03em |
| **Display Medium** | Plus Jakarta Sans | 800 | 36px | 44px | -0.03em |
| **Display Small** | Plus Jakarta Sans | 800 | 30px | 38px | -0.025em |
| **Headline Large** | Plus Jakarta Sans | 800 | 26px | 34px | -0.02em |
| **Headline Medium**| Plus Jakarta Sans | 700 | 22px | 28px | -0.015em |
| **Headline Small** | Plus Jakarta Sans | 700 | 18px | 24px | -0.01em |
| **Title Large** | Plus Jakarta Sans | 700 | 16px | 22px | 0em |
| **Title Medium** | Plus Jakarta Sans | 600 | 15px | 20px | 0em |
| **Title Small** | Plus Jakarta Sans | 600 | 14px | 18px | 0em |
| **Body Large** | Inter | 400 / 500 | 16px | 24px | 0em |
| **Body Medium** | Inter | 400 / 500 | 14px | 20px | 0em |
| **Body Small** | Inter | 400 / 500 | 12px | 16px | 0.01em |
| **Label Large** | Inter | 700 | 14px | 18px | 0.02em |
| **Label Medium** | Inter | 700 | 12px | 16px | 0.04em |
| **Label Small (Micro)**| Inter | 800 | 10px | 14px | 0.06em (Uppercase) |

### 2.3 8-Point Spatial Grid
* `space-1: 4px` | `space-2: 8px` | `space-3: 12px` | `space-4: 16px`
* `space-5: 20px` | `space-6: 24px` | `space-8: 32px` | `space-10: 40px`
* `space-12: 48px` | `space-16: 64px` | `space-24: 96px`

### 2.4 Shape & Corner Continuous Curves (Squircles)
* `radius-none: 0px` | `radius-xs: 4px` | `radius-sm: 8px`
* `radius-md: 14px` | `radius-lg: 20px` | `radius-xl: 28px` | `radius-full: 9999px`

---

## 3. CORE COMPONENT CATALOG

### 3.1 Buttons & Triggers
* **Filled Primary Button (`.tds-btn-primary`):** 48px minimum touch target, royal blue with soft shadow, active depress scale `0.985`.
* **Tonal Button (`.tds-btn-tonal`):** Surface elevated with crisp 1px border.
* **Outlined Button (`.tds-btn-outline`):** Clean border with transparent fill.
* **Back Button (`.tds-btn-back`):** Tactile `‹ Back` navigation trigger.

### 3.2 1-Tap Pickers & Form Controls
* **Preset Time Chips (`.tds-preset-chip`):** Instant 1-tap pill selectors for common wake/sleep times.
* **Wheel Dropdowns (`.tds-wheel-select`):** Exact 3-unit dropdowns for Date of Birth & custom times.
* **Option Cards (Single & Multi):** Elevated cards with icon, title, description, and dynamic checkmark circles (`.tds-option-card`).
* **Custom Tag Input Box:** Integrated tag generator for manual custom inputs (e.g. rare food allergies).

### 3.3 Health Intelligence Specialized Components
* **Biomarker Progress Gauges (`.tds-gauge`):** Multi-segmented visual meters for BMR, TDEE, and Glycemic curves.
* **Epigenetic DNAm Longevity Meter (`.tds-epigenetic-meter`):** Dual comparative trajectory visualizing biological years saved.
* **3-Column Diagnostic Triage Matrix (`.tds-triage-grid`):** 
  * Col 1: Bio-Emerald (100% Solvable by Tovelu).
  * Col 2: Solar Amber (% Manageable + Doctor Review).
  * Col 3: Crimson (100% Doctor / Surgical Care Only).
* **Circadian Solar Timeline Nodes (`.tds-circadian-timeline`):** Synchronized solar schedule with morning sunlight, cortisol spike, and melatonin shield.
* **Precision 3-Meal Cards (`.tds-meal-card`):** Macronutrient pills, calorie tags, and cultural whole-food ingredient checklist.
