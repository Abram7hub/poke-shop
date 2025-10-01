import React from "react";
import { useCart } from "../store/cart";

export default function Cart() {
  const { items, inc, dec, remove, clear, total } = useCart((s) => ({
    items: s.items, inc: s.inc, dec: s.dec, remove: s.remove, clear: s.clear, total: s.total,
  }));
  const rows = Object.values(items);

  if (rows.length === 0) return (
    <div className="empty">
      Twój koszyk jest pusty. Wróć na stronę główną i dodaj Pokemony!
    </div>
  );

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
        <h2>Koszyk</h2>
        <button className="btn btn-ghost" onClick={clear}>Wyczyść koszyk</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Cena</th>
            <th>Ilość</th>
            <th>Suma</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((it) => (
            <tr key={it.id}>
              <td style={{display:'flex', alignItems:'center', gap:12}}>
                <img src={it.image} alt={it.name} width={48} height={48} />
                <span style={{textTransform:'capitalize'}}>{it.name}</span>
              </td>
              <td>{it.price.toFixed(2)} zł</td>
              <td>
                <div className="row">
                  <button className="btn btn-ghost" onClick={() => dec(it.id)}>-</button>
                  <strong>{it.qty}</strong>
                  <button className="btn btn-ghost" onClick={() => inc(it.id)}>+</button>
                </div>
              </td>
              <td>{(it.price * it.qty).toFixed(2)} zł</td>
              <td><button className="btn btn-ghost" onClick={() => remove(it.id)}>Usuń</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{textAlign:'right'}}>Razem:</td>
            <td colSpan={2}>{total().toFixed(2)} zł</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}