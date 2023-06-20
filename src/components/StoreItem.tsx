import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();




  const quantity = getItemQuantity(id);

  const handleAddToCart = () => {
    increaseCartQuantity(id);
    toast.success(`${name} has been added to the cart.`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    console.log('Toast triggered for adding item to cart.');
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    toast.error(`${name} has been removed from the cart.`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    console.log('Toast triggered for removing item from cart.');
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="400px" width="30%" style={{ objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={handleAddToCart}>
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: '0.5rem' }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: '0.5rem' }}>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={handleRemoveFromCart} variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
