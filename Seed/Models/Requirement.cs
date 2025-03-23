namespace Seed.Models;

partial class Requirement
{
    public int RequirementId { get; set; }
    public int JobId { get; set; }
    public string Content { get; set; } = "";
    public string[] Items { get; set; } = [];
}