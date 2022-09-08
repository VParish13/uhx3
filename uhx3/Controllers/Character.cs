using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using uhx3.Data;
using uhx3.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace uhx3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : Controller 
    {
        private readonly DataContext _context;

        public CharacterController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Character>> GetAccount(int id) {
            return await _context.Characters.FindAsync(id);
        }
    }
}