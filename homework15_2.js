class Todo {
    constructor() {
      this.notes = [];
    }
  
    addNote(title, description) {
      const newNote = {
        id: Date.now(),
        title: title.toLowerCase(),
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
      if (newTitle) note.title = newTitle.toLowerCase();
      if (newDescription) note.description = newDescription;
      console.log(`Нотатка "${note.title}" відредагована.`);
    }
    markAsCompleted(id) {
      const note = this.notes.find((note) => note.id === id);
      note.completed = true;
      console.log(`Нотатка "${note.title}" виконана.`);
    }
    getNoteInfo(id) {
      const note = this.notes.find((note) => note.id === id);
    }
    getAllNotes() {
      return this.notes;
    }
    getTotalNotesCount() {
      return this.notes.length;
    }
    getPendingNotesCount() {
      return this.notes.filter((note) => !note.completed).length;
    }
    searchNotesByTitle(title) {
      const lowerCaseTitle = title.toLowerCase();
      const foundNotes = this.notes.filter((note) =>
        note.title.includes(lowerCaseTitle)
      );
      console.log(`Знайдені нотатки за назвою "${title}":`);
      return foundNotes;
    }
  
    sortNotesByStatus(completedFirst = true) {
      return this.notes.sort((a, b) => {
        if (completedFirst) {
          return b.completed - a.completed;
        } else {
          return a.completed - b.completed;
        }
      });
    }
  }
  
  const todoList = new Todo();
  
  todoList.addNote("Купити молоко", "Купити молоко на сніданок.");
  todoList.addNote("Закінчити проект", "Закінчити проект до п'ятниці.");
  
  const firstNoteId = todoList.getAllNotes()[0].id;
  const secondNoteId = todoList.getAllNotes()[1].id;
  todoList.markAsCompleted(firstNoteId);
  todoList.markAsCompleted(secondNoteId);
  
  console.log(todoList.searchNotesByTitle("проект"));
  console.log("Нотатки, відсортовані за статусом (виконані спочатку):");
  console.log(todoList.sortNotesByStatus(true));
  console.log("Нотатки, відсортовані за статусом (невиконані спочатку):");
  console.log(todoList.sortNotesByStatus(false));