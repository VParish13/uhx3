using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace uhx3
{
	public class Startup
	{
		public Startup( IConfiguration configuration )
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices( IServiceCollection services )
		{
			services.AddControllersWithViews();
			// In production, the Angular files will be served from this directory
			services.AddSpaStaticFiles( configuration =>
			 {
				 configuration.RootPath = "ClientApp/dist";
			 } );

			// Swagger generates an API test page to confirm your HTTP requests are functioning. 
			services.AddSwaggerGen( c =>
			 {
				 c.SwaggerDoc( "v0", new OpenApiInfo { Title = "UHX API", Version = "v0" } );
			 } );
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure( IApplicationBuilder app, IWebHostEnvironment env )
		{
			if ( env.IsDevelopment() )
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler( "/Error" );
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}

			// Register and define swagger
			/* 
			 * All HTTP paths must be decorated:
			 * [Route("example"]
			 * public class ExampleController : Controller
			 * [HttpGet()] --or HttpPost or HttpDelete etc.
			 * public IActionResult DoStuff(){}
			 * 
			 * see swagger documentation: https://github.com/domaindrivendev/Swashbuckle.AspNetCore#getting-started
			*/
			app.UseSwagger();
			app.UseSwaggerUI( c =>
			 {
				// View swagger page at https://uhx3/swagger
				c.SwaggerEndpoint( "v0/swagger.json", "UHX API v0" );
			 } );

			app.UseHttpsRedirection();
			app.UseStaticFiles();
			if ( !env.IsDevelopment() )
			{
				app.UseSpaStaticFiles();
			}

			app.UseRouting();

			app.UseEndpoints( endpoints =>
			 {
				 endpoints.MapControllerRoute(
					 name: "default",
					 pattern: "{controller}/{action=Index}/{id?}" );
			 } );

			app.UseSpa( spa =>
			 {
				// To learn more about options for serving an Angular SPA from ASP.NET Core,
				// see https://go.microsoft.com/fwlink/?linkid=864501

				spa.Options.SourcePath = "ClientApp";

				 if ( env.IsDevelopment() )
				 {
					 spa.UseAngularCliServer( npmScript: "start" );
				 }
			 } );
		}
	}
}
