// let text = document.getElementById('text');
const changeDept = () => {
    document.getElementById('dept').innerHTML = `DEPARTMENT OF <span class="fast-flicker" id="cap1" >I</span>NFORMATION <span id="cap2" class="fast-flicker">T</span>ECHNOLOGY`

}


var x = 1
const reload = () => {
    document.getElementById('first').remove()
    const first = document.getElementById('reload')
    first.innerHTML = ` <header>
    <span class="logo">Techcrescenza'24</span>
    <nav class="links">
        <a href="">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#events">EVENTS</a>
        <a href="./register.html">REGISTER</a>
        <a href="#contact">CONTACT US</a>
    </nav>

</header>

<marquee width="100%" direction="right" height="100px" >
Register before 31st January 2024. Participate and win exciting prizes.
</marquee>
<section class="home" id="home">


<div id="clgdept">
<h1 id="welcome"><img src='./rmd_logo.png' id='rmdlogo'><span id="college" >RMD ENGINEERING COLLEGE</span><br/></h1>
<br/>
<h2 id="dept">DEPARTMENT OF <span class="fast-flicker" id="cap1" >I</span>NFORMATION <span id="cap2" class="fast-flicker">T</span>ECHNOLOGY</h2>
<p id="p">PROUDLY PRESENTS</p>
</div>
<div id="screentopic" style="color:white;"><p><span class="flicker2">T</span>ECH<span class="flicker2">C</span>RESCENZA </p></div>
<h1 id="text"> <span class="fast-flicker">T</span>ech<span class="flicker">C</span>rescenza </h1>
    
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
<h1>Sample</h1>
<button onclick="closeDiv()">X</button></div>
<div class="popupcontent"><div class="popupabout"><h2>ABOUT</h2><div class="popupaboutp" id="popupaboutp">This contains content for about.This contains content for aboutThis contains content for aboutThis contains content for aboutThis contains content for aboutThis contains content for about</div></div><div class="centerline"></div><div class="popuprules"><h2>RULES</h2><div class="popuprulesp" id="popuprulesp">* This contains pop up rules content.This contains pop up rules content.This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop up rules content.</br>* This contains pop uThis contains pop up rules content.</br>* rules content.</div></div></div><div class="popfooter"><a href="./register.html" target="_blank"><button  >Register</button></a></div>
</div></div>

<div class="containerbox" id="event1" >
<div class="eventcontent" data-hover="Hovered content"><h1>Scriptoria's Secret</h1><p>Dive into knowledge at our Paper Presentation Event, where concise ideas meet eloquent expression, sparking insightful discussions and inspirations.</p></div><div class="slogan"><p>Pages Speak, Minds Listen</p></div><div class="eventbutton"><button onclick="event1()">Know more</button></div><div id="hovertext" class="hovertext">An intellectual showcase where minds converge to unfold research, insights, and ideas. Participants, representing diverse fields, distill their knowledge into concise, impactful presentations. The audience becomes part of a dynamic exchange, fostering discussions and networking. It's more than an academic showcase; it's a celebration of intellect, communication skills, and collaborative exploration, creating a vibrant tapestry of knowledge and discovery.</div></div>

<div class="containerbox" id="event2"><div class="eventcontent"><h1>Code Quasar</h1><p>Enter the world of swift solutions at our Coding Event, where concise code speaks volumes and excellence takes center stage.</p></div><div class="slogan"><p>Crack, Code, Celebrate!</p></div><div class="eventbutton"><button onclick="event2()">Know more</button></div><div class="hovertext">An exhilarating competition where programming prowess takes center stage. Participants face rapid challenges, showcasing quick thinking and innovative solutions. The event sparks a dynamic exchange of coding brilliance, fostering a community of sharp minds and creative problem solvers. Join us in this coding adventure, where speed, precision, and ingenuity converge for a thrilling celebration of programming excellence.</div></div><div class="containerbox" id="event3"><div class="eventcontent"><h1>Mensa Mingle</h1><p>Rapid-fire brilliance in our Quiz Event — short questions, quick thinking, and the pursuit of quiz glory await participants!</p></div><div class="slogan"><p>Swift Minds, Quiz Finds</p></div><div class="eventbutton"><button onclick="event3()">Know more</button></div><div class="hovertext">Step into the Quiz Arena, where intellect meets excitement! Our Quiz Event is a dynamic contest of knowledge, with quick questions and sharp answers. Participants engage in a fast-paced journey of trivia, showcasing their brilliance and quick thinking. The atmosphere is buzzing with energy as competitors vie for victory, creating a thrilling spectacle of wit and wisdom. Join us for an evening of rapid-fire challenges, camaraderie, and the joy of learning in this exciting Quiz Event.</div></div></div>
</div><div class="nontechevents" style="color:white"><div class="container1"><div class= "struct1" id= "div1">
<div class= "prompt">
<div class="popheader" id="popheader">
<h1>Croma Meister</h1>
<button onclick="closeDiv1()">X</button></div>
<div class="popupcontent"><div class="popupabout"><h2>ABOUT</h2><div class="popupaboutp" id="popupaboutp"><ul><li>This is a Website Design Contest.</li><li>Required Hardware and software will be provided in the venue.</li><li>This is a point based event.</li><li>Points will be based on attractiveness and no. of functionalities implemented.</li></ul></div></div><div class="centerline"></div><div class="popuprules"><h2>RULES</h2><div class="popuprulesp" id="popuprulesp"><ul><li>One team must have 2 participants.</li><li>Website must be designed with HTML, CSS, JAVASCRIPT.</li><li>No CSS framework should be used.</li><li>Functionalities to be implemented will be given on the spot.</li><li>Jury decision will be final.</li></ul></div></div></div><div class="popfooter"><a href="./register.html" target="_blank"><button  >Register</button></a></div>
</div></div><div class="containerbox1" id="nonevent1">
<div class="eventcontent1"><h1>Croma Meister</h1><p>Ignite the digital realm in our Web Design Contest—short, powerful entries redefine online aesthetics, merging creativity and functionality.</p></div><div class="slogan"><p>Craft, Click, Cheers!</p></div><div class="eventbutton"><button onclick="nonevent1()">Know more</button></div><div class="hovertext">A creative showcase where digital innovation takes the spotlight. Participants craft visually stunning online experiences, balancing aesthetics and functionality. This event celebrates the art of web design, inviting designers to redefine digital landscapes with their short, impactful creations. Join us for a journey where pixels transform into masterpieces, and every click unveils a world of creativity and user-centric design.






</div></div>
<div class="containerbox1" id="nonevent2"><div class="eventcontent1"><h1>Suprise Event</h1><p>Register and wait for the suprise event</p></div><div class="slogan"><p>!    !     !</p></div><div class="eventbutton"><button ><a href="register.html" style="text-decoration:none;">Register</a></button></div><div class="hovertext">Suprise event!!!!!!!!!!</div></div></div></section>
<section class="contact" id="contact">
<h1 class="topic">Contact Us</h1>
<div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.858432787611!2d80.13819837508319!3d13.359077486993044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807d6e1207f9%3A0x2beed88a75a3fe40!2sR.M.D.%20Engineering%20college!5e0!3m2!1sen!2sin!4v1696180906328!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
<div class="icons">
<div class="instagram"><a href="#" style="color:#d30035" class="fa fa-instagram"> Instagram</a></div>
<div class="whatsapp"><a href="#" class="fa fa-whatsapp" style="color:rgb(2, 172, 2)"> Whatsapp</a></div>
<div class="linkedin"><a href="#" style="color:#0A66A2" class="fa fa-linkedin"> Linkedin</a></div>
</div>
</section>
`
    const text = baffle("#dept");
    text.set({
        characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
    });

    text.start();
    text.reveal(4000);
    const p = baffle("#p");
    p.set({
        characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
    });

    p.start();
    p.reveal(4000);
    // changeDept()
    setTimeout(changeDept, 2500)

    ScrollReveal().reveal('.about', { reset: true });
    ScrollReveal().reveal('.about', { duration: 1000 });
    ScrollReveal().reveal('.events', { reset: true });
    ScrollReveal().reveal('.events', { duration: 1000 });
    ScrollReveal().reveal('.nontechevents', { duration: 1000 });
    ScrollReveal().reveal('.nontechevents', { reset: true });
    // ScrollReveal().reveal('.icons');
    // ScrollReveal().reveal('.contact', { reset: true });
    var i = 0;
    var go_forward;

    bg_gradient_animation();

    function bg_gradient_animation() {
        if (i <= 0)
            go_forward = true;
        if (i >= 100)
            go_forward = false;

        if (go_forward)
            i += 0.5;
        else
            i -= 0.3;

        college.style['background-image'] = `linear-gradient(to right,  #FFFFFF ${i - 10}%,#fff ${i}%,#000000 ${i + 10}%`;

        requestAnimationFrame(bg_gradient_animation);
    }

}















let abc=document.getElementById("popheader");
let bcd=document.getElementById("popupaboutp")
let cde=document.getElementById("popuprulesp")


function event1() {
    let abc=document.getElementById("popheader");
    let bcd=document.getElementById("popupaboutp")
    let cde=document.getElementById("popuprulesp")
    abc.innerHTML = `<h1>Scriptoria's Secret </h1>
    <button onclick="closeDiv()">X</button>`
    bcd.innerHTML = `<ul><li>This is a Paper-Presentation event.</li><li> Papers related to any field can be presented and will be reviewed by the jury.</li><li> Participants are requested to have a hardcopy of a paper and a ppt for their presentation.</li></ul>`
    cde.innerHTML = `<ul><li> One team can present one paper only.</li><li> Maximum time for presentation 8-10 mins(approx.).</li><li> Bring a soft copy of your presentation.</li><li> Working model (if available) can also be presented.</li><li>Decision of the jury will be final.</li></ul> `
    openDiv()
}
function nonevent1() {
    let abc=document.getElementById("popheader");
    let bcd=document.getElementById("popupaboutp")
    let cde=document.getElementById("popuprulesp")
    abc.innerHTML = `<h1>Croma Meister</h1>
    <button onclick="closeDiv()">X</button>`
    bcd.innerText = "This contains text content for event 1.This contains text content for event 1.This contains text content for event 1.This contains text content for event 1.This contains text content for event 1."
    cde.innerText = "This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1.This contains rules for event1."
    openDiv1()
}
function event2() {
    let abc=document.getElementById("popheader");
    let bcd=document.getElementById("popupaboutp")
    let cde=document.getElementById("popuprulesp")
    abc.innerHTML = `<h1>Code Quasar</h1>
    <button onclick="closeDiv()">X</button>`
    bcd.innerHTML = `<ul><li>This is a Coding Event.</li><li>This event consist of three rounds.</li><li>Each round is an elimination round.</li><li>Required hardware and software assistance will be provided at the venue</li></ul>`
    cde.innerHTML = `<ul><li>2 participants from each group can participate.</li><li>Participants must have an HACKERRANK Account</li><li>Time limit for each round will be mentioned in the platform.</li><li>In case of tie break participant with first correct submission of all problems will be rewarded.</li></ul>`
    openDiv()
}
function nonevent2() {
    let abc=document.getElementById("popheader");
    let bcd=document.getElementById("popupaboutp")
    let cde=document.getElementById("popuprulesp")
    abc.innerHTML = `<h1>EVENT 2</h1>
    <button onclick="closeDiv()">X</button>`
    bcd.innerText = "This contains text content for event 2.This contains text content for event 2.This contains text content for event 2.This contains text content for event 2.This contains text content for event 2."
    cde.innerText = "This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2.This contains rules for event2."
    openDiv1()
}
function event3() {
    let abc=document.getElementById("popheader");
    let bcd=document.getElementById("popupaboutp")
    let cde=document.getElementById("popuprulesp")
    abc.innerHTML = `<h1>Mensa Mingle</h1>
    <button onclick="closeDiv()">X</button>`
    bcd.innerHTML = `<ul><li>This is a Quiz event.</li><li>Quiz question are truly related to the field of computer science.</li><li>This is a digital event.</li><li>Participants are requested to carry their electronic device for their participation</li></ul>`
    cde.innerHTML = `<ul><li>2 members from a team can participate in this event.</li><li>Time and score for each question will be varied.</li><li>In case of tie break a one-on-one contest will be conducted.</li><li>Decision of jury will be final.</li></ul>`
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
setTimeout(reload, 3000)
// containerbox.addEventListener('onmouseover', () => {
//     containerbox.style.background = 'grey'
// })
let width = screen.width

if (width <= 1000) {
    document.getElementById('script').remove()

    // screentopic.innerText = `<p style="color:white">Hello</p>`


}
if (width > 1000) {
    window.addEventListener('scroll', () => {
        // document.getElementById('screentopic').remove()
        // document.getElementById('clgdept').remove()
        const part = document.getElementById('particle-container')

        let value = window.scrollY;

        if (value === 0) {
            college.style.fontSize = 60 + 'px'
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

        // part.style.marginTop = value * 1 + 'px'
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
