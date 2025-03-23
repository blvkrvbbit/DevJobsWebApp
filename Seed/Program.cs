using System.Text.Json;
using Microsoft.Extensions.Configuration;
using Seed.Data;
using Seed.Models;
using Seed.QueryBuilder;
/*
    Seeds the data into DevJobsWebAppDb in SQLServer
*/
namespace Seed;
internal class Program
{
    public static void Main(string[] args)
    {
        IConfiguration config = new ConfigurationBuilder()
               .AddJsonFile("appsettings.json")
               .Build();

        DataContextDapper dapper = new DataContextDapper(config);
        string jobsJson = File.ReadAllText("jobs.json");

        JsonSerializerOptions options = new JsonSerializerOptions()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        IEnumerable<Job>? jobs = JsonSerializer.Deserialize<IEnumerable<Job>>(jobsJson, options);

        // dapper.ResetDb();
        if (jobs != null)
        {
            foreach (Job job in jobs)
            {
                string insertJobSQL = Query.CreateInsert("DevJobsSchema.Jobs", new Dictionary<string, object> {
                    {"Company", job.Company},
                    {"Logo", job.Logo},
                    {"LogoBackground", job.LogoBackground},
                    {"PostedAt", job.PostedAt},
                    {"Contract", job.Contract},
                    {"Location", job.Location},
                    {"Website", job.Website},
                    {"Apply", job.Apply},
                    {"Description", job.Description}
                });
                int jobId = dapper.executeSqlWithId(insertJobSQL);

                string insertRequirementSQL = Query.CreateInsert("DevJobsSchema.Requirements", new Dictionary<string, object> {
                    {"JobId", jobId},
                    {"Content", job.Requirements!.Content}
                });

                int reqId = dapper.executeSqlWithId(insertRequirementSQL);

                foreach (string requirement in job.Requirements.Items)
                {
                    string insertReqItemSQL = Query.CreateInsert("DevJobsSchema.RequirementItems", new Dictionary<string, object> {
                        {"RequirementId", reqId},
                        {"Item", requirement}
                    });
                    dapper.ExecuteSql(insertReqItemSQL);
                }

                string insertRoleSQL = Query.CreateInsert("DevJobsSchema.Roles", new Dictionary<string, object>{
                    {"JobId", jobId},
                    {"Content", job.Role!.Content}
                });
                int roleId = dapper.executeSqlWithId(insertRoleSQL);
                foreach (string role in job.Role!.Items)
                {
                    string insertRoleItemSQL = Query.CreateInsert("DevJobsSchema.RoleItems", new Dictionary<string, object>{
                        {"RoleId", roleId},
                        {"Item", role}
                    });
                    dapper.ExecuteSql(insertRoleItemSQL);
                }
            }
        }
    }
}