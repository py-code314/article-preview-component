// "Content-Type: text/javascript";

const socialMediaIcons = document.querySelector('.card__social');
const shareBtn = document.querySelector('#card__share-btn');


function showSocialMediaContainer() {
  shareBtn.setAttribute('aria-expanded', 'true');
  socialMediaIcons.focus();
}

function closeSocialMediaContainer(event) {
  if (event.key === 'Escape') {
    shareBtn.setAttribute('aria-expanded', 'false');
    shareBtn.focus();
  } else if (event.key === 'Enter') {
    showSocialMediaContainer();
  }
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('#card__share-btn')) {
    shareBtn.setAttribute('aria-expanded', 'false');
  } else {
    // shareBtn.setAttribute('aria-expanded', 'true');
    showSocialMediaContainer();
  }
});

shareBtn.addEventListener('click', showSocialMediaContainer);
document.addEventListener('keydown', closeSocialMediaContainer);
