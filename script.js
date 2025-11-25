// @ts-nocheck

// Tableau pour stocker toutes les tâches
let tasks = [];
// ... reste du code

// Fonction pour ajouter une tâche
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Veuillez entrer une tâche!");
    return;
  }

  // Ajouter la tache dans le tableau
  tasks.push(taskText);

  // Vider le champ de saisie
  input.value = "";

  // Mettre à jour l'affichage
  displayTasks();
}

// Fonction pour afficher toutes les tâches
function displayTasks() {
  const taskList = document.getElementById("taskList");

  // Vider la liste avant de la remplir
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML =
      '<div class="empty-message">Aucune tâche pour le moment. Ajoutez-en une!</div>';
  } else {
    // Parcourir le tableau et créer un élément pour chaque tâche
    for (let i = 0; i < tasks.length; i++) {
      const li = document.createElement("li");
      li.className = "task-item";
      li.innerHTML = `
                        <span class="task-text">${tasks[i]}</span>
                        <button class="delete-btn" onclick="deleteTask(${i})">Supprimer</button>
                    `;
      taskList.appendChild(li);
    }
  }

  // Mettre à jour le compteur
  updateCounter();
}

// Fonction pour supprimer une tâche
function deleteTask(index) {
  // Supprimer l'élément du tableau à l'index donné
  tasks.splice(index, 1);

  // Mettre à jour l'affichage
  displayTasks();
}

// Fonction pour mettre à jour le compteur
function updateCounter() {
  const counter = document.getElementById("counter");
  const count = tasks.length;

  if (count === 0) {
    counter.innerHTML = "";
  } else if (count === 1) {
    counter.innerHTML = "📝 1 tâche en cours";
  } else {
    counter.innerHTML = `📝 ${count} tâches en cours`;
  }
}

// Événement pour le bouton Ajouter
document.getElementById("addBtn").addEventListener("click", addTask);

// Événement pour la touche Entrée
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Affichage initial
displayTasks();
