
import  {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
}

