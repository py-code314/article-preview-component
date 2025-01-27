const authorByline = document.querySelector('.card__author-byline');
const socialIcons = document.querySelector('.card__social');
const shareBtn = document.querySelector('#card__share-btn');
const footer = document.querySelector('.card__footer');
const shareIcon = document.querySelector('.card__share-icon path');
let isSocial = false;

// function toggleSocialIcons () {
  
//   if (isSocial === false) {

//     authorByline.style.display = 'none';
//     socialIcons.style.display = 'flex';
//     footer.style.backgroundColor = 'hsl(217, 19%, 35%)';
//     shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)';
//     shareIcon.setAttribute('fill', 'hsl(0, 0%, 100%)');
    
//     isSocial = true
//   } else {

//     authorByline.style.display = 'flex';
//     socialIcons.style.display = 'none';
//     footer.style.backgroundColor = 'hsl(0, 0%, 100%)';
//     shareBtn.style.backgroundColor = 'hsl(210, 46%, 95%)';
//     shareIcon.setAttribute('fill', '#6E8098');
    
//     isSocial = false
//   }
  
// }

function showSocialIcons() {
  shareBtn.setAttribute('aria-expanded', 'true')
}

shareBtn.addEventListener('click', showSocialIcons);

function closeSocialIcons(event) {
  // const socialIconsContainer = event.target.closest('.card__social')
  if (event.key === 'Escape') {
     shareBtn.setAttribute('aria-expanded', 'false');
  } 


}
  
function closeSocialDiv(event) {
if (!socialIcons.contains(event.target) && shareBtn.getAttribute('aria-expanded') === 'true') {
  shareBtn.setAttribute('aria-expanded', 'false');
}

}
 




document.addEventListener('keydown', closeSocialIcons)
// document.addEventListener('click', closeSocialDiv)

