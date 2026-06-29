const GM_PASSWORD = "edgewise"; // Change this later if you want.
function unlockGM(){
  const entered = document.getElementById('gm-pass')?.value || '';
  if(entered === GM_PASSWORD){
    sessionStorage.setItem('gmUnlocked','yes');
    window.location.href='gm/index.html';
  } else {
    const msg=document.getElementById('gm-msg');
    if(msg) msg.textContent='ACCESS DENIED. Clearance phrase incorrect.';
  }
}
function checkGMPage(){
  if(sessionStorage.getItem('gmUnlocked') !== 'yes'){
    window.location.href='../gm-access.html';
  } else {
    document.body.classList.add('gm-unlocked');
  }
}
function logoutGM(){sessionStorage.removeItem('gmUnlocked'); window.location.href='../index.html';}
