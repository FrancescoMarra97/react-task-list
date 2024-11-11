export default function AppMain() {

    //const welcome = 'welcome to my react app '

    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];
    console.log(tasks);
    const completedTasks = tasks.filter(task => task.state === 'completed');
    const inProgressTasks = tasks.filter(task => task.state === 'in_progress');
    const backlogTasks = tasks.filter(task => task.state === 'backlog');
    return (
        <main>
            <h3>Current tasks</h3>
            <ul>
                <div className="task-section-in-progress">
                    {inProgressTasks.map(task => (<div key={task.id} className="task">
                        <h4>{task.title}</h4>
                        <p>Priority: {task.priority}</p>
                        <p>Estimated Time: {task.estimatedTime} minutes</p>
                        <p className="colored">State: {task.state}</p>
                    </div>
                    ))}
                </div>
                <div className="task-section-backlog">
                    {backlogTasks.map(task => (<div key={task.id} className="task">
                        <h4>{task.title}</h4>
                        <p>Priority: {task.priority}</p>
                        <p>Estimated Time: {task.estimatedTime} minutes</p>
                        <p className="colored">State: {task.state}</p>
                    </div>
                    ))}
                </div>
                <hr />
                <div className="task-section-completed">
                    <h3>Completed tasks</h3>
                    {completedTasks.map(task => (<div key={task.id} className="task">
                        <h4>{task.title}</h4>
                        <p>Priority: {task.priority}</p>
                        <p>Estimated Time: {task.estimatedTime} minutes</p>
                        <p className="colored">State: {task.state}</p>
                    </div>
                    ))}
                </div>
            </ul>
        </main>

    )
}