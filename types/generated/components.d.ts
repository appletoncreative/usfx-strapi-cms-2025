import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationComponentsNavigationLink
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_components_navigation_links';
  info: {
    displayName: 'Navigation Link';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    Title: Schema.Attribute.String;
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

export interface SharedImageWithTextSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_with_text_sections';
  info: {
    displayName: 'Image with Text Section';
    icon: 'apps';
  };
  attributes: {
    AlignImageLeft: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Button: Schema.Attribute.Component<'shared.button', true>;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    ImageBorderColor: Schema.Attribute.Enumeration<
      ['storm-light', 'lemongrass-light', 'teal-light']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'storm-light'>;
    SubHeading: Schema.Attribute.String;
    Text: Schema.Attribute.Blocks;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation-components.navigation-link': NavigationComponentsNavigationLink;
      'shared.button': SharedButton;
      'shared.hero-banner': SharedHeroBanner;
      'shared.image-with-text-section': SharedImageWithTextSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stat-callout-section': SharedStatCalloutSection;
    }
  }
}
