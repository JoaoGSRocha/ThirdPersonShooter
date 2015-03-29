function Update () {
	if(Input.GetButton("Esc"))
	{	
		Application.Quit(); 
	}
	if(Input.GetButton("Enter"))
	{	
		Application.LoadLevel ("TrainEscape"); 
	}

}