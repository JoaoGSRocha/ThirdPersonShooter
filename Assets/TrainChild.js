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
private var turnCounter=0;
public var lifes=5;
var myGUIText : GUIText;
var addcoord=0;

function Start()
{
   myGUIText=GameObject.Find("Lifes").guiText;
}

public function Update(){
	StopGroupType();

}

function StopGroupType()
{

	if(turnCounter <= 3){
		if(countRight<1 || countLeft <1)
			transform.position += transform.forward * moveSpeed * Time.deltaTime;

		if(transform.position.x >= RightLimit){
			goLeft=true;
			transform.eulerAngles.y += 180; 
			if(turnCounter>=8){
				if(countLeft>1){stopTrainGroup=true;}
				countRight=2;
			}
			turnCounter++;
		}
		if( transform.position.x <= LeftLimit){
			goLeft=false;
			transform.eulerAngles.y -= 180; 
			if(turnCounter>=8){
				if(countRight>1){stopTrainGroup=true;}
				countRight=2;
			}
			turnCounter++;
		}
	}
	else
	{
		Destroy(this.gameObject);
	}

}
