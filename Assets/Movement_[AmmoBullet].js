#pragma strict 

var moveSpeed = 1.0;
var turnSpeed = 1.0;
var enemy : EnemyMovement__Train;
var prefab : Transform;

var incrementTime = .3; 
var incrementBy = 1; 
private var counter = 0;

var target : GameObject;


var addcoord =0;

function Start()
{
    InvokeRepeating("SpawnObject", 2, 1);
}
    
function SpawnObject()
{
	addcoord+=20;
	Instantiate(target, new Vector3(40+addcoord, 42, 0), Quaternion.identity);
}

function OnCollisionEnter (col : Collision)
{
	if(col.gameObject.name == "TrainEnemy1")
	{
		Destroy(col.gameObject);
	 	enemy = col.gameObject.GetComponent(EnemyMovement__Train);
	 	enemy.enabled = false;
	}
	
	//Game Physical Limits
		if(col.gameObject.name == "GameLimitTop")
	{
		Destroy(col.gameObject);

	}
		if(col.gameObject.name == "GameLimitBottom")
	{
		Destroy(col.gameObject);
	 	enemy = col.gameObject.GetComponent(EnemyMovement__Train);
	 	enemy.enabled = false;
	}
		if(col.gameObject.name == "GameLimitRight")
	{
		Destroy(col.gameObject);
	 	enemy = col.gameObject.GetComponent(EnemyMovement__Train);
	 	enemy.enabled = false;
	}
		if(col.gameObject.name == "GameLimitLeft")
	{
		Destroy(col.gameObject);
	 	enemy = col.gameObject.GetComponent(EnemyMovement__Train);
	 	enemy.enabled = false;
	}
	
}
// - prints "Starting 0.0"
// - prints "WaitAndPrint 5.0"
// - prints "Done 5.0"
print ("Starting " + Time.time);
// Start function WaitAndPrint as a coroutine
yield WaitAndPrint();
print ("Done " + Time.time);
function WaitAndPrint () {
	// suspend execution for 5 seconds
	yield WaitForSeconds (5);
			for (var i : int = 0;i < 10; i++) {
			Instantiate (prefab, Vector3(i * 20.0, 100.0, 0), Quaternion.identity);
		}
	print ("WaitAndPrint "+ Time.time);
}

function CreateTrains() {
	for (var i : int = 0;i < 10; i++) {		yield WaitForSeconds (.1f);
			Instantiate (prefab, Vector3(i * 20.0, 100.0, 0), Quaternion.identity);

    }
}
function Update () {
	if(Input.GetButton("W"))
	{	
	
		
		//CreateTrains();
		transform.position += transform.forward * moveSpeed * Time.deltaTime;
		Debug.Log(incrementTime);
	}
	
	if(Input.GetButton("S"))
	{
		transform.position += -transform.forward * moveSpeed * Time.deltaTime;
	}
	
	if(Input.GetButton("A"))
	{
		transform.eulerAngles.y += -turnSpeed * Time.deltaTime;
	}
	
	if(Input.GetButton("D"))
	{
		transform.eulerAngles.y += turnSpeed * Time.deltaTime;
	}
	

}