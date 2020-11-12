package com.wknd.muzik.core.models;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import junit.framework.Assert;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * Simple JUnit test verifying the CustomTeaser
 */
@ExtendWith(AemContextExtension.class)
class CustomTeaserTest {

	public final static AemContext context = new AemContext();

	@BeforeAll
	public static void setUp() {
	  // register models from package
	  context.addModelsForClasses(CustomTeaser.class);
	  context.load().json("/json/teaser.json", "/content/wkndmuzik/us/en");
	}

    @Test
    void testTeaserProperties() throws Exception {
    	context.currentResource("/content/wkndmuzik/us/en/jcr:content/teaser");
        final CustomTeaser modelObject = context.request().adaptTo(CustomTeaser.class);
       
        assertNotNull(modelObject);  
        Assert.assertEquals("/content/dam/wkndmuzik/media/AdobeStock_-3.png", modelObject.getBackgroundImg());
        Assert.assertEquals("true", modelObject.getBlurBackground());
        Assert.assertEquals("10.08.20", modelObject.getShowsDate());
    }
}
