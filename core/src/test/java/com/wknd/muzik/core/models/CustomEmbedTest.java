package com.wknd.muzik.core.models;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import junit.framework.Assert;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * Simple JUnit test verifying the CustomEmbed
 */
@ExtendWith(AemContextExtension.class)
class CustomEmbedTest {

	public final static AemContext context = new AemContext();

	@BeforeAll
	public static void setUp() {
	  // register models from package
	  context.addModelsForClasses(CustomEmbed.class);
	  context.load().json("/json/embed.json", "/content/wkndmuzik/us/en");
	}

    @Test
    void testEmbedProperties() throws Exception {
    	context.currentResource("/content/wkndmuzik/us/en/jcr:content/embed");
        final CustomEmbed modelObject = context.request().adaptTo(CustomEmbed.class);
       
        assertNotNull(modelObject);  
        Assert.assertEquals("/content/dam/wkndmuzik/media/AdobeStock_-20.png", modelObject.getThumbnail());
    }
}
