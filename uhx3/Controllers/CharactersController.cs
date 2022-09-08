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
    public class CharactersController : Controller 
    {
        private readonly DataContext _context;

        public CharactersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Character>> GetCharacter(int id) {
            return await _context.Characters.FindAsync(id);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Character>>> GetCharacters() {
            return await _context.Characters.ToListAsync();
        }
    }
}