export const Country = ({id,content,date}) =>{
    const style ={
        border: "2px solid aliceblue",
        margin: "10px",
        padding : "10px",
    }
    return(
        <div style={style}>
            <h1>{date}</h1>
            <p>{content}</p>
            <b>ID: {id}</b>
        </div>
    )
}