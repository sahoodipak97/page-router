export default function Products({productsData}) {
    return (
        <>
         {
        productsData.map((item)=>(
          <div key={item.id}>
          <h2>{item.title}</h2>
          <p>$ {item.price}</p>
          </div>
        ))
      }
        </>
    )
}