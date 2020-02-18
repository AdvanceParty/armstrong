SPACE_ID=$(awk '/spaceId=/' .env | cut -d"=" -f2)
OUT_DIR=contentful_backup
FILE_NAME=contentful.json

echo "Exporting:"
echo "  space: $SPACE_ID"
echo "  to:    $OUT_DIR/$FILE_NAME"
echo ""
echo "***** Warning *****"
echo "This doesn't export media assets. Just structure and text."
echo "To export all media use the --download-assets flag"
echo "(But don't choke up the git repo with all those bytes)"
echo ""

mkdir -p $OUT_DIR 
contentful space use --space-id $SPACE_ID
contentful space export --content-file $OUT_DIR/$FILE_NAME