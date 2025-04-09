// ข้อมูล assignee
    let assignees = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
    },
    {
        id: 2,
        name: "Alice",
        email: "alice@gmail.com",
    },
    {
        id: 3,
        name: "Bob",
        email: "bob@gmail.com",
    },
    {
        id: 4,
        name: "Doe",
        email: "doe@gmail.com",
    },
    ];
    
  // this is the task data
    let tasks = [
    {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        assigneeId: null,
    },
    {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        assigneeId: null,
    },
    {
        id: 3,
        title: "Task 3",
        description: "Task 3 description",
        assigneeId: null,
    },
    {
        id: 4,
        title: "Task 4",
        description: "Task 4 description",
        assigneeId: null,
    },
    {
        id: 5,
        title: "Task 5",
        description: "Task 5 description",
        assigneeId: null,
    },
    {
        id: 6,
        title: "Task 6",
        description: "Task 6 description",
        assigneeId: null,
    },
    {
        id: 7,
        title: "Task 7",
        description: "Task 7 description",
        assigneeId: null,
    },
    {
        id: 8,
        title: "Task 8",
        description: "Task 8 description",
        assigneeId: null,
    },
    {
        id: 9,
        title: "Task 9",
        description: "Task 9 description",
        assigneeId: null,
    },
    {
        id: 10,
        title: "Task 10",
        description: "Task 10 description",
        assigneeId: null,
    },
    ];

    function Selector() {
    const taskSelector = document.getElementById("taskSelect1");
    const assigneeSelector = document.getElementById("taskSelect2");
        
    taskSelector.innerHTML = '<option value="">Select Task</option>';
    assigneeSelector.innerHTML = '<option value="">Select Assignee</option>';
        
    tasks.forEach(task => {
        let option = document.createElement("option");
        option.value = task.id;
        option.textContent = task.title;
        taskSelector.appendChild(option);
    });
    
    assignees.forEach(assignee => {
        let option = document.createElement("option");
        option.value = assignee.id;
        option.textContent = assignee.name;
        assigneeSelector.appendChild(option);
    });
    }

    function addTask() {
        const taskSelector = document.getElementById("taskSelect1");
        const assigneeSelector = document.getElementById("taskSelect2");
        const taskList = document.getElementById("taskList");
    
        const taskId = taskSelector.value;
        const assigneeId = assigneeSelector.value;
    
    if (!taskId || !assigneeId) {
        alert("Please select both a task and an assignee.");
        return;
    }
    
    const taskItem = tasks.find(t => t.id == taskId);
    const assigneeItem = assignees.find(a => a.id == assigneeId);
    
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("p-4", "bg-white", "relative");
    
    taskDiv.innerHTML = `
    <hr><br>
    <div class="flex items-center justify-between">
        <div class="flex-1">
        <strong class="text-lg">${taskItem.title}</strong>
        <br>
        <div class="text-gray-600 inline-block">${taskItem.description}</div>
        <div class="text-sm text-gray-500 inline-block">
            Assignee: ${assigneeItem ? assigneeItem.name : "Unassigned"} 
            (${assigneeItem ? assigneeItem.email : "N/A"})
        </div>
        </div>
        <img src="trash.svg" alt="Delete Task" class="w-6 h-6 ml-2 cursor-pointer" onclick="removeTask(this)">
    </div>
    `;

    taskList.appendChild(taskDiv);
    
    taskSelector.value = "";
    assigneeSelector.value = "";
    }

    function removeTask(img) {
    img.parentElement.parentElement.remove();
    }
    
    Selector();
    