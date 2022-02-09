
function addnumber()
{
    
    var name=document.getElementById('name').value;
    var number=document.getElementById('number').value;
    document.getElementById('name').style.borderColor="black";
    document.getElementById('number').style.borderColor="black";
    document.getElementById('1').innerHTML="";
    document.getElementById('2').innerHTML="";
    if(check(name,number))
    {
       // alert(name);
       // alert(number);
        document.getElementById('1').innerHTML=name+"   "+number;
        document.getElementById('1').style.color="black";
    }
    
}

function check(name ,number)
{
    var f=0;
    if(name=="")
    {
       // alert("fill name");
        document.getElementById('name').style.borderColor="red";
       
        document.getElementById('1').innerHTML="fill valid name";
        document.getElementById('1').style.color="red" ;
        f=1;
    }
    if(!isNaN(name))
    {
        document.getElementById('name').style.borderColor="red";
        document.getElementById('1').innerHTML="fill valid name";
        document.getElementById('1').style.color="red" ;
        f=1;

    }
    if(isNaN(number)||number==""||number.length!="10")
    {
       // alert("fill valid number");
        document.getElementById('number').style.borderColor="red";
        document.getElementById('2').innerHTML="fill valid number";
        document.getElementById('2').style.color="red" ;
        f=1;
    }
    if(f==0)
    return true;
    return false;

}