import React, { useState } from 'react';

interface GroceryItem {
  id: string;
  name: string;
  quantity: string;
}

interface CreateGroceryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (items: GroceryItem[]) => void;
  initialItems?: GroceryItem[];
  darkMode?: boolean;
}

export const CreateGroceryModal: React.FC<CreateGroceryModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialItems = [
    { id: '1', name: 'Pasture-Raised Eggs', quantity: '12 count' },
    { id: '2', name: 'Extra Virgin Olive Oil', quantity: '500 ml' },
    { id: '3', name: 'Organic Tri-Color Quinoa', quantity: '1 kg' },
    { id: '4', name: 'Pink Himalayan Rock Salt', quantity: '250 g' },
  ],
  darkMode = true,
}) => {
  const [items, setItems] = useState<GroceryItem[]>(initialItems);
  const [nameInput, setNameInput] = useState('');
  const [qtyInput, setQtyInput] = useState('');

  if (!isOpen) return null;

  const quickStaples = [
    { name: 'Avocados', qty: '4 count' },
    { name: 'Baby Spinach', qty: '2 bags' },
    { name: 'Wild Sockeye Salmon', qty: '500g' },
    { name: 'Grass-Fed Beef', qty: '400g' },
    { name: 'Greek Yogurt (0% fat)', qty: '1 tub' },
    { name: 'Chia Seeds', qty: '200g' },
    { name: 'Raw Walnuts', qty: '150g' },
    { name: 'Sourdough Bread', qty: '1 loaf' },
  ];

  const handleAddItem = (name?: string, qty?: string) => {
    const itemName = name || nameInput.trim();
    const itemQty = qty || qtyInput.trim() || '1 standard pack';

    if (!itemName) return;

    const newItem: GroceryItem = {
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
    onSave(items);
    onClose();
  };

  const textTitle = darkMode ? 'text-white' : 'text-slate-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
  const inputCls = darkMode
    ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-[#00FF9D]'
    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500';
  const chipCls = darkMode
    ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 font-medium';
  const itemRowCls = darkMode
    ? 'bg-slate-900/80 border-slate-800 text-slate-200'
    : 'bg-slate-50 border-slate-200 text-slate-800';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full max-w-md rounded-2xl p-5 border shadow-2xl transition-all ${
          darkMode ? 'bg-[#0E1318] text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between pb-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <div>
              <h3 className={`text-sm font-bold tracking-tight ${textTitle}`}>Create Your Grocery / Kitchen Inventory</h3>
              <p className={`text-[11px] ${textSub}`}>Add ingredients and quantities available in your kitchen</p>
            </div>
          </div>
          <button onClick={onClose} className={`p-1 rounded-lg ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
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
              className={`flex-1 py-2 px-3 rounded-xl border text-xs focus:outline-none ${inputCls}`}
            />
            <input
              type="text"
              placeholder="Qty (e.g. 500g)"
              value={qtyInput}
              onChange={(e) => setQtyInput(e.target.value)}
              className={`w-24 py-2 px-2.5 rounded-xl border text-xs focus:outline-none ${inputCls}`}
            />
            <button
              onClick={() => handleAddItem()}
              className="py-2 px-3 rounded-xl bg-[#00FF9D] text-slate-950 font-bold text-xs hover:bg-[#00FF9D]/90 active:scale-95 transition-all shadow-sm"
            >
              + Add
            </button>
          </div>

          {/* Quick Common Staples */}
          <div className="space-y-1 pt-1">
            <span className={`text-[10px] uppercase font-bold tracking-wider block ${textSub}`}>
              Tap to add common kitchen staples:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap max-h-20 overflow-y-auto no-scrollbar">
              {quickStaples.map((staple) => (
                <button
                  key={staple.name}
                  onClick={() => handleAddItem(staple.name, staple.qty)}
                  className={`py-1 px-2.5 rounded-lg border text-[11px] active:scale-95 transition-all ${chipCls}`}
                >
                  + {staple.name} ({staple.qty})
                </button>
              ))}
            </div>
          </div>

          {/* Current Inventory List */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-[#00FF9D] tracking-wider">
                In My Kitchen Right Now ({items.length}):
              </span>
              <span className={`text-[10px] ${textSub}`}>Tap ✕ to remove</span>
            </div>

            <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
              {items.length === 0 ? (
                <div className={`p-4 text-center text-xs ${textSub}`}>
                  Your kitchen inventory is currently empty. Add items above!
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className={`p-2 rounded-xl border flex items-center justify-between text-xs ${itemRowCls}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF9D] font-bold">✓</span>
                      <span className={`font-bold ${textTitle}`}>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono ${textSub}`}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className={`text-slate-400 hover:text-rose-500 font-bold px-1 rounded`}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`pt-2 border-t flex items-center gap-2 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <button
            onClick={onClose}
            className={`flex-1 py-2.5 rounded-xl border text-xs font-bold ${
              darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-slate-300 text-slate-700 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF9D] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_12px_rgba(0,255,157,0.25)]"
          >
            Save Kitchen Inventory
          </button>
        </div>
      </div>
    </div>
  );
};
