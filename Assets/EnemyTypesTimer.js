var stopTrainGroup=false;
var currentGT=1;
var GROUPTYPES=5;
var timer: float = 50; // set duration time in seconds in the Inspector
var reset=false;


public function StopGroupType(groupType, direction, countLeft, 
						countRight, transform, moveSpeed,
						RightLimit, LeftLimit)
{
	if(groupType==false && transform.position.x >= RightLimit){
		transform.eulerAngles.y += 180; 
		groupType = true;
		if(timer<0){
			if(countLeft>1){stopTrainGroup=true;}
			countRight=2;
		}
	}
	if((groupType==true) && (transform.position.x <= LeftLimit)){
		transform.eulerAngles.y -= 180; 
		groupType = false;
		if(timer<0){
			if(countRight>1){stopTrainGroup=true;}
			countRight=2;
		}
	}
	else {
		if(!stopTrainGroup && (countRight<1 || countLeft <1))
			transform.position += transform.forward * moveSpeed * Time.deltaTime;
	}
}

public function TimeSplit(groupType)
{
	timer -= Time.deltaTime;
	if(timer<0)
	{
		if(currentGT>3)	currentGT=0;
		if(currentGT<3)
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