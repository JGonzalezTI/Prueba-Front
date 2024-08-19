'use client'

import '@cart/Cart.module.scss';


import { useCartStore } from '@/store/cartStore';
import React from 'react';

const Cart: React.FC = () => {
  const { items, removeItem, updateItemQuantity } = useCartStore();
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Suponiendo que el descuento es un valor fijo, si se aplica un descuento basado en porcentaje o en alguna otra lógica, ajusta la fórmula.
  const discount = 0.1 * subtotal; // Descuento del 10%
  const total = subtotal - discount;

  console.log('items', items)

  // Función para manejar la actualización de la cantidad
  const updateCartHandler = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Evitar cantidades menores a 1
    updateItemQuantity(itemId, newQuantity);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-content">
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className="cart-item">
                    <td className="remove-column">
                      <i onClick={() => removeItem(item.id)} className="remove-button">
                        <img src='/close.svg' alt='Remove' />
                      </i>
                    </td>
                    <td className="image-column">
                      <img src={item.image} alt={item.name} className="item-image" />
                    </td>
                    <td className="details-column">
                      <div className="item-details">
                        <div className='name-block'><p>{item.name}</p>
                        </div>

                        <p>Price: ${item.price}</p>
                        <div className="quantity-controls">
                          <i
                            className="fas fa-minus-circle"
                            onClick={() => updateCartHandler(item.id, item.quantity - 1)}
                          >
                            -
                          </i>
                          <span>{item.quantity}</span>
                          <i
                            className="fas fa-plus-circle"
                            onClick={() => updateCartHandler(item.id, item.quantity + 1)}
                          >
                            +
                          </i>
                        </div>
                      </div>
                    </td>
                    <td className="subtotal-column">
                      <p className="item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
              
          <div className='buttons-cart'>
            <button className="buttons-return">
              <img src='/row-left.svg' alt='Return to Shop' /> Return to Shop
            </button>
            <button className="updateCheckout">Update Cart</button>
          </div>
            </table>
          
          </div>


          <div className="cart-totals">
            <h3>Cart Totals</h3>
            <ul>
              <li>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </li>
              <li>
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </li>
              <li className="total-row">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </li>
            </ul>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );

};

export default Cart;
