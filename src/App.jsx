
import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/meal/Meals";
import { CartContextProvider } from "./components/store/CartContext";
import { UserProgressContextProvider } from "./components/store/UserProgressContext";

const App = () => {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
      <Cart/>
      </UserProgressContextProvider>
    </CartContextProvider>
  );
};

export default App;
