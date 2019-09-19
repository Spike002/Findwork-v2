const findworks = getSavedFindworks()
// Post Job query
document.querySelector('#post-job').addEventListener('submit', function(e){
  e.preventDefault()
  const id = uuidv4();
  const timestamp = moment().valueOf()
  findworks.unshift({
    id: id,
    title: e.target.elements.title.value,
    location: e.target.elements.location.value,
    description: e.target.elements.description.value,
    type: e.target.elements.type.value,
    postedAt: timestamp
  })
  savefindworks(findworks);
  location.assign('/index.html')
  // renderFindwork(findworks, filters)

 })
