const TodoList = {
	tasks:[],
	id:0,
	addTask: function(title, priorety){
		const task = {
			id: this.id++,
			title: title,
			priorety: priorety,
		}
		this.tasks.push(task);
		return task
	},
	removeTask: function(id){
		this.tasks = this.tasks.filter((task) => task.id !== id)
	},
	sortTasks: function () {
		this.tasks.sort((a,b) => a.priorety - b.priorety);
	},
	changeTask: function(id, title, priorety){
		const task = this.tasks.find((task) => {
			if (task.id === id) {
				task.title = title;
				task.priorety = priorety;
				return task;
			}
		})
	}
}
TodoList.addTask("Проверить программу на ошибки", 5);
TodoList.addTask("gregergreger", 3);
TodoList.sortTasks()
TodoList.changeTask(1, 'блаба', 32)
console.log(TodoList.tasks);
