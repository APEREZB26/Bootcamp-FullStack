export const Country = ({id,title,body}) =>{
    const style ={
        border: "2px solid aliceblue",
        margin: "10px",
        padding : "10px",
    }
    return(
        <div style={style}>
            <h1>{title}</h1>
            <p>{body}</p>
            <b>ID: {id}</b>
        </div>
    )
}