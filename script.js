 

//fetch data use but calling api axios
const fetchData = async(config) =>{
    try{
        const res  = await axios(config);
        return res.data;
    }
    catch(err){
        throw  Error("Data is not Fetch");
    }

}



  //selection

const postsElement = document.querySelector(".posts");

const loadAllData = async()=>{
    const posts =await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) =>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
        `
        postsElement.appendChild(postElement);
    });
    
};
loadAllData();





 //Dummy Data
/*
  const posts = [
    {
       titel:"This is titel-1" ,
       body:"This is Body-1"
    },

    {
        titel:"This is titel-2" ,
        body:"This is Body-2"
     },

     {
        titel:"This is titel-3" ,
        body:"This is Body-3"
     },

     {
        titel:"This is titel-4" ,
        body:"This is Body-4"
     },

     {
        titel:"This is titel-5" ,
        body:"This is Body-5"
     },
 
     {
         titel:"This is titel-6" ,
         body:"This is Body-6"
      },
 
      {
         titel:"This is titel-7" ,
         body:"This is Body-7"
      },
 
      {
         titel:"This is titel-8" ,
         body:"This is Body-8"
      }
  ]
*/

//         <div class="post">
//             <h4 class="post-title">Post Title-1</h4>
//             <p class="post-body">Post Description-1</p>
//         </div>