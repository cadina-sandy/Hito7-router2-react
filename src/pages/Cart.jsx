import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { token } = useContext(UserContext);
  const { cart, agregarPizza, disminuirCantidad, total } = useContext(CartContext);

  return (
    <section className="cart">
      <h1>Detalles del pedido:</h1>
      <p>Revisa aqui tus pizzas.</p>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

      {/* Pizzas del carrito. */}
      <div className="cart-items">
        {cart.map((pizza) => (
          <article className="cart-row" key={pizza.id}>
            <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
            <h2>{pizza.name}</h2>

            <span>${pizza.price.toLocaleString("es-CL")}</span>

            <div className="quantity-controls">
              <button
                type="button"
                className="minus-button"
                aria-label={`Disminuir cantidad de ${pizza.name}`}
                onClick={() => disminuirCantidad(pizza.id)}
              >
                −
              </button>

              <span aria-label={`Cantidad de ${pizza.name}`}>{pizza.count}</span>

              <button
                type="button"
                className="plus-button"
                aria-label={`Aumentar cantidad de ${pizza.name}`}
                onClick={() => agregarPizza(pizza)}
              >
                +
              </button>
            </div>
          </article>
        ))}
      </div>

      <h2 aria-live="polite">Total: ${total.toLocaleString("es-CL")}</h2>

      {/* Botón sin acción por ahora. */}
      <button type="button" className="dark-button" disabled={!token}>Pagar</button>
      <p className="payment-note">{token ? "El pago estará disponible próximamente." : "Debes iniciar sesión para pagar."}</p>
    </section>
  );
}


export default Cart;
