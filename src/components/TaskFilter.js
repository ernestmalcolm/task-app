import React from 'react'

const TaskFilter = () => {

    // const [filter, setFilter] = useRecoilState(tasksFilter);

    return (
        <div>
            Filter:
                <select>
                    <option value="Show All">All</option>
                    <option value="Show Completed">With reminder</option>
                    <option value="Show Uncompleted">Without reminder</option>
                </select>
        </div>
    )
}

export default TaskFilter