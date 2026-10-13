import type { Slide } from "./ui/ImageModal";
import storeBrowse from "./assets/ecommerce/store-browse.mp4";
import storeSearchCart from "./assets/ecommerce/store-search-cart.mp4";
import storeCheckout from "./assets/ecommerce/store-checkout.mp4";
import storeOrders from "./assets/ecommerce/store-orders.mp4";
import storeDark from "./assets/ecommerce/store-dark.mp4";
import adminDashboardProducts from "./assets/ecommerce/admin-dashboard-products.mp4";
import adminOrdersUsers from "./assets/ecommerce/admin-orders-users.mp4";
import storeHomeImg from "./assets/ecommerce/store-home.png";
import storeCategoryImg from "./assets/ecommerce/store-category.png";
import storeProductImg from "./assets/ecommerce/store-product.png";
import storeSearchImg from "./assets/ecommerce/store-search.png";
import storeCartImg from "./assets/ecommerce/store-cart.png";
import storeCheckoutImg from "./assets/ecommerce/store-checkout.png";
import storeOrdersImg from "./assets/ecommerce/store-orders.png";
import storeHomeDarkImg from "./assets/ecommerce/store-home-dark.png";
import adminDashboardImg from "./assets/ecommerce/admin-dashboard.png";
import adminProductsImg from "./assets/ecommerce/admin-products.png";
import adminOrdersImg from "./assets/ecommerce/admin-orders.png";
import adminUsersImg from "./assets/ecommerce/admin-users.png";
import adminAddProductImg from "./assets/ecommerce/admin-add-product.png";

// Ordered as the product flow: customer storefront first, then the admin panel.
export const ecommerceSlides: Slide[] = [
  { src: storeHomeImg, caption: "Storefront: the landing page of the customer-facing shop." },
  { src: storeBrowse, kind: "video", caption: "Browse the home page and a category, then sort the catalog." },
  { src: storeCategoryImg, caption: "Category pages for Men, Women and Kids with sorting." },
  { src: storeSearchImg, caption: "Search with autocomplete suggestions." },
  { src: storeSearchCart, kind: "video", caption: "Search, pick a size and add the product to the cart." },
  { src: storeProductImg, caption: "Product page with gallery, size selection and related products." },
  { src: storeCartImg, caption: "Cart synced to the customer's account." },
  { src: storeCheckout, kind: "video", caption: "Checkout: shipping address, payment method and order summary." },
  { src: storeCheckoutImg, caption: "Checkout with totals calculated on the server." },
  { src: storeOrders, kind: "video", caption: "Order history with status and line items for each order." },
  { src: storeOrdersImg, caption: "Order details: shipping, payment and items." },
  { src: storeDark, kind: "video", caption: "Light and dark themes across the whole storefront." },
  { src: storeHomeDarkImg, caption: "The storefront in dark mode." },
  { src: adminDashboardImg, caption: "Admin dashboard: units sold, revenue and best seller, all derived from orders." },
  { src: adminDashboardProducts, kind: "video", caption: "Admin login, the analytics dashboard and the product catalog." },
  { src: adminProductsImg, caption: "Product management with stock, sales and inline edit and delete actions." },
  { src: adminAddProductImg, caption: "Add a product with pricing, category, stock and an image upload." },
  { src: adminOrdersImg, caption: "Order management with status updates and filtering." },
  { src: adminOrdersUsers, kind: "video", caption: "Order management, order editing and customer accounts." },
  { src: adminUsersImg, caption: "Customer accounts with total spend per customer." },
];
