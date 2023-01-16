const sidebar = document.querySelector('.sidebar');
const panelContent = document.querySelector('.panel-content');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  panelContent.classList.toggle('panel-content_large')
}