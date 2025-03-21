const text = document.querySelector(".text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Wep Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Electronics engineer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);




/*--------------navbar---------------- */



const navContent = document.getElementById("navcontent");
const navBtn = document.getElementById("navbtn");
const closeBtn = document.getElementById("closebtn");

navBtn.addEventListener("click", () => {
    navContent.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    navContent.style.display = "none";
})







/*------------------SCROOOLLL------------------------- */




const target = document.querySelectorAll(".target");

const callBack = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
        else {
            entry.target.classList.remove("active")
        }
    })
}

const options = {
    threshold: 0.3
}



const observer = new IntersectionObserver(callBack, options);

target.forEach((target => {
    observer.observe(target);
}));






/*-----------DOWNLOAD CV---------------------- */


const downloadBtn = document.getElementById("download");


