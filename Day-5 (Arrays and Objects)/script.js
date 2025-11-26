document.addEventListener('DOMContentLoaded', () => {
  // State
  let employees = [];

  // DOM elements
  const empName = document.getElementById('empName');
  const empRole = document.getElementById('empRole');
  const addBtn = document.getElementById('addBtn');
  const empList = document.getElementById('empList');

  // Defensive checks
  if (!empName || !empRole || !addBtn || !empList) {
    console.error('Missing DOM elements. Check IDs: empName, empRole, addBtn, empList');
    return;
  }

  // Add employee - click handler
  addBtn.addEventListener('click', () => {
    const name = empName.value.trim();
    const role = empRole.value.trim();

    if (name === '' || role === '') {
      alert('Please enter both name and role!');
      return;
    }

    // create employee object (inside handler)
    const employee = {
      id: Date.now(),
      name,
      role
    };

    // add to array and update UI
    employees.push(employee);
    renderEmployees();

    // clear inputs and focus
    empName.value = '';
    empRole.value = '';
    empName.focus();
  });

  // Event delegation for delete buttons inside the list
  empList.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn || !btn.classList.contains('deleteBtn')) return;

    const li = btn.closest('li');
    if (!li) return;

    const id = li.getAttribute('data-id');
    if (!id) return;

    deleteEmployee(Number(id));
  });

  // Render employees on screen
  function renderEmployees() {
    empList.innerHTML = '';

    if (employees.length === 0) {
      empList.innerHTML = '<li class="empty">No employees added yet.</li>';
      return;
    }

    employees.forEach((emp) => {
      const li = document.createElement('li');
      li.setAttribute('data-id', emp.id);

      // safe insertion (avoid raw HTML injection)
      const span = document.createElement('span');
      span.textContent = `${emp.name} — ${emp.role}`;

      const delBtn = document.createElement('button');
      delBtn.className = 'deleteBtn';
      delBtn.type = 'button';
      delBtn.textContent = 'Delete';

      li.appendChild(span);
      li.appendChild(delBtn);
      empList.appendChild(li);
    });
  }

  // Delete employee
  function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees();
  }

  // initial render
  renderEmployees();
});


