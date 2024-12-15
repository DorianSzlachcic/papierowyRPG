import { useState } from "react";
import "./styles.css";

interface Item {
  id: number;
  name: string;
  description: string;
}

function Items() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Health Potion", description: "Restores 50 HP" },
    { id: 2, name: "Mana Potion", description: "Restores 30 MP" },
    { id: 3, name: "Bomb", description: "Deals 40 damage to all enemies" },
  ]);

  const handleUse = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="card">
      <h2 className="card-header">Items</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            <form className="item-form">
              <div className="form-group">
                <label className="form-label">
                  <b>{item.name}</b>
                </label>
                <p className="form-description">{item.description}</p>
              </div>
              {/*<button
                type="button"
                className="btn btn-primary"
                onClick={() => handleUse(item.id)}
              >
                Use
              </button>*/}
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
