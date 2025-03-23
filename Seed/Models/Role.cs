namespace Seed.Models;

partial class Role
{
    public int RoleId { get; set; }
    public int JobId { get; set; }
    public string Content { get; set; } = "";
    public string[] Items { get; set; } = [];
}