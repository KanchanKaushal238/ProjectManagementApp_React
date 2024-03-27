using Microsoft.EntityFrameworkCore;
using ReactProjectManagementAppWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Context
{
    public class AddDbContext : DbContext
    {
        public AddDbContext(DbContextOptions<AddDbContext> options) : base(options)
        {

        }

        public virtual DbSet<Projects> CreateProject  { get; set; }
    }
}
