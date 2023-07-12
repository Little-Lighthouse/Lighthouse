const searchBox = document.querySelector('#search-box');
const posts = document.querySelectorAll('.post');
const noResults = document.querySelector('#no-results');

searchBox.addEventListener('keyup',()=>{
    const searchTerm= searchBox.value.toLowerCase();
    let hasResults= false;
   
    posts.forEach((post)=>{
        const title= post.querySelector('.post-title').textContent.toLowerCase();
   
        if(title.includes(searchTerm)){
            post.style.display='block';
            hasResults= true;
        } else{
            post.style.display='none';
        }
   });
   if(! hasResults){
        noResults.style.display=' block';
 } else{
        noResults.style.display=' none';
 }
 });