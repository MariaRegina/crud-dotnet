using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Crud_dotnet.Models;

namespace Crud_dotnet.Data
{
    public class Crud_dotnetContext : DbContext
    {
        public Crud_dotnetContext (DbContextOptions<Crud_dotnetContext> options)
            : base(options)
        {
        }

        public DbSet<Crud_dotnet.Models.Usuario> Usuario { get; set; }
    }
}
