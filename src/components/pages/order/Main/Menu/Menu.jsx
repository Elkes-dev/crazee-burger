import { useState } from "react";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import styles from "../Menu/Menu.module.css"
import Card from "./Card"
import { formatPrice } from "../../../../../utils/maths";


export default function Menu() {

   const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div className={styles.menuCards}>
      {menu.map(({id, title, imageSource, price}) =>(
           <Card
              key={id} 
              title={title}
              imageSource={imageSource} 
              leftContent={formatPrice(price)} /> 
      ))}
    </div>
  )
}
