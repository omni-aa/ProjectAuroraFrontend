
export interface HiramGearGuideInterface {
    id?: string;
    guideTitle: string;
    guideImage?: never; // Sanity image reference
    guideData: never; // Rich text content
    TestData: string;
    Link: string;
}


export interface SanityImageType {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
    alt?: string;
}
