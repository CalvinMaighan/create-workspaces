module.exports = function(api) {
    api.cache(false);
    return {
        plugins: [
            [
                "babel-plugin-styled-components",
                {
                    "displayName": true,
                    "fileName": false
                }
            ]
        ]
    };
};
