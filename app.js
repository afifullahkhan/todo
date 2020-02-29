function add()
{   
    
    var val= document.getElementById('element').value;
    if(val.length>0){
    var a=document.getElementById('data');
    var b=document.createElement('p');
    var c=document.createTextNode(val);
    
    var del=document.createElement('button');
    var delval=document.createTextNode("Delete");
    del.setAttribute('onclick','del(this.parentNode)');
    del.setAttribute('class','btn btn-danger');

    b.appendChild(c);
    a.appendChild(b);
    del.appendChild(delval);
    b.appendChild(del);

    document.getElementById('element').value="";
}
else
{
    alert("Please Insert Element.")
}
}
function del(el)
{
    el.setAttribute('id','hide');
}