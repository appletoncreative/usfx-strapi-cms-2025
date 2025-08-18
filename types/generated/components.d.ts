import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationComponentsNavigationLink
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_components_navigation_links';
  info: {
    displayName: 'Navigation Link';
  };
  attributes: {
    SubNavigationLink: Schema.Attribute.Component<
      'navigation-components.sub-navigation-link',
      true
    >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationComponentsSubNavigationLink
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_components_sub_navigation_links';
  info: {
    displayName: 'Sub Navigation Link';
    icon: 'bulletList';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Link: Schema.Attribute.Text;
  };
}

export interface SharedExploreOurWorkSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_explore_our_work_sections';
  info: {
    displayName: 'Explore Our Work Section';
    icon: 'briefcase';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', true>;
    Header: Schema.Attribute.String;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'Hero Banner';
    icon: 'apps';
  };
  attributes: {
    BannerImage: Schema.Attribute.Media<'images' | 'files'>;
    BannerText: Schema.Attribute.String;
    ShowVideo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedImageHighlightSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_highlight_sections';
  info: {
    displayName: 'Image Highlight Section';
    icon: 'layout';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    Content: Schema.Attribute.Blocks;
    Header: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    ImageBorderColor: Schema.Attribute.Enumeration<
      ['storm-light', 'teal-light', 'lemongrass-light', 'apple']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'storm-light'>;
    ReverseColumns: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    SubHeader: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStatCalloutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_callout_sections';
  info: {
    displayName: 'Stat Callout Section';
    icon: 'apps';
  };
  attributes: {
    Text: Schema.Attribute.Blocks;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Email: Schema.Attribute.Email;
    Name: Schema.Attribute.String;
    ProfileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation-components.navigation-link': NavigationComponentsNavigationLink;
      'navigation-components.sub-navigation-link': NavigationComponentsSubNavigationLink;
      'shared.button': SharedButton;
      'shared.explore-our-work-section': SharedExploreOurWorkSection;
      'shared.hero-banner': SharedHeroBanner;
      'shared.image-highlight-section': SharedImageHighlightSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stat-callout-section': SharedStatCalloutSection;
      'shared.team-member': SharedTeamMember;
    }
  }
}
