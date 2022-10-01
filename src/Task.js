export const Task = (props) => {
    return (<div style={{ padding:"10px", border:"1px solid grey",
        textAlign:"center",
        
        backgroundColor: props.completed ? "green": "white"}}>
            <h1>{props.taskName}</h1>
            
            <button onClick={() => props.completeTask(props.id)} style={{width:"auto", height:"20px"}}> Complete </button>
            <button onClick={() => props.deleteTask(props.id)} style={{width:"auto", height:"20px"}}>X</button>

            </div>
    );
        };
