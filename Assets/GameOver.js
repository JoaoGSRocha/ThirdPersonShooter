var dot=3;
var myGUIText : GUIText;

function Start()
{
   InvokeRepeating("DotChange",  1, 1);
}

function DotChange(){
	if(dot==1)
	{
		myGUIText.text = "Trying to Reconnect..";
		dot=2;
	}
	else if(dot==2)
	{
		myGUIText.text = "Trying to Reconnect...";
		dot=3;
	}
	else if(dot==3){
		myGUIText.text = "Trying to Reconnect.";
		dot=1;
	}
}

function Update () {
	if(Input.GetButton("Esc"))
	{	
		Application.Quit(); 
	}
	if(Input.GetButton("Enter"))
	{	
		Application.LoadLevel ("TrainEscape"); 
	}

}