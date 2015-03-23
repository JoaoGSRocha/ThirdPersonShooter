var moveSpeed = 40.0;
var LeftLimit = -170.0;
var RightLimit = 130.0;
var goLeft = false;
var countLeft=0;
var countRight=0;
var stopTrainGroup=false;
var groupType=1;
var currentGT=1;

function Update () {
			
			/*
			// Disable the spring on all HingeJoints 
			// in this game object and all its child game objects
			var trains : Component[];
			trains = GetComponentsInChildren (HingeJoint);
			for (var train : HingeJoint in hingeJoints) {
				joint.useSpring = false;
			}
			*/
			
	     	var otherScript: EnemyTypesTimer = GetComponent(EnemyTypesTimer); 
			otherScript.StopGroupType(groupType, goLeft, countLeft, 
										countRight, transform, moveSpeed, 
										RightLimit, LeftLimit);
			otherScript.TimeSplit(groupType);

	Debug.Log(currentGT);
}

public var prefabContainer:GameObject; // dragged the empty-gameObject (parent)

function CreateSpheres()
{
	var i : int = 0;
	var objNumber:Number;
	var obj:GameObject;
	
	while(i < objNumber)
	{
		var currentObjContainer:GameObject;
		currentObjContainer = prefabContainer;
		objNumber = Mathf.Round(Random.Range(1,4));
		
		Instantiate(currentObjContainer, transform.position, Quaternion.identity);
		
			//the final solution obj = currentObjContainer.transform.Find("obj_Prefab").gameObject;
			// obj = currentObjContainer.GetChild();
		// obj is the child (only child) of currentObjContainer
		
			/*switch(objNumber)
			{
				case 1:
				obj.renderer.material = redMaterial; break;
				case 2:
				obj.renderer.material = yellowMaterial; break;
				case 3:
				obj.renderer.material = blueMaterial; break;
			}*/
			
			yield WaitForSeconds(0.3);
			
			i++;
		}
}