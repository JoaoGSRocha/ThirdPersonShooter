var moveSpeed = 40.0;
var LeftLimit = -170.0;
var RightLimit = 130.0;
var goLeft = false;
var countLeft=0;
var countRight=0;
var stopTrainGroup=false;
var groupType=1;
public var currentGT=1;
var GROUPTYPES=5;
public var timer: float = 50; // set duration time in seconds in the Inspector
var reset=false;
var enemy : GameObject[];
var enemyScript : EnemyMovement__Train;
function Update(){
WaitForSeconds(4);
TimeSplit();

}
/*
public function StopGroupType()
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
}*/

public function TimeSplit()
{
	if(reset)
		reset=false;
	timer -= Time.deltaTime;
	var enemyGroupType;
	for(var i : int = 0; i <enemy.Length; i++){
		enemyScript = enemy[i].GetComponent(EnemyMovement__Train);
		groupType = enemyScript.getGroupType();
		

		if(timer<=0)
		{

			
			if(currentGT<=3)
			{
			
				Debug.Log(currentGT);
				
				if(groupType==currentGT)
				{
					timer=5;
					currentGT++;
					
				}
			}
			else
			{
				timer=5;
				reset=true;
			}
			
			if(reset){currentGT=1;}
		}
		Debug.Log(groupType);
	}	
}