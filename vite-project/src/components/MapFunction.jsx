const Fruits = ['Apple' , 'Orange' , 'banana', 'woodapple' , 'pineApple' , 'Strawberry'];

export const MapFunction = () => {

  return (

    <>

       {/* {names.map((fruit , index) => (<p key={index}>{fruit}</p>))} */}
       {Fruits.map((fruitMap , index) => (<button key={index}>{fruitMap}</button>) )}

    </>
  )
}
