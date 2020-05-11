export interface FooterLinkItem {
    name: string;
    url: string;
}

export interface FooterItem {
    title: string;
    links: FooterLinkItem[];
}

export interface Footer {
    footers: FooterItem[];
    copyrightLine: string;
    disclaimer: string;
}
