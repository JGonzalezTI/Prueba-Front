
import { useCartStore } from '@/store/cartStore';
import React from 'react';



const Cart: React.FC = () => {
  const { items, removeItem, updateItemQuantity } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Función para manejar la actualización de la cantidad
  const updateCartHandler = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Evitar cantidades menores a 1
    updateItemQuantity(itemId, newQuantity);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '10px' }} />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div>
                  <i
                    className="fas fa-minus-circle"
                    onClick={() => updateCartHandler(item.id, item.quantity - 1)}
                    style={{ cursor: 'pointer', marginRight: '5px' }}
                  ></i>
                  <span>{item.quantity}</span>
                  <i
                    className="fas fa-plus-circle"
                    onClick={() => updateCartHandler(item.id, item.quantity + 1)}
                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                  ></i>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </div>
          ))}
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button style={{ padding: '10px 20px' }}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
