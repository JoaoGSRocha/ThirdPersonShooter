var moveSpeed = 40.0;
var LeftLimit = -170.0;
var RightLimit = 130.0;
var goLeft = false;
var oldGoLeft = false;
var countLeft=0;
var countRight=0;
var stopTrainGroup=false;
var groupType=1;
var isGroupType=true;
var currentGT=1;
var GROUPTYPES=5;
var timer: float = 50; // set duration time in seconds in the Inspector
var reset=false;
var switchT =0;
var turnCounter=0;
var enemyTimer : EnemyTypesTimer;
var Trains : Transform[];


public function Update(){
	StopGroupType();
	//enemyTimer.TimeSplit();

}

function getGroupType()
{
	return groupType;
}

function StopGroupType()
{
	if(!isGroupType)
	{}
	else {
		if((countRight<1 || countLeft <1)&& currentGT==groupType)
			
			Trains[1].position += Trains[1].forward * moveSpeed * Time.deltaTime;
			Trains[2].position += Trains[1].forward * moveSpeed * Time.deltaTime;
			Trains[3].position += Trains[1].forward * moveSpeed * Time.deltaTime;
	}
	if(currentGT==groupType)
		isGroupType=true;
	else
		isGroupType=false;
	if(isGroupType && Trains[1].position.x >= RightLimit){
		goLeft=true;
		Trains[1].eulerAngles.y += 180; 
		if(turnCounter>=8){
			if(countLeft>1){stopTrainGroup=true;}
			countRight=2;
		}
		turnCounter++;
	}
	if(isGroupType && Trains[1].position.x <= LeftLimit){
		goLeft=false;
		Trains[1].eulerAngles.y -= 180; 
		if(turnCounter>=8){
			if(countRight>1){stopTrainGroup=true;}
			countRight=2;
		}
		turnCounter++;
	}

	oldGoLeft = goLeft;

}

public function TimeSplit()
{
	if(reset)
		reset=false;
		
		if(turnCounter>=8)
		{

			
			if(currentGT<=3)
			{
			
				Debug.Log(currentGT);
				
				if(groupType==currentGT)
				{
					turnCounter=0;
					currentGT++;
					
				}
			}
			else
			{
				turnCounter=0;
				reset=true;
			}
			
			if(reset){currentGT=1;}
		}
		Debug.Log(groupType);	
}