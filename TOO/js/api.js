const mockServerUrl = 'https://24140260-278e-4d9e-899c-daad5cfee0f0.mock.pstmn.io';

// get all todos /tasks
// [
//     {
//         "id": 2,
//         "taskName": "e02",
//         "remainingHours": 5,
//         "isCompleted": false
//     }
// ]
function getTasks() {
    return fetch(mockServerUrl + '/tasks')
        .then(response => response.json())
}

// delete todo /tasks/id
function deleteTask(id) {
    return fetch(`${mockServerUrl}/tasks/${id}`, {
        method: 'DELETE',
    })
        .then(data => {
            return data;
        });
}

// create todo /tasks
function createTask(task) {
    return fetch(`${mockServerUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => response)
}