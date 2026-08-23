using UnityEngine;
using UnityEngine.SceneManagement;

public class MainMenu : MonoBehaviour
{
    public void PlayGame1()
    {
        SceneManager.LoadScene("Plane");
    }

    public void PlayGame2()
    {
        SceneManager.LoadScene("Car");
    }

    // public void OpenOptions()
    // {
    //     SceneManager.LoadScene("Options");
    // }

}