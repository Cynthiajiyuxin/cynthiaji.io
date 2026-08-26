const fields = document.querySelectorAll('.field');
const nodes = document.querySelectorAll('.node');
const details = document.querySelectorAll('.detail');

function showDetail(id) {
  details.forEach(detail => detail.classList.toggle('active', detail.id === id));
  nodes.forEach(node => node.classList.toggle('active', node.dataset.target === id));
}

fields.forEach(field => field.addEventListener('click', () => {
  const selected = field.dataset.field;
  fields.forEach(item => item.classList.toggle('active', item === field));
  let firstVisible;
  nodes.forEach(node => {
    const visible = selected === 'all' || node.dataset.fields.split(' ').includes(selected);
    node.classList.toggle('muted', !visible);
    node.disabled = !visible;
    if (visible && !firstVisible) firstVisible = node;
  });
  if (firstVisible) showDetail(firstVisible.dataset.target);
}));

nodes.forEach(node => node.addEventListener('click', () => showDetail(node.dataset.target)));
