studentarray = [];
function submit() {
    var n1= document.getElementById("student_1").value;
    var n2= document.getElementById("student_2").value;
    var n3= document.getElementById("student_3").value;
    var n4= document.getElementById("student_4").value;
    studentarray.push(n1 );
    studentarray.push(n2 );
    studentarray.push(n3 );
    studentarray.push(n4 );
    console.log(studentarray);
document.getElementById("display").innerHTML = studentarray;
document.getElementById("sub").style.display = "none" ;
document.getElementById("sort").style.display = "inline-block" ;
}
function sort () {
    studentarray.sort();
    document.getElementById("display").innerHTML = studentarray;
}
