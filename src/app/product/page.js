import Image from "next/image";
import Link from "next/link";
import "./product.css" 
import img1 from "/public/9bf5aca7-f986-46e2-8464-3ba93d5b0014.png"
import img2 from "/public/9bf5aca7-f986-46e2-8464-3ba93d5b0014.png"
import img3 from "/public/9bf5aca7-f986-46e2-8464-3ba93d5b0014.png"


async function products(){

    const fetchData = await fetch("https://dummyjson.com/products")
    const Data = await fetchData.json()

    return(
        <div id="mainProduct">

        <div id="products"> 
            {
                Data.products.map((el)=>{
                    return(
                    <Link href={`/product/${el.id}`} className='content' key={el.id}>
                        <Image width={200} height={150} src={el.thumbnail} alt="...."/>
                        <div className="text">
                            <h4>{el.title}</h4>
                            <span>{el.brand}</span>
                            <p>{el.price}$</p>
                            <span className="dis">{el.discountPercentage}%</span>
                        </div>
                    </Link>           
                    )                    
                })
            }
        </div>
        </div>
    )
}

export default products;