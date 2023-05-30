const URL="http://localhost:3000/dogs"
fetch(URL)
.then(response=>response.json())
.then(dogs=>{
    dogs.forEach(dog=>createDog(dog))
})
const addDogForm=document.querySelector("form#add-dog-form")
addDogForm.addEventListener("submit",addNewDog)

function createDog(dog){
    //get dog list
    const dogList=document.querySelector("#dogs")
    //add delete dog button
    const deleteBtn=document.createElement("button")
    deleteBtn.textContent="X"
    deleteBtn.classList.add("deleteBtn")
    //add dog name
    const name=document.createElement("p")
    name.textContent=`Name:  ${dog.name}`
    //add dog breed
    const breed=document.createElement("p")
    breed.textContent=`Breed:  ${dog.breed}`
    //add dog owner
    const owner=document.createElement("p")
    owner.textContent=`Owner:  ${dog.owner}`
    //add dog age
    const age=document.createElement("p")
    age.textContent=`Age:  ${dog.age}`
    //add dog image
    const image=document.createElement("img")
    image.src=dog.image
    //add number of likes span
    const numOfLikesSpan=document.createElement("span")
    numOfLikesSpan.classList.add("numOfLikesSpan")
    numOfLikesSpan.textContent=`${dog.likes} likes`
    //add likes icon
    const likesImg=document.createElement("img")
    likesImg.classList.add("likesImg")
    likesImg.src="heart.png"
    //create div element and add created elements with data to it
    const dogDiv=document.createElement("div")
    dogDiv.classList.add("dog")
    dogDiv.append(deleteBtn,name,breed,owner,age,image,numOfLikesSpan,likesImg)
    //add div to dog list
    dogList.append(dogDiv)
}

function addNewDog(event){
    event.preventDefault()
    
    /*const name=document.querySelector("input#name").value
    const breed=document.querySelector("input#breed").value
    const owner=document.querySelector("input#owner").value
    const age=document.querySelector("input#age").value
    const likes=0
    const image=document.querySelector("input#image").value*/

    //alternate method of reading from form
    const name=event.target.name.value
    const breed=event.target.breed.value
    const owner=event.target.owner.value
    const age=event.target.age.value
    const likes=0
    const image=event.target.image.value

    /*const newDog={}
    newDog.name=name
    newDog.breed=breed
    newDog.owner=owner
    newDog.age=age
    newDog.image=image
    console.log(newDog)*/

    //alternate method to create new dog object
    const newDog={name,breed,owner,age,likes,image}
    
    fetch(URL,{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
       },
       body:JSON.stringify(newDog)
    })
    .then(response=>response.json())
    .then(newDog=>createDog(newDog))
    .catch(e=>alert(e.message))

}