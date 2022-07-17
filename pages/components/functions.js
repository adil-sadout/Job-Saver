export const RandomizeListOrder = (List)=>{
    const NewList= List.map(a =>({
        value:a, sort:Math.random()
    }))
    .sort((a,b) => a.sort - b.sort)
    .map(a => a.value)

    return NewList
} 

export const handleOnDragEnd = (result, orderedList, setOrderedList)=>{
    const coins = Array.from(orderedList);
    const [reorderList] = coins.splice(result.source.index, 1)
    coins.splice(result.destination.index, 0, reorderList)
    setOrderedList(coins)
  }



export const handleCheckOrder = (e, orderedList, correctOrder, setPopupMessage) =>{
    e.preventDefault();
    let counter = 0;
    correctOrder.forEach((order, index )=>{
      if (order.name === orderedList[index].name){
        counter+=1;
      }else{
        setPopupMessage(false)
      }
      if(counter === correctOrder.length){
        setPopupMessage(true)
      }
    })
  }