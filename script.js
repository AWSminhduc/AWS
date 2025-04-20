let projects = [];

function uploadFile() {
  const input = document.getElementById('fileInput');
  const file = input.files[0];
  if (!file) {
    alert('Please select a file.');
    return;
  }

  const project = {
    name: file.name,
    date: new Date().toISOString(),
  };

  // Placeholder for future AWS S3 upload
  // e.g., call AWS SDK or Amplify.Storage.put here

  projects.push(project);
  renderProjects();
  input.value = '';
}

function renderProjects() {
  const list = document.getElementById('projectList');
  list.innerHTML = '';
  projects.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} - ${new Date(p.date).toLocaleString()}`;
    list.appendChild(li);
  });
}

function sortProjects() {
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  renderProjects();
}
