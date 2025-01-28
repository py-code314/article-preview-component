/* Global Variables */
const socialMediaIcons = document.querySelector('.card__social');
const shareBtn = document.querySelector('#card__share-btn');


/* Sets aria-expanded to true on the share button so that the social media container is visible on click */
function showSocialMediaContainer() {
  shareBtn.setAttribute('aria-expanded', 'true');
  socialMediaIcons.focus();
}


/* Close social media container when the escape key is pressed */
function closeSocialMediaContainer(event) {
  if (event.key === 'Escape') {
    shareBtn.setAttribute('aria-expanded', 'false');
    shareBtn.focus();
  } else if (event.key === 'Enter') {
    showSocialMediaContainer();
  }
}


/* Hide social media container when the user clicks anywhere outside of the share button */
function hideSocialMediaContainer(event) {
  if (!event.target.closest('.card__share-btn')) {
    shareBtn.setAttribute('aria-expanded', 'false');
  } else {
    showSocialMediaContainer();
  }
}


/* Event Listeners */
shareBtn.addEventListener('click', showSocialMediaContainer);
document.addEventListener('keydown', closeSocialMediaContainer);
document.addEventListener('click', hideSocialMediaContainer);
