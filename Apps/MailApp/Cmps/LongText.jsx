export function LongText({text}){
    
    const limit = 60;
    const toShow = (text.length <= limit)? text : text.substring(0, limit) + "...";
   
    return (
            <section className="body-inbox">{`${toShow}`}</section>
        )
}