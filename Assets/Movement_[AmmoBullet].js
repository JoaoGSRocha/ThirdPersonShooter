#pragma strict 

var moveSpeed = 1.0;
var turnSpeed = 1.0;
var enemy : EnemyMovement__Train;
var prefab : Transform;

//var direction = transform.forward;
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
function FixedUpdate () {
	if(Input.GetButton("W"))
	{
		// Instantiates 10 copies of prefab each 2 units apart from each other

		
	}
}

function Update () {

	if(Input.GetButton("W"))
	{	
		transform.position += transform.forward * moveSpeed * Time.deltaTime;
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