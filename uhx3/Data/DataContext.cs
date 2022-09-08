using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using uhx3.Entities;
using Microsoft.EntityFrameworkCore;

namespace uhx3.Data
{ 
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Character> Characters { get; set; }

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<AppUser>()
        //         .HasMany<AppAccount>();
        // }
    }
}