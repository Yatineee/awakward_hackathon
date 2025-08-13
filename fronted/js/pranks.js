// pranks.js — the awkward interactions (cometoad, nudges, etc.)
import { $, toast } from './ui.js';

export function enableCometoadMutation(){
  const btn = $('#btnSignup');
  const helper = $('#helper');
  if(!btn) return;
  setTimeout(()=>{
    if(btn.textContent.trim() === 'Continue'){
      btn.textContent = 'Cometoad';
      if(helper) helper.textContent = 'Press Cometoad to proceed';
    }
  }, 900);

  btn.addEventListener('mouseenter', ()=>{
    if(btn.textContent.toLowerCase().includes('cometoad')){
      toast('Did you mean <b>Continue</b>? Just kidding.');
    }
  });

  // Random micro‑nudge on focus/press
  const nudge = () => {
    const dx = (Math.random() * 6 - 3) | 0;
    const dy = (Math.random() * 6 - 3) | 0;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
    setTimeout(()=> btn.style.transform = '', 140);
  };
  ['focus','pointerdown'].forEach(evt => btn.addEventListener(evt, ()=>{
    if(btn.textContent.toLowerCase().includes('cometoad')) nudge();
  }));
}

export function fakeSignIn(){
  alert('Error 422: Too many frogs. Please try again.');
}

export function fakeSignup(){
  // Place to hook the impossible captcha
  toast('Captcha failed: please identify all images containing a toad. (None provided.)', 1800);
}