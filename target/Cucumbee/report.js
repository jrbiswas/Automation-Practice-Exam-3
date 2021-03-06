$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Background.feature");
formatter.feature({
  "line": 2,
  "name": "Color Background Functionality Validation",
  "description": "\r\nBackground\r\nGiven User see the button as \"Set SkyBlue Background\"",
  "id": "color-background-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6754818400,
  "error_message": "java.lang.RuntimeException: java.lang.InstantiationException: gherkin.formatter.model.Background\r\n\tat org.openqa.selenium.support.PageFactory.instantiatePage(PageFactory.java:134)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:64)\r\n\tat steps.BackgroundStepDefinition.beforeRun(BackgroundStepDefinition.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.InstantiationException: gherkin.formatter.model.Background\r\n\tat java.lang.Class.newInstance(Class.java:427)\r\n\tat org.openqa.selenium.support.PageFactory.instantiatePage(PageFactory.java:131)\r\n\t... 41 more\r\nCaused by: java.lang.NoSuchMethodException: gherkin.formatter.model.Background.\u003cinit\u003e()\r\n\tat java.lang.Class.getConstructor0(Class.java:3082)\r\n\tat java.lang.Class.newInstance(Class.java:412)\r\n\t... 42 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "color-background-functionality-validation;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User see the button as \"Set SkyBlue Background\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is able to click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should see background color change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 24
    }
  ],
  "location": "BackgroundStepDefinition.user_see_the_button_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_is_able_to_click_on_the_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_should_see_background_color_change_to_sky_blue()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 948416200,
  "status": "passed"
});
});