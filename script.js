

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        scrub: 1,
        pin: true,
        end: "+=" + (window.innerHeight * 2),
    }
});

tl
    .to(".white-circle", {
        scale: 0.2,
        ease: Power1
    }, 'same')

  

    .to(".center-content-img", {
        scale: 0,
        ease: Power1,

    }, 'same')

    .to(".pink-circle", {
        top: "50%",

        // scale: .2,
        ease: Power1
    }, 'same')
    .to(".center-content-top", {
       opacity:0,
       size:"0px",
        ease: Power1
    },"ch")
    .to(".pink-circle", {
       

        scale: 0,
        ease: Power1
    },'ch' )
    
    .to(".white-circle", {
       

        scale: 0,
        ease: Power1
    }, 'ch')
    
    .to(".pink-plate", {
       

        top:"15%",
        ease: Power1
    }, 'ch')
  
    .to(".gallery", {
       

        opacity:0,
        ease: Power1
    }, 'ch')
  
    
    .to(".pinkflare", {
       
          bottom:"0%",
        
        ease: Power1
    }, )
    
  
  
    

































var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second",
        start: "top top",
        pin: true,
        scrub: 1,
        end: "+=" + (window.innerHeight * 9),
        // markers: true
    }
})
tl2
.to('.pink-ball',
{
    top:"18%",
    scale:1.2,
    ease:Power1,
    duration:0.3
},'balls')
.to('.purple-ball',
{
    top:"18%",
    scale:1.2,
    ease:Power1,
   

},'balls')

.to('.purple-ball',
{
    left:"43%",
    ease:Power1,
   

},'merge')
.to('.pink-ball',
{
    left:"43%",
    ease:Power1,
    duration:0.3
},'merge')
.to('.pink-ball',
{
    scale:10,
    ease:Power1,
    
},'ultimate')
.to('.gradient',
{
    left:"-80%",
    ease:Power1,
    
},'slide')
.to('.second-top',
{
    background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
    ease:Power1,
    
},'slide')