var moveSpeed = 40.0;
var LeftLimit = -170.0;
var RightLimit = 130.0;
var goLeft = false;
var oldGoLeft = false;
var countLeft=-180;
var countRight=180;
var stopTrainGroup=false;
var groupType=1;
var isGroupType=true;
var timer: float = 50; // set duration time in seconds in the Inspector
var reset=false;
var switchT =0;
var dot=3;
var myGUIText : GUIText;
private var turnCounter=0;


var addcoord=0;

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