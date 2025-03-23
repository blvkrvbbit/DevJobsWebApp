-- SELECT name, database_id, create_date
-- FROM sys.databases;

USE DevJobsWebAppDb;
GO;
CREATE SCHEMA DevJobsSchema;
GO;
CREATE TABLE DevJobsSchema.Job
(
    JobId INT IDENTITY(1, 1) PRIMARY KEY,
    Company NVARCHAR(50),
    Logo NVARCHAR(70),
    LogoBackground NVARCHAR(70),
    PostedAt NVARCHAR(50),
    Contract NVARCHAR(50),
    Location NVARCHAR(50),
    Website NVARCHAR(50),
    Apply NVARCHAR(50),
    Description NVARCHAR(MAX),
);

CREATE TABLE DevJobsSchema.Requirement
(
    RequirementId INT IDENTITY(1, 1) PRIMARY KEY,
    JobId Int FOREIGN KEY REFERENCES DevJobsSchema.Job(Id),
    Content NVARCHAR(Max),
);


CREATE TABLE DevJobsSchema.Role
(
    RoleId INT IDENTITY(1, 1) PRIMARY KEY,
    JobId Int FOREIGN KEY REFERENCES DevJobsSchema.Job(Id),
    Content NVARCHAR(Max),
);

CREATE TABLE DEVJobsSchema.Item
(
    RequirementId INT NULL,
    RoleId INT Null,
    FOREIGN KEY (RequirementId) REFERENCES DevJobsSchema.Requirement(RequirementId),
    FOREIGN KEY (RoleId) REFERENCES DevJobsSchema.Role(RoleId),
);