#pragma strict 

var moveSpeed = 1.0;
var turnSpeed = 1.0;
var enemy : EnemyMovement__Train;
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