var moveSpeed = 40.0;
var LeftLimit = -170.0;
var RightLimit = 130.0;
var goLeft = false;
var countLeft=0;
var countRight=0;
var stopTrainGroup=false;
var groupType=1;
var isGroupType=true;
var currentGT=1;
var GROUPTYPES=5;
var timer: float = 50; // set duration time in seconds in the Inspector
var reset=false;

public function Update(){
StopGroupType();
TimeSplit();

}

function StopGroupType()
{
	if(!isGroupType)
	{}
	else {
		if(countRight<1 || countLeft <1)
			transform.position += transform.forward * moveSpeed * Time.deltaTime;
	}
	if(currentGT>=groupType)
		isGroupType=true;
	else
		isGroupType=false;
	if(isGroupType && transform.position.x >= RightLimit){
		transform.eulerAngles.y += 180; 
		if(timer<0){
			if(countLeft>1){stopTrainGroup=true;}
			countRight=2;
		}
	}
	if(isGroupType && transform.position.x <= LeftLimit){
		transform.eulerAngles.y -= 180; 
		if(timer<0){
			if(countRight>1){stopTrainGroup=true;}
			countRight=2;
		}
	}

}

function TimeSplit()
{
	timer -= Time.deltaTime;
	if(timer<0)
	{
		if(currentGT<=3)
		{
			currentGT++;
			if(groupType==currentGT)
			{
				timer=30;
				reset=true;
			}
		}	
	}	
}