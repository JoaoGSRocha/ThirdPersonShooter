var target : GameObject;
var target2 : GameObject;
var target3 : GameObject;
var target4 : GameObject;
var target5 : GameObject;
var target6 : GameObject;


private	var addcoord=0;

private var row2ndcoord = 150;
private var row3rdcoord = 215;
private var row4thcoord = 276;
private var row5thcoord = 307;

function Start()
{
    InvokeRepeating("SpawnObject",  5, 5);
    InvokeRepeating("SpawnObject2", 10, 15);
    InvokeRepeating("SpawnObject3", 20, 15);
    InvokeRepeating("SpawnObject4", 30, 15);
	InvokeRepeating("SpawnObject5", 40, 15);
        
}
    
function SpawnObject()
{
	if(addcoord<=10){
		addcoord+=1.5;
		for(var i : int=0; i<=5; i++)
		{
			if(i==1)
				Instantiate(target, new Vector3(-238,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==2)
				Instantiate(target2, new Vector3(-218, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==3)
				Instantiate(target3, new Vector3(-198,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==4)
				Instantiate(target4, new Vector3(-198,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==5)
				Instantiate(target5, new Vector3(-198, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		}
	}
}

function SpawnObject2()
{
	if(addcoord<=10){
		addcoord+=1.5;
		for(var i : int=0; i<=5; i++)
		{
			if(i==1)
				Instantiate(target, new Vector3(-238,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==2)
				Instantiate(target2, new Vector3(-218, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==3)
				Instantiate(target3, new Vector3(-198,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==4)
				Instantiate(target4, new Vector3(-198,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==5)
				Instantiate(target5, new Vector3(-198, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		}
	}
} 

function SpawnObject3()
{
	if(addcoord<=10){
		addcoord+=1.5;
		for(var i : int=0; i<=5; i++)
		{
			if(i==1)
				Instantiate(target, new Vector3(-238,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==2)
				Instantiate(target2, new Vector3(-218, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==3)
				Instantiate(target3, new Vector3(-198,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==4)
				Instantiate(target4, new Vector3(-198,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==5)
				Instantiate(target5, new Vector3(-198, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		}
	}
}

function SpawnObject4()
{
	if(addcoord<=10){
		addcoord+=1.5;
		for(var i : int=0; i<=5; i++)
		{
			if(i==1)
				Instantiate(target, new Vector3(-238,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==2)
				Instantiate(target2, new Vector3(-218, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==3)
				Instantiate(target3, new Vector3(-198,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==4)
				Instantiate(target4, new Vector3(-198,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==5)
				Instantiate(target5, new Vector3(-198, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		}
	}
}

function SpawnObject5()
{
	if(addcoord<=10){
		addcoord+=1.5;
		for(var i : int=0; i<=5; i++)
		{
			if(i==1)
				Instantiate(target, new Vector3(-238,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==2)
				Instantiate(target2, new Vector3(-218, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==3)
				Instantiate(target3, new Vector3(-198,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==4)
				Instantiate(target4, new Vector3(-198,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
			if(i==5)
				Instantiate(target5, new Vector3(-198, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		}
	}
}


