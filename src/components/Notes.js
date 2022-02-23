export const Notes = ({id,price,title}) =>{
    return(
        <div key={id}>
            <li>{id}</li>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}