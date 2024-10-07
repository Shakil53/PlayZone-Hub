import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between">
               <AddTodoModal></AddTodoModal>
               <TodoFilter></TodoFilter>
            </div>
            <div className="bg-primary-gradient w-full rounded-xl p-[5px]">
                <div className="bg-white p-4 w-full h-full space-y-3 rounded-lg">
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                </div>
            {/* <div className="bg-white flex justify-center items-center p-5">
                <p className="text-2xl font-semibold">There is no task pending</p>
              </div> */}
           
                
            </div>
        </div>
    );
};

export default TodoContainer;