import React, { useState } from 'react';

export interface KitchenIngredient {
  id: string;
  name: string;
  quantity: string;
}

interface CreateGroceryModalProps {
  isOpen: boolean;
  onClose: () => void;
  kitchenItems: KitchenIngredient[];
  onUpdateKitchen: (items: KitchenIngredient[]) => void;
  darkMode?: boolean;
}

export const CreateGroceryModal: React.FC<CreateGroceryModalProps> = ({
  isOpen,
  onClose,
  kitchenItems,
  onUpdateKitchen,
  darkMode = true,
}) => {
  const [items, setItems] = useState<KitchenIngredient[]>(kitchenItems);
  const [nameInput, setNameInput] = useState('');
  const [qtyInput, setQtyInput] = useState('');
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const quickStaples = [
    { name: 'Pasture Eggs', qty: '12 count' },
    { name: 'Wild Sockeye Salmon', qty: '500g' },
    { name: 'Extra Virgin Olive Oil', qty: '500ml' },
    { name: 'Baby Spinach', qty: '2 bags' },
    { name: 'Greek Yogurt (0% Sugar)', qty: '500g' },
    { name: 'Hass Avocados', qty: '4 count' },
    { name: 'Broccoli Crowns', qty: '2 heads' },
    { name: 'Grass-Fed Sirloin', qty: '450g' },
    { name: 'Raw Walnuts', qty: '150g' },
    { name: 'Chia & Flax Seeds', qty: '100g' },
  ];

  const handleAddItem = (name?: string, qty?: string) => {
    const itemName = name || nameInput.trim();
    const itemQty = qty || qtyInput.trim() || '1 pack';
    if (!itemName) return;

    const newItem: KitchenIngredient = {
      id: `kit-${Date.now()}-${Math.random()}`,
      name: itemName,
      quantity: itemQty,
    };

    setItems((prev) => [newItem, ...prev]);
    if (!name) {
      setNameInput('');
      setQtyInput('');
    }
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    onUpdateKitchen(items);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Create Your Grocery / Kitchen Inventory</h3>
              <p className="text-[11px] text-slate-400">Add ingredients and quantities available in your kitchen</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg">
            ✕
          </button>
        </div>

        {/* Input Form */}
        <div className="py-3 space-y-2.5">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ingredient name (e.g. Eggs, Salmon)"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
            />
            <input
              type="text"
              placeholder="Qty (e.g. 500g)"
              value={qtyInput}
              onChange={(e) => setQtyInput(e.target.value)}
              className="w-24 py-2 px-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF9D]"
            />
            <button
              onClick={() => handleAddItem()}
              className="py-2 px-3 rounded-xl bg-[#00FF9D] text-slate-950 font-bold text-xs hover:bg-[#00FF9D]/90 active:scale-95 transition-all"
            >
              + Add
            </button>
          </div>

          {/* Quick Common Staples */}
          <div className="space-y-1 pt-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Tap to add common kitchen staples:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap max-h-20 overflow-y-auto no-scrollbar">
              {quickStaples.map((staple) => (
                <button
                  key={staple.name}
                  onClick={() => handleAddItem(staple.name, staple.qty)}
                  className="py-1 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 active:scale-95 transition-all"
                >
                  + {staple.name} ({staple.qty})
                </button>
              ))}
            </div>
          </div>

          {/* Current Inventory List */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#00FF9D] tracking-wider">
                In My Kitchen Right Now ({items.length}):
              </span>
              <span className="text-[10px] text-slate-500">Tap ✕ to remove</span>
            </div>

            <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
              {items.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-500">
                  No items listed yet. Add what is in your fridge or pantry!
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-200 font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-slate-500 hover:text-rose-400 p-0.5"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2">
            {saveToast ? (
              <div className="p-3 rounded-xl bg-[#00FF9D]/20 border border-[#00FF9D] text-center text-xs font-bold text-[#00FF9D] animate-bounce">
                ✅ Kitchen Inventory Saved! Weekly Plan Re-balanced.
              </div>
            ) : (
              <button
                onClick={handleSave}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#00FF9D] text-slate-950 hover:bg-[#00FF9D]/90 active:scale-98 transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)]"
              >
                Save Kitchen Inventory
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
