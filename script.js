Array.from(document.getElementsByClassName('circle')).forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById('clicksound').play()
    });
});


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

//nowgg
document.getElementById('agentsunblckr').addEventListener('mouseenter', function() {
    document.getElementById('hoversound').currentTime = 0
    document.getElementById('hoversound').play()
    document.getElementById('img_unblckr').classList.remove('hidden')
    document.getElementById('text_unblckr').classList.add('hidden')
})

document.getElementById('agentsunblckr').addEventListener('mouseleave', function() {
    document.getElementById('img_unblckr').classList.add('hidden')
    document.getElementById('text_unblckr').classList.remove('hidden')
})

//unblckr
document.getElementById('agentsnowgg').addEventListener('mouseenter', function() {
    document.getElementById('hoversound').currentTime = 0
    document.getElementById('hoversound').play()
    document.getElementById('img_nowgg').classList.remove('hidden')
    document.getElementById('text_nowgg').classList.add('hidden')
})

document.getElementById('agentsnowgg').addEventListener('mouseleave', function() {
    document.getElementById('img_nowgg').classList.add('hidden')
    document.getElementById('text_nowgg').classList.remove('hidden')
})