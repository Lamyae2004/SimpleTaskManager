export const AddNewTask = (props) => {
    return (
        <div>
            <input type="text" placeholder="Enter the task ..." value={props.newTask} onChange={(e)=>{props.setNewTask(e.target.value)}}></input>
            <button onClick={props.handleNewTask}>Add</button>
        </div>
    );
}