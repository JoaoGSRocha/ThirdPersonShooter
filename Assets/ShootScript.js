var bullet : Transform;
var Crosshairtex : Texture;
var tetrisCounter : int;
var target : Transform;
	// Create a plane, sphere and cube in the scene.
	function Start () {
		var plane : GameObject = GameObject.CreatePrimitive(PrimitiveType.Plane);

		var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
		cube.transform.position = Vector3(0, 0.5, 0);

		var sphere : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		sphere.transform.position = Vector3(0, 1.5, 0);

		var capsule : GameObject = GameObject.CreatePrimitive(PrimitiveType.Capsule);
		capsule.transform.position = Vector3(2, 1, 0);

		var cylinder : GameObject = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
		cylinder.transform.position = Vector3(-2, 1, 0);
	}


function Update () {

var randValue = Random.Range(-10.0, 10.0);
	if (SimpleFPSWalker.toggleCombatMode){
		if(Input.GetButtonDown("Fire1")){
				var hit: RaycastHit;
				
				if (Physics.Raycast(target.position,target.forward, hit)) {
					tetrisCounter++;
					var hitpoint = hit.point;
					transform.LookAt(hitpoint);
					var bullet1 = Instantiate(bullet, transform.position, Quaternion.identity);
					bullet1.transform.rotation = transform.rotation;
					if(randValue >=-10 && randValue <= -4)
						bullet1.rigidbody.AddForce(transform.forward * -100);
					else if((randValue >=-1 && randValue <= 5) || randValue == 10)
						bullet1.rigidbody.AddForce(transform.forward * 100);
					else if(randValue >=6 && randValue <= 9)
						bullet1.rigidbody.AddForce(transform.right * 100);
					else if(randValue >=-9 && randValue <= -3)
						bullet1.rigidbody.AddForce(transform.up * 100);
			}
		}
	}
}
	


function OnGUI(){
	GUI.matrix = Matrix4x4.TRS (Vector3.zero, Quaternion.identity, Vector3
	(Screen.width / 1024.0, Screen.height / 768.0, 1));
	GUI.DrawTexture (Rect (500,372,24,24), Crosshairtex);
}