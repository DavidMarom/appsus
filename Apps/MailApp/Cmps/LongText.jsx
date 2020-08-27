export function LongText({text}){
    
    const limit = 100;
    const toShow = (text.length <= limit)? text : text.substring(0, limit) + "...";
   
    return (
            <section>{`${toShow}`}</section>
        )
}