import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { addItem, fetchItems, $itemsStore } from './store';
import "./null.css"
import '/src/App.css'

const App = () => {
  const items = useStore($itemsStore);

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    addItem(newItem);
  };

  useEffect(() => {
    fetchItems(); 
  }, []);

  return (
    <div className='content__container'>
      <div className='form__tig'>
      <h1>Список элементов</h1>
      <p>Простой способ добавления items</p>
      <button onClick={handleAddItem}>Добавить элемент</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
       
      </ul>
      </div> 
    </div>
  );
};

export default App;
