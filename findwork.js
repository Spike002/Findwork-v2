const postBtn = document.querySelector('#btn-post-job')
let findworks = getSavedFindworks()

const filters = {
  keyword: '',
  location: ''
}

console.log(findworks);

savefindworks(findworks);

// Show Full Job
function showFullJobdescription(id = '315c81c0-bb80-4991-973d-1fec6f190543'){
  const work = findworks.find(function(findwork){
    return findwork.id === id
  })
  const result = `
        <div>
          <h3><strong>${work.title}</strong></h3>
          <h4>${work.location}</h4>
          <p>${work.type}</p>
          <p>${work.description}</p>
          <em>Posted at ${moment(work.postedAt).fromNow()}</em>
        </div>

  `
  document.querySelector('#showFullJob').innerHTML = result;

}

// filter job list by location and keyword
const renderFindwork = function (findworks, filter){
  const findByLocation = findworks.filter(function (findwork){
    return findwork.location.toLowerCase().includes(filter.location.toLowerCase())
  })

  const findByKeywork = findByLocation.filter(function (findwork){
    return findwork.title.toLowerCase().includes(filter.keyword.toLowerCase())
  })

  document.querySelector('#search-result').innerHTML = " ";

  // Generate Job list to DOM
  findByKeywork.forEach(function (findwork){
    const findworksEl = generateFindworkDOM(findwork)
    document.querySelector('#search-result').appendChild(findworksEl)
  })
}

// Show Default Job list when web start
renderFindwork(findworks, filters)
showFullJobdescription(id = '315c81c0-bb80-4991-973d-1fec6f190543')

// Search by location
document.querySelector('#searchByLocation').addEventListener('input', function (e){
  filters.location = e.target.value;
  renderFindwork(findworks, filters)
})

// Search by keyword
document.querySelector('#searchByKeyword').addEventListener('input', function (e){
  filters.keyword = e.target.value;
  renderFindwork(findworks, filters)
})

postBtn.addEventListener('click', function (){
  location.href = "/post.html";
})
