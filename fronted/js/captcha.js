// captcha.js — placeholder for the “impossible” captcha
// You can expand this into a modal with grid images later.
import { toast } from './ui.js';

export function runImpossibleCaptcha(){
  // Return a Promise to simulate async verification
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      toast('Captcha expired. Please try again.');
      reject(new Error('captcha_failed'));
    }, 900);
  });
}