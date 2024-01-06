document.addEventListener('DOMContentLoaded', function(){
    //Update counter
    const counter = document.querySelector('#counter')
    let count = 0;
    let intervalId = setInterval(updateCounter,1000)
    function updateCounter(){
        count ++
        counter.textContent = count
    }

    //increment counter based on + button
    const incrementButton = document.querySelector('#plus')
    incrementButton.addEventListener('click', updateCounter)
    
    //decrement counter based on - button
    const decrementButton = document.querySelector('#minus')
    decrementButton.addEventListener('click', decrementCounter)
    function decrementCounter(){
        count --
        counter.textContent = count
    }

    //capture counter when hearted
    const heartButton = document.querySelector('#heart')
    let heartClickCounter = 0
    let likes = {};

    function postHeartClickInfo(){
        if(!likes[count]){
            heartClickCounter = 1
            const postMessage = document.createElement('li')
            postMessage.type = 'text'
            postMessage.id = count
            likes[count] = heartClickCounter
            postMessage.innerText = `${count} has been liked ${likes[count]} times`        //find the ul section under class likes to append this to
            document.querySelector('.likes').appendChild(postMessage)
        }else{
            heartClickCounter++;
            likes[count] = heartClickCounter
            document.getElementById(count).innerText = `${count} has been liked ${likes[count]} times`
        }
    }
    heartButton.addEventListener('click', postHeartClickInfo)

    //Pause Button
    const pauseButton = document.querySelector('#pause')
    pauseButton.addEventListener('click', pauseStuff)
    function pauseStuff(){
        if(pauseButton.innerText === 'pause'){
            pauseButton.innerText = 'resume'
            clearInterval(intervalId)
            document.querySelectorAll('button').forEach(element =>{
                if(element.id !== 'pause'){
                    element.disabled = true
                }
            })
        }else{
            pauseButton.innerText = 'pause'
            intervalId = setInterval(updateCounter,1000)
            document.querySelectorAll('button').forEach(element =>{
                if(element.id !== 'pause'){
                    element.disabled = false
                }
            })
        }
    }

    //Comment box that adds comments when submitted
    document.querySelector('#comment-form').addEventListener('submit', addComment)
    function addComment(e){
        e.preventDefault()
        let form = document.querySelector('#comment-form')
        let postComment = document.createElement('p')
        postComment.type = 'text'
        postComment = document.querySelector('#comment-input').value
        console.log(document.querySelector('#list'))
        document.querySelector('#list').append(postComment)
        form.reset()
    }
})
