const AddPopularProducts = (props) => {
  const populars = [
    { text: "pain", emoji: "🥖" },
    { text: "lait", emoji: "🥛" },
    { text: "pizza", emoji: "🍕" },
    { text: "salade", emoji: "🥬" },
    { text: "oranges", emoji: "🍊" },
  ]

  const { shopping, addToShoppingList } = props

  return <section>
    <h3 className="h5">Avez vous besoin de ?</h3>
    <div className="mb-3 d-flex flex-wrap align-items-center">
      {populars.map((elem) => {
        return <button
          key={elem.text}
          className="btn btn-outline-success me-2 mb-2 d-flex align-items-center" disabled={shopping.includes(elem.text)} onClick={() => addToShoppingList(elem.text)}
        >
          {elem.text}{" "}
          <span className="fs-1" role="img" aria-hidden>
            {elem.emoji}
          </span>
        </button>
      })}
    </div>
  </section>
}

export default AddPopularProducts