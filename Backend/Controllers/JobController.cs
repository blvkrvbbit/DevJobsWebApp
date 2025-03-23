using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class JobController : ControllerBase
{
    [HttpGet("GetJobs")]
    public IActionResult GetJobs()
    {
        return Ok("Get all jobs route");
    }
}