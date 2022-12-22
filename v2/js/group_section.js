var SELECTION_PREFIX = 'group-section--';

function selectContent(containerId, selection) {
  var container = document.getElementById(containerId);
  var currentSelection = [];

  container.classList.forEach(function (className) {
    if (className.startsWith(SELECTION_PREFIX)) {
      currentSelection.push(className);
    }
  })

  currentSelection.forEach(function (className) {
    container.classList.remove(className);
  })

  container.classList.add(SELECTION_PREFIX + selection);
}
