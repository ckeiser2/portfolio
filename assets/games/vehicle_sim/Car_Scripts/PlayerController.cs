using UnityEngine;
using UnityEngine.InputSystem;
using System.Collections;
using System.Collections.Generic;

public class PlayerController : MonoBehaviour
{
    public float speed = 20.0f;
    public string inputID;
    public float turnSpeed = 45.0f;
    public InputAction moveAction;
    public Vector2 moveInput;
    public Camera mainCamera;
    //public Camera hoodCamera;
    //public KeyCode switchKey;

    private float horizontalInput;
    private float forwardInput;
    
    void Start()
    {
        moveAction.Enable();
    }

    void Update()
    {
        // Old method to changing camera angle
        // if(Input.GetKeyDown(switchKey))
        //{
        //mainCamera.enabled = !mainCamera.enabled;
        //hoodCamera.enabled = !hoodCamera.enabled;
        //}

        moveInput = moveAction.ReadValue<Vector2>();
        
        horizontalInput = Input.GetAxis("Horizontal" + inputID);
        forwardInput = Input.GetAxis("Vertical" + inputID);

        // Control the player forward
        // Vert Input
        transform.Translate(Vector3.forward * Time.deltaTime * speed * forwardInput);
        
        // Rotates Car on Horiz Input
        transform.Rotate(Vector3.up, Time.deltaTime * turnSpeed * horizontalInput);
    }
}
