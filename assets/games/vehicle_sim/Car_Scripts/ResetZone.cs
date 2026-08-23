using UnityEngine;
using UnityEngine.SceneManagement;

public class ResetZone : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Player"))
            return;

        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
}