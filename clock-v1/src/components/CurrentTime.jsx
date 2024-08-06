 
let CurrentTime = () => {

    let time = new Date();
    let color = '#FFD700';
    return (
        <>
            <p style={{color: color}}>Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
        </>
    )
}

export default CurrentTime;