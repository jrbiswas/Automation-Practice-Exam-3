package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\features\\Background.feature",
		glue = "steps",// defines which package has the step definition to glued with
		tags = "@Scenario1",
		monochrome = true,
		dryRun = false,
		plugin = {
			"pretty",
			"html:target/Cucumbee",
			 "json:target/Cucumber.json"
				
		}
		
		
)

public class BackgroundRunner {

}
