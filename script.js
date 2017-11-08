/**
 * 
 */



var slideImage=[];
slideImage[0]="scanner.jpg";
slideImage[1]="Industries.jpg";
slideImage[2]="global-communications-icon.jpg";
slideImage[3]="application.jpg";
NOFImages=0;

function changeFrImage(id) 
{
    if(NOFImages<=((slideImage.length)-1))
    {
    	clearTimeout(ID);
    	MainImage();
    }
}
function changeBkImage(id)
{
	clearTimeout(ID);
	if(NOFImages==0)
	{
		NOFImages=2;
	}
	else
	{
	NOFImages=NOFImages-2;
	
	if(NOFImages<0)
	{
		
		NOFImages=3;
		
	}
}
	MainImage();
}
	



function MainImage()
{
document.getElementById("para").src=slideImage[NOFImages];
if(NOFImages>=(slideImage.length-1)){
NOFImages=0;}
else{
NOFImages++;}
ID=setTimeout("MainImage()",4000);
}



MainImage();



