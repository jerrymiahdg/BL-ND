const home = document.querySelector('.home')
const ourMission = document.querySelector('.our-mission')
const ourTeam = document.querySelector('.our-team')
const worksCited = document.querySelector('.works-cited')
const ourWork = document.querySelector('.our-work')
const ourMissionBtn = document.querySelector('#our-mission-btn')
const ourTeamBtn = document.querySelector('#our-team-btn')
const homeBtn = document.querySelector('.title-btn')
const worksCitedBtn = document.querySelector('#works-cited-btn')
const ourWorkBtn = document.querySelector('#our-work-btn')
const checkBtn = document.querySelector('.check-btn')
let currentPage = '.home'
homeBtn.addEventListener('click', function() {
    document.querySelector(currentPage).style.display = 'none'
    home.style.display = 'block'
    currentPage = '.home'
})
ourMissionBtn.addEventListener('click', function() {
    document.querySelector(currentPage).style.display = 'none'
    ourMission.style.display = 'block'
    currentPage = '.our-mission'
})
ourTeamBtn.addEventListener('click', function() {
    document.querySelector(currentPage).style.display = 'none'
    ourTeam.style.display = 'block'
    currentPage = '.our-team'
})
worksCitedBtn.addEventListener('click', function() {
    document.querySelector(currentPage).style.display = 'none'
    worksCited.style.display = 'block'
    currentPage = '.works-cited'
})
ourWorkBtn.addEventListener('click', function() {
    document.querySelector(currentPage).style.display = 'none'
    ourWork.style.display = 'block'
    currentPage = '.our-work'
})
checkBtn.addEventListener('click', function() {
    document.querySelector(currentPage).style.display = 'none'
    ourWork.style.display = 'block'
    currentPage = '.our-work'
})
