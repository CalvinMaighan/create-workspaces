export const parameters = {
    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'light',
                value: '#efefef'
            },
            {
                name: 'dark',
                value: '#464646'
            }
        ]
    },
    viewport: {
        viewports: {
            mini: {
                name: 'mini',
                styles: { width: '400px', height: '600px' },
                type: 'mobile'
            },
            mobile: {
                name: 'Mobile',
                styles: { width: '450px', height: '700px' },
                type: 'mobile'
            },
            tablet: {
                name: 'Tablet',
                styles: { width: '600px', height: '900px' },
                type: 'tablet'
            },
            desktop: {
                name: 'Desktop',
                styles: { width: '900px', height: '1300px' },
                type: 'desktop'
            },
            wide: {
                name: 'Wide',
                styles: { width: '1200px', height: '1600px' },
                type: 'desktop'
            }
        },
        defaultViewport: 'mobile',
    },
};
