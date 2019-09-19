// Show less text
const showLessText = function (text){
  return `${text.slice(0,100)} ...`;
}

// Read existing findworks from localStorage
const getSavedFindworks = function () {
    const findworksJSON = localStorage.getItem('findworks')

    if (findworksJSON !== null) {
        return JSON.parse(findworksJSON)
    } else {
        return data
    }


}


// Save the findworks to localStorage
const savefindworks = function (defaultfindworks) {
  // setItem(parameters, value)
    localStorage.setItem('findworks', JSON.stringify(defaultfindworks))
}


// Generate Findwork Dom
const generateFindworkDOM = function (findwork) {
  const findworkEl = document.createElement('a')
  const titleEl = document.createElement('h5')
  const locationEl = document.createElement('h6')
  const lessDescription = document.createElement('p')
  const postedEl = document.createElement('em')

  titleEl.textContent = findwork.title
  titleEl.classList.add('title-element')

  locationEl.textContent = findwork.location
  locationEl.classList.add('location-element')

  lessDescription.textContent = showLessText(findwork.description)
  lessDescription.classList.add('lessDescription-element')

  postedEl.textContent = `Posted at ${moment(findwork.postedAt).fromNow()}`
  postedEl.classList.add('posted-element')

  findworkEl.appendChild(titleEl)
  findworkEl.appendChild(locationEl)
  findworkEl.appendChild(lessDescription)
  findworkEl.appendChild(postedEl)

  // Setup the link

  findworkEl.onclick = function() { showFullJobdescription(findwork.id) };
  findworkEl.classList.add('search-job-result')
  return findworkEl
}
