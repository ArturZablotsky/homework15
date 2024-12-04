class Todo {
    constructor() {
      this.notes = [];
    };
  
    addNote(title, description) {
      const newNote = {
        id: Date.now(),
        title: title.toLowerCase(),
        description: description,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.notes.push(newNote);
      console.log(`Нотатка "${title}" додана.`);
    };
  
    deleteNote(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      const deletedNote = this.notes.splice(index, 1)[0];
      console.log(`Нотатка "${deletedNote.title}" видалена.`);
    };
  
    editNote(id, newTitle, newDescription) {
      const note = this.notes.find((note) => note.id === id);
      if (newTitle) note.title = newTitle.toLowerCase();
      if (newDescription) note.description = newDescription;
      note.updatedAt = new Date();
      console.log(`Нотатка "${note.title}" відредагована.`);
    }
  
    markAsCompleted(id) {
      const note = this.notes.find((note) => note.id === id);
      note.completed = true;
      note.updatedAt = new Date();
      console.log(`Нотатка "${note.title}" виконана.`);
    };
  
    getNoteInfo(id) {
      const note = this.notes.find((note) => note.id === id);
      return note;
    };
  
    getAllNotes() {
      return this.notes;
    };
  
    getTotalNotesCount() {
      return this.notes.length;
    };
  
    getPendingNotesCount() {
      return this.notes.filter((note) => !note.completed).length;
    };
  
    searchNotesByTitle(title) {
      const lowerCaseTitle = title.toLowerCase();
      return this.notes.filter((note) =>
        note.title.includes(lowerCaseTitle)
      );
    };
  
    sortNotesByStatus(completedFirst = true) {
      return this.notes.sort((a, b) => {
        if (completedFirst) {
          return b.completed - a.completed;
        } else {
          return a.completed - b.completed;
        }
      });
    }
  
    searchNotesByDate(startDate, endDate) {
      return this.notes.filter((note) => {
        const createdDate = new Date(note.createdAt).getTime();
        return createdDate >= new Date(startDate).getTime() && createdDate <= new Date(endDate).getTime();
      });
    }
  
    sortNotesByDate(descending = true) {
      return this.notes.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return descending ? dateB - dateA : dateA - dateB;
      });
    }
  }
  
  const todoList = new Todo();
  
  todoList.addNote("Купити молоко", "Купити молоко на сніданок.");
  todoList.addNote("Закінчити проект", "Закінчити проект до п'ятниці.");
  
  console.log(todoList.sortNotesByDate())
  const notesInDateRange = todoList.searchNotesByDate(
    "2024-12-3",
    "2024-12-4"
  );
  console.log(notesInDateRange);