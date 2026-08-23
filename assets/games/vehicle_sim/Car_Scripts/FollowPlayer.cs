using UnityEngine;
using UnityEngine.InputSystem;

public class FollowPlayer : MonoBehaviour
{
    public GameObject player;
    [SerializeField] private Vector3 cameraOffset1 = new Vector3(0, 8, -20);
    [SerializeField] private Vector3 cameraOffset2 = new Vector3(0, 2, 0);
    private bool usingOffset1 = true;
    [SerializeField] public KeyCode switchKey;
    void Start()
    {

    }

    void LateUpdate()
    {
        // "E" key switches angle
        if(Input.GetKeyDown(switchKey))
        {
            usingOffset1 = !usingOffset1;
        }

        // Choosing Camera angle
        Vector3 currentOffset = usingOffset1 ? cameraOffset1 : cameraOffset2;

        transform.position = player.transform.position + currentOffset;
    }
}
