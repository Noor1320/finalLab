"use client";
import { getItems, deleteItem } from '../utils/crud';
import Link from 'next/link';
import styles from './page.module.css'; // Importing CSS module styles

export default function HomePage() {
  const items = getItems();

  const handleDelete = (id: number) => {
    deleteItem(id);
    window.location.reload(); // Refresh the page to reflect changes
  };

  return (
    <div className={styles.container}> {/* Apply styles to the container */}
      <h1 className={styles.title}>Books List</h1> {/* Apply styles to the title */}
      <ul className={styles.itemList}> {/* Apply styles to the list */}
        {items.map((item) => (
          <li key={item.id} className={styles.item}> {/* Apply styles to each item */}
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button 
              onClick={() => handleDelete(item.id)} 
              className={styles.button}> {/* Apply styles to the button */}
              Delete
            </button>
            <Link href={`/edit/${item.id}`} className={styles.link}> {/* Apply styles to the link */}
              Edit
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/create">
        <button className={styles.addButton}>Add New Item</button> {/* Apply styles to the Add button */}
      </Link>
    </div>
  );
}
