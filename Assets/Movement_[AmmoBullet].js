var moveSpeed = 1.0;
var turnSpeed = 1.0;
var prefab : Transform;
var goalPoints = 0;
var incrementTime = .3; 
var incrementBy = 1; 
private var counter = 0;
var myGUIText : GUIText;
var newText = "";
var myGUIText2 : GUIText;
var newText2 = "";
var touchBot=true;
var lifes=5;

function OnCollisionEnter (col : Collision)
{
	if(col.gameObject.tag == "TrainEnemy")
	{
		Destroy(col.gameObject);
	 	enemy = col.gameObject.GetComponent(TrainChild);
	 	enemy.enabled = false;
		lifes--;
		myGUIText2.text = lifes.ToString();
	}
	
	//Game Physical Limits
	if(col.gameObject.name == "GameLimitTop")
	{
		if(touchBot)
		{
			goalPoints++;
			myGUIText.text = goalPoints.ToString();
			Debug.Log(goalPoints);
			Debug.Log(touchBot);
		}
		transform.eulerAngles.y += 180;
		touchBot = false;
 	}
	if(col.gameObject.name == "GameLimitBottom")
	{ 		
		touchBot=true;
		transform.eulerAngles.y += 180;
		Debug.Log(touchBot);

	}
	if(col.gameObject.name == "GameLimitRight")
	{
		transform.eulerAngles.y -= 180;
	}
	if(col.gameObject.name == "GameLimitLeft")
	{
		transform.eulerAngles.y += 180;
	}
	
}

function Update () {
	if(Input.GetButton("W"))
	{	
		//CreateTrains();
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
	
	if(lifes<=0)
		Application.LoadLevel("Menu");

}