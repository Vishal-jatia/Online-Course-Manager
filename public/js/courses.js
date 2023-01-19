const search = $("[data-search]")
search.on("input", (e)=>{
    const value = e.target.value.toLowerCase();
    console.log(value);
    console.log(courses)
    courses.forEach(course =>{
        const isPresent = course.name.indexOf(value)>-1
        console.log(isPresent)
        course.classList.toggle("hide",!isPresent)
        if(isPresent)
            course.classList.style.display = "";
        else
            course.classList.style.display="none";
    })
})

const courses = [{ "name": "java" }, { "name": "csharp"}, { "name": "machinelearing"}, {"name":"dsa"}, {"name":"webdev"},{"name":"c"},{"name":"c++"},{"name":"pyhton"},{"name":"androiddev"}];



$(document).on("mousemove", (event) =>{
    let vertical = event.pageY;
    let horizontal = event.pageX;
    console.log("("+vertical+","+horizontal+")");
    $(".front-img").css("transform", "translate("+horizontal*0.01 + "px,"+vertical*0.01+"px)");
})

$(document).scroll( ()=> {
    let s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    let scrollPercent = (s / (d - c)) * 100;
    console.log(scrollPercent);
    $(".navbar").css("backdrop-filter", "blur(6px);");
    $(".progress").css("width",scrollPercent+"%");
})

$(document).scroll(()=>{
    if($(document).scrollTop() > 30) {
        $()
    }
})
function setnewimgjava(){
    document.getElementById("imgjava").src="images/javadesc.png";
}
function setoldimgjava(){
    document.getElementById("imgjava").src="images/javacourse.png";
}
function setnewimgcs(){
    document.getElementById("imgcs").src="images/csdesc.png";
}
function setoldimgcs(){
    document.getElementById("imgcs").src="images/csharp.png";
}
function setnewimgml(){
    document.getElementById("imgml").src="images/mldesc.png";
}
function setoldimgml(){
    document.getElementById("imgml").src="images/mlcourse.png";
}
function setnewimgweb(){
    document.getElementById("imgweb").src="images/webdesc.png";
}
function setoldimgweb(){
    document.getElementById("imgweb").src="images/webtech.png";
}
function setnewimgdsa(){
    document.getElementById("imgdsa").src="images/dsadesc.png";
}
function setoldimgdsa(){
    document.getElementById("imgdsa").src="images/dsa.png";
}
function setnewimgc(){
    document.getElementById("imgc").src="images/cdesc.png";
}
function setoldimgc(){
    document.getElementById("imgc").src="images/ccourse.png";
}
xxxx
function setnewimgpython(){
    document.getElementById("imgpython").src="images/pythondesc.png";
}
function setoldimgpython(){
    document.getElementById("imgpython").src="images/pythoncourse.png";
}
function setnewimgandroid(){
    document.getElementById("imgandroid").src="images/androiddesc.png";
}
function setoldimgandroid(){
    document.getElementById("imgandroid").src="images/androidcourse.png";
}
function setnewimgcpp(){
    document.getElementById("imgcpp").src="images/cppdesc.png";
}
function setoldimgcpp(){
    document.getElementById("imgcpp").src="images/cppcourse.png";
}