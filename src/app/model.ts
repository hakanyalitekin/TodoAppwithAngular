export class Model {
    user;
    items;

    constructor() {
        this.user = 'Hakan',
            this.items = [
                // tslint:disable-next-line: no-use-before-declare
                new TodoItem('Spor', false),
                // tslint:disable-next-line: no-use-before-declare
                new TodoItem('Kahvaltı', true),
                // tslint:disable-next-line: no-use-before-declare
                new TodoItem('Kitap', false),
                // tslint:disable-next-line: no-use-before-declare
                new TodoItem('Sinema', false),
            ];
    }
}

export class TodoItem {

    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}
