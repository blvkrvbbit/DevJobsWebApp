namespace Seed.QueryBuilder;

public static class Query
{
    public static string CreateInsert(string tableName, Dictionary<string, object> data)
    {

        // string columns = string.Join(", ", data.Keys);
        // string values = string.Join("','", data.Values);
        // string sql = @$"INSERT INTO {tableName} ({columns}) 
        // VALUES ('{values}'); SELECT CAST(SCOPE_IDENTITY() as int);";
        // string sql = "am i working?";
        // foreach (string key in data.Keys)
        // {
        //     Console.WriteLine(key);
        // }
        var values = new List<string>();
        foreach (var kvp in data)
        {
            if (kvp.Value == null)
            {
                values.Add("null"); // Add 'null' as a string
            }
            else if (kvp.Value is string strValue)
            {
                values.Add($"'{strValue.Replace("'", "''")}'"); // Add string with single quotes
            }
            else
            {
                values.Add(kvp.Value?.ToString() ?? "null"); // Add other types without quotes
            }
        }
        string columns = string.Join(", ", data.Keys);
        string valuesToInsert = string.Join(", ", values);
        string sql = @$"INSERT INTO {tableName} ({columns})
        VALUES ({valuesToInsert}); SELECT CAST(SCOPE_IDENTITY() as int);";
        return sql;
    }

}