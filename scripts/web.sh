while true; do
    read -r -p "SELECT which environment to run" yn
    case $yn in
        [Yy]* ) npm run build-private-prod && npm run sync-files-private-prod && npm run sync-br-private-prod && npm run sync-sdk-private-prod && npm run inject-manifest && aws s3 cp build/web/index.html s3://newton-express-dev --cache-control no-cache && aws s3 cp build/web/robots.txt s3://newton-express-dev && aws s3 cp build/web/sw.js s3://newton-express-dev && aws cloudfront create-invalidation --distribution-id E950UFE8FXW25 --path '/*'; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
