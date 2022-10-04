import { mountProductsApp } from 'products/ProductsIndex'
import { mountCartApp } from 'cart/CartIndex'

const productsAppRoot = document.getElementById('products-app')
mountProductsApp(productsAppRoot)

const cartAppRoot = document.getElementById('cart-app')
mountCartApp(cartAppRoot)
export default {}
