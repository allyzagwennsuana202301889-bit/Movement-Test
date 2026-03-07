# PF 102: Event-Driven Programming

## Week 4: Laboratory – Dynamic Task Manager

---

## Laboratory Objectives

By the end of this lab, students should be able to:

- Dynamically create DOM elements
    
- Remove elements from the DOM
    
- Manage application state using arrays
    
- Implement event delegation
    
- Re-render UI properly
    
- Build a small interactive system
    

---

# Laboratory Project: Interactive Task Manager

Students will build a simple **Task Manager Application**.

---

# Functional Requirements

## 1. Add Task

Requirements:

- Input field
    
- Add button
    
- When clicked:
    
    - Task is added to array
        
    - UI updates immediately
        

Example state:

```javascript
let tasks = [];
```

---

## 2. Render Tasks

Create a function called `renderTasks()` that:

- Clears the list container
    
- Loops through tasks array
    
- Creates `<li>` for each task
    
- Appends to DOM
    

---

## 3. Delete Task

Each task must include a Delete button.

When clicked:

- Remove task from array
    
- Re-render list
    

---

## 4. Mark as Completed

When a task is clicked:

- Toggle "completed" class
    
- Update state
    

Example state structure:

```javascript
let tasks = [
  { text: "Study JavaScript", completed: false }
];
```

---

## 5. Event Delegation (Required)

Instead of adding listeners to every button:

- Add one event listener to the `<ul>`
    
- Detect whether:
    
    - Delete button was clicked
        
    - Task item was clicked
        

Students must explain why delegation is better than multiple listeners.

---

## 6. Empty State Message

If there are no tasks, display:

"No tasks available"

---

# Bonus (Optional – Higher Grade)

- Add task counter
    
- Add filter (All / Completed / Pending)
    
- Add 1-second loading effect using setTimeout before rendering
    
- Save tasks to localStorage
    

---

# File Structure

Students must submit:

- index.html
    
- style.css
    
- script.js
    
- Screenshot of empty state
    
- Screenshot with tasks
    
- Screenshot with completed tasks
    

---

# Reflection Questions (Required)

Students must answer:

1. How does your application manage state?
    
2. Why is renderTasks() necessary after updating the array?
    
3. What is event delegation and why is it efficient?
    
4. What happens if you manipulate the DOM but not the state?
    

---

# Grading Rubric (100 Points)

|Criteria|Points|
|---|---|
|Add task works|15|
|Delete task works|15|
|Completed toggle works|15|
|Proper render function|15|
|Event delegation implemented|15|
|Empty state handling|10|
|Code organization|10|
|Reflection answers|5|
|**Total**|**100**|

---

# Expected Learning Outcome

After completing this laboratory activity, students should be able to:

- Fully understand how DOM manipulation works
    
- Connect state changes to UI rendering
    
- Implement dynamic, interactive components
    
- Prepare for building larger web applications