import { useState } from "react";
import "./styles.css";
interface Props {
  handleItemUse: (id: number) => void;
}

interface Item {
  id: number;
  name: string;
  description: string;
}

function Items({ handleItemUse }: Props) {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Health Potion", description: "Restores 50 HP" },
    { id: 2, name: "Mana Potion", description: "Restores 30 MP" },
    { id: 3, name: "Bomb", description: "Deals 40 damage to all enemies" },
  ]);

  const handleUse = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    handleItemUse(id);
  };

  return (
    <div className="card">
      <h2 className="card-header">Items</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            <span>
              {item.name}: {item.description}
            </span>
            {/*<button
              className="btn btn-secondary"
              onClick={() => handleUse(item.id)}
            >
              Use
            </button>*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
