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

// Replace these with your actual Cognito details
const awsConfig = {
  Auth: {
    region: 'ca-central-1',
    userPoolId: 'ca-central-1_klQTY4gA6',
    userPoolWebClientId: '6ogqvaaa36p5fv3rqde6co7dln',
  },
  Storage: {
    region: 'ca-central-1',
    bucket: 'ps-storage1',
    identityPoolId: 'YOUR_IDENTITY_POOL_ID', // if using Identity Pool
  }
};

Amplify.default.configure(awsConfig);
