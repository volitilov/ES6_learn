class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
    }

    get done() {
        return this._done === true ? 'task complete' : 'task decomplete)';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Ошибка: укажите значение true или false');
        }
    }

    complete() {
        this._done = true;
    }

    static getDefaultTitle() {
        return 'Title default';
    }
}

Task.count = 0;
let task = new Task('the title');
let task2 = new Task('the title2');
let task3 = new Task();

// console.log(typeof task);
// console.log(task instanceof Task);

console.log(Task.count);

// console.log(task.title);
console.log(task.done, task._done);
task.complete()
console.log(task.done, task._done);

// console.log(task2.title);
// console.log(task2.complete());

// console.log(task3.title);