const timelineFilters = document.querySelectorAll('.timelineFilter');
const timelineItems = document.querySelectorAll('.timelineItem');
const timelineDetails = document.querySelectorAll('.timelineDetails .detail');

function showTimelineDetail(id) {
  timelineDetails.forEach(detail => detail.classList.toggle('active', detail.id === id));
  timelineItems.forEach(item => item.classList.toggle('active', item.dataset.target === id));
}

timelineFilters.forEach(filter => filter.addEventListener('click', () => {
  const selected = filter.dataset.field;
  timelineFilters.forEach(item => item.classList.toggle('active', item === filter));
  let firstVisible;
  timelineItems.forEach(item => {
    const visible = selected === 'all' || item.dataset.fields.split(' ').includes(selected);
    item.classList.toggle('muted', !visible);
    item.disabled = !visible;
    if (visible && !firstVisible) firstVisible = item;
  });
  if (firstVisible) showTimelineDetail(firstVisible.dataset.target);
}));

timelineItems.forEach(item => item.addEventListener('click', () => showTimelineDetail(item.dataset.target)));

const practiceIcons = document.querySelectorAll('.practiceIcon');
const practiceNotes = document.querySelectorAll('.practiceNote');

practiceIcons.forEach(icon => icon.addEventListener('click', () => {
  practiceIcons.forEach(item => item.classList.toggle('active', item === icon));
  practiceNotes.forEach(note => note.classList.toggle('active', note.id === icon.dataset.practice));
}));
