// scroll trigger
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
})

// mouse animation circle
var timeout
function CircleSkew() {
  var xscale = 1
  var yscale = 1

  var xprev = 0
  var yprev = 0
  window.addEventListener('mousemove', function (dets) {
    clearTimeout(timeout)
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev)
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - xprev)

    xprev = dets.clientX
    yprev = dets.clientY
    circleMouseFollwer(xscale, yscale)
    
    timeout = setTimeout(function () {
      document.querySelector(
        '#mini-circle'
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
    }, 100)
  })
}
CircleSkew()

function circleMouseFollwer(xscale, yscale) {
  window.addEventListener('mousemove', function (dets) {
    document.querySelector(
      '#mini-circle'
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
  }) /////
}
circleMouseFollwer()
// mouse end

// first  page

function firstPageAnim() {
  var tl = gsap.timeline()

  tl.from('#nav', {
    y: '-10',
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  }).to('.boundingelem', {
    y: '0',
    ease: Expo.easeInOut,
    delay: -1,
    duration: 2,
    stagger: 0.2,
  })
  tl.from('herofooter', {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    delay: -1,
  })
}
firstPageAnim()
// first end

// hover image
document.querySelectorAll('.elem').forEach(function (elem) {
  var rotate = 0
  var diffrot = 0
  elem.addEventListener('mousemove', function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top
    diffrot = dets.clientX - rotate
    rotate = dets.clientX
    gsap.to(elem.querySelector('img'), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    })
  })
})
// mouse leave
document.querySelectorAll('.elem').forEach(function (elem) {
  elem.addEventListener('mouseleave', function () {
    gsap.to(elem.querySelector('img'), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    })
  })
})
