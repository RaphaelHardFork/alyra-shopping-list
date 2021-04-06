import { useState } from 'react'
import ShoppingList from './ShoppingList'
import AddProductForm from './AddProductForm'
import AddPopularProducts from './AddPopularProduct'


const ShoppingApp = () => {
  const [shopping, setShopping] = useState([])

  const addToShoppingList = (product) => {
    setShopping([...shopping, product])
  }
  const removeFromShoppingList = (product) => {
    setShopping(shopping.filter((elem) => elem !== product))
  }

  return <main className="row">
    <section className="col-lg-8">
      <ShoppingList shopping={shopping} removeFromShoppingList={removeFromShoppingList} />
    </section>
    <section className="col-lg-4">
      <div className="bg-light border p-4">
        <h2 className="mb-3 h4">Ajouter un produit :</h2>
        <AddProductForm shopping={shopping} addToShoppingList={addToShoppingList} />
        <AddPopularProducts shopping={shopping} addToShoppingList={addToShoppingList} />
      </div>
    </section>
  </main>
}

export default ShoppingApp