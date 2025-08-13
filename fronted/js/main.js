// main.js — wire everything together
import { $, $$ } from './ui.js';
import { enableCometoadMutation, fakeSignIn, fakeSignup } from './pranks.js';
import { runImpossibleCaptcha } from './captcha.js';

const card = $('#card');
const toSignup = $('#toSignup');
const toSignin = $('#toSignin');
const btnSignIn = $('#btnSignIn');
const btnSignup = $('#btnSignup');

function setMode(mode){
  card?.setAttribute('data-mode', mode);
}

// Switchers
toSignup?.addEventListener('click', e=>{
  e.preventDefault();
  setMode('signup');
  $('#password2')?.value = '';
  enableCometoadMutation();
});

toSignin?.addEventListener('click', e=>{
  e.preventDefault();
  setMode('signin');
});

// Actions
btnSignIn?.addEventListener('click', fakeSignIn);

btnSignup?.addEventListener('click', async ()=>{
  try{
    await runImpossibleCaptcha();
  }catch(e){
    // expected to fail — then do the extra prank
    fakeSignup();
  }
});

// Optional: swap hero via ?img=... query
const params = new URLSearchParams(location.search);
const imgUrl = params.get('img');
if(imgUrl){
  const hero = $('#hero');
  if(hero) hero.src = imgUrl;
}