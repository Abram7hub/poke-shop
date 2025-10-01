import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: ({}),
  add: (p) => set((state) => {
    const cur = state.items[p.id] || { ...p, qty: 0 };
    return { items: { ...state.items, [p.id]: { ...cur, qty: cur.qty + 1 } } };
  }),
  remove: (id) => set((state) => {
    const copy = { ...state.items }; delete copy[id];
    return { items: copy };
  }),
  inc: (id) => set((state) => ({ items: { ...state.items, [id]: { ...state.items[id], qty: state.items[id].qty + 1 } } })),
  dec: (id) => set((state) => {
    const it = state.items[id]; if (!it) return {};
    const next = it.qty - 1;
    if (next <= 0) { const copy = { ...state.items }; delete copy[id]; return { items: copy }; }
    return { items: { ...state.items, [id]: { ...it, qty: next } } };
  }),
  clear: () => set({ items: {} }),
  count: () => Object.values(get().items).reduce((s, it) => s + it.qty, 0),
  total: () => Object.values(get().items).reduce((s, it) => s + it.qty * it.price, 0),
}));