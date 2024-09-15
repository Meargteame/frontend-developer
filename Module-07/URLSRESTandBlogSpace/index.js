
let postArr = []

function renderPosts(){
  let content = " "
      
  for (let post  of  postArr){
    content+=`
    <h3>Title : ${post.title}</h3>
    <p>${post.body}</p>
    <hr>
    
    `
  }
  // adding to the page 
  document.getElementById('posts').innerHTML = content 
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts",{method:"GET"})
    .then(res  => res.json())
    .then(data => {
      
      postArr = data.slice(0,5)
      renderPosts()
    })



document.getElementById('new-post').addEventListener('submit',function(event){
  event.preventDefault()
  const postTitle = document.getElementById('post-title').value 
  const postBody =  document.getElementById('post-body').value 
  const blogData ={
    title:postTitle,
    body:postBody
  }
  
  const options ={
    
    method:"POST",
    body:JSON.stringify(blogData),
    headers:{
      "Content-Type":"application/json"
    }
  }

  fetch("https://apis.scrimba.com/jsonplaceholder/posts",options)

    .then(res => res.json())
    .then(data=>

      {
        postArr.unshift(data)
        renderPosts()

        document.getElementById('new-post').reset()
        
      }

    )

})


