class Todo {
    constructor() {
      this.notes = [];
    }
  
    addNote(title, description) {
      const newNote = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false,
      };
      this.notes.push(newNote);
      console.log(`Нотатка "${title}" додана.`);
    }
  
    deleteNote(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      const deletedNote = this.notes.splice(index, 1)[0];
      console.log(`Нотатка "${deletedNote.title}" видалена.`);
    }
  
    editNote(id, newTitle, newDescription) {
      const note = this.notes.find((note) => note.id === id);
      if (newTitle) note.title = newTitle;
      if (newDescription) note.description = newDescription;
      console.log(`Нотатка "${note.title}" відредагована.`);
    }
  
    markAsCompleted(id) {
      const note = this.notes.find((note) => note.id === id);
      if (!note) {
        console.error("Нотатка не знайдена!");
        return;
      }
      note.completed = true;
      console.log(`Нотатка "${note.title}" позначена як виконана.`);
    }
  
    getNoteInfo(id) {
      const note = this.notes.find((note) => note.id === id);
      if (!note) {
        console.error("Нотатка не знайдена!");
        return;
      }
      return note;
    }
    getAllNotes() {
      return this.notes;
    };
  
    getTotalNotesCount() {
      return this.notes.length;
    };
  
    getPendingNotesCount() {
      return this.notes.filter((note) => !note.completed).length;
    }
  };
  
  const todoList = new Todo();
  
  todoList.addNote("Купити молоко", "Купити молоко на сніданок.");
  todoList.addNote("Закінчити проект", "Закінчити проект до п'ятниці.");
  
  console.log("Всі нотатки:");
  console.log(todoList.getAllNotes());
  
  const firstNoteId = todoList.getAllNotes()[0].id;
  todoList.editNote(firstNoteId, "Купити молоко та хліб", "Також купити хліб.");
  
  todoList.markAsCompleted(firstNoteId);
  
  console.log("Інформація про першу нотатку:");
  console.log(todoList.getNoteInfo(firstNoteId));
  
  const secondNoteId = todoList.getAllNotes()[1].id;
  todoList.deleteNote(secondNoteId);
  
  console.log(secondNoteId);
  console.log(firstNoteId);
  console.log(`Загальна кількість нотаток: ${todoList.getTotalNotesCount()}`);
  console.log(`Невиконаних нотаток: ${todoList.getPendingNotesCount()}`);