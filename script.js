Array.from(document.getElementsByClassName('circle')).forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById('clicksound').play()
    });
});



//movies
document.getElementById('agentsmovies').addEventListener('mouseenter', function() {
    document.getElementById('hoversound').currentTime = 0
    document.getElementById('hoversound').play()
    document.getElementById('img_movies').classList.remove('hidden')
    document.getElementById('text_movies').classList.add('hidden')
})

document.getElementById('agentsmovies').addEventListener('mouseleave', function() {
    document.getElementById('img_movies').classList.add('hidden')
    document.getElementById('text_movies').classList.remove('hidden')
})

//gams
document.getElementById('agentsgams').addEventListener('mouseenter', function() {
    document.getElementById('hoversound').currentTime = 0
    document.getElementById('hoversound').play()
    document.getElementById('img_gams').classList.remove('hidden')
    document.getElementById('text_gams').classList.add('hidden')
})

document.getElementById('agentsgams').addEventListener('mouseleave', function() {
    document.getElementById('img_gams').classList.add('hidden')
    document.getElementById('text_gams').classList.remove('hidden')
})

//yaproom
document.getElementById('agentsyaproom').addEventListener('mouseenter', function() {
    document.getElementById('hoversound').currentTime = 0
    document.getElementById('hoversound').play()
    document.getElementById('img_yaproom').classList.remove('hidden')
    document.getElementById('text_yaproom').classList.add('hidden')
})

document.getElementById('agentsyaproom').addEventListener('mouseleave', function() {
    document.getElementById('img_yaproom').classList.add('hidden')
    document.getElementById('text_yaproom').classList.remove('hidden')
})