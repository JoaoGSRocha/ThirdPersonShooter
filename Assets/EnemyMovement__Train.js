﻿var target : GameObject;
var target2 : GameObject;
var target3 : GameObject;
var target4 : GameObject;
var target5 : GameObject;
var target6 : GameObject;


var addcoord=0;

private var row2ndcoord = 150;
private var row3rdcoord = 215;
private var row4thcoord = 276;
private var row5thcoord = 307;

function Start()
{
    InvokeRepeating("SpawnObject",  5, 5);
    InvokeRepeating("SpawnObject2", 10, 15);
    //InvokeRepeating("SpawnObject3", 20, 15);
    //InvokeRepeating("SpawnObject4", 30, 15);
	//InvokeRepeating("SpawnObject5", 50, 15);
        
}
    
function SpawnObject()
{
	addcoord+=1.5;
	for(var i : int=0; i<=5; i++)
	{
		if(i==1)
			Instantiate(target, new Vector3(-138,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==2)
			Instantiate(target2, new Vector3(-218, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==3)
			Instantiate(target3, new Vector3(-218,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==4)
			Instantiate(target4, new Vector3(-258,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==5)
			Instantiate(target5, new Vector3(-338, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
	}
}

function SpawnObject2()
{
	addcoord+=1.5;
	for(var i : int=0; i<=5; i++)
	{
		if(i==1)
			Instantiate(target, new Vector3(-138+addcoord,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==2)
			Instantiate(target2, new Vector3(-180+addcoord, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==3)
			Instantiate(target3, new Vector3(-218d,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==4)
			Instantiate(target4, new Vector3(-258,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==5)
			Instantiate(target5, new Vector3(-338, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
	}
} 

function SpawnObject3()
{
	addcoord+=1.5;
	for(var i : int=0; i<=5; i++)
	{
		if(i==1)
			Instantiate(target, new Vector3(-138+addcoord,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==2)
			Instantiate(target2, new Vector3(-180+addcoord, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==3)
			Instantiate(target3, new Vector3(-218+addcoord,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==4)
			Instantiate(target4, new Vector3(-258+addcoord,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==5)
			Instantiate(target5, new Vector3(-338+addcoord, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
	}
}

function SpawnObject4()
{
	addcoord+=1.5;
	for(var i : int=0; i<=5; i++)
	{
		if(i==1)
			Instantiate(target, new Vector3(-138+addcoord,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==2)
			Instantiate(target2, new Vector3(-180+addcoord, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==3)
			Instantiate(target3, new Vector3(-218+addcoord,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==4)
			Instantiate(target4, new Vector3(-258+addcoord,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==5)
			Instantiate(target5, new Vector3(-338+addcoord, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
	}
}

function SpawnObject5()
{
	addcoord+=1.5;
	for(var i : int=0; i<=5; i++)
	{
		if(i==1)
			Instantiate(target, new Vector3(-138+addcoord,  -11, 49+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==2)
			Instantiate(target2, new Vector3(-180+addcoord, -11, row2ndcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==3)
			Instantiate(target3, new Vector3(-218+addcoord,  -11, row3rdcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==4)
			Instantiate(target4, new Vector3(-258+addcoord,  -11, row4thcoord+addcoord), Quaternion.Euler(0, 90, 0));
		if(i==5)
			Instantiate(target5, new Vector3(-338+addcoord, -11, row5thcoord+addcoord), Quaternion.Euler(0, 90, 0));
	}
}


