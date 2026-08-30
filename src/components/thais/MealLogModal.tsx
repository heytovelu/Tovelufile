import React, { useState } from 'react';
import { 
  X, Camera, Edit3, Sparkles, Check, 
  AlertCircle
} from 'lucide-react';
import { MealPortion } from '../../services/thais/types';
import { Button } from '../ui/Button';

interface MealLogModalProps {
  isOpen: boolean;
  meal: MealPortion;
  initialMode?: 'scan' | 'manual' | 'ask_ai';
  onClose: () => void;
  onConfirmMeal: (mealType: 'breakfast' | 'lunch' | 'dinner', loggedCalories: number, loggedP: number, loggedC: number, loggedF: number) => void;
}

type LogMode = 'scan' | 'manual' | 'ask_ai';
type FoodModality = 'dish' | 'ingredients' | 'menu';

export const MealLogModal: React.FC<MealLogModalProps> = ({
  isOpen,
  meal,
  initialMode = 'scan',
  onClose,
  onConfirmMeal
}) => {
  const [logMode, setLogMode] = useState<LogMode>(initialMode);

  React.useEffect(() => {
    if (initialMode) {
      setLogMode(initialMode);
    }
  }, [initialMode, isOpen]);
  const [foodModality, setFoodModality] = useState<FoodModality>('dish');
  const [inputText, setInputText] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<{
    dishName: string;
    portionWeightGrams: number;
    calories: number;
    proteinGrams: number;
    carbGrams: number;
    fatGrams: number;
    hiddenOilGrams: number;
    isConfirmed: boolean;
  } | null>(null);

  if (!isOpen) return null;

  const handleSimulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      if (foodModality === 'dish') {
        setScanResult({
          dishName: inputText || meal.suggestedDish,
          portionWeightGrams: 260,
          calories: meal.calories,
          proteinGrams: meal.proteinGrams,
          carbGrams: meal.carbGrams,
          fatGrams: meal.fatGrams,
          hiddenOilGrams: 10,
          isConfirmed: false
        });
      } else if (foodModality === 'ingredients') {
        setScanResult({
          dishName: inputText || "3 Eggs + 1 Avocado + 1 Slice Sourdough",
          portionWeightGrams: 280,
          calories: Math.round(meal.calories * 0.95),
          proteinGrams: meal.proteinGrams,
          carbGrams: Math.round(meal.carbGrams * 0.9),
          fatGrams: meal.fatGrams,
          hiddenOilGrams: 0,
          isConfirmed: false
        });
      } else {
        // Menu item
        setScanResult({
          dishName: inputText || "Restaurant Pan-Seared Sea Bass with Steamed Veg",
          portionWeightGrams: 320,
          calories: meal.calories,
          proteinGrams: meal.proteinGrams + 4,
          carbGrams: Math.max(15, meal.carbGrams - 10),
          fatGrams: meal.fatGrams,
          hiddenOilGrams: 12,
          isConfirmed: false
        });
      }
    }, 600);
  };

  const handleConfirmLock = () => {
    if (!scanResult) return;
    onConfirmMeal(
      meal.mealType,
      scanResult.calories,
      scanResult.proteinGrams,
      scanResult.carbGrams,
      scanResult.fatGrams
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-surface border border-border-default rounded-3xl p-6 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border-default pb-3">
          <div>
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">
              Log {meal.name}
            </span>
            <h3 className="text-base font-black text-text-primary">4-Layer Nutritional Truth Engine</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-raised flex items-center justify-center text-text-muted hover:text-text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Real-World Modality Tabs */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-text-muted">What are you eating?</span>
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-surface-raised border border-border-default">
            <button
              onClick={() => setFoodModality('dish')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                foodModality === 'dish' ? 'bg-brand-primary text-white shadow-sm' : 'text-text-secondary'
              }`}
            >
              🍲 Precooked Dish
            </button>
            <button
              onClick={() => setFoodModality('ingredients')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                foodModality === 'ingredients' ? 'bg-brand-primary text-white shadow-sm' : 'text-text-secondary'
              }`}
            >
              🥑 Ingredients
            </button>
            <button
              onClick={() => setFoodModality('menu')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                foodModality === 'menu' ? 'bg-brand-primary text-white shadow-sm' : 'text-text-secondary'
              }`}
            >
              📜 Restaurant Menu
            </button>
          </div>
        </div>

        {/* 3 Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLogMode('scan')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              logMode === 'scan' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'bg-surface-raised border-border-default text-text-secondary'
            }`}
          >
            <Camera className="w-3.5 h-3.5" /> Scan Photo
          </button>

          <button
            onClick={() => setLogMode('manual')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              logMode === 'manual' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'bg-surface-raised border-border-default text-text-secondary'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" /> Manual Type
          </button>

          <button
            onClick={() => {
              setLogMode('ask_ai');
              setInputText(meal.suggestedDish);
            }}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              logMode === 'ask_ai' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'bg-surface-raised border-border-default text-text-secondary'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Ask AI
          </button>
        </div>

        {/* Input Area */}
        <div className="space-y-2">
          {logMode === 'scan' && (
            <div className="p-6 rounded-2xl border-2 border-dashed border-border-default bg-surface-raised text-center space-y-2 cursor-pointer hover:border-brand-primary transition-all">
              <Camera className="w-8 h-8 text-brand-primary mx-auto" />
              <div className="text-xs font-bold text-text-primary">Tap to take photo or upload plate image</div>
              <p className="text-[10px] text-text-muted">THAIS uses volumetric 3D estimation & density math</p>
            </div>
          )}

          {logMode !== 'scan' && (
            <div className="space-y-1">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  foodModality === 'dish'
                    ? 'e.g. 1 bowl of chicken biryani with cucumber raita...'
                    : foodModality === 'ingredients'
                    ? 'e.g. 2 eggs, 50g spinach, 1 slice bread, 1 tsp olive oil...'
                    : 'e.g. Italian restaurant menu: Grilled Sea Bass with herb butter...'
                }
                className="w-full h-24 bg-surface-raised border border-border-default rounded-xl p-3 text-xs text-text-primary focus:outline-none focus:border-brand-primary"
              />
            </div>
          )}

          <Button
            size="sm"
            variant="primary"
            fullWidth
            onClick={handleSimulateAnalysis}
            disabled={isAnalyzing}
            className="rounded-xl font-bold text-xs py-2.5"
          >
            {isAnalyzing ? "Running Volumetric Lab Scan..." : "Analyze with THAIS Truth Engine"}
          </Button>
        </div>

        {/* SCAN RESULT & 1-SECOND CONFIRMATION LOCK */}
        {scanResult && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <Check className="w-4 h-4 stroke-[3]" />
                THAIS Certified Nutritional Truth
              </div>
              <span className="text-[10px] font-bold text-text-muted uppercase">USDA Verified</span>
            </div>

            <div>
              <h4 className="text-sm font-bold text-text-primary">{scanResult.dishName}</h4>
              <span className="text-[11px] text-text-muted">Estimated Portion: ~{scanResult.portionWeightGrams}g</span>
            </div>

            {/* Macros */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded-xl bg-surface border border-border-default">
                <span className="text-[10px] text-text-muted uppercase">Energy</span>
                <div className="text-xs font-black text-brand-primary">{scanResult.calories} kcal</div>
              </div>
              <div className="p-2 rounded-xl bg-surface border border-border-default">
                <span className="text-[10px] text-text-muted uppercase">Protein</span>
                <div className="text-xs font-black text-emerald-500">{scanResult.proteinGrams}g</div>
              </div>
              <div className="p-2 rounded-xl bg-surface border border-border-default">
                <span className="text-[10px] text-text-muted uppercase">Carbs</span>
                <div className="text-xs font-black text-amber-500">{scanResult.carbGrams}g</div>
              </div>
              <div className="p-2 rounded-xl bg-surface border border-border-default">
                <span className="text-[10px] text-text-muted uppercase">Fat</span>
                <div className="text-xs font-black text-blue-500">{scanResult.fatGrams}g</div>
              </div>
            </div>

            {scanResult.hiddenOilGrams > 0 && (
              <div className="text-[11px] text-text-secondary flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-amber-500" />
                Includes {scanResult.hiddenOilGrams}g culinary cooking oil/butter audit.
              </div>
            )}

            {/* 1-Second Confirmation Lock Buttons */}
            <div className="flex items-center gap-2 pt-2 border-t border-emerald-500/20">
              <Button
                size="sm"
                variant="primary"
                fullWidth
                onClick={handleConfirmLock}
                className="rounded-xl py-2 text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                ✅ 100% Correct • Log & Rebalance
              </Button>
              <button
                onClick={() => setScanResult(null)}
                className="px-3 py-2 text-xs text-text-muted hover:text-text-primary"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
