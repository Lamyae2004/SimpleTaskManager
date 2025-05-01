export const ListTasks =(props)=> {
  return (<>
     <ul>
        {props.tasks.length === 0 ? (<p className="EmptyList"> No Task , Add one !!</p>)
        :(
           props.tasks.map((task,i)=>{
            return(
            <li key={i}>
               <p className="task"  style={{ textDecoration: task.completed ? "line-through" : "none" }}> {task.text}</p>
              
               
               <button onClick={()=>{props.handleDeleteTask(i)}}>Delete</button>
               <input type="checkbox" checked={task.completed} onChange={()=>{
                props.handleCompleteTask(i)
             }}/>

         
            </li>
             );
           })
        )}
    
     </ul>

      </>
  );
}