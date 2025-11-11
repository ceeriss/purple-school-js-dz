const newTask = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
  id: 1, // Добавляем счетчик id

  addTask(name, order, description = "") {
    const task = {
      id: this.id++,
      name: name,
      description: description,
      order: order,
    };
    this.tasks.push(task);
    return task;
  },

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  sortTasks() {
    this.tasks.sort((a, b) => a.order - b.order);
  },

  changeTask(id, name, order, description) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      if (name !== undefined) task.name = name;
      if (order !== undefined) task.order = order;
      if (description !== undefined) task.description = description;
      return task;
    }
    return null;
  },
};
