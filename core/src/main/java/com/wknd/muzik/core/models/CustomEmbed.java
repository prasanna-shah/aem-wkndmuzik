package com.wknd.muzik.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ResourceSuperType;

import com.adobe.cq.wcm.core.components.models.Embed;

import lombok.experimental.Delegate;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { Embed.class,
		CustomEmbed.class }, resourceType = "wkndmuzik/components/embed", defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = "jackson", extensions = "json")
public class CustomEmbed implements Embed {

	@Self
	@Via(type = ResourceSuperType.class)
	@Delegate // Delegate all our methods to the Core Components Embed class
	private Embed embed;

	@ValueMapValue
	@Optional
	protected String thumbnail;

	public String getThumbnail() {
		return thumbnail;
	}

}
