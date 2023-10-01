// let text = document.getElementById('text');

var x = 1
const reload = () => {
    document.getElementById('first').remove()
    const first = document.getElementById('reload')
    first.innerHTML = `<header>
    <span class="logo">LOGO</span>
    <nav class="links">
        <a href="">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#events">EVENTS</a>
        <a href="./register.html">REGISTER</a>
        <a href="">CONTACT US</a>
    </nav>

</header>

<section class="home" id="home">

<div id="clgdept">
<h1 id="welcome"><img src='./rmd_logo.png' id='rmdlogo'><span id="college" >RMD ENGINEERING COLLEGE</span><br/></h1>
<br/>
<h2 id="dept">DEPARTMENT OF <span class="fast-flicker" id="cap1" >I</span>NFORMATION <span id="cap2" class="fast-flicker">T</span>ECHNOLOGY</h2>
<p id="p">PROUDLY PRESENTS</p>
</div>
<div id="screentopic" style="color:white"><p><span class="flicker2">T</span>OP<span class="flicker2">I</span>C</p></div>
<h1 id="text"> <span class="fast-flicker">T</span>O<span class="flicker">PI</span>C</h1>
    
</section><section class="about"id="about" >
<h1 class="topic" >About</h1>
<div class="abtcontents">
<div class="abtclg">
<div class="content" id="content">RMDEC aspires to be a premier institution offering quality technical education and research with application expertise in Engineering and Technology.</div>
<div class="wrapper" id="wrapper">

      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      </div>
      </div>
      <div class="abtdept">
      <div class="content" >The Department of Information Technology (IT) was established in the year 2001 with the aim of providing inclusive technology education to students, and thereby creating responsible citizens who would be a globally competent individuals contributing to the betterment of their families, society and nation.</div>
      <div class="wrapper1" id="wrapper1">
        
      <i></i>
      </div>
      </div>
      </div>
      </div>
</section><section class="events" id="events"><h1 style="color:white" class="topic">Events</h1><div >
<div class="container"><div class= "struct" id= "div">
<div class= "prompt">
<div class="popheader" id="popheader">
<h1>EVENT 1</h1>
<button onclick="closeDiv()">X</button></div>
<div class="popupcontent"><div class="popupabout"><h2>ABOUT</h2><div class="popupaboutp" id="popupaboutp">This contains content for about.This contains content for aboutThis contains content for aboutThis contains content for aboutThis contains content for aboutThis contains content for about</div></div><div class="centerline"></div><div class="popuprules"><h2>RULES</h2><div class="popuprulesp" id="popuprulesp">* This contains pop up rules content.This contains pop up rules content.This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop uThis contains pop up rules content.</br>* rules content.</div></div></div><div class="popfooter"><a href="./register.html" target="_blank"><button  >Register</button></a></div>
</div></div>
<div class="containerbox" id="event1" >
<div class="eventcontent" data-hover="Hovered content"><h1>EVENT 1</h1><p>This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents</p></div><div class="slogan"><p>SLogan.Slogan.Slogan</p></div><div class="eventbutton"><button onclick="event1()">Know more</button></div><div id="hovertext" class="hovertext">This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.</div></div>
<div class="containerbox" id="event2"><div class="eventcontent"><h1>EVENT 1</h1><p>This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents</p></div><div class="slogan"><p>SLogan.Slogan.Slogan</p></div><div class="eventbutton"><button onclick="event2()">Know more</button></div><div class="hovertext">This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.</div></div><div class="containerbox" id="event3"><div class="eventcontent"><h1>EVENT 1</h1><p>This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents</p></div><div class="slogan"><p>SLogan.Slogan.Slogan</p></div><div class="eventbutton"><button onclick="event3()">Know more</button></div><div class="hovertext">This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.</div></div></div>
</div><div class="nontechevents" style="color:white"><h1 class="topic">Non-Technical events</h1><div class="container1"><div class= "struct1" id= "div1">
<div class= "prompt">
<div class="popheader" id="popheader">
<h1>EVENT 1</h1>
<button onclick="closeDiv1()">X</button></div>
<div class="popupcontent"><div class="popupabout"><h2>ABOUT</h2><div class="popupaboutp" id="popupaboutp">This contains content for about.This contains content for aboutThis contains content for aboutThis contains content for aboutThis contains content for aboutThis contains content for about</div></div><div class="centerline"></div><div class="popuprules"><h2>RULES</h2><div class="popuprulesp" id="popuprulesp">* This contains pop up rules content.This contains pop up rules content.This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop uThis contains pop up rules content.</br>* rules content.</div></div></div><div class="popfooter"><a href="./register.html" target="_blank"><button  >Register</button></a></div>
</div></div><div class="containerbox1" id="nonevent1">
<div class="eventcontent1"><h1>EVENT 1</h1><p>This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents</p></div><div class="slogan"><p>SLogan.Slogan.Slogan</p></div><div class="eventbutton"><button onclick="nonevent1()">Know more</button></div><div class="hovertext">This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.</div></div>
<div class="containerbox1" id="nonevent2"><div class="eventcontent1"><h1>EVENT 1</h1><p>This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents.This paragraph is for content of the eveents</p></div><div class="slogan"><p>SLogan.Slogan.Slogan</p></div><div class="eventbutton"><button onclick="nonevent2()">Know more</button></div><div class="hovertext">This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.This contains text that comes when this element this hovered.</div></div></div></section>`
}
function event1() {
    popheader.innerHTML = `<h1>EVENT 1</h1>
    <button onclick="closeDiv()">X</button>`
    popupaboutp.innerText = "This contains text content for event 1.This contains text content for event 1.This contains text content for event 1.This contains text content for event 1.This contains text content for event 1."
    popuprulesp.innerText = "This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1."
    openDiv()
}
function nonevent1() {
    popheader.innerHTML = `<h1>EVENT 1</h1>
    <button onclick="closeDiv()">X</button>`
    popupaboutp.innerText = "This contains text content for event 1.This contains text content for event 1.This contains text content for event 1.This contains text content for event 1.This contains text content for event 1."
    popuprulesp.innerText = "This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1."
    openDiv1()
}
function event2() {
    popheader.innerHTML = `<h1>EVENT 2</h1>
    <button onclick="closeDiv()">X</button>`
    popupaboutp.innerText = "This contains text content for event 2.This contains text content for event 2.This contains text content for event 2.This contains text content for event 2.This contains text content for event 2."
    popuprulesp.innerText = "This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2."
    openDiv()
}
function nonevent2() {
    popheader.innerHTML = `<h1>EVENT 2</h1>
    <button onclick="closeDiv()">X</button>`
    popupaboutp.innerText = "This contains text content for event 2.This contains text content for event 2.This contains text content for event 2.This contains text content for event 2.This contains text content for event 2."
    popuprulesp.innerText = "This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2."
    openDiv1()
}
function event3() {
    popheader.innerHTML = `<h1>EVENT 3</h1>
    <button onclick="closeDiv()">X</button>`
    popupaboutp.innerText = "This contains text content for event 3.This contains text content for event 3.This contains text content for event 3.This contains text content for event 3.This contains text content for event 3."
    popuprulesp.innerText = "This contains rules for event3.This contains rules for event3.This contains rules for event3.This contains rules for event3.This contains rules for event3.This contains rules for event3.This contains rules for event3.This contains rules for event3."
    openDiv()
}
function openDiv() {
    let blurcontainer1 = document.getElementById('event1')
    let blurcontainer2 = document.getElementById('event2')
    let blurcontainer3 = document.getElementById('event3')
    blurcontainer1.style.opacity = '0'
    blurcontainer2.style.display = 'none'
    blurcontainer3.style.opacity = '0'
    let get = document.getElementById('div')
    // hovertext.style./display = 'none'
    get.style.display = 'block'
}
function openDiv1() {
    let blurcontainer1 = document.getElementById('nonevent1')
    let blurcontainer2 = document.getElementById('nonevent2')
    // let blurcontainer3 = document.getElementById('event3')
    blurcontainer1.style.display = 'none'
    blurcontainer2.style.display = 'none'
    // blurcontainer3.style.opacity = '0'
    let get = document.getElementById('div1')
    // hovertext.style./display = 'none'
    get.style.display = 'block'
    // get.style.transition = '2s'
}
function closeDiv() {
    let blurcontainer1 = document.getElementById('event1')
    let blurcontainer2 = document.getElementById('event2')
    let blurcontainer3 = document.getElementById('event3')
    blurcontainer1.style.opacity = '1'
    blurcontainer2.style.display = 'block'
    blurcontainer3.style.opacity = '1'

    let get = document.getElementById('div')
    get.style.display = 'none'
}
function closeDiv1() {
    let blurcontainer1 = document.getElementById('nonevent1')
    let blurcontainer2 = document.getElementById('nonevent2')
    // let blurcontainer3 = document.getElementById('event3')
    blurcontainer1.style.display = 'block'
    blurcontainer2.style.display = 'block'
    // blurcontainer3.style.opacity = '1'

    let get = document.getElementById('div1')
    get.style.display = 'none'
}
setTimeout(reload, 1000)
// containerbox.addEventListener('onmouseover', () => {
//     containerbox.style.background = 'grey'
// })
let width = screen.width
console.log(width)
if (width <= 1000) {
    // document.getElementById('script').remove()

    // screentopic.innerText = `<p style="color:white">Hello</p>`


}
if (width > 1000) {
    window.addEventListener('scroll', () => {
        // document.getElementById('screentopic').remove()
        // document.getElementById('clgdept').remove()
        let value = window.scrollY;
        console.log(value)
        if (value === 0) {
            college.style.fontSize = 40 + 'px'
        } else {
            screentopic.style.fontSize = 0
            college.style.fontSize = 0 + 'px'

        }
        if (value === 0) {
            dept.style.fontSize = 20 + 'px'
        } else {
            dept.style.fontSize = 0 + 'px'

        }
        if (value === 0) {
            rmdlogo.style.opacity = '1'
        } else {
            rmdlogo.style.opacity = '0'

        }
        if (value === 0) {
            cap1.style.fontSize = 30 + 'px'
        } else {
            cap1.style.fontSize = 0 + 'px'

        }
        if (value === 0) {
            cap2.style.fontSize = 30 + 'px'
        } else {
            cap2.style.fontSize = 0 + 'px'

        }
        if (value === 0) {
            p.style.fontSize = 20 + 'px'
        } else {
            p.style.fontSize = 0 + 'px'

        }
        text.style.marginTop = value * 1 + 'px';
        if (value <= 200) {
            text.style.fontSize = value + 'px'
        } else {
            text.style.fontSize = 0 + 'px'

        }

        about.style.marginTop = value * -0.5 + 'px'
        wrapper.style.marginTop = value * -0.6 + 'px'
        wrapper1.style.marginTop = value * -0.4 + 'px'
        events.style.marginTop = value * 0.44 + 'px'
        // content.style.marginTop = value * -0.3 + 'px'


        wrapper.style.left = Math.min(value * 1, 350) + 'px'
        wrapper1.style.left = Math.min(value * 1, 350) + 'px'


        //  console.log(text)

    })
}
