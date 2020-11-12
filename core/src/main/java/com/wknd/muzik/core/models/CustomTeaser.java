package com.wknd.muzik.core.models;

import com.adobe.cq.wcm.core.components.models.Teaser;
import lombok.experimental.Delegate;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ResourceSuperType;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { Teaser.class,
		CustomTeaser.class }, resourceType = "wkndmuzik/components/teaser", defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = "jackson", extensions = "json")
public class CustomTeaser implements Teaser {

	@Self
	@Via(type = ResourceSuperType.class)
	@Delegate // Delegate all our methods to the Core Components Teaser class
	@Optional
	private Teaser teaser;

	@ValueMapValue
	@Optional
	protected String backgroundImg;

	@ValueMapValue
	@Optional
	protected String showsDate;

	@ValueMapValue
	@Optional
	protected String blurBackground;

	public String getBackgroundImg() {
		return backgroundImg;
	}

	public String getShowsDate() {
		return showsDate;
	}

	public String getBlurBackground() {
		return blurBackground;
	}

}
