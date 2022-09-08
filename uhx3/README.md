# Entity Framework and ASP.Net

## Create a project

    dotnet new sln
    dotnet new webapi -o UHX3
    dotnet sln add UHX3/

Start server

    cd UHX3/
    dotnet run

## Dependencies 

These dependencies can be downloaded from (Nuget Gallery)[https://www.nuget.org/].

- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Sqlite
- dotnet-ef

## Migrating Entities

Create connection strings in appsettings.json. 

    {
        "ConnectionStrings": {
            "DefaultConnection": "Data source=database.db"
        },
        ...
    }

Commands to create migrations and update database

    dotnet ef migrations add InitialCreate -o Data/Migrations
    dotnet ef database update