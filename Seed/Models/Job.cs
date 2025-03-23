namespace Seed.Models;

partial class Job
{
    public int JobId { get; set; }
    public string Company { get; set; } = "";
    public string Logo { get; set; } = "";
    public string LogoBackground { get; set; } = "";
    public string PostedAt { get; set; } = "";
    public string Contract { get; set; } = "";
    public string Location { get; set; } = "";
    public string Website { get; set; } = "";
    public string Apply { get; set; } = "";
    public string Description { get; set; } = "";
    public Requirement? Requirements { get; set; }
    public Role? Role { get; set; }
}