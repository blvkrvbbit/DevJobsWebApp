USE DevJobsWebAppDb;
-- Create DevJobsSchema if it doesn't exist
IF NOT EXISTS (SELECT *
FROM sys.schemas
WHERE name = 'DevJobsSchema')
BEGIN
    EXEC('CREATE SCHEMA DevJobsSchema');
END;

DROP TABLE IF EXISTS 
    DevJobsSchema.RequirementItems,
    DevJobsSchema.Requirements,
    DevJobsSchema.RoleItems,
    DevJobsSchema.Roles,
    DevJobsSchema.Jobs;

-- Create Job table
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE object_id = OBJECT_ID(N'DevJobsSchema.Jobs') AND type in (N'U'))
BEGIN
    CREATE TABLE DevJobsSchema.Jobs
    (
        JobId INT PRIMARY KEY IDENTITY(1,1),
        Company NVARCHAR(100),
        Logo NVARCHAR(255),
        LogoBackground NVARCHAR(50),
        Position NVARCHAR(100),
        PostedAt NVARCHAR(50),
        Contract NVARCHAR(50),
        Location NVARCHAR(100),
        Website NVARCHAR(255),
        Apply NVARCHAR(255),
        Description NVARCHAR(MAX)
    );
END;

-- Create Requirements table
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE object_id = OBJECT_ID(N'DevJobsSchema.Requirements') AND type in (N'U'))
BEGIN
    CREATE TABLE DevJobsSchema.Requirements
    (
        RequirementId INT PRIMARY KEY IDENTITY(1,1),
        JobId INT FOREIGN KEY REFERENCES DevJobsSchema.Jobs(JobID) ON DELETE CASCADE,
        Content NVARCHAR(MAX)
    );
END;

-- Create RequirementItems table
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE object_id = OBJECT_ID(N'DevJobsSchema.RequirementItems') AND type in (N'U'))
BEGIN
    CREATE TABLE DevJobsSchema.RequirementItems
    (
        ItemId INT PRIMARY KEY IDENTITY(1,1),
        RequirementId INT FOREIGN KEY REFERENCES DevJobsSchema.Requirements(RequirementID) ON DELETE CASCADE,
        Item NVARCHAR(255)
    );
END;

-- Create Role table
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE object_id = OBJECT_ID(N'DevJobsSchema.Roles') AND type in (N'U'))
BEGIN
    CREATE TABLE DevJobsSchema.Roles
    (
        RoleId INT PRIMARY KEY IDENTITY(1,1),
        JobId INT FOREIGN KEY REFERENCES DevJobsSchema.Jobs(JobID) ON DELETE CASCADE,
        Content NVARCHAR(MAX)
    );
END;

-- Create RoleItems table
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE object_id = OBJECT_ID(N'DevJobsSchema.RoleItems') AND type in (N'U'))
BEGIN
    CREATE TABLE DevJobsSchema.RoleItems
    (
        ItemId INT PRIMARY KEY IDENTITY(1,1),
        RoleId INT FOREIGN KEY REFERENCES DevJobsSchema.Roles(RoleID) ON DELETE CASCADE,
        Item NVARCHAR(255)
    );
END;

