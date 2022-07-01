
package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.Background;
import pages.TestBase;

public class BackgroundStepDefinition extends TestBase {

	// Create a global object for Background page

	Background backgroundPage;
	
	@Before
	public void beforeRun () {
		initDriver();
		backgroundPage = PageFactory.initElements(driver, Background.class);
		}
	
	
	// Given User see the button as "Set SkyBlue Background"
	@Given("^User see the button as \"([^\"]*)\"$")
	public void user_see_the_button_as(String args) {
		
		driver.get("https://techfios.com/test/103/");
		backgroundPage.clickSignInButton1();
		try {
			Thread.sleep(0);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	
	}

	//@When("^User is able to click on the button$")
	@When("^User is able to click on the button$")
	public void user_is_able_to_click_on_the_button() {
		backgroundPage).clickSignInButton2();
	}

	@Then("^User should see background color change to sky blue$")
	public void user_should_see_background_color_change_to_sky_blue() {
		
		
	}

	
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
	
	
	
	
}
