import Image from "next/image"
import Link from "next/link"
import img from "/public/undraw_web_shopping_re_owap.svg"

export default async function Home() {

  return (
    <main id="home">
      <div id="text">
        <h1>your best online shop destination!</h1>
        <p>discover a world of endiess shopping possibillities at out online store. Browse, choose, and order your favorite products from the comfort of your home</p>
        <Link href={"/product"}>shop now</Link>
      </div>
      <div id="img">
        <Image src={img} alt="..."/>
      </div>
    </main>
  )
}
