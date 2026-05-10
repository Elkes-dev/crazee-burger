import { useState } from "react";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import styles from "../Menu/Menu.module.css"
import ProductCard from "./ProductCard"


export default function Menu() {

   const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className={styles.menuCards}>
      {menu.map((produit) =>(
           <ProductCard
              key={produit.id} 
              title={produit.title}
              imageSource={produit.imageSource} 
              price={produit.price} /> 
      ))}
    </div>
  )
}
