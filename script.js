Array.from(document.getElementsByClassName('circle')).forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById('clicksound').play()
    });
});
var intro = false

function changelog() {
    document.getElementById('changelog').showModal()
}

//intro
document.getElementById('intro').addEventListener("mouseenter", function() {
    if (intro) {return}
    intro = true
    document.getElementById('hoversound').currentTime = 0
    document.getElementById('hoversound').play()
    var circle = document.getElementById('intro')
    var agentsgams = document.getElementById('agentsgams')
    var agentsunblckr = document.getElementById('agentsunblckr')
    var agentsemulator = document.getElementById('agentsemulator')
    var agentsyaproom = document.getElementById('agentsyaproom')

    circle.classList.add("spin")
    document.body.style.backgroundColor="black"

    setTimeout(function() {
        agentsgams.style.opacity = 1
        agentsgams.classList.remove("hidden")
        setTimeout(function() {
            agentsunblckr.style.opacity = 1
            agentsunblckr.classList.remove('hidden')
            setTimeout(function() {
                agentsemulator.style.opacity =1
                agentsemulator.classList.remove('hidden')
                setTimeout(function() {
                    agentsyaproom.style.opacity =1
                    agentsyaproom.classList.remove('hidden')
                }, 200)
            }, 200)
        }, 200)
    },600)
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

//emulator
document.getElementById('agentsemulator').addEventListener('mouseenter', function() {
    document.getElementById('hoversound').currentTime = 0
    document.getElementById('hoversound').play()
    document.getElementById('img_emulator').classList.remove('hidden')
    document.getElementById('text_emulator').classList.add('hidden')
})

document.getElementById('agentsemulator').addEventListener('mouseleave', function() {
    document.getElementById('img_emulator').classList.add('hidden')
    document.getElementById('text_emulator').classList.remove('hidden')
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