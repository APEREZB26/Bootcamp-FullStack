export const Country = ({id,content,date,nationality}) =>{
    const style ={
        border: "2px solid aliceblue",
        margin: "10px",
        padding : "10px",
    }
    return(
        <div style={style}>
            <h1>{date}</h1>
            <p>{content}</p>
            <p><b>ID: {id}</b></p>
            <b>Nationality: {nationality}</b>
        </div>
    )
}