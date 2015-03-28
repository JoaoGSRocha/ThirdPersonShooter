#pragma strict 

var moveSpeed = 1.0;
var turnSpeed = 1.0;
var enemy : EnemyMovement__Train;
var prefab : Transform;

var incrementTime = .3; 
var incrementBy = 1; 
private var counter = 0;
function OnCollisionEnter (col : Collision)
{
	if(col.gameObject.tag == "TrainEnemy")
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