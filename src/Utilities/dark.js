let darkMode = localStorage.getItem("dark-mode");

const lightMoadEnable =()=>{
    localStorage.setItem("dark-mode","light");
    document.body.classList.add("dark-light");
}
const darkModeEnable=()=>{
    localStorage.setItem("dark-mode","dark");
    document.body.classList.remove("dark-light");
}
if(darkMode==="light"){
lightMoadEnable()
}
const darkTheme=()=>{
    darkMode = localStorage.getItem("dark-mode");
    if(darkMode !=="light"){
        lightMoadEnable();
        document.querySelector(".darkmode").innerText= "Dark";
    }else{
        darkModeEnable();
        document.querySelector(".darkmode").innerText= "Light";
    }


}

export {darkTheme};