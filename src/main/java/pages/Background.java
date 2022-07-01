package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Background {
	WebDriver driver;
	
	
//'this' constructor is responsible to interact with every element when it is called 	
public Background(WebDriver driver) {
		this.driver = driver;
		}	
	
	
//Element Library
@FindBy(how = How.XPATH, using="//button[@onclick='myFunctionSky()']") //*[@id="extra"]/button[1]
WebElement SetSkyBlueBackground;
@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]")
WebElement SignInButton1;

@FindBy(how = How.XPATH, using="//button[@onclick='myFunctionWhite()']")
WebElement SetWhiteBackground;
@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
WebElement SignInButton2;


//Methods to interact with the individual element

public void skyblue_background(String skyblue) throws InterruptedException {
	SignInButton1.click();
	Thread.sleep(3000);
	
}
	

public void white_background(String white) throws InterruptedException {
	SignInButton2.click();
	Thread.sleep(3000);
}

public String getPageTitle(){
	return driver.getTitle();
}


}
