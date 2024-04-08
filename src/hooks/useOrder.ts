import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder(){
    
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItme => orderItme.id === item.id)

        if(itemExist){
            console.log("exeiste")
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])    
        }
    }
    console.log(order)
    return {
        addItem
    }
}