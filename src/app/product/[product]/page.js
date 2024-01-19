import "./page.css"

async function product({params}){

    const fetchData = await fetch(`https://dummyjson.com/products/${params.product}`)
    const Data = await fetchData.json()

    return(
        <div id="oneProduct">
            <div className="img">
                <img src={Data.thumbnail} alt="..." id="mainImg"/>
                <img src={Data.images[0]} alt="..."/>
                <img src={Data.images[1]} alt="..."/>
                <img src={Data.images[2]} alt="..."/>
                <img src={Data.images[3]} alt="..."/>
            </div>
            <div className="text">
                <p>Title : {Data.title}</p>
                <p>Price : {Data.price}$</p>
                <p>Brand : {Data.brand}</p>
                <p>Description : {Data.description}</p>
                <p>Discount : {Data.discountPercentage}</p>
                <p>Rating : {Data.rating}</p>
                <p>Stock : {Data.stock}</p>
                <p>Category : {Data.category}</p>
            </div>
            <div id="but">
                <button>Buying</button>
                <button>Favoritr</button>
            </div>
        </div>
    )
}

export default product;