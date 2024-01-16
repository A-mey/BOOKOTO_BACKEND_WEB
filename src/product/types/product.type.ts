export type Product = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo?: SearchInfo;
}

type VolumeInfo = {
    title: string;
    subtitle?: string;
    authors?: string[];
    publisher: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers?: IndustryIdentifiers[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

type SaleInfo = {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice?: Price;
    retailPrice?: Price;
    buyLink?: string;
    offers?: Offers[];
}

type AccessInfo = {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Token;
    pdf: Token;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

type SearchInfo = {
    textSnippet: string;
}

type IndustryIdentifiers = {
    type: string;
    identifier: string;
}

type ReadingModes = {
    text: boolean;
    image: boolean;
}

type PanelizationSummary = {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
};

type ImageLinks = {
    smallThumbnail: string;
    thumbnail: string;
}

type Price = {
    amount: number;
    currencyCode: string;
}

type Offers = {
    finskyOfferType: number;
    listPrice: OfferPrice;
    retailPrice: OfferPrice;
}

type OfferPrice = {
    amountInMicros: number;
    currencyCode: string;
}

type Token = {
    isAvailable: boolean;
    acsTokenLink?: string;
}