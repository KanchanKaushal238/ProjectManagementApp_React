using Microsoft.EntityFrameworkCore;
using ReactProjectManagementAppWebAPI.Models;
using ReactProjectManagementAppWebAPI.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Context
{
    public class ReactMongoContext<TDocument> : IBaseRepository
    {
        public ReactMongoContext(DbContextOptions<ReactMongoContext> options) : base(options)
        {

        }

        public virtual DbSet<Projects> Projects { get; set; }
    }
}
